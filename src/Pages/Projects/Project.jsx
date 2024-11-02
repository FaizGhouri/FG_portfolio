import React from 'react';
import '../../App.css';
import hey from '../../Components/Assets/Background/hey.png';
import predict from '../../Components/Assets/Background/3prediction.png'


const posts = [
    {
        id: 1,
        title: 'HEY SOLUTIONS',
        src: hey,
        href: 'https://heysolutions.org/'

    },

    {
        id: 2,
        title: '3PIDICTION',
        src: predict,
        href: 'https://3prediction.com/'

    },



]

const Project = () => {

    const text = 'Home > Work >'



    return (
        <main>

            <section>

                <div className='flex justify-center items-center'>

                    <div className='container'>

                        <div className='p-36 mt-24'>

                            <p className='text-gray-400 text-md outfit-500'>{text}</p>
                            <p className='text-white text-3xl outfit-500'>PORTFOILO</p>

                        </div>


                        <div className='py-16 sm:py-20'>
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto  lg:mx-0">
                                    <p className='text-sm text-gray-400 outfit-400 p-2 tracking-widest'>PROJECTS</p>
                                    <p className='text-5xl text-[#10BD7B] outfit-500 '>My Projects</p>
                                </div>
                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <article key={post.id} className="group/edit relative flex max-w-sm rounded-xl cursor-pointer flex-col  items-center justify-center gap-5 shadow-[0_10px_50px_0_rgb(0,0,0)]">

                                            <div className="w-full h-full relative group-hover/edit:bg-[#10BD7B] rounded-xl ease-in-out group-hover/edit:backdrop-opacity-20 duration-500 ">
                                                <img src={post.src} alt="img" className='z-0 rounded-xl' />

                                                <div className='invisible group-hover/edit:visible bg-[#10BD7B]   absolute top-0  w-full h-full z-50'>


                                                    <p className=' text-white relative outfit-600 absolute top-[35%] opacity-100 text-xs tracking-wider'>{post.title}</p>

                                                    <a href={post.href} target='_blank' className='text-[#10BD7B] text-md outfit-500 bg-[#202020] opacity-100 py-2 px-6 no-underline hover:no-underline hover:text-[#10BD7B] absolute top-[50%] left-[39%]'>VIEW</a>

                                                </div>


                                            </div>


                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>




                    </div>

                </div>
            </section>
        </main>
    )
}

export default Project;