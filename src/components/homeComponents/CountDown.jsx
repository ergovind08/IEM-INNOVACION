import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./CountDown.css";

const AnimatedBorder = ({ children }) => {
  return (
    <div className="flex items-center justify-center text-center ">
      <motion.div
        className=" w-[120px] h-[120px] px-4 py-4 sm:py-7 bg-slate-950 border-2 rounded-full"
        initial={{ borderColor: "#000" }}
        animate={{
          borderColor: ["#f00", "#0f0", "#00f", "#f00", "#04f"],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Countdown = () => {
  const targetDate = new Date("2024-03-08T23:59:59").getTime();
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(targetDate)
  );

  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = getTimeRemaining(targetDate);
      setTimeRemaining(updatedTime);

      if (updatedTime.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    controls.start({ scale: 1.2, transition: { duration: 1 } });

    return () => {
      clearInterval(interval);
    };
  }, [targetDate, controls]);

  return (
    <div
      className="flex sm:flex-row flex-col relative "
      style={{
        fontFamily: "montserrat",
      }}
    >
      <motion.h1
        className="text-slate-600 text-bold sm:text-center text-bold decoration-sky-500/60 shadow-2xl font-mono hover:text-sky-700 text-5xl sm:text-7xl container sm:-ml-[90px] my-3 "
        style={{
          fontFamily: "montserrat",
        }}
      >
        Commences <span className="p-3"></span>
        <span style={{ opacity: 0.5 }}> in</span>
      </motion.h1>
      <iframe
        className="iframe-background "
        src="https://lottie.host/embed/2cd47093-3563-43f8-bee0-f846dbeaa7ee/50VNWGIBAl.json"
      ></iframe>

      <motion.div
        animate={controls}
        className="grid mb-10 sm:grid-cols-5 grid-cols-2 sm:grid-rows-1 gap-3"
      >
        <AnimatedBorder className="text-center">
          <div className=" text-3xl sm:text-5xl font-semibold">
            {timeRemaining.days}
          </div>
          <div className=" text-lg sm:text-xl">Days</div>
        </AnimatedBorder>
        <AnimatedBorder className="text-center">
          <div className=" text-3xl sm:text-5xl font-semibold">
            {timeRemaining.hours}
          </div>
          <div className=" text-lg sm:text-xl">Hours</div>
        </AnimatedBorder>
        <AnimatedBorder className="text-center">
          <div className=" text-3xl sm:text-5xl font-semibold">
            {timeRemaining.minutes}
          </div>
          <div className=" text-lg sm:text-xl">Minutes</div>
        </AnimatedBorder>
        <AnimatedBorder className="text-center">
          <div className=" text-3xl sm:text-5xl font-semibold">
            {timeRemaining.seconds}
          </div>
          <div className=" text-lg sm:text-xl">Seconds</div>
        </AnimatedBorder>
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
    <div className="w-full h-[300px] flex my-10 py-2 sm:ml-5 justify-center items-center bg-cover bg-no-repeat">
      <Countdown />
    </div>
  );
}

export default App;
