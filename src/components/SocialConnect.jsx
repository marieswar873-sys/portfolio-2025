import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const SocialConnect = () => {
    const socialLinks = [
        {
            icon: <MessageCircle size={20} />,
            label: 'WhatsApp',
            href: `https://wa.me/${linkedInData.contact.mobile}`,
            color: 'hover:bg-green-500/20 hover:text-green-400'
        },
        {
            icon: <Mail size={20} />,
            label: 'Email',
            href: `mailto:${linkedInData.contact.email}`,
            color: 'hover:bg-blue-500/20 hover:text-blue-400'
        },
        {
            icon: <Linkedin size={20} />,
            label: 'LinkedIn',
            href: linkedInData.contact.linkedin,
            color: 'hover:bg-cyan-500/20 hover:text-cyan-400'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="fixed top-20 right-6 z-40 flex flex-col gap-3"
        >
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-card-bg/80 glass border border-white/10 text-text-secondary transition-all ${social.color} backdrop-blur-md shadow-lg`}
                    title={social.label}
                >
                    {social.icon}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default SocialConnect;
