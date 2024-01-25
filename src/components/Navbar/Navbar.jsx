import React from 'react'
import Link from 'next/link';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = (props) => {
    return (
        <div className='w-full h-auto p-3 flex-custom-1 border-b border-[#0f172a]/10 dark:border-[#cbd5e1]/10'>
            <div className='max-w-[1280px] w-full flex justify-between items-center mx-auto'>
                <Link href="/" className=' flex-custom-1 sm:ml-2 dark:text-[#44ed9c] text-[#fd4c74]'>
                    CloudBees
                </Link>
                <ToggleTheme toggle={props.toggle} setToggle={props.setToggle}></ToggleTheme>
            </div>
        </div>
    )
}

export default Navbar