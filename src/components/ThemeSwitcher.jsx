import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card-bg border border-white/10 text-accent shadow-lg glass hover:bg-white/5 transition-all"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>
    );
};

export default ThemeSwitcher;
