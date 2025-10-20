import { Disclosure } from '@headlessui/react';
import SideDrawer from '../Drawer/Drawer';
import '../../App.css';
import Logo from '../Assets/Logo/Logo.png'


const navigation = [
    { name: '+92 317-027-0842', href: 'tel:+923170270842' },
    { name: '/', },
    { name: 'faizghouri5@gmail.com', href: 'mailto:faizghouri5@gmail.com' },
]



export default function WebHeader() {
    return (
        <Disclosure as="nav" className="bg-transparent backdrop-blur-lg w-full fixed z-10 top-0">
            <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex items-center gap-32 justify-center sm:items-center sm:justify-start">
                        <div className="flex  items-center">
                            <img
                                alt="Your Company"
                                src={Logo}
                                className="h-16 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex gap-8 text-white items-center">
                                {navigation.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.name}
                                        className="text-white m-0 outfit-600 tracking-wider decoration-current no-underline text-sm hover:underline active:text-white foucs:text-white"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <SideDrawer />
                    </div>
                </div>
            </div>


        </Disclosure>
    )
}
