// Star.js
import React from "react";
import { motion } from "framer-motion";

const Star = () => {
    const starVariants = {
        start: {
            y: -100,
            opacity: 0,
        },
        end: {
            y: "100vh",
            opacity: 1,
        },
    };

    return (
        <motion.div
            className="star"
            variants={starVariants}
            initial="start"
            animate="end"
            transition={{
                duration: Math.random() * 5 + 2,
                ease: "linear",
                repeat: Infinity,
            }}
        />
    );
};

export default Star;
