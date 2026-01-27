import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Target } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText('');
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="font-mono border-r-2 border-accent animate-pulse pr-1">
            {displayText}
        </span>
    );
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % linkedInData.heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="h-screen w-full flex flex-col justify-center relative overflow-hidden pt-16 pointer-events-none">
            {/* Pointer events auto for content to allow interaction over 3D background */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full h-full pointer-events-auto">

                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6 w-fit glass"
                    >
                        <Target size={16} className="animate-pulse" />
                        <span className="text-sm font-bold tracking-wide">Targeting Leadership & Startup Roles</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 animate-gradient-x">
                            {linkedInData.contact.name}
                        </span>
                    </h1>

                    <p className="text-xl text-text-secondary mb-8 max-w-lg leading-relaxed">
                        {linkedInData.summary.coreFocus}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-accent text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-accent/25"
                        >
                            View Work <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href={linkedInData.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/5 text-white rounded-full font-medium border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </motion.a>

                        <motion.a
                            href={linkedInData.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/5 text-white rounded-full font-medium border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
                        >
                            <Github size={20} /> GitHub
                        </motion.a>
                    </div>

                    {/* Skills Ticker */}
                    <div className="w-full overflow-hidden border-t border-white/5 pt-6">
                        <p className="text-sm text-text-secondary mb-3">Core Competencies:</p>
                        <div className="flex gap-4 animate-scroll whitespace-nowrap">
                            {[...linkedInData.skills, ...linkedInData.skills].map((skill, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-text-secondary hover:bg-white/10 transition-colors">
                                    <span className="text-accent">{skill.icon}</span>
                                    <span>{skill.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Carousel - ULTRA GLASS DESIGN */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block h-[500px] w-full perspective-1000"
                >
                    <div className="relative w-full h-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm transform-style-3d rotate-y-12 hover:rotate-y-0 transition-transform duration-500 group">

                        {/* Inner Glow */}
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="text-9xl mb-8 filter drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                                >
                                    {linkedInData.heroSlides[currentSlide].emoji}
                                </motion.div>

                                <h3 className="text-4xl font-bold mb-4 text-white drop-shadow-md">
                                    {linkedInData.heroSlides[currentSlide].title}
                                </h3>

                                <p className="text-xl text-white/80 font-medium">
                                    {linkedInData.heroSlides[currentSlide].subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicators */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                            {linkedInData.heroSlides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-8 bg-accent shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS for Ticker Animation */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
