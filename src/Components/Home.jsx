import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
            <div className='h-[4000px]'></div>
        </div>
    );
};

export default Home;