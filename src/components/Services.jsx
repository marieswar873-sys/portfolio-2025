import React from 'react';
import { motion } from 'framer-motion';
import { linkedInData } from '../data/linkedin';

const Services = () => {
    return (
        <section id="services" className="min-h-screen w-full flex flex-col justify-center pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-accent text-sm font-medium tracking-[2px] uppercase mb-3">What I Can Do</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ops &amp; automation services<br />that help businesses run smarter
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {linkedInData.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="bg-card-bg border border-white/5 rounded-2xl p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 glass"
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                            <span className="inline-block mt-4 text-xs text-accent bg-accent/10 px-3 py-1 rounded-md">
                                {service.tag}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
