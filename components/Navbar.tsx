import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 border border-white rotate-45 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <span className="font-orbitron font-bold text-xs -rotate-45">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-syncopate font-bold text-xl leading-none tracking-widest">SAMURAI</span>
            <span className="text-[0.5rem] tracking-[0.3em] opacity-70">SYSTEMS V.1</span>
          </div>
        </Link>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'HOME', path: '/' },
            { name: 'ABOUT', path: '/about' },
            { name: 'SERVICES', path: '/services' },
            { name: 'CONTACT', path: '/contact' }
          ].map((item) => (
            <Link key={item.name} to={item.path} className="relative text-xs font-bold tracking-[0.2em] hover:text-[#ff2a2a] transition-colors group">
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#ff2a2a] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="hover:text-[#ff2a2a] transition-colors"><Search size={20} strokeWidth={1.5} /></button>
          <button className="hover:text-[#ff2a2a] transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff2a2a] rounded-full"></span>
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
          <div className="hidden md:block w-24 h-[1px] bg-white/20"></div>
          <span className="hidden md:block font-mono text-xs opacity-50">JP / EN</span>
        </div>
      </div>
    </nav>
  );
};