import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "LOKAL",
        role: "Senior Operations Manager",
        period: "Sep 2025 - Present",
        description: [
            "Deployed Exotel IVR-Freshdesk integration in 3 DAYS.",
            "Designed AI-powered dashboards and automated grievance tracking.",
            "Implemented unified AI-driven ticketing (Astro, Eaze, Gyan TV).",
            "Achieved 80%+ reduction in implementation time."
        ]
    },
    {
        company: "LOKAL",
        role: "Operations Manager",
        period: "Sep 2024 - Sep 2025",
        description: [
            "Onboarded partners with seamless activation.",
            "Automated sales reporting and supported KPI delivery."
        ]
    },
    {
        company: "TUMBLEDRY",
        role: "Franchise Partner Manager",
        period: "Aug 2023 - Sep 2024",
        description: [
            "Scaled franchise network from 0 to 52+ partners.",
            "Implemented expansion strategies and built strong partner relationships."
        ]
    },
    {
        company: "JIO",
        role: "Jio Point Manager",
        period: "Aug 2022 - Aug 2023",
        description: [
            "Managed 250+ retail partners and drove network performance."
        ]
    },
    {
        company: "AIRTEL",
        role: "Sales Team Lead",
        period: "Mar 2021 - Aug 2022",
        description: [
            "Led 60 freelancers and 150 retailers.",
            "Awarded 'Best Team Leader of the Year'.",
            "Delivered significant market growth."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark-bg">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Professional Journey
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
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

                            <h4 className="text-accent font-medium mb-4">{exp.company}</h4>

                            <ul className="list-disc list-inside space-y-2 text-text-secondary">
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
