import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Let's Build Something Great
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto"
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
                        href="mailto:marieswar873@gmail.com"
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors w-full md:w-auto justify-center"
                    >
                        <Mail size={20} />
                        Send Email
                    </a>

                    <a
                        href="https://linkedin.com/in/marieswar873"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#006396] transition-colors w-full md:w-auto justify-center"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>

                    <a
                        href="https://wa.me/919500365660"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20bd5a] transition-colors w-full md:w-auto justify-center"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
