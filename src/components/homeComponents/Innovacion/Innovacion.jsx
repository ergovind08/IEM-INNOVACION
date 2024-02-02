import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import innovacionImage from "./innovacion.png";
<<<<<<< HEAD
import "./Innovacion.css"; // Uncomment this line if you have a separate CSS file
=======
import "./Innovacion.css";
>>>>>>> origin/futureadda

const Innovacion = () => {
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start({
        x: [null, 200, 0],
        // y: [null, 20, 0],
        // z: [null, 20, 0],
        opacity: 0.1,
      });
    }, 200);
  }, [controls]);

  return (
    <div className="container opacity-0.3 justify-center">
      <motion.div animate={controls}>
        <motion.img
          className="img  "
          src={innovacionImage}
          alt="Description of the image"
        />
        {/* Use an SVG circle element for animation */}
        <motion.circle cx={500} r={20} animate={{ cx: [null, 100] }} />
      </motion.div>
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
