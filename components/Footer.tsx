import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white border-t border-white/10 py-12 relative overflow-hidden">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-syncopate font-bold text-2xl mb-4 tracking-wider">SAMURAI<span className="text-[#ff2a2a]">.AI</span></h2>
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Forged in the future. We build digital blades for the modern ronin.
                            Advanced web solutions with a lethal aesthetic.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-orbitron font-bold text-[#ff2a2a] mb-6 tracking-widest text-xs">EXPLORE</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-white transition-colors">HOME</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">RONIN LORE</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">ARMORY</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">COMM-LINK</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-orbitron font-bold text-[#ff2a2a] mb-6 tracking-widest text-xs">LEGAL</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">PRIVACY PROTOCOL</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">TERMS OF ENGAGEMENT</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LICENSE</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 font-mono">
                        © 2077 SAMURAI SYSTEMS. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-[#ff2a2a] transition-colors"><Github size={18} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#ff2a2a] transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#ff2a2a] transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#ff2a2a] transition-colors"><Mail size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
