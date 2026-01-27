import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WelcomeScreen = ({ onEnter }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                    MARI ESWAR
                </h1>

                <p className="text-text-secondary mb-12 text-lg tracking-wide">
                    Operations & AI Portfolio
                </p>

                <motion.button
                    onClick={onEnter}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-transparent border border-white/20 rounded-full text-xl font-light tracking-widest hover:border-accent/50 transition-colors"
                >
                    <span className="relative z-10 flex items-center gap-4">
                        ENTER EXPERIENCE <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 rounded-full bg-accent/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <p className="mt-8 text-xs text-white/30 uppercase tracking-widest">
                    Headphones Recommended
                </p>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeScreen;
