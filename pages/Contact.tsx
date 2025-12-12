import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
    };

    return (
        <div id="contact" className="pt-32 pb-20 px-6 min-h-screen relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Info Side */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#ff2a2a] font-mono text-sm tracking-widest block mb-4">/// COMM-LINK</span>
                            <h1 className="text-5xl font-bold font-syncopate mb-8">INITIATE <br /><span className="text-outline">CONTACT</span></h1>

                            <div className="space-y-8 mt-12">
                                {[
                                    { icon: MapPin, title: "BASE OF OPERATIONS", desc: "NEO-TOKYO, SECTOR 7G\nAVAILABLE WORLDWIDE" },
                                    { icon: Phone, title: "SECURE LINE", desc: "+81 90-0000-0000" },
                                    { icon: Mail, title: "ENCRYPTED MAIL", desc: "ADMIN@SAMURAI.AI" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="bg-white/5 p-3 rounded-sm text-[#ff2a2a] group hover:bg-[#ff2a2a]/20 transition-colors">
                                            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold font-orbitron mb-1">{item.title}</h3>
                                            <p className="text-gray-400 text-sm font-mono whitespace-pre-line">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-full lg:w-2/3 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative overflow-hidden group"
                    >
                        {/* Interactive Border Effect */}
                        <div className="absolute inset-0 border border-[#ff2a2a]/0 group-hover:border-[#ff2a2a]/20 transition-colors duration-500 pointer-events-none"></div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2a2a]/5 rounded-bl-full pointer-events-none transform transition-transform group-hover:scale-110 duration-700"></div>

                        <AnimatePresence mode='wait'>
                            {isSent ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-20"
                                >
                                    <CheckCircle size={64} className="text-[#ff2a2a] mb-6 animate-pulse" />
                                    <h3 className="text-2xl font-syncopate font-bold text-white mb-2">TRANSMISSION SENT</h3>
                                    <p className="text-gray-400 font-mono text-sm">WE WILL RESPOND SHORTLY.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8 relative z-10"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {[
                                            { label: "CODENAME", type: "text", placeholder: "ENTER NAME", key: 'name' },
                                            { label: "FREQUENCY", type: "email", placeholder: "ENTER EMAIL", key: 'email' }
                                        ].map((field) => (
                                            <div key={field.key} className="space-y-2 group/input">
                                                <label className="text-xs font-mono text-[#ff2a2a] tracking-widest group-focus-within/input:text-white transition-colors">{field.label}</label>
                                                <input
                                                    required
                                                    type={field.type}
                                                    className="w-full bg-black/50 border-b border-white/20 focus:border-[#ff2a2a] p-4 outline-none text-white transition-all focus:bg-[#ff2a2a]/5"
                                                    placeholder={field.placeholder}
                                                    value={(formState as any)[field.key]}
                                                    onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <label className="text-xs font-mono text-[#ff2a2a] tracking-widest group-focus-within/input:text-white transition-colors">TRANSMISSION</label>
                                        <textarea
                                            required
                                            rows={6}
                                            className="w-full bg-black/50 border-b border-white/20 focus:border-[#ff2a2a] p-4 outline-none text-white transition-all focus:bg-[#ff2a2a]/5 resize-none"
                                            placeholder="ENTER MESSAGE PROTOCOL..."
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="group/btn bg-white text-black px-12 py-4 font-bold font-orbitron tracking-widest hover:bg-[#ff2a2a] hover:text-white transition-all flex items-center gap-2 relative overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-2">
                                            TRANSMIT
                                            <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-[#ff2a2a] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
