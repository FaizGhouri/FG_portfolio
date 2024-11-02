import React from 'react';
import '../../App.css';
import boy1 from '../../Components/Assets/Background/monitor-with-financial-graphs-charts-statisctis-corporate-office-workplace.jpg';
import { Progress } from 'rsuite';


const style = {
    width: 120,
    display: 'inline-block',
    marginRight: 10
};

const posts = [
    {
        id: 1,
        title: 'HTML',
        percent: '98',

    },

    {
        id: 2,
        title: 'CSS',
        percent: '95',

    },

    {
        id: 3,
        title: 'JAVASCPRIT',
        percent: '75',

    },
    {
        id: 4,
        title: 'TYPESCPRIT',
        percent: '50',

    },
    {
        id: 5,
        title: 'REACT JS',
        percent: '70',

    },
    {
        id: 6,
        title: 'NEXT JS',
        percent: '60',

    },
    {
        id: 7,
        title: 'TAILWIND CSS',
        percent: '95',

    },
    {
        id: 8,
        title: 'API INTEGRATION',
        percent: '80',

    },
    {
        id: 9,
        title: 'FIGMA',
        percent: '70',

    },

]

const tiers = [
    {
        name: 'Education',
        id: 'tier-hobby',
        College: 'Grovt. Degree Science and Commerce College',
        Year: "2020-2022",
        depart: 'Pre-Engineering'
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$99',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'Dedicated support representative',
            'Marketing automations',
            'Custom integrations',
        ],
        featured: true,
    },
]




