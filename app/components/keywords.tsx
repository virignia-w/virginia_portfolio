"use client"
import React, { useState, useEffect } from 'react';
import "../keywords.css";


export default function Keywords() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log("Component mounted. Setting interval.");
        const interval = setInterval(() => {
            setActiveIndex(current => {console.log(`Changing active index from ${current} to ${(current + 1) % 11}`);
            return (current + 1) % 11;
            }); 
        },3000); // Change every 3 seconds

        return () => {
            console.log("Cleaning up interval.");
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='container-all'>
            <div className="row keyword-con d-flex keyword">
                <div className={`embrace ${activeIndex === 0 ? 'active' : ''}`}>
                    <h1>Embraces changes and challenges</h1>
                </div>
                <div className={`listener ${activeIndex === 1 ? 'active' : ''}`}>
                    <h1>Active listener</h1>
                </div>
                <div className={`open ${activeIndex === 2 ? 'active' : ''}`}>
                    <h1>Open to new ideas</h1>
                </div>
                <div className={`communication ${activeIndex === 3 ? 'active' : ''}`}>
                    <h1>Communication bridge</h1>
                </div>
                <div className={`solving ${activeIndex === 4 ? 'active' : ''}`}>
                    <h1>Problem-solving</h1>
                </div>
                <div className={`curious ${activeIndex === 5 ? 'active' : ''}`}>
                    <h1>Curious</h1>
                </div>
                <div className={`observant ${activeIndex === 6 ? 'active' : ''}`}>
                    <h1>Observant</h1>
                </div>
                <div className={`listener ${activeIndex === 7 ? 'active' : ''}`}>
                    <h1>Lifelong learner</h1>
                </div>
                <div className={`player ${activeIndex === 8 ? 'active' : ''}`}>
                    <h1>Cross-team player</h1>
                </div>
                <div className={`thinker ${activeIndex === 9 ? 'active' : ''}`}>
                    <h1>Creative thinker</h1>
                </div>
                <div className={`finding ${activeIndex === 10 ? 'active' : ''}`}>
                    <h1>Problem-finding</h1>
                </div>
            </div>
        </div>
    );
}