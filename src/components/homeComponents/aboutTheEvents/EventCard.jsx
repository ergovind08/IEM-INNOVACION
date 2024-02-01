import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ item, delay }) => {
  return (
    <motion.article
      initial={{ x: 8000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.98 }}
      className="text-gray-100 bg-[#111] w-[120px] sm:w-[150px] sm:h-[150px] card"
    >
      <motion.div className="flex flex-col w-full h-full place-content-center event-card">
        <span className="text-2xl font-bold text-center ">{item.title}</span>
        <span className="font-semibold text-sm text-center">{item.description}</span>
      </motion.div>
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </motion.article>
  );
};

export default EventCard;
