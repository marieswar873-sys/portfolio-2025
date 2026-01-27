import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { Text, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Shared mouse tracker
const useMousePosition = () => {
    const { viewport } = useThree();
    const mouse = useRef([0, 0]);

    useFrame((state) => {
        mouse.current = [
            (state.mouse.x * viewport.width) / 2,
            (state.mouse.y * viewport.height) / 2
        ];
    });

    return mouse;
};

// --- SCENE 1: COSMIC NEBULA ---
const CosmicNebula = () => {
    const count = 8000;
    const mesh = useRef();
    const mouse = useMousePosition();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const radius = 15 + Math.random() * 10;
            temp.push({
                x: radius * Math.sin(phi) * Math.cos(theta),
                y: radius * Math.sin(phi) * Math.sin(theta),
                z: radius * Math.cos(phi),
                speed: 0.0001 + Math.random() * 0.0005
            });
        }
        return temp;
    }, []);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        particles.forEach((p, i) => {
            const angle = t * p.speed;
            const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
            const z = p.x * Math.sin(angle) + p.z * Math.cos(angle);

            const dx = mouse.current[0] - x;
            const dy = mouse.current[1] - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = Math.max(0, 1 - dist / 8);

            dummy.position.set(x + dx * force * 0.3, p.y + dy * force * 0.3, z);
            dummy.scale.setScalar(0.05 + force * 0.15);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <pointLight position={[0, 0, 0]} intensity={3} color="#aaddff" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshBasicMaterial color="#ccddff" />
            </instancedMesh>
        </>
    );
};

// --- SCENE 2: OCEAN WAVES ---
const OceanWaves = () => {
    const mesh = useRef();
    const mouse = useMousePosition();

    useFrame((state) => {
        if (mesh.current) {
            const t = state.clock.elapsedTime;
            const positions = mesh.current.geometry.attributes.position;
            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);
                const wave1 = Math.sin(x * 0.5 + t) * 0.5;
                const wave2 = Math.cos(y * 0.5 + t * 0.8) * 0.3;
                const mouseInfluence = Math.exp(-((x - mouse.current[0]) ** 2 + (y - mouse.current[1]) ** 2) / 20);
                positions.setZ(i, wave1 + wave2 + mouseInfluence * 2);
            }
            positions.needsUpdate = true;
        }
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 3, 0, 0]} position={[0, -3, -5]}>
            <planeGeometry args={[50, 50, 128, 128]} />
            <meshStandardMaterial color="#44ccff" metalness={0.7} roughness={0.2} emissive="#0088cc" emissiveIntensity={0.4} />
        </mesh>
    );
};

// --- SCENE 3: NORTHERN LIGHTS ---
const NorthernLights = () => {
    const count = 5000;
    const mesh = useRef();
    const mouse = useMousePosition();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        for (let i = 0; i < count; i++) {
            const x = (i % 100) - 50;
            const z = Math.floor(i / 100) - 25;
            const wave = Math.sin(x * 0.1 + t + mouse.current[0] * 0.1) * 3;
            const y = wave + Math.cos(z * 0.1 + t * 0.5) * 2;
            dummy.position.set(x * 0.5, y, z - 10);
            dummy.scale.setScalar(0.1);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.2]} />
            <meshBasicMaterial color="#55ffbb" transparent opacity={0.9} />
        </instancedMesh>
    );
};

// --- SCENE 4: PARTICLE GALAXY ---
const ParticleGalaxy = () => {
    const count = 10000;
    const mesh = useRef();
    const mouse = useMousePosition();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * 20,
            speed: 0.001 + Math.random() * 0.002,
            height: (Math.random() - 0.5) * 5
        }));
    }, []);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        particles.forEach((p, i) => {
            const a = p.angle + t * p.speed;
            const r = p.radius + Math.sin(t + i) * 0.5;
            const x = Math.cos(a) * r;
            const z = Math.sin(a) * r;

            const dx = mouse.current[0] - x;
            const dy = mouse.current[1] - p.height;
            const attraction = Math.sqrt(dx * dx + dy * dy);
            const pull = Math.max(0, 1 - attraction / 10);

            dummy.position.set(x + dx * pull * 0.5, p.height + dy * pull * 0.3, z);
            dummy.scale.setScalar(0.05 + pull * 0.1);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.08]} />
            <meshBasicMaterial color="#ffbbff" />
        </instancedMesh>
    );
};

// --- SCENE 5: LIQUID METAL ---
const LiquidMetal = () => {
    const mesh = useRef();
    const mouse = useMousePosition();

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
            mesh.current.position.x = mouse.current[0] * 0.3;
            mesh.current.position.y = mouse.current[1] * 0.3;
        }
    });

    return (
        <Sphere ref={mesh} args={[3, 128, 128]}>
            <MeshDistortMaterial
                color="#dddddd"
                metalness={1}
                roughness={0.1}
                distort={0.4}
                speed={2}
            />
        </Sphere>
    );
};

// --- SCENE 6: FIRE EMBERS ---
const FireEmbers = () => {
    const count = 3000;
    const mesh = useRef();
    const mouse = useMousePosition();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const embers = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            x: (Math.random() - 0.5) * 20,
            y: -10 + Math.random() * 5,
            z: (Math.random() - 0.5) * 10,
            speed: 0.02 + Math.random() * 0.05,
            life: Math.random()
        }));
    }, []);

    useFrame(() => {
        embers.forEach((e, i) => {
            e.y += e.speed;
            e.life += 0.01;
            if (e.y > 10) {
                e.y = -10;
                e.life = 0;
            }

            const dx = mouse.current[0] - e.x;
            const swirl = Math.sin(e.life * 2) * 2;

            dummy.position.set(e.x + dx * 0.1 + swirl, e.y, e.z);
            dummy.scale.setScalar(0.1 * (1 - e.life));
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.15]} />
            <meshBasicMaterial color="#ff9944" transparent opacity={0.95} />
        </instancedMesh>
    );
};

