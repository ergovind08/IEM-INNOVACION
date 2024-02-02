import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import innovacionImage from "./innovacion.png";
import "./Innovacion.css";

const Innovacion = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Use the controls.start function directly in the setTimeout callback
    setTimeout(() => {
      controls.start({
        x: [null, 200, 0],
        opacity: 0.1,
      });
    }, 200);
  }, [controls]);

  return (
    <div className="container opacity-0.3 justify-center">
      {/* Use motion.div for the parent container */}
      <motion.div animate={controls}>
        <motion.img
          className="img"
          src={innovacionImage}
          alt="Description of the image"
        />
        {/* Commenting out the motion.circle, as it might throw an error without proper context */}
        {/* <motion.circle cx={500} r={20} animate={{ cx: [null, 100] }} /> */}
      </motion.div>
      {/* Add some content inside the motion.button or remove it if not needed */}
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 2.8,
          transition: { duration: 2 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      ></motion.button>
    </div>
  );
};

export default Innovacion;
