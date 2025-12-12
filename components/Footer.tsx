import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white border-t border-white/10 py-12 relative overflow-hidden">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-syncopate font-bold text-2xl mb-4 tracking-wider">SAMURAI<span className="text-[#ff2a2a]">.AI</span></h2>
                            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                                Forged in the future. We build digital blades for the modern ronin.
                                Advanced web solutions with a lethal aesthetic.
                            </p>
                        </motion.div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-orbitron font-bold text-[#ff2a2a] mb-6 tracking-widest text-xs"
                        >
                            EXPLORE
                        </motion.h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                >
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById(item.toLowerCase());
                                            el?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="hover:text-white transition-colors"
                                    >
                                        {item}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="font-orbitron font-bold text-[#ff2a2a] mb-6 tracking-widest text-xs"
                        >
                            LEGAL
                        </motion.h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['PRIVACY PROTOCOL', 'TERMS OF ENGAGEMENT', 'LICENSE'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                >
                                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-xs text-gray-500 font-mono">
                        © 2077 SAMURAI SYSTEMS. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex gap-6">
                        {[Github, Twitter, Instagram, Mail].map((Icon, idx) => (
                            <a key={idx} href="#" className="text-gray-400 hover:text-[#ff2a2a] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
