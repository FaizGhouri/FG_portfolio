import React, { useState } from 'react';
import '../../App.css';
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid';
import { Reveal } from '../../utils/Reveal';

const features = [
    {
        name: 'Address',
        description: 'D-4/236 Saudabad, Malir.',
        icon: MapIcon,
    },
    {
        name: 'Mail',
        description: 'faizghouri5@gmail.com',
        icon: EnvelopeIcon,
    },
    {
        name: 'Phone',
        description: '+92 317 027 0842',
        icon: PhoneIcon,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://fg-backend-black.vercel.app/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        alert(data.message);
    };

    return (
        <section id="contact" className="relative min-h-screen py-24 overflow-hidden flex items-center justify-center">
             
            {/* Holographic background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 z-0"></div>
            
            <div className="absolute left-[20%] top-[40%] w-[500px] h-[500px] bg-space-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="glass-card shadow-2xl border-t-2 border-t-space-cyan/30 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 p-1 lg:p-0">
                        
                        {/* Left Info Panel */}
                        <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-space-800 to-space-900 p-8 sm:p-12 relative overflow-hidden rounded-3xl lg:rounded-none lg:rounded-l-3xl">
                             <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-space-cyan/10 rounded-full blur-[60px]" />
                            
                             <Reveal>
                                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 relative z-10">
                                    Initiate <br/><span className="glow-text">Connection.</span>
                                </h2>
                             </Reveal>
                             <Reveal>
                                <p className="text-gray-400 mt-6 relative z-10 font-light leading-relaxed">
                                    Looking for a developer to bring your vision into the digital realm? My communication channels are open.
                                </p>
                             </Reveal>

                             <div className="mt-12 space-y-8 relative z-10">
                                {features.map((feature, index) => (
                                    <Reveal key={feature.name}>
                                        <div className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border-space-cyan/20 group-hover:border-space-cyan group-hover:bg-space-cyan/10 transition-all duration-300">
                                                <feature.icon className="w-5 h-5 text-space-cyan" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-1">{feature.name}</p>
                                                <p className="text-white font-medium">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                             </div>
                        </div>

                        {/* Right Form Panel */}
                        <div className="col-span-1 lg:col-span-3 p-8 sm:p-12 lg:p-16 relative">
                            {/* Scanning line animation */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-space-cyan to-transparent animate-scan z-20 pointer-events-none opacity-50"></div>
                            
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <Reveal>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-mono tracking-widest text-gray-400 uppercase ml-1">Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter Name"
                                                required
                                                className="space-input"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-mono tracking-widest text-gray-400 uppercase ml-1">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter Email"
                                                required
                                                className="space-input"
                                            />
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-mono tracking-widest text-gray-400 uppercase ml-1">Transmission Data</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Enter your message..."
                                            required
                                            className="space-input resize-none"
                                        />
                                    </div>
                                </Reveal>

                                <Reveal>
                                    <div className="pt-4">
                                        <button type="submit" className="btn-neon w-full sm:w-auto inline-flex justify-center text-center">
                                            Transmit Message <span className="ml-2 font-mono text-xs opacity-70">_&gt;</span>
                                        </button>
                                    </div>
                                </Reveal>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
