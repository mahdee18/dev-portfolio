import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <header className='py-8'>

            <div className='container mx-auto' id='header'>
                <div className='flex justify-between items-center'>
                    <a className='text-gradient font-bold lg:text-4xl sm:text-2xl' href="/">
                        Mahdee
                    </a>
                    <a href="#contact">
                        <button className='btn lg:btn-lg sm:btn-sm rounded-full text-white border-0'>Work With Me</button>
                    </a>

                </div>
            </div>
        </header>
    );
};

export default Header;