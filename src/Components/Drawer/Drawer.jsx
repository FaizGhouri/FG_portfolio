import React, { useState } from 'react';
import { Drawer, ButtonToolbar } from 'rsuite';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
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

                <button onClick={() => handleOpen('right')} className='bg-darkgray'>
                    <Bars3CenterLeftIcon className='size-6 text-white' />
                </button>

            </ButtonToolbar>

            <Drawer size={'xs'} placement={placement} open={open} onClose={() => setOpen(false)} className='bg-darkgray'>
                <Drawer.Header>
                    <Drawer.Title>
                        <p className='text-white outfit-100'>Menu</p>
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div className='flex flex-col sm:flex-col justify-center items-start gap-8'>

                        <a href="#Home" className='text-lg outfit-400  no-underline hover:no-underline text-white hover:text-white'>HOME</a>
                        <a href="#About" className='text-lg outfit-400  no-underline  hover:no-underline text-white hover:text-white'>ABOUT</a>
                        <a href="#Projects" className='text-lg outfit-400  no-underline  hover:no-underline text-white hover:text-white'>PROJECTS</a>
                        <a href="#Contact" className='text-lg outfit-400  no-underline hover:no-underline text-white hover:text-white'>CONTACT</a>
                    </div>
                </Drawer.Body>
            </Drawer>
        </div>
    );
};

export default SideDrawer;