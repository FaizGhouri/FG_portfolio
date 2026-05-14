import React from 'react';
import '../../App.css';
import { Reveal } from '../../utils/Reveal';
import HtmlIcon from '../../Components/Assets/Icons/html-5.png';
import CssIcon from '../../Components/Assets/Icons/css-3.png';
import BootIcon from '../../Components/Assets/Icons/bootstrap.png';
import TailIcon from '../../Components/Assets/Icons/png-transparent-tailwind-css-hd-logo-removebg-preview.png';
import JsIcon from '../../Components/Assets/Icons/js.png';
import TypeIcon from '../../Components/Assets/Icons/typescript.png';
import FigmaIcon from '../../Components/Assets/Icons/figma.png';
import ReactIcon from '../../Components/Assets/Icons/physics.png';
import ApiIcon from '../../Components/Assets/Icons/api.png';
import NextIcon from '../../Components/Assets/Icons/images.png';

const skillCategories = [
    {
        name: 'Core Development',
        skills: [
            { id: 1, title: 'HTML', percent: '98', icon: HtmlIcon },
            { id: 2, title: 'CSS', percent: '95', icon: CssIcon },
            { id: 4, title: 'JAVASCRIPT', percent: '85', icon: JsIcon },
            { id: 6, title: 'REACT JS', percent: '80', icon: ReactIcon },
            { id: 7, title: 'NEXT JS', percent: '70', icon: NextIcon },
            { id: 5, title: 'TYPESCRIPT', percent: '65', icon: TypeIcon },
        ]
    },
    {
        name: 'Frameworks & Tools',
        skills: [
            { id: 8, title: 'TAILWIND CSS', percent: '95', icon: TailIcon },
            { id: 3, title: 'BOOTSTRAP', percent: '95', icon: BootIcon },
            { id: 9, title: 'API INTEGRATION', percent: '85', icon: ApiIcon },
            { id: 10, title: 'FIGMA', percent: '75', icon: FigmaIcon }
        ]
    }
];

const stats = [
    { label: 'Experience', value: '2+', suffix: 'Years' },
    { label: 'Projects', value: '30+', suffix: 'Completed' },
    { label: 'Clients', value: '10+', suffix: 'Worldwide' },
    { label: 'Codebase', value: '500k+', suffix: 'Lines' }
];

