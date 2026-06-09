import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Send, CheckCircle } from 'lucide-react';
import { linkedInData } from '../data/linkedin';

const ENDPOINT = 'https://api.web3forms.com/submit';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const payload = new FormData(e.target);
        payload.append('access_key', linkedInData.contact.formAccessKey);
        payload.append('subject', 'New enquiry from your portfolio');
        payload.append('from_name', 'Portfolio Contact Form');

        try {
            const res = await fetch(ENDPOINT, { method: 'POST', body: payload });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass = 'w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-colors';

    return (
        <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center bg-dark-bg relative overflow-hidden pt-24 pb-16">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl mx-auto px-6 z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4 text-center"
                >
                    Let's Build Something Great
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto text-center"
                >
                    Open to new roles, automation projects, and consulting. Drop a message below — or reach me directly.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left: quick contact buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <a
                            href={`mailto:${linkedInData.contact.email}`}
                            className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors justify-center hover:scale-[1.02] transform duration-200"
                        >
                            <Mail size={20} /> Send Email
                        </a>
                        <a
                            href={linkedInData.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-[#0077b5] text-white rounded-xl font-bold hover:bg-[#006396] transition-colors justify-center hover:scale-[1.02] transform duration-200"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a
                            href={`https://wa.me/${linkedInData.contact.mobile.replace(/\+/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors justify-center hover:scale-[1.02] transform duration-200"
                        >
                            <MessageCircle size={20} /> WhatsApp
                        </a>
                    </motion.div>

                    {/* Right: lead form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-card-bg border border-white/10 rounded-2xl p-7 glass text-left"
                    >
                        {status === 'success' ? (
                            <div className="text-center py-10">
                                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                                <p className="text-text-secondary text-sm">
                                    Thanks for reaching out — I'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Honeypot spam trap */}
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                                <div>
                                    <label className="block text-xs text-text-secondary mb-1.5">Your Name *</label>
                                    <input type="text" name="name" required placeholder="Rahul Sharma" className={inputClass} />
                                </div>

                                <div>
                                    <label className="block text-xs text-text-secondary mb-1.5">Email *</label>
                                    <input type="email" name="email" required placeholder="rahul@company.com" className={inputClass} />
                                </div>

                                <div>
                                    <label className="block text-xs text-text-secondary mb-1.5">Mobile / WhatsApp *</label>
                                    <input
                                        type="tel" name="phone" required placeholder="+91 98765 43210"
                                        pattern="[0-9+\s\-()]{7,16}" title="Enter a valid phone number"
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs text-text-secondary mb-1.5">Which service do you need? *</label>
                                    <select name="service" required defaultValue="" className={inputClass}>
                                        <option value="" disabled>— Select a service —</option>
                                        <option>Business &amp; Operations Consulting</option>
                                        <option>Automation Consulting</option>
                                        <option>CRM Setup &amp; Optimization</option>
                                        <option>Dashboards &amp; Reporting</option>
                                        <option>Lead Gen &amp; Outreach Automation</option>
                                        <option>Digital Infrastructure Setup</option>
                                        <option>Not sure — need a diagnosis</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs text-text-secondary mb-1.5">Message *</label>
                                    <textarea
                                        name="message" required rows="3" placeholder="Tell me a bit about what you need…"
                                        className={`${inputClass} resize-y`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
                                >
                                    {status === 'sending' ? 'Sending…' : <>Send Message <Send size={16} /></>}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-400 text-xs text-center">
                                        Something went wrong. Please email me directly at {linkedInData.contact.email}.
                                    </p>
                                )}
                                <p className="text-center text-[11px] text-text-secondary/70">🔒 Your info is private. No spam, ever.</p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center text-text-secondary text-sm">
                © {new Date().getFullYear()} {linkedInData.contact.name}. All rights reserved.
            </div>
        </section>
    );
};

export default Contact;
