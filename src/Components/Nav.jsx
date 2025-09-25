import React from 'react';
// Import your icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'; // Using a different chat icon for variety
// Import Link from react-scroll
import { Link } from 'react-scroll';

const Nav = () => {
    // Array for cleaner mapping
    const navLinks = [
        { to: 'home', icon: <BiHomeAlt />, tooltip: 'Home' },
        { to: 'about', icon: <BiUser />, tooltip: 'About' },
        { to: 'services', icon: <BsClipboardData />, tooltip: 'Services' },
        { to: 'work', icon: <BsBriefcase />, tooltip: 'Work' },
        { to: 'contact', icon: <BsChatSquareText />, tooltip: 'Contact' },
    ];

    return (
        <nav className='fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                {/* Main Nav container */}
                <div className='w-full bg-white/10 h-[80px] backdrop-blur-md rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/80 border border-white/20'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            activeClass='active' // This class will be applied when the section is in view
                            smooth={true}
                            spy={true}
                            offset={-100} // Adjust offset to account for your fixed header
                            className='relative group cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all duration-300'
                        >
                            {/* Icon */}
                            <div className="z-10 transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2">
                                {link.icon}
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full mb-3 px-3 py-1 bg-accent text-white text-xs rounded-md opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300">
                                {link.tooltip}
                                {/* Tooltip arrow */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-accent"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;