const About = () => {

    const text = 'Home > About >'

    return (
        <main>

            <section>
                <div className='flex justify-center items-center'>

                    <div className='container'>

                        <div className='p-32 mt-16'>

                            <p className='text-gray-400 text-md outfit-500'>{text}</p>
                            <p className='text-white text-3xl outfit-500'>ABOUT</p>

                        </div>


                        <div className='w-full flex flex-col sm:flex-row justify-center gap-8 items-center'>

                            <div className='w-[70%] sm:w-[40%]  py-8 flex justify-end'>

                                <img src={boy1} alt="me-img" className='w-[500px] h-[500px]' />

                            </div>

                            <div className='w-[70%] sm:w-[40%] py-8'>

                                <p className='text-left outfit-500 text-md text-gray-400'>ABOUT ME</p>
                                <p className='text-[#10BD7B] text-left outfit-500 text-5xl'>A Front-end Developer Based in Pakistan</p>
                                <p className='text-white text-left outfit-300 text-md pt-5'>
                                    My name is Faiz Ghouri. I live in Karachi, Pakistan. Currently i'm doing my bachelor's in BBIT
                                    from Virtual University. I'm Front-end Developer. I was worked in DotClickllc as a
                                    React Developer. In DotClickllc i worked different projects.
                                </p>

                                <div className='text-left py-8'>

                                    <p className='text-md text-gray-400 outfit-600 tracking-wider'>PERSONAL DETAILS</p>

                                    <div className='flex flex-row justify-start items-centers gap-2 py-5'>



                                        <ul>
                                            <li className='text-md text-[#10BD7B] outfit-500 text-lg'>Name:</li>
                                            <li className='text-md text-[#10BD7B] outfit-500 text-lg'>D.O.B:</li>
                                            <li className='text-md text-[#10BD7B] outfit-500 text-lg'>Address:</li>
                                            <li className='text-md text-[#10BD7B] outfit-500 text-lg'>Zip-Code:</li>
                                            <li className='text-md text-[#10BD7B] outfit-500 text-lg'>Email:</li>
                                            <li className='text-md text-[#10BD7B] outfit-500 text-lg'>Phone:</li>
                                        </ul>
                                        <ul>
                                            <li className='text-md text-white outfit-200 text-lg'>Faiz Ghouri</li>
                                            <li className='text-md text-white outfit-200 text-lg'>29/03/2001</li>
                                            <li className='text-md text-white outfit-200 text-lg'>D-4/236 Malir Suadabad, Karachi.</li>
                                            <li className='text-md text-white outfit-200 text-lg'>75080</li>
                                            <li className='text-md text-white outfit-200 text-lg'>faizghouri5@gmail.com</li>
                                            <li className='text-md text-white outfit-200 text-lg'>+92317-027-0842</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='py-24 sm:py-32'>
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto  lg:mx-0">
                                    <p className='text-sm text-gray-400 outfit-400 p-2 tracking-widest'>SKILLS</p>
                                    <p className='text-5xl text-[#10BD7B] outfit-500 '>My Skills</p>
                                </div>
                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <article key={post.id} className="flex max-w-xl flex-col items-center justify-center gap-5 shadow-[0_10px_50px_0_rgb(0,0,0)] p-8">

                                            <div className="group relative">
                                                <h3 className="text-lg/6 font-semibold outfit-600 tracking-wider text-gray-400 group-hover:text-gray-600">
                                                    <p>
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </p>
                                                </h3>

                                            </div>

                                            <div style={style}>
                                                <Progress.Circle percent={post.percent} strokeColor="#10BD7B" />
                                            </div>


                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative isolate  px-6 py-24 sm:py-32 lg:px-8">

                            <div className="mx-auto max-w-4xl text-center">
                                <h2 className="text-sm outfit-700 tracking-wide text-[#10BD7B]">EDUCATION & EXPERIENCE</h2>
                                <p className="mt-2 text-balance text-5xl outfit-600 tracking-tight text-white sm:text-6xl">
                                    My Education & Experience
                                </p>
                            </div>

                            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-0 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">

                                <div className='bg-white shadow-[0_10px_50px_0_rgb(0,0,0)] sm:mx-8 rounded-xl lg:rounded-t-3xl  lg:rounded-bl-3xl lg:rounded-tr-none p-8 sm:p-10'>
                                    <h3 className=' outfit-500 text-left text-[#10BD7B] [text-shadow:_0_0px_10px_rgb(0_0_0)]'>
                                        Education
                                    </h3>



                                    <div>
                                        <p className="mt-8 flex items-baseline gap-x-2">
                                            <span className='text-xl text-left tracking-tight outfit-400'>

                                                Virtual University
                                            </span>

                                        </p>
                                        <p className=' text-base/7 outfit-400 text-left'>

                                            BBIT
                                        </p>
                                        <p className='text-base/7 outfit-400 text-left'>

                                            2022-2026
                                        </p>

                                    </div>


                                    <div>
                                        <p className="mt-8 flex items-baseline gap-x-2">
                                            <span className='text-xl text-left tracking-tight outfit-400'>

                                                Grovt. Degree Science and Commerce College
                                            </span>

                                        </p>
                                        <p className=' text-base/7 outfit-400 text-left'>

                                            Pre-Engineering
                                        </p>
                                        <p className='text-base/7 outfit-400 text-left'>

                                            2018-2020
                                        </p>

                                    </div>


                                </div>
                                <div className='relative bg-gray-900  shadow-[0_10px_50px_0_rgb(0,0,0)] sm:mx-8  lg:rounded-br-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-tl-none rounded-xl sm:rounded-none  p-8 ring-1 ring-gray-900 sm:p-10'>
                                    <h3 className=' outfit-500 text-left text-[#10BD7B]'>
                                        Experience
                                    </h3>
                                    <p className="mt-8 flex items-baseline gap-x-2">
                                        <span className='text-white text-xl text-left tracking-tight outfit-400'>

                                            DotClickLLC
                                        </span>

                                    </p>
                                    <p className=' text-base/7 text-[#10BD7B] outfit-400 text-left'>

                                        React Developer
                                    </p>
                                    <p className='text-base/7 text-white outfit-400 text-left'>

                                        sept 2022 - April 2023
                                    </p>

                                    <ul className='list-image-check text-left marker:text-2xl pt-8'>
                                        <li className='text-white text-md outfit-400'>Developing website front-end using React js (JavaScript Library).</li>
                                        <li className='text-white text-md outfit-400'>Convert PSD, Figma to Html and React js.</li>
                                        <li className='text-white text-md outfit-400'>Bug fixing and optimize website.</li>
                                        <li className='text-white text-md outfit-400'>Scratching data from Restful API.</li>
                                        <li className='text-white text-md outfit-400'>Developing interactive websites using animation.</li>
                                        <li className='text-white text-md outfit-400'>Make responsive front-end using bootstrap, Tailwind CSS</li>
                                        <li className='text-white text-md outfit-400'>Developed and maintaine code quality</li>
                                        <li className='text-white text-md outfit-400'>Enhanced application performance and scalablility using
                                            advance web development tools and frameworks.
                                        </li>
                                    </ul>


                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </main >
    )
}

export default About