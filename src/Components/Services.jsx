import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowUpRight } from 'react-icons/bs';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      name: 'Web Design',
      description:
        'Immerse yourself in visually captivating and user-friendly website designs. I craft seamless digital experiences that leave a lasting impression, ensuring your online presence reflects your unique identity.',
      link: 'Learn More',
    },
    {
      name: 'Web Development',
      description:
        'Transforming ideas into interactive and responsive websites is my expertise. I breathe life into designs, employing cutting-edge technologies to create robust, high-performance websites that engage and delight users.',
      link: 'Learn More',
    },
    {
      name: 'Product Branding',
      description:
        ' Elevate your brand identity with my strategic product branding services. I blend creativity with market insights to develop compelling brand stories and visual identities.I ensure your brand stands out and resonates with your target audience.',
      link: 'Learn More',
    },
  ];

  return (
    <section className='section lg:pt-48' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div
            className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten lg:mb-12 lg:mb-0'
            data-aos='fade-right'
          >
            <h2 className='text-accent h2'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a freelance frontend developer.</h3>
            <button className='btn btn-lg border-0 text-white rounded-full'>See my projects</button>
          </div>
          <div>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                    data-aos='fade-left'
                    data-aos-delay={index * 100}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        className='btn btn-sm w-9 h-9 mb-[42px] flex rounded-full justify-center items-center text-white'
                        href='#'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services
