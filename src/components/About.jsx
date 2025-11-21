import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap, Users } from 'lucide-react';

const skills = [
    { icon: <Zap size={24} />, title: "Automation", desc: "n8n, Zapier, Python" },
    { icon: <Database size={24} />, title: "Data Analytics", desc: "BigQuery, SQL, Dashboards" },
    { icon: <Users size={24} />, title: "Leadership", desc: "Team Coaching, Scaling" },
    { icon: <Code size={24} />, title: "Integration", desc: "API, Cloud Platforms" },
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-bg">
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
                            <p>
                                I am a strategic, innovative, and execution-driven leader with 4+ years of experience in AI-powered operations and advanced business automation.
                            </p>
                            <p>
                                My expertise lies in scaling teams and systems from the ground up. I specialize in designing and deploying AI/ML solutions and high-performance dashboards that have delivered 80% faster outcomes in my previous roles.
                            </p>
                            <p>
                                Passionate about sales excellence, team coaching, and cross-departmental synergy, I blend relentless learning with creative problem-solving to drive revenue and automate complexity.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-card-bg rounded-2xl border border-white/5 hover:border-accent/50 transition-colors group"
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
