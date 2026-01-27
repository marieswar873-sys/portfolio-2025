import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const Contact = () => {
    return (
        <section id="contact" className="h-screen w-full flex flex-col justify-center items-center bg-dark-bg relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Let's Build Something Great
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
                >
                    I'm always open to discussing new opportunities, whether it's AI operations, automation projects, or leadership roles.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href={`mailto:${linkedInData.contact.email}`}
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors w-full md:w-auto justify-center shadow-lg hover:scale-105 transform duration-200"
                    >
                        <Mail size={20} />
                        Send Email
                    </a>

                    <a
                        href={linkedInData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#006396] transition-colors w-full md:w-auto justify-center shadow-lg hover:scale-105 transform duration-200"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>

                    <a
                        href={`https://wa.me/${linkedInData.contact.mobile.replace(/\+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20bd5a] transition-colors w-full md:w-auto justify-center shadow-lg hover:scale-105 transform duration-200"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-text-secondary text-sm">
                © {new Date().getFullYear()} {linkedInData.contact.name}. All rights reserved.
            </div>
        </section>
    );
};

export default Contact;
