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
            <div className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-5xl ${scrolled ? 'glass-card bg-space-900/60 shadow-lg shadow-space-cyan/10' : 'bg-transparent border border-transparent'}`}>
                
                {/* Logo & Brand */}
                <a href="#home" className="flex items-center gap-3 group text-decoration-none">
                    {Logo ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-space-cyan transition-colors bg-white/5 flex items-center justify-center">
                            <img src={Logo} alt="Initials" className="h-[70%] w-auto object-contain" />
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-space-cyan to-space-purple flex items-center justify-center text-space-900 font-bold font-display">
                            F
                        </div>
                    )}
                    <span className="hidden sm:block text-xl font-display font-bold text-white group-hover:glow-text transition-all tracking-wide">
                        FAIZ
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-2 lg:gap-8 bg-white/5 border border-white/10 rounded-full px-6 py-2 shadow-inner">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-space-cyan text-sm font-medium tracking-widest uppercase transition-colors px-3 py-1 relative group no-underline hover:no-underline"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-space-cyan transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full"></span>
                        </a>
                    ))}
                </div>

                {/* Right Side Actions & Mobile Menu (Drawer) */}
                <div className="flex items-center gap-4">
                    <a href="mailto:faizghouri5@gmail.com" className="hidden sm:flex text-xs font-mono text-space-cyan border border-space-cyan/30 rounded-full px-4 py-2 hover:bg-space-cyan/10 transition-colors no-underline hover:no-underline">
                        Let's Talk
                    </a>
                    <div className="md:hidden">
                       <SideDrawer />
                    </div>
                </div>

            </div>
        </Disclosure>
    );
}
