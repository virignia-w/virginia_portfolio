import React, { useState, useEffect } from 'react';
import About from './about';
import AboutMobile from './aboutmobile';   // Assume this is your mobile component

const Aboutresponsive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? <AboutMobile /> : <About />}
        </div>
    );
};

export default Aboutresponsive;