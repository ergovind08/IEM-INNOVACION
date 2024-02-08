import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Cards() {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          className="
          flex mb-[50px]
          justify-center
          mt-26
          w-96
          border-2
          bg-transparent
          "
          style={{ borderColor: "gray", backgroundColor: "transparent" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardHeader color="blue-gray" className="relative  m-3 h-56">
              <img
                src="https://hackster.imgix.net/uploads/attachments/1204532/line_follower_robot_using_arduino_uno_and_ir_sensor1_3r2sU2hay2.jpg"
                alt="card-image"
              />
            </CardHeader>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-center text-white mb-2"
            >
              Tracker
            </Typography>
            {!showContent && (
              <CardBody>
                <Typography className="text-cyan-300 text-lg font-bold">
                Enter the thrilling realm where robots equipped with remarkable line-following
                abilities converge to vie for the ultimate prize. Only
                the most adept and strategically programmed robots will navigate the twists and
                turns of the arena with unfaltering accuracy, aiming to emerge triumphant. Join us for
                an electrifying competition where innovation meets precision, and where the quest
                for victory pushes the boundaries of technological prowess.
                </Typography>
              </CardBody>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CardFooter className="">
              <motion.Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-[100px] bg-slate-800 rounded-xl h-[50px] align-top"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.35 }}
                onClick={toggleContent}
                style={{ backgroundColor: "", color: "white" }}
              >
                Read More
              </motion.Button>

              <motion.Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-lime-900 rounded-2xl ml-4 w-[100px] h-[50px] align-top"
                whileHover={{ scaleX: 0.99 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: "white" }}
              >
               <a href="https://forms.gle/GtswDucZwmD81DqcA">Register</a> 
              </motion.Button>
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
