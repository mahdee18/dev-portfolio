import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='bg-black/20 h-[65px] backdrop-blur-2xl rounded-full max-w-[400px mx-auto px-5 lg:w-1/3 flex justify-between items-center text-2xl text-white/50'>
                    <Link className='cursor-pointer flex justify-center items-center h-[60px] w-[60px]' to='home' activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                    >
                        <BiHomeAlt></BiHomeAlt>
                    </Link>
                    <Link className='cursor-pointer flex justify-center items-center h-[60px] w-[60px]' to='about' activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                    >
                        <BiUser></BiUser>
                    </Link>
                    <Link className='cursor-pointer flex justify-center items-center h-[60px] w-[60px]' to='services' activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                    >
                        <BsClipboardData></BsClipboardData>
                    </Link>
                    <Link className='cursor-pointer flex justify-center items-center h-[60px] w-[60px]' to='work' activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                    >
                        <BsBriefcase></BsBriefcase>
                    </Link>
                    <Link className='cursor-pointer flex justify-center items-center h-[60px] w-[60px]' to='contact' activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                    >
                        <BsChatSquare></BsChatSquare>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Nav;