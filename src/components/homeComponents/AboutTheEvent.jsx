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
      className="p-5 my-12"
    >
      {/* <TypewriterAnimation /> */}
      <div style={{ fontFamily: "montserrat" }}>
        <div className="container bg-slate-900/20 border-fuchsia-500/20 p-3 sm:w-1/2 border-y-4 rounded">
          <p className="brightness-100 font-bold text-lg mx-auto ">
            <span className="text-red-500	">
              {" "}
              Institute of Engineering & Management
            </span>
            , Kolkata in association with{" "}
            <span className="text-yellow-300	">
              University of Engineering & Management
            </span>{" "}
            is organising its AnnualTechno-Management Fest-{" "}
            <span className="text-cyan-700">Innovación</span> <span>2024</span>{" "}
            from 8th - 10th March, <span className="text-cyan-200">2024</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap text-cyan-400  flex-row-reverse items-center justify-around sm:w-[80%] w-full gap-3 sm:px-8 py-4 mx-auto mt-5 ">
        {EventsCardContent.map((item, index) => {
          return (
            <EventCard
              className="text-cyan-800 rounded-xl"
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
