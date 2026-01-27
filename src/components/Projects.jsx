import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-card-bg rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 flex flex-col h-[400px] w-[320px] shrink-0 glass snap-center"
        >
            <div
                style={{ transform: "translateZ(30px)" }}
                className="h-40 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-900 transition-colors relative overflow-hidden shrink-0"
            >
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                {project.icon ? (
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                    </div>
                ) : (
                    <span className="text-white/20 text-4xl font-bold">#{index + 1}</span>
                )}
            </div>

            <div
                style={{ transform: "translateZ(20px)" }}
                className="p-6 flex-grow flex flex-col overflow-hidden"
            >
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors truncate">{project.title}</h3>
                <p className="text-text-secondary text-xs mb-4 line-clamp-4 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} className="text-text-secondary hover:text-white transition-colors flex items-center gap-1 text-xs">
                        <Github size={14} /> Code
                    </a>
                    <a href={project.link} className="text-text-secondary hover:text-white transition-colors flex items-center gap-1 text-xs">
                        <ExternalLink size={14} /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="h-screen w-full flex flex-col justify-center py-20 relative">
            <div className="max-w-[90%] mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Featured Projects <span className="text-accent text-lg align-top ml-2">{linkedInData.projects.length}</span>
                    </h2>

                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {linkedInData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
