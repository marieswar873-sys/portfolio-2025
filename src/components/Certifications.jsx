import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
    {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google",
        date: "2023",
        description: "Comprehensive training in data analysis, visualization, and R programming."
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        description: "Foundational understanding of AWS cloud concepts, security, and services."
    },
    {
        title: "n8n Workflow Automation Expert",
        issuer: "n8n Academy",
        date: "2024",
        description: "Advanced techniques for building complex automation workflows and integrations."
    },
    // Add more certifications here
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-dark-bg/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <Award className="text-accent" size={32} />
                    Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-card-bg rounded-xl border border-white/5 flex items-start gap-4 hover:border-accent/30 transition-colors"
                        >
                            <div className="mt-1">
                                <CheckCircle className="text-green-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                                <p className="text-accent text-sm mb-2">{cert.issuer} • {cert.date}</p>
                                <p className="text-text-secondary text-sm">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
