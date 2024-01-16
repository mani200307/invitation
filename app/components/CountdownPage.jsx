'use client'
import React, { useEffect, useState } from 'react';

const CountdownPage = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`01/21/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(2024);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div className='flex flex-col justify-center items-center gap-3'>
                <span className='bg-[#4831D4] text-[#FFFFFF] text-xl font-medium flex items-center justify-center w-12 md:w-16 aspect-square'>
                    {timeLeft[interval]}
                </span>
                <span className='text-sm font-medium text-[#2F3C7E] text-center'>
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div id='countdown' className='flex flex-col py-16 justify-center gap-4 items-center'>
            <h1 className='text-3xl text-[#2F3C7E] font-semibold mb-12'>Countdown</h1>
            <div className='flex gap-8'>
                {timerComponents.length ? timerComponents : <span>Event started!</span>}
            </div>
        </div>
    );
};

export default CountdownPage;
