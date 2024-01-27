

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";






const AnimatedBorder = ({ children }) => {
    return (
        <div className="flex items-center justify-center text-center ">
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
                }}
            >
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
        <div className="flex items-center">
            <motion.div animate={controls} className="">
                <div className="grid grid-cols-5 gap-3">
                    <AnimatedBorder className="text-center">
                        <div className="text-5xl font-semibold">{timeRemaining.days}</div>
                        <div className="text-xl">Days</div>
                    </AnimatedBorder>
                    <AnimatedBorder className="text-center">
                        <div className="text-5xl font-semibold">{timeRemaining.hours}</div>
                        <div className="text-xl">Hours</div>
                    </AnimatedBorder>
                    <AnimatedBorder className="text-center">
                        <div className="text-5xl font-semibold">{timeRemaining.minutes}</div>
                        <div className="text-xl">Minutes</div>
                    </AnimatedBorder>
                    <AnimatedBorder className="text-center">
                        <div className="text-5xl font-semibold">{timeRemaining.seconds}</div>
                        <div className="text-xl">Seconds</div>
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
    return (
        <div className='w-full my-8 h-[300px] flex justify-end items-center bg-cover bg-no-repeat'
            style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/04/88/88/66/360_F_488886674_k46JuAeeKzGIEK3nwhaCMvnsEDE59NB6.jpg')" }}

        >
            <Countdown />
        </div>
    );
}

export default App;

