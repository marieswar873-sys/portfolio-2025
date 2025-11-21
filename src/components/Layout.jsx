import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter"
                >
                    Mari Eswar
                </motion.a>

                <div className="hidden md:flex items-center space-x-8">
                    {['About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm text-text-secondary hover:text-white transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-card-bg py-12 mt-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-text-secondary text-sm">© 2025 Mari Eswar. All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/marieswar873-sys" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/marieswar873" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:marieswar873@gmail.com" className="text-text-secondary hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
