import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Background = ({ currentBackground, setCurrentBackground }) => {
    const canvasRef = useRef(null);
    const [themeIndex, setThemeIndex] = useState(0);

    const themes = ['particles', 'dolphins', 'neural', 'matrix', 'city'];

    // Auto-rotate background every 45 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setThemeIndex((prev) => (prev + 1) % themes.length);
        }, 45000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentBackground(themes[themeIndex]);
    }, [themeIndex, setCurrentBackground]);

    // Canvas Logic for Particles, Neural, Matrix
    useEffect(() => {
        if (['dolphins', 'city'].includes(currentBackground)) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let columns = []; // For Matrix

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-init matrix columns on resize
            if (currentBackground === 'matrix') {
                const fontSize = 14;
                const columnsCount = canvas.width / fontSize;
                columns = Array(Math.floor(columnsCount)).fill(1);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // --- PARTICLE CLASS ---
        class Particle {
            constructor(type) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * (type === 'neural' ? 0.5 : 1);
                this.vy = (Math.random() - 0.5) * (type === 'neural' ? 0.5 : 1);
                this.size = Math.random() * 2 + 1;
                this.color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#3b82f6';
            }

            update(mouseX, mouseY) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Mouse interaction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = (dx / distance) * force * 2;
                    const directionY = (dy / distance) * force * 2;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            if (currentBackground === 'particles' || currentBackground === 'neural') {
                const numberOfParticles = Math.min(window.innerWidth * 0.1, 100);
                for (let i = 0; i < numberOfParticles; i++) {
                    particles.push(new Particle(currentBackground));
                }
            }
        };

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#3b82f6';

            // Fade effect for trails
            ctx.fillStyle = currentBackground === 'matrix' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (currentBackground === 'matrix') {
                ctx.fillStyle = '#0F0'; // Matrix Green
                ctx.font = '14px monospace';
                for (let i = 0; i < columns.length; i++) {
                    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                    ctx.fillText(text, i * 14, columns[i] * 14);
                    if (columns[i] * 14 > canvas.height && Math.random() > 0.975) {
                        columns[i] = 0;
                    }
                    columns[i]++;
                }
            } else {
                // Particles & Neural
                ctx.strokeStyle = accentColor;
                ctx.lineWidth = 0.5;

                for (let i = 0; i < particles.length; i++) {
                    particles[i].color = accentColor;
                    particles[i].update(mouseX, mouseY);
                    particles[i].draw();

                    if (currentBackground === 'neural') {
                        for (let j = i; j < particles.length; j++) {
                            const dx = particles[i].x - particles[j].x;
                            const dy = particles[i].y - particles[j].y;
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < 100) {
                                ctx.beginPath();
                                ctx.globalAlpha = 1 - distance / 100;
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                ctx.stroke();
                                ctx.globalAlpha = 1;
                            }
                        }
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [currentBackground]);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
            <AnimatePresence mode="wait">
                {['dolphins', 'city'].includes(currentBackground) ? (
                    <motion.video
                        key={currentBackground}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source
                            src={currentBackground === 'dolphins'
                                ? "https://videos.pexels.com/video-files/855029/855029-hd_1920_1080_30fps.mp4" // Dolphins/Sea
                                : "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" // City/Traffic
                            }
                            type="video/mp4"
                        />
                    </motion.video>
                ) : (
                    <motion.canvas
                        key="canvas"
                        ref={canvasRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full"
                    />
                )}
            </AnimatePresence>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
    );
};

export default Background;
