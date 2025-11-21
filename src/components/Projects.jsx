import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MessageSquare, Smartphone, Share2 } from 'lucide-react';

const projects = [
    {
        title: "WhatsApp Automation with n8n",
        description: "End-to-end WhatsApp automation workflow using n8n. Handles customer queries, sends automated notifications, and syncs chat logs with Google Sheets/Airtable.",
        tags: ["n8n", "WhatsApp API", "Automation", "Webhook"],
        link: "#",
        github: "#",
        icon: <Smartphone size={40} className="text-green-400" />
    },
    {
        title: "AI Customer Support Chatbot",
        description: "Intelligent chatbot built with OpenAI API and n8n. Capable of handling L1 support queries, routing complex tickets to human agents, and learning from past interactions.",
        tags: ["OpenAI", "n8n", "NLP", "Customer Support"],
        link: "#",
        github: "#",
        icon: <MessageSquare size={40} className="text-blue-400" />
    },
    {
        title: "LinkedIn Growth Automation",
        description: "Automated content scheduling and engagement tracking system. Analyzes post performance and suggests optimal posting times to maximize reach.",
        tags: ["LinkedIn API", "Data Analytics", "Growth Hacking"],
        link: "#",
        github: "#",
        icon: <Share2 size={40} className="text-blue-600" />
    },
    {
        title: "AI-Powered Operations Dashboard",
        description: "Real-time monitoring of operational KPIs using BigQuery and custom AI models to predict trends and identify bottlenecks before they happen.",
        tags: ["React", "Python", "BigQuery", "AI/ML"],
        link: "#",
        github: "#",
        icon: null
    },
    {
        title: "Unified Ticketing System",
        description: "Integration of Astro, Eaze, and Gyan TV platforms into a single unified ticketing interface, reducing resolution time by 40%.",
        tags: ["Automation", "API Integration", "Enterprise"],
        link: "#",
        github: "#",
        icon: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-card-bg rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Image/Icon Area */}
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-900 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                                {project.icon ? (
                                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                ) : (
                                    <span className="text-white/20 text-4xl font-bold">Project {index + 1}</span>
                                )}
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.github} className="text-text-secondary hover:text-white transition-colors flex items-center gap-1 text-sm">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.link} className="text-text-secondary hover:text-white transition-colors flex items-center gap-1 text-sm">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
