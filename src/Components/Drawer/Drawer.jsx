import React, { useState } from 'react';
import { Drawer, ButtonToolbar } from 'rsuite';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import '../../App.css'


const SideDrawer = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleOpen = key => {
        setOpen(true);
        setPlacement(key);
    };
    return (
        <div>
            <ButtonToolbar>

                <button onClick={() => handleOpen('right')} className='p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center group'>
                    <Bars3CenterLeftIcon className='w-6 h-6 text-gray-300 group-hover:text-space-cyan transition-colors' />
                </button>

            </ButtonToolbar>

            <Drawer size={'full'} placement={placement} open={open} onClose={() => setOpen(false)} style={{ background: '#02040f' }}>
                <Drawer.Body style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
                        <span className='text-space-cyan tracking-widest font-display text-3xl font-bold'>MENU</span>
                        <button onClick={() => setOpen(false)} className='p-2 rounded-full border border-white/10 bg-white/5 hover:bg-space-cyan/10 hover:border-space-cyan/30 transition-colors flex items-center justify-center group'>
                            <XMarkIcon className='w-8 h-8 text-gray-300 group-hover:text-space-cyan transition-colors' />
                        </button>
                    </div>

                    <div className='flex flex-col w-full h-full justify-center gap-6 pb-20'>

                        <a href="#home" onClick={() => setOpen(false)} className='w-full p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-space-cyan/10 hover:border-space-cyan/30 text-xl tracking-wide font-display text-gray-300 hover:text-space-cyan transition-all flex items-center justify-between group no-underline'>
                            <span>HOME</span>
                            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-space-cyan">→</span>
                        </a>
                        <a href="#about" onClick={() => setOpen(false)} className='w-full p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-space-cyan/10 hover:border-space-cyan/30 text-xl tracking-wide font-display text-gray-300 hover:text-space-cyan transition-all flex items-center justify-between group no-underline'>
                            <span>ABOUT</span>
                            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-space-cyan">→</span>
                        </a>
                        <a href="#projects" onClick={() => setOpen(false)} className='w-full p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-space-cyan/10 hover:border-space-cyan/30 text-xl tracking-wide font-display text-gray-300 hover:text-space-cyan transition-all flex items-center justify-between group no-underline'>
                            <span>PROJECTS</span>
                            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-space-cyan">→</span>
                        </a>
                        <a href="#contact" onClick={() => setOpen(false)} className='w-full p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-space-cyan/10 hover:border-space-cyan/30 text-xl tracking-wide font-display text-gray-300 hover:text-space-cyan transition-all flex items-center justify-between group no-underline'>
                            <span>CONTACT</span>
                            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-space-cyan">→</span>
                        </a>
                    </div>
                </Drawer.Body>
            </Drawer>
        </div>
    );
};

export default SideDrawer;