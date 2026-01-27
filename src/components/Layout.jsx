import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between pointer-events-auto">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter glass px-4 py-2 rounded-full"
                >
                    {linkedInData.contact.name}
                </motion.a>

                <div className="hidden md:flex items-center space-x-2 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/5">
                    {['About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="px-4 py-2 rounded-full text-sm text-text-secondary hover:text-white hover:bg-white/10 transition-all"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;