const About = () => {
    return (
        <section id="about" className="relative min-h-screen py-24 overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-space-cyan/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-space-purple/10 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] animate-float" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                
                {/* Hero Section: Mission Profile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
                    <div className="col-span-1 lg:col-span-5">
                        <Reveal width="100%">
                            <div className="relative pt-4">
                                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-space-cyan/10 border border-space-cyan/30 text-space-cyan text-xs font-bold tracking-[0.2em] uppercase">
                                    Identity Profile
                                </span>
                                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-[0.9]">
                                    System <br />
                                    <span className="gradient-text">Core.</span>
                                </h1>
                                <div className="w-20 h-2 bg-space-cyan rounded-full shadow-[0_0_20px_rgba(0,240,255,0.5)]"></div>
                            </div>
                        </Reveal>
                    </div>
                    
                    <div className="col-span-1 lg:col-span-7">
                        <Reveal width="100%">
                            <div className="glass-card glass-card-alt p-8 sm:p-12 relative group">
                                <div className="absolute -right-1 -top-1 w-24 h-24 border-t-2 border-r-2 border-space-cyan/30 rounded-tr-3xl"></div>
                                <div className="absolute -left-1 -bottom-1 w-24 h-24 border-b-2 border-l-2 border-space-purple/30 rounded-bl-3xl"></div>
                                
                                <h3 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4">
                                    <span className="text-space-cyan">01.</span> 
                                    Mission Statement
                                </h3>
                                <p className="text-gray-300 text-xl leading-relaxed font-light mb-8">
                                    I am <span className="text-white font-bold underline decoration-space-cyan decoration-2 underline-offset-4">Faiz Ghouri</span>, a results-driven System Architect & Front-end Engineer based in Karachi. I specialize in architecting high-performance digital environments that bridge the gap between complex logic and stunning visual aesthetics.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed italic border-l-2 border-space-cyan/30 pl-6">
                                    "Engineering digital experiences that aren't just seen, but felt. My focus is on scalability, performance, and pixel-perfect precision."
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-32">
                    {stats.map((stat, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className="glass-card stat-card p-6 sm:p-8 text-center group hover:border-space-cyan/50 h-full flex flex-col justify-center">
                                <div className="text-4xl sm:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm font-bold text-space-cyan tracking-widest uppercase opacity-70 group-hover:opacity-100">
                                    {stat.label}
                                </div>
                                <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">
                                    {stat.suffix}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Tech Arsenal: Grouped Skills */}
                <div className="mb-32">
                    <Reveal width="100%">
                        <div className="mb-20 text-center">
                            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-space-purple/10 border border-space-purple/30 text-space-purple text-xs font-bold tracking-[0.2em] uppercase">
                                Tech Stack
                            </span>
                            <h2 className="text-5xl sm:text-6xl font-display font-black text-white mb-6 tracking-tight">
                                Tech <span className="gradient-text">Arsenal.</span>
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-space-cyan to-space-purple mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)]"></div>
                            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
                                My specialized toolkit for architecting high-performance digital environments, 
                                ranging from robust core languages to cutting-edge frameworks and design systems.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-16">
                        {skillCategories.map((category, catIdx) => (
                            <div key={catIdx}>
                                <Reveal width="100%">
                                    <h3 className="text-xl font-bold text-white/50 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                        {category.name}
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                                    </h3>
                                </Reveal>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                                    {category.skills.map((skill, index) => (
                                        <Reveal key={skill.id} delay={index * 0.05} width="100%">
                                            <div className="glass-card skill-card p-6 flex flex-col items-center group relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-space-cyan animate-ping"></div>
                                                </div>
                                                
                                                <div className="w-12 h-12 mb-6 relative z-10">
                                                    <img src={skill.icon} alt={skill.title} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                                                </div>
                                                
                                                <h4 className="text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-4 text-center group-hover:text-space-cyan transition-colors">
                                                    {skill.title}
                                                </h4>
                                                
                                                <div className="w-full">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-[9px] text-gray-500 uppercase">Load</span>
                                                        <span className="text-[9px] font-bold text-space-cyan">{skill.percent}%</span>
                                                    </div>
                                                    <div className="skill-bar-container">
                                                        <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Journey: Vertical Timeline */}
                <div className="max-w-4xl mx-auto">
                    <Reveal width="100%">
                        <div className="mb-16">
                            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
                                Career <span className="glow-purple">Journey</span>
                            </h2>
                            <p className="text-gray-400">
                                A timeline of my professional evolution and academic foundations.
                            </p>
                        </div>
                    </Reveal>

                    <div className="relative pl-8 sm:pl-0">
                        {/* Vertical Line */}
                        <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-space-cyan via-space-purple to-transparent hidden sm:block"></div>

                        {/* Experience 1 */}
                        <div className="relative mb-20">
                            <Reveal width="100%">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <div className="flex-1 w-full sm:text-right sm:pr-12 mb-6 sm:mb-0">
                                        <div className="inline-block px-4 py-1 rounded-full bg-space-purple/10 border border-space-purple/30 text-space-purple text-xs font-bold uppercase mb-4">
                                            2022 - 2023
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">DotClick LLC</h4>
                                        <p className="text-space-cyan font-medium mb-4 uppercase tracking-widest text-sm">React Front-end Developer</p>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-md ml-auto">
                                            Architected interactive web systems using React.js and Next.js, focusing on high-performance animations and responsive architectures.
                                        </p>
                                    </div>
                                    
                                    <div className="absolute left-[-32px] sm:left-1/2 sm:ml-[-8px] w-4 h-4 rounded-full bg-space-purple shadow-[0_0_15px_rgba(167,139,250,0.8)] z-20 hidden sm:block"></div>
                                    
                                    <div className="flex-1 w-full sm:pl-12">
                                        <div className="glass-card p-6 border-l-4 border-l-space-purple">
                                            <ul className="space-y-3">
                                                {["UI/UX implementation from Figma", "REST API Integration", "Performance Optimization"].map((item, i) => (
                                                    <li key={i} className="flex gap-3 items-center text-xs text-gray-300">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-space-purple"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Education 1 */}
                        <div className="relative mb-20">
                            <Reveal width="100%">
                                <div className="flex flex-col sm:flex-row-reverse items-center text-left">
                                    <div className="flex-1 w-full sm:pl-12 mb-6 sm:mb-0">
                                        <div className="inline-block px-4 py-1 rounded-full bg-space-cyan/10 border border-space-cyan/30 text-space-cyan text-xs font-bold uppercase mb-4">
                                            2022 - 2026
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Virtual University</h4>
                                        <p className="text-gray-400 font-medium mb-4 uppercase tracking-widest text-sm">Bachelor's of Business in IT</p>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                            Deepening my understanding of the intersection between business logic and technological implementation.
                                        </p>
                                    </div>
                                    
                                    <div className="absolute left-[-32px] sm:left-1/2 sm:ml-[-8px] w-4 h-4 rounded-full bg-space-cyan shadow-[0_0_15px_rgba(0,240,255,0.8)] z-20 hidden sm:block"></div>
                                    
                                    <div className="flex-1 w-full sm:pr-12 sm:text-right">
                                        <div className="glass-card p-6 border-r-4 border-r-space-cyan inline-block">
                                            <span className="text-xs text-gray-300 font-medium">Core Focus: Enterprise Systems & Data Management</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Education 2 */}
                        <div className="relative">
                            <Reveal width="100%">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <div className="flex-1 w-full sm:text-right sm:pr-12 mb-6 sm:mb-0">
                                        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase mb-4">
                                            2018 - 2020
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-1">Govt. Degree Boys College</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-md ml-auto">
                                            Completed higher secondary education with a focus on Pre-Engineering, establishing a strong foundation in analytical thinking and computational logic.
                                        </p>
                                    </div>
                                    
                                    <div className="absolute left-[-32px] sm:left-1/2 sm:ml-[-8px] w-4 h-4 rounded-full bg-gray-600 z-20 hidden sm:block"></div>
                                    
                                    <div className="flex-1 w-full sm:pl-12">
                                        <div className="glass-card p-6 border-l-4 border-l-gray-600 inline-block">
                                            <span className="text-xs text-gray-400 font-medium">Focus: Mathematics, Physics & Chemistry</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
