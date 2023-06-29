import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <header className='py-8'>

        <div className='container mx-auto' id='header'>
            <div className='flex justify-between items-center'>
                <a href="">
                    <img src={logo} alt="" />
                </a>
                <button className='btn btn-sm text-white border-0'>Work With Me</button>
            </div>
        </div>
        </header>
    );
};

export default Header;