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

export function Cards({ content }) {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "montserrat" }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          className="flex mb-10 justify-center w-[300px] h-full sm:w-96 border-1 bg-transparent p-3 "
          style={{ borderColor: "gray", backgroundColor: "transparent" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardHeader color="blue-gray" className="relative sm:m-3  sm:h-56">
              <img
                src={
                  content.url
                    ? content.url
                    : "https://source.unsplash.com/random/800x600"
                }
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
              className="text-center text-2xl text-white my-3"
              style={{ fontFamily: "montserrat" }}
            >
              {content.texthead}
            </Typography>
            {!showContent && (
              <CardBody>
                <Typography className="text-lime-300 pb-3  text-[16px] font-bold">
                  {content.textContent}
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
                className="w-[100px] bg-slate-800 rounded-xl h-[40px] align-top"
                whileHover={{ scale: 1.004 }}
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
                className="bg-slate-800 rounded-2xl ml-4 w-[100px] h-[40px] align-top"
                whileHover={{ scaleX: 0.99 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: "white" }}
              >
                Register
              </motion.Button>
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
