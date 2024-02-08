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
        whileHover={{ scale: 1.05 }}
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
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
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
              UI/UX Review Check
            </Typography>
            {!showContent && (
              <CardBody>
                <Typography className="text-cyan-300 text-lg font-bold">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
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
                Register
              </motion.Button>
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
