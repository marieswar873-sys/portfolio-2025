import React from 'react';
import { motion } from 'framer-motion';
import { linkedInData } from '../data/linkedin';

const About = () => {
    return (
        <section id="about" className="h-screen w-full flex flex-col justify-center py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                            <p>{linkedInData.summary.about}</p>
                            <p className="font-medium text-accent">{linkedInData.summary.objectives}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {linkedInData.skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-card-bg rounded-2xl border border-white/5 hover:border-accent/50 transition-colors group glass"
                            >
                                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-1">{skill.title}</h3>
                                <p className="text-sm text-text-secondary">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