// --- SCENE 7: DIGITAL RAIN ---
const DigitalRain = () => {
    const count = 100;

    return (
        <group>
            {Array.from({ length: count }).map((_, i) => (
                <Float key={i} speed={3 + i * 0.1} rotationIntensity={0} floatIntensity={8}>
                    <Text
                        position={[(i % 10 - 5) * 2, (Math.floor(i / 10) - 5) * 2, -5]}
                        fontSize={0.4}
                        color="#44ff44"
                        font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
                    >
                        {Math.random() > 0.5 ? '1' : '0'}
                    </Text>
                </Float>
            ))}
        </group>
    );
};

// --- SCENE 8: GEOMETRIC MORPH ---
const GeometricMorph = () => {
    const group = useRef();
    const mouse = useMousePosition();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = state.clock.elapsedTime * 0.2 + mouse.current[1] * 0.1;
            group.current.rotation.y = state.clock.elapsedTime * 0.3 + mouse.current[0] * 0.1;
        }
    });

    return (
        <group ref={group}>
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]}>
                    <icosahedronGeometry args={[0.5 + Math.random()]} />
                    <meshNormalMaterial wireframe />
                </mesh>
            ))}
        </group>
    );
};

// --- SCENE 9: SMOKE SIMULATION ---
const SmokeSimulation = () => {
    const count = 2000;
    const mesh = useRef();
    const mouse = useMousePosition();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const smoke = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            x: (Math.random() - 0.5) * 15,
            y: -5 + Math.random() * 3,
            z: (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 0.02,
            vy: 0.01 + Math.random() * 0.02,
            life: Math.random()
        }));
    }, []);

    useFrame(() => {
        smoke.forEach((s, i) => {
            s.x += s.vx;
            s.y += s.vy;
            s.life += 0.005;

            const dx = mouse.current[0] - s.x;
            const dy = mouse.current[1] - s.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const push = Math.max(0, 1 - dist / 5);

            if (s.y > 10 || s.life > 1) {
                s.y = -5;
                s.life = 0;
                s.x = (Math.random() - 0.5) * 15;
            }

            dummy.position.set(s.x - dx * push * 0.5, s.y, s.z);
            dummy.scale.setScalar(0.3 + s.life * 0.5);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.5]} />
            <meshBasicMaterial color="#bbbbbb" transparent opacity={0.5} />
        </instancedMesh>
    );
};

// --- SCENE 10: CRYSTAL CAVE ---
const CrystalCave = () => {
    const group = useRef();
    const mouse = useMousePosition();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.1;
            group.current.children.forEach((child, i) => {
                child.rotation.y = state.clock.elapsedTime * (0.5 + i * 0.1) + mouse.current[0] * 0.2;
                child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
            });
        }
    });

    return (
        <group ref={group}>
            {Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                const radius = 8;
                return (
                    <mesh
                        key={i}
                        position={[Math.cos(angle) * radius, (Math.random() - 0.5) * 5, Math.sin(angle) * radius]}
                        rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
                    >
                        <octahedronGeometry args={[0.5 + Math.random() * 1.5]} />
                        <meshStandardMaterial
                            color={`hsl(${180 + i * 5}, 80%, 70%)`}
                            metalness={0.9}
                            roughness={0.1}
                            transparent
                            opacity={0.9}
                            emissive={`hsl(${180 + i * 5}, 80%, 40%)`}
                            emissiveIntensity={0.3}
                        />
                    </mesh>
                );
            })}
        </group>
    );
};

// --- SCENE MANAGER ---
const SceneManager = () => {
    const [sceneIndex, setSceneIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const scenes = [
        <CosmicNebula key="nebula" />,
        <OceanWaves key="ocean" />,
        <NorthernLights key="aurora" />,
        <ParticleGalaxy key="galaxy" />,
        <LiquidMetal key="metal" />,
        <FireEmbers key="fire" />,
        <DigitalRain key="rain" />,
        <GeometricMorph key="morph" />,
        <SmokeSimulation key="smoke" />,
        <CrystalCave key="crystal" />
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            let fadeOut = setInterval(() => setOpacity(prev => Math.min(prev + 0.1, 1)), 50);
            setTimeout(() => {
                clearInterval(fadeOut);
                setSceneIndex((prev) => (prev + 1) % scenes.length);
                let fadeIn = setInterval(() => setOpacity(prev => Math.max(prev - 0.1, 0)), 50);
                setTimeout(() => clearInterval(fadeIn), 500);
            }, 500);
        }, 10000); // 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {scenes[sceneIndex]}
            <mesh position={[0, 0, 10]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="black" transparent opacity={opacity} />
            </mesh>
        </>
    );
};

const Experience3D = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <color attach="background" args={['#0a0a0a']} />
                <fog attach="fog" args={['#0a0a0a', 15, 60]} />
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
                <pointLight position={[-10, -10, 5]} intensity={2} color="#4488ff" />

                <SceneManager />

                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} intensity={1.2} />
                    <ChromaticAberration offset={[0.001, 0.001]} />
                    <Noise opacity={0.015} />
                    <Vignette eskil={false} offset={0.05} darkness={0.8} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Experience3D;
