import React from 'react';
import '../../App.css'
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid';


const features = [
    {
        name: 'Address',
        description:
            'D-4/236 Saudabad, Malir.',
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
]

const Contact = () => {


    return (
        <main>
        
            <section>


                <div className='relative h-[1100px] sm:h-screen bg-[url("/img/attachment-03.jpg")] bg-center'>

                    <div className='container m-auto w-full h-screen '>

                      

                        <div className="overflow-hidden pt-28 ">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                    <div className="lg:pr-8 lg:pt-4">
                                        <div className="lg:max-w-lg text-left">
                                            <h2 className="text-base/7 outfit-400 tracking-widest text-xs text-white">CONTACT</h2>
                                            <p className="mt-2 text-pretty text-4xl outfit-600 tracking-wide text-[#10BD7B] sm:text-5xl">
                                                Having a Project?
                                            </p>
                                            <p className="mt-6 text-3xl outifit-600 text-white">
                                                <span className='text-[#10BD7B]'>Karachi</span>, Pakistan
                                            </p>
                                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                                {features.map((feature) => (
                                                    <div key={feature.name} className="relative pl-9">
                                                        <dt className="inline outfit-600 text-gray-400">
                                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-[#10BD7B]" />
                                                            {feature.name}
                                                        </dt>{' '}
                                                        <dd className="inline text-[white]">{feature.description}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="space-y-12">


                                            <div className="border-b border-gray-900/10 pb-12">

                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-left text-white outfit-400">
                                                            Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="first-name"
                                                                name="first-name"
                                                                type="text"
                                                                autoComplete="given-name"
                                                                className="block w-full rounded-md text-white px-2 py-1.5  bg-[#202020] shadow-[0_10px_50px_0_rgb(0,0,0)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm/6 font-medium  text-left text-white outfit-400">
                                                            Email
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="last-name"
                                                                name="last-name"
                                                                type="text"
                                                                autoComplete="family-name"
                                                                className="block w-full rounded-md text-white px-2  py-1.5  bg-[#202020] shadow-[0_10px_50px_0_rgb(0,0,0)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="email" className="block text-sm/6 font-medium text-left text-white outfit-400">
                                                            Email address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                className="block w-full rounded-md text-white px-2 py-1.5 bg-[#202020] shadow-[0_10px_50px_0_rgb(0,0,0)]  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-full">
                                                        <label htmlFor="about" className="block text-sm/6 font-medium text-left text-white outfit-400">
                                                            Message
                                                        </label>
                                                        <div className="mt-2">
                                                            <textarea
                                                                id="about"
                                                                name="about"
                                                                rows={3}
                                                                className="block w-full rounded-md text-white px-2  py-1.5 bg-[#202020] shadow-[0_10px_50px_0_rgb(0,0,0)]  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                defaultValue={''}
                                                            />
                                                        </div>

                                                    </div>


                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-6 flex items-center justify-start gap-x-6">

                                            <button
                                                type="submit"
                                                className="rounded-md bg-[#10BD7B] px-5 py-2 text-sm outfit-600 text-[#202020] shadow-[0_10px_50px_0_rgb(0,0,0)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Contact me
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </main>
    )
}

export default Contact