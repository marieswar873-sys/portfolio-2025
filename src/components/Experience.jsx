import React from 'react';
import { motion } from 'framer-motion';
import { linkedInData } from '../data/linkedin';

const Experience = () => {
    return (
        <section id="experience" className="h-screen w-full flex flex-col justify-center py-20">
            <div className="max-w-4xl mx-auto px-6 w-full h-full flex flex-col">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center shrink-0"
                >
                    Professional Journey
                </motion.h2>

                <div className="space-y-8 overflow-y-auto pr-4 custom-scrollbar flex-grow">
                    {linkedInData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l border-white/10"
                        >
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent" />

                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <span className="text-sm text-text-secondary font-mono bg-white/5 px-2 py-1 rounded">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-accent font-medium mb-1">{exp.company}</h4>

                            <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
