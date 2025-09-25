import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Icons for each service
import { FaCode, FaLaptopCode, FaReact } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import SectionTitle from './SectionTitile';

const Services = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    // Services data with added icons for visual appeal
    const services = [
        {
            icon: <FaCode size={40} />,
            name: 'Full Stack Development',
            description:
                'Building complete web solutions from database to UI. I leverage the MERN stack to create robust, scalable, and high-performance applications with seamless integration.',
            link: '#', // Placeholder link
        },
        {
            icon: <FaLaptopCode size={40} />,
            name: 'Web Development',
            description:
                'Transforming your ideas into interactive and responsive websites. I focus on creating robust, high-performance web experiences that engage and delight users.',
            link: '#', // Placeholder link
        },
        {
            icon: <FaReact size={40} />,
            name: 'Frontend Development',
            description:
                'Crafting beautiful and intuitive user interfaces. I specialize in modern technologies like React to build visually appealing and highly responsive user experiences.',
            link: '#', // Placeholder link
        },
    ];

    return (
        <section className='py-20 lg:py-32' id='services'>
            <div className='container mx-auto px-4'>
                {/* Section Header */}
                <div className='text-center mb-12' data-aos='fade-up'>
                    <SectionTitle title={"What I Do"} subtitle={"My Services"} />
                    <p className='max-w-2xl mx-auto text-white/80 mt-4'>
                        I provide end-to-end web development services, turning complex problems into elegant, user-friendly digital solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos='fade-up'
                            data-aos-delay={`${index * 100}`}
                            className='group relative flex flex-col h-full bg-primary/40 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-accent hover:-translate-y-2'
                        >
                            {/* Icon */}
                            <div className='text-accent mb-6'>{service.icon}</div>
                            
                            {/* Title */}
                            <h4 className='text-xl font-bold text-white mb-4'>{service.name}</h4>
                            
                            {/* Description */}
                            <p className='text-white/80 leading-relaxed mb-6 flex-grow'>
                                {service.description}
                            </p>
                            
                            {/* Learn More Link */}
                            <a
                                href={service.link}
                                className='flex items-center gap-x-2 text-accent font-semibold'
                            >
                                <span>Learn More</span>
                                <BsArrowUpRight className='transform transition-transform duration-300 group-hover:translate-x-1' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;