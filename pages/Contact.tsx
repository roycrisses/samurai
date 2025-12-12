import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('TRANSMISSION SENT. WE WILL RESPOND SHORTLY.');
        // Logic to send email would go here
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-[1200px] mx-auto">

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Info Side */}
                    <div className="w-full lg:w-1/3">
                        <span className="text-[#ff2a2a] font-mono text-sm tracking-widest block mb-4">/// COMM-LINK</span>
                        <h1 className="text-5xl font-bold font-syncopate mb-8">INITIATE <br /><span className="text-outline">CONTACT</span></h1>

                        <div className="space-y-8 mt-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 p-3 rounded-sm text-[#ff2a2a]"><MapPin size={20} /></div>
                                <div>
                                    <h3 className="font-bold font-orbitron mb-1">BASE OF OPERATIONS</h3>
                                    <p className="text-gray-400 text-sm font-mono">
                                        NEO-TOKYO, SECTOR 7G<br />
                                        AVAILABLE WORLDWIDE
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 p-3 rounded-sm text-[#ff2a2a]"><Phone size={20} /></div>
                                <div>
                                    <h3 className="font-bold font-orbitron mb-1">SECURE LINE</h3>
                                    <p className="text-gray-400 text-sm font-mono">
                                        +81 90-0000-0000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 p-3 rounded-sm text-[#ff2a2a]"><Mail size={20} /></div>
                                <div>
                                    <h3 className="font-bold font-orbitron mb-1">ENCRYPTED MAIL</h3>
                                    <p className="text-gray-400 text-sm font-mono">
                                        ADMIN@SAMURAI.AI
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-2/3 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative overflow-hidden">

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2a2a]/5 rounded-bl-full pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-[#ff2a2a] tracking-widest">CODENAME</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border-b border-white/20 focus:border-[#ff2a2a] p-4 outline-none text-white transition-colors"
                                        placeholder="ENTER NAME"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-[#ff2a2a] tracking-widest">FREQUENCY</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border-b border-white/20 focus:border-[#ff2a2a] p-4 outline-none text-white transition-colors"
                                        placeholder="ENTER EMAIL"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-[#ff2a2a] tracking-widest">TRANSMISSION</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-black/50 border-b border-white/20 focus:border-[#ff2a2a] p-4 outline-none text-white transition-colors resize-none"
                                    placeholder="ENTER MESSAGE PROTOCOL..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="group bg-white text-black px-12 py-4 font-bold font-orbitron tracking-widest hover:bg-[#ff2a2a] hover:text-white transition-all flex items-center gap-2">
                                TRANSMIT
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};
