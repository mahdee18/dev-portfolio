import React from 'react';
import avater from '../assets/avatar.svg'
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'


const Banner = () => {
    return (
        <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

                    <div className='flex-1 font-secondary lg:text-left'>
                        <motion.h2
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-[55px] font-bold leading-[.8] lg:text-[80px] uppercase'>Mahdee <span>Al Amin</span>
                        </motion.h2>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-6 my-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-1'>
                            <span className='text-white mr-4'>I'm A </span>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Web Designer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                ]}
                                speed={50}
                                className='text-accent'
                                repeat={Infinity}
                                wrapper='span'
                            ></TypeAnimation>
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-8 max-w-lg lg:mx-0 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident magnam quis voluptatem sequi ducimus voluptatibus, inventore et maiores ad tenetur consequatur reprehenderit quia sint eveniet neque! Vero, facilis quidem similique fugit, inventore perspiciatis consequuntur modi accusamus ad maiores voluptatem rem incidunt delectus eligendi atque laudantium, iste hic itaque tenetur.
                        </motion.p>

                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex items-center max-w-max gap-x-6 mb-8 mx-auto lg:mx-0'>
                            <button className='btn btn-lg border-0 text-white'>Contact me</button>
                            <a href="" className='text-gradient btn-link no-underline'>My Portfolio</a>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href="#">
                                <FaGithub></FaGithub>
                            </a>
                            <a href="#">
                                <FaLinkedinIn></FaLinkedinIn>
                            </a>
                            <a href="#">
                                <FaFacebook></FaFacebook>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]'>
                        <img src={avater} alt="" />
                    </motion.div>
                </div>

            </div>
        </div >
    );
};

export default Banner;