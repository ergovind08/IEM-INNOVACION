import React, { useState } from "react";
import { motion } from "framer-motion";

const Events = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const animations = [
    {
      type: "continuousAppearDisappear",
      variant: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { yoyo: Infinity, duration: 1 } },
      },
    },
    {
      type: "rotate",
      variant: {
        hidden: { rotateY: 0, loop: Infinity },
        visible: {
          rotateY: 360,
          transition: { loop: Infinity, duration: 2, ease: "linear" },
        },
      },
    },
    {
      type: "faded",
      variant: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      },
    },
    {
      type: "bounce",
      variant: {
        hidden: { scale: 0.5 },
        visible: {
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
            loop: Infinity,
          },
        },
      },
    },
    {
      type: "slide",
      variant: {
        hidden: { x: -50, opacity: 0 },
        visible: {
          x: 1,
          opacity: 1,
          transition: { duration: 3, loop: Infinity },
        },
      },
    },
    {
      type: "wiggle",
      variant: {
        hidden: { scale: 0.8, rotate: 0 },
        visible: { scale: 1, transition: { yoyo: Infinity, duration: 0.5 } },
      },
    },
  ];

  const eventsItem = [
    {
      name: "Robotics",
      imgUrl:
        "https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/robof.png",
      link: "",
    },
    {
      name: "Exhibitions",
      imgUrl:
        "https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/bulbb.png",
      link: "",
    },
    {
      name: "Gaming",
      imgUrl:
        "https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/game.png",
      link: "",
    },
    {
      name: "Hackathons",
      imgUrl:
        "https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/x%20race.png",
      link: "",
    },
    {
      name: "Management",
      imgUrl:
        "https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/error404.png",
      link: "",
    },
    {
      name: "Others",
      imgUrl:
        "https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/quiz.png",
      link: "",
    },
  ];

  return (
    <div
      className="bg-blue-500 bg-opacity-10 py-2 my-8 mt-[70px] "
      style={{ fontFamily: "montserrat" }}
    >
      <h3 className="my-3 mt-8 text-6xl  font-bold text-center">Events</h3>
      <div className="w-20 h-1 mx-auto text-gray-100 bg-gray-100 rounded"></div>
      <div className="h-fit bg-opacity-10 z-[100]">
        <motion.div className="grid w-full grid-cols-1 gap-4 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {eventsItem.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={animations[index % animations.length].variant}
              whileHover={{
                scale: hoveredIndex === index ? 1.2 : 0.5,
                zIndex: hoveredIndex === index ? 6 : 0,
              }}
              whileTap={{
                scale: hoveredIndex === index ? 0.8 : 1,
              }}
              className={`flex flex-row w-full justify-center sm:flex-row-reverse mx-auto cursor-pointer lg:w-1/3 md:w-1/2 sm:w-full ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "opacity-80"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.imgUrl}
                alt={item.name}
                className={`h-30 w-44 transition-transform ${
                  hoveredIndex === index ? "scale-125" : ""
                }`}
              />
              <h3 className="text-2xl font-bold text-fuchsia-300 text-center">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
