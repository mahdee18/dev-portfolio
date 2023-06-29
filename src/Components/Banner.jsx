import React from 'react';
import avater from '../assets/avatar.svg'
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'


const Banner = () => {
    return (
        <div className='section' id='home'>
            <div className='container mx-auto'>
                <div>
                    <div>
                        <h2>BEN <span>AIDEN</span></h2>
                        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-1'>
                            <span className='text-white mr-4'>I'm A </span>
                            <TypeAnimation
                                sequence={
                                    [
                                        'Full Stack Developer',
                                        2000,
                                        'Web Designer',
                                        2000,
                                        'Frontend Developer',
                                        2000,
                                    ]
                                }
                                speed={50}
                                className='text-accent'
                                repeat={Infinity}
                                wrapper='span'
                            ></TypeAnimation>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident magnam quis voluptatem sequi ducimus voluptatibus, inventore et maiores ad tenetur consequatur reprehenderit quia sint eveniet neque! Vero, facilis quidem similique fugit, inventore perspiciatis consequuntur modi accusamus ad maiores voluptatem rem incidunt delectus eligendi atque laudantium, iste hic itaque tenetur.</p>

                        <div>
                            <button>Contact me</button>
                            <a href="" className='text-gradient btn-link' >My Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;