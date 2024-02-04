// import React from "react";
import { motion } from "framer-motion";
import EventCard from "./aboutTheEvents/EventCard";
import { EventsCardContent } from "../../assets/assestscript";
import TypewriterAnimation from "./TextLoadingAnimation";

const Animatedlogo = [
  {
    id: 1,
    logo: "https://lottie.host/embed/7ed392e2-c908-4bcd-bbc2-d3b85b0eadc1/aB0zavxvpi.json",
  },
  {
    id: 2,
    logo: "",
  },
];

const AboutTheEvent = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1.2 }}
      transition={{ duration: 0.8 }}
      className="p-5"
    >
      <TypewriterAnimation />
      <div>
        <div className="container bg-slate-900/20 border-fuchsia-500/30 p-3 sm:w-1/2 border-y-4 rounded">
          <p className="brightness-100 font-extrabold mx-auto ">
            Institute of Engineering & Management, Kolkata in association with
            University of Engineering & Management is organising its Annual
            Techno-Management Fest-Innovación <span>2024</span> from 10th - 12th
            March, <span className="text-cyan-200">2024</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full p-4">
        <h3 className="text-2xl font-bold text-center text-orange-200">
          APPLY HERE TO BE OUR CAMPUS AMBASSADOR
        </h3>

        <button className="inline-flex items-center px-4 py-2 mx-auto mt-4 font-mono text-xl font-semibold text-gray-100 transition duration-300 ease-in-out delay-150 border-2 border-gray-100 rounded-full cursor-pointer hover:text-gray-500 hover:bg-gray-100 hover:-translate-y-1 hover:scale-75 focus:bg-transparent max-w-fit">
          CLICK HERE!
        </button>
      </div>
      <div className="flex flex-wrap text-cyan-400  flex-row-reverse items-center justify-around sm:w-[80%] w-full gap-3 sm:px-8 py-4 mx-auto">
        {EventsCardContent.map((item, index) => {
          return (
            <EventCard
              className="text-cyan-200 rounded-xl"
              key={index}
              item={item}
              delay={index}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default AboutTheEvent;
