import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import innovacionImage from "./innovacion.png";
// import "./Innovacion.css"; // Uncomment this line if you have a separate CSS file

const Innovacion = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: [null, 100, 0], opacity: 1 }); // Initial animation
  }, [controls]);

  return (
    <div className="container w-3/5 sm:w-[30%] p-0 justify-center">
      <motion.div animate={controls}>
        <motion.img
          className="img"
          src={innovacionImage}
          alt="Description of the image"
        />
        {/* Use an SVG circle element for animation */}
        <motion.circle cx={500} r={20} animate={{ cx: [null, 100] }} />
      </motion.div>
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.7,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      ></motion.button>
    </div>
  );
};

export default Innovacion;
