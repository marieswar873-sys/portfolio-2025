import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const Certifications = () => {
    return (
        <section id="certifications" className="h-screen w-full flex flex-col justify-center py-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Certifications & Awards
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {linkedInData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border border-white/5 hover:border-accent/50 transition-all glass hover:bg-white/5"
                        >
                            <div className="p-3 rounded-full bg-accent/10 text-accent">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{cert}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 flex items-start gap-4 p-6 bg-card-bg rounded-xl border border-white/5 glass"
                >
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">{linkedInData.education.degree}</h3>
                        <p className="text-text-secondary text-sm mt-1">{linkedInData.education.institution}</p>
                        <p className="text-text-secondary/70 text-xs mt-1">{linkedInData.education.period}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
