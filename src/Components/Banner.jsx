import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import avater from '../assets/avatar.svg';
import resume from '../assets/Mahdee -Resume(updated).pdf'
import { FaGithub, FaFacebook, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='flex-1 font-secondary lg:text-left'>
                        <h2
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='text-[55px] font-bold leading-[.8] lg:text-[80px] uppercase'
                        >
                            Mahdee <span>Al Amin</span>
                        </h2>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='mb-6 my-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-1'
                        >
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
                        </div>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='500'
                            className='mb-8 max-w-lg lg:mx-0 mx-auto'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident magnam quis voluptatem sequi
                            ducimus voluptatibus, inventore et maiores ad tenetur consequatur reprehenderit quia sint eveniet neque! Vero,
                            facilis quidem similique fugit, inventore perspiciatis consequuntur modi accusamus ad maiores voluptatem rem
                            incidunt delectus eligendi atque laudantium, iste hic itaque tenetur.
                        </p>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='600'
                            className='flex items-center max-w-max gap-x-6 mb-8 mx-auto lg:mx-0'
                        >
                            <a href="#contact" className='btn btn-lg rounded-full border-0 text-white'>Contact me</a>
                             <a href={resume} className='text-gradient btn-link no-underline' download={'Mahdee -Resumee.pdf'}>
                             <FaDownload className='inline mr-2 text-white'></FaDownload>Download Resume 
                            </a>
                        </div>

                        <div
                            data-aos='fade-up'
                            data-aos-delay='700'
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
                        >
                            <a href='https://github.com/mahdee18'>
                                <FaGithub></FaGithub>
                            </a>
                            <a href='https://www.linkedin.com/in/mahdee-al-amin-8b7134202/'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </a>
                            <a href='https://web.facebook.com/mahdee.al.amin.09y'>
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </div>
                    <div
                        data-aos='fade-down'
                        data-aos-delay='500'
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]'
                    >
                        <img src={avater} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
