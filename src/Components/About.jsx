import React from 'react';
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section className='section w-full my-12' id='about'>
            <div className='flex flex-col md:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-1/2'>
                    <div className='w-full bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-1/2 md:mt-48 p-4'>
                    <div className='flex flex-col sm:px-3 justify-center h-[640px] md:h-auto'>
                        <div className='mb-8 sm:mx-3'>
                            <h2 className='h2 text-accent'>About Me</h2>
                            <h3 className='h3 my-3'>I'm a freelance Frontend Developer.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore? Commodi, eaque saepe, quisquam ducimus quibusdam eum mollitia at perferendis aut corporis maiores cupiditate! Veritatis laboriosam delectus provident sint itaque, obcaecati explicabo officiis quis? Vel sed tenetur corporis nam voluptatibus.</p>
                        </div>
                        <div className='flex justify-start items-center gap-6'>
                            <div className='mt-auto'>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient my-2'>
                                        <CountUp start={0} end={1} duration={3}></CountUp>
                                        +
                                    </div>
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of <br />
                                    Experience.
                                </div>
                            </div>
                            <div className='mt-auto'>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient my-2'>
                                        <CountUp start={0} end={100} duration={3}></CountUp>
                                        +
                                    </div>
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects <br />
                                    Completed.
                                </div>
                            </div>
                            <div className='mt-auto'>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient my-2'>
                                        <CountUp start={0} end={13} duration={3}></CountUp>
                                        +
                                    </div>
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisfied<br />
                                    Clients.
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>



    );
};

export default About;