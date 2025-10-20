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
        <main>
            <section>
                <div className="relative min-h-screen bg-[url('/img/attachment-03.jpg')]  bg-cover bg-center bg-no-repeat">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-5">
                            {/* Left Text Side */}
                            <div className="text-left">
                                <div className="about-text">
                                    <Reveal>
                                        <p className="text-white text-5xl sm:text-6xl outfit-900">
                                            Contact<span className="text-[#10BD7B] outfit-900 text-5xl">.</span>
                                        </p>
                                    </Reveal>
                                    <hr className="w-36 sm:w-[20rem]" />
                                </div>

                                <Reveal>
                                    <p className="mt-8 text-3xl sm:text-4xl outfit-600 text-[#10BD7B]">Having a Project?</p>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-4 text-2xl text-white">
                                        <span className="text-[#10BD7B]">Karachi</span>, Pakistan
                                    </p>
                                </Reveal>

                                <dl className="mt-8 space-y-6">
                                    {features.map((feature) => (
                                        <Reveal key={feature.name}>
                                            <div className="relative pl-9">
                                                <dt className="text-gray-400 outfit-600">
                                                    <feature.icon className="absolute left-0 top-1 h-5 w-5 text-[#10BD7B]" />
                                                    {feature.name}
                                                </dt>
                                                <dd className="text-white">{feature.description}</dd>
                                            </div>
                                        </Reveal>
                                    ))}
                                </dl>
                            </div>

                            {/* Right Form Side */}
                            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto text-left">
                                <div className="space-y-8">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-white outfit-400">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter Name"
                                            required
                                            className="mt-1 block w-full rounded-md bg-[#202020] text-white px-3 py-2 placeholder:text-gray-400 shadow-[0_10px_50px_0_rgb(0,0,0)] focus:ring-[#10BD7B] focus:border-[#10BD7B]"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm text-white outfit-400">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter Email"
                                            required
                                            className="mt-1 block w-full rounded-md bg-[#202020] text-white px-3 py-2 placeholder:text-gray-400 shadow-[0_10px_50px_0_rgb(0,0,0)] focus:ring-[#10BD7B] focus:border-[#10BD7B]"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-white outfit-400">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Enter Message"
                                            required
                                            className="mt-1 block w-full rounded-md bg-[#202020] text-white px-3 py-2 placeholder:text-gray-400 shadow-[0_10px_50px_0_rgb(0,0,0)] focus:ring-[#10BD7B] focus:border-[#10BD7B]"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-[#10BD7B] px-5 py-2 text-sm outfit-600 text-[#202020] hover:bg-[#0e9b65] transition"
                                        >
                                            Contact me
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
