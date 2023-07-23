import React from 'react';

import Header from '../components/sections/Header';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

import BackToTopButton from '../components/buttons/BackToTopButton';

export default function Homepage() {
    return (
        <>
            <Header />

            <main>
                <Home />
                <About />
                <Services />
                <div className="divider-1"></div>
                <Testimonials />
                <div className="divider-2"></div>
                <Contact />
                <div className="divider-1"></div>
            </main>

            <Footer />

            <BackToTopButton />
        </>
    );
}
