import React, { useEffect, useState } from 'react';

export default function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 560) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a href="#home" className={`back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
            <i className="icon-arrow-up"></i>
        </a>
    );
}
