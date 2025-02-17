"use client"
import React, { useState, useEffect } from 'react';
import "../keywords.css";

export default function Keywords() {
    const [activeIndex, setActiveIndex] = useState<number[]>([]);

    useEffect(() => {
        console.log("Component mounted. Setting interval.");
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                if (current.length < 11) {
                    const nextIndex = current.length;
                    console.log(`Pushing ${nextIndex} to activeIndex`);
                    return [...current, nextIndex];
                } else {
                    clearInterval(interval);
                    return current;
                }
            });
        }, 3000); // Change every 3 seconds

        return () => {
            console.log("Cleaning up interval.");
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='container-all'>
            <div className="row keyword-con d-flex keyword">
                <div className={`embrace ${activeIndex.includes(0) ? 'active' : ''}`}>
                    <h1>Embraces changes and challenges</h1>
                </div>
                <div className={`listener ${activeIndex.includes(1) ? 'active' : ''}`}>
                    <h1>Active listener</h1>
                </div>
                <div className={`open ${activeIndex.includes(2) ? 'active' : ''}`}>
                    <h1>Open to new ideas</h1>
                </div>
                <div className={`communication ${activeIndex.includes(3) ? 'active' : ''}`}>
                    <h1>Communication bridge</h1>
                </div>
                <div className={`solving ${activeIndex.includes(4) ? 'active' : ''}`}>
                    <h1>Problem-solving</h1>
                </div>
                <div className={`curious ${activeIndex.includes(5) ? 'active' : ''}`}>
                    <h1>Curious</h1>
                </div>
                <div className={`observant ${activeIndex.includes(6) ? 'active' : ''}`}>
                    <h1>Observant</h1>
                </div>
                <div className={`listener ${activeIndex.includes(7) ? 'active' : ''}`}>
                    <h1>Lifelong learner</h1>
                </div>
                <div className={`player ${activeIndex.includes(8) ? 'active' : ''}`}>
                    <h1>Cross-team player</h1>
                </div>
                <div className={`thinker ${activeIndex.includes(9) ? 'active' : ''}`}>
                    <h1>Creative thinker</h1>
                </div>
                <div className={`finding ${activeIndex.includes(10) ? 'active' : ''}`}>
                    <h1>Problem-finding</h1>
                </div>
            </div>
        </div>
    );
}