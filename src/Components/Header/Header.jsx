import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import SideDrawer from '../Drawer/Drawer';
import Logo from '../Assets/Logo/Logo.png';
import '../../App.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function WebHeader() {
    const [scrolled, setScrolled] = useState(false);

    // Add scroll listener for dynamic floating effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className="fixed w-full z-50 top-0 transition-all duration-500 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
            {/* The Floating Pill */}
            <div className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 w-full max-w-5xl ${scrolled ? 'glass-card bg-space-900/80 shadow-2xl shadow-space-cyan/5 border-white/10' : 'bg-transparent border border-transparent'}`}>
                
                {/* Logo & Brand */}
                <a href="#home" aria-label="Home" className="flex items-center gap-4 group">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-space-cyan transition-all duration-500 bg-white/5 flex items-center justify-center rotate-3 group-hover:rotate-0">
                        {Logo ? (
                            <img src={Logo} alt="" className="h-[70%] w-auto object-contain" />
                        ) : (
                            <span className="text-space-cyan font-bold text-xl">FG</span>
                        )}
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-xl font-display font-black text-white tracking-tighter leading-tight group-hover:text-space-cyan transition-colors">
                            FAIZ GHOURI
                        </span>
                        <span className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase leading-none">
                            System Architect
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-2 lg:gap-4 bg-white/5 border border-white/10 rounded-xl px-2 py-1.5 backdrop-blur-md">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-all px-4 py-2 rounded-lg hover:bg-white/5 relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-space-cyan transition-all duration-300 group-hover:w-8 rounded-full"></span>
                        </a>
                    ))}
                </div>

                {/* Right Side Actions & Mobile Menu (Drawer) */}
                <div className="flex items-center gap-4">
                    <a 
                        href="mailto:faizghouri5@gmail.com" 
                        className="hidden lg:flex text-xs font-bold tracking-widest text-white bg-space-cyan/20 border border-space-cyan/30 rounded-xl px-6 py-3 hover:bg-space-cyan hover:text-space-900 transition-all uppercase"
                    >
                        Initiate Contact
                    </a>
                    <div className="md:hidden">
                       <SideDrawer />
                    </div>
                </div>

            </div>
        </Disclosure>
    );
}
