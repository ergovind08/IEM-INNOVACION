

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import "./CountDown.css";




const AnimatedBorder = ({ children }) => {
    return (
        <div className=" w-[75px] sm:w-full h-auto flex items-center justify-center text-center">
            <motion.div
                className="px-4 py-3 bg-[#000] border-4 rounded-full"
                initial={{ borderColor: '#000' }}
                animate={{
                    borderColor: ['#f00', '#0f0', '#00f', '#f00'], // You can add more colors here for variation
                    transition: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                    },
                }}>
                {children}
            </motion.div>
        </div>

    );
};

const Countdown = () => {
    const targetDate = new Date("2024-03-31T23:59:59").getTime(); // Set your target date and time
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

    const controls = useAnimation();

    useEffect(() => {

        const interval = setInterval(() => {
            const updatedTime = getTimeRemaining(targetDate);
            setTimeRemaining(updatedTime);

            // If the countdown is complete, you can stop the interval or perform a specific action
            if (updatedTime.total <= 0) {
                clearInterval(interval);
                // Perform any action you want when the countdown is complete
            }
        }, 1000);

        // Animate the countdown using Framer Motion
        controls.start({ scale: 1.2, transition: { duration: 1 } });

        return () => {
            clearInterval(interval);
        };
    }, [targetDate, controls]);

    return (
        <div className="flex w-[90%] sm:w-[90%] items-center justify-center sm:justify-end count-card sm:px-5">
            <motion.div animate={controls} className="">
                <div className="flex justify-around items-center sm:gap-2 w-[90%] sm:px-10">
                    <AnimatedBorder className="text-center">
                        <div className=" text-xl sm:text-5xl font-bold sm:font-semibold">{timeRemaining.days}</div>
                        <div className=" text-sm sm:text-xl font-semibold">Days</div>
                    </AnimatedBorder>
                    <AnimatedBorder className="text-center">
                        <div className=" text-xl sm:text-5xl font-bold sm:font-semibold">{timeRemaining.hours}</div>
                        <div className=" text-sm sm:text-xl font-semibold">Hours</div>
                    </AnimatedBorder>
                    <AnimatedBorder className="text-center">
                        <div className=" text-xl sm:text-5xl font-bold sm:font-semibold">{timeRemaining.minutes}</div>
                        <div className=" text-sm sm:text-xl font-semibold">Minutes</div>
                    </AnimatedBorder>
                    <AnimatedBorder className="text-center">
                        <div className=" text-xl sm:text-5xl font-bold sm:font-semibold">{timeRemaining.seconds}</div>
                        <div className=" text-sm sm:text-xl font-semibold">Seconds</div>
                    </AnimatedBorder>
                </div>
            </motion.div>
        </div>
    );
};

function getTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const time = targetDate - now;

    if (time <= 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function App() {
    return (<>
        <div className='w-full mt-8 mb-0 h-[220px] sm:h-[300px] flex justify-end sm:justify-between items-center bg-cover bg-no-repeat px-3'
            style={
                { backgroundImage: "url('https://t3.ftcdn.net/jpg/04/88/88/66/360_F_488886674_k46JuAeeKzGIEK3nwhaCMvnsEDE59NB6.jpg')"
            }}>
            <div></div>
            <Countdown />
        </div>
        </>
    );
}

export default App;