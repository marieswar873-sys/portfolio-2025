import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-6">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Building the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            AI Operations
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto md:mx-0 mb-10"
                    >
                        Strategic leader specializing in AI-powered automation, high-performance dashboards, and scaling operational excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center md:items-start gap-4"
                    >
                        <a
                            href="#projects"
                            className="group bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full font-medium border border-white/20 hover:bg-white/5 transition-colors"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Avatar Area */}
                <div className="order-1 md:order-2 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <motion.img
                            src="/avatar.png"
                            alt="3D Avatar"
                            className="w-64 h-64 md:w-[500px] md:h-[500px] object-contain drop-shadow-2xl"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/30 rounded-full blur-[80px] -z-10" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
