import React from "react";
import { Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "./ImageFolder/1.jpeg";
import image2 from "./ImageFolder/2.jpeg";
import image3 from "./ImageFolder/3.jpeg";
import image4 from "./ImageFolder/4.jpeg";
import image5 from "./ImageFolder/5.jpeg";
import image6 from "./ImageFolder/6.jpeg";
import image7 from "./ImageFolder/7.jpeg";
import image8 from "./ImageFolder/8.jpeg";
import image9 from "./ImageFolder/9.jpeg";
import image10 from "./ImageFolder/10.jpeg";
import image11 from "./ImageFolder/11.jpeg";
import image12 from "./ImageFolder/12.jpeg";

function Gallery() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <>
      <div className=" container bg-transparent mt-[0px] mb-[50px] opacity-50">
        <div className="w-80 h-1 mt-7 mx-auto mb-4 z-[200] text-gray-100 bg-cyan-100 rounded"></div>

        <h1 className="container text-bold text-6xl z-5000 text-white justify-center flex">
          {" "}
          Media Coverage
        </h1>
        <div className="w-80 h-1 mt-7 mx-auto mb-4 z-[200] text-gray-100 bg-cyan-100 rounded"></div>
      </div>
      <Grid
        container
        className="justify-between"
        spacing={3}
        justifyContent="center"
        marginBottom={20}
        background="transparent"
      >
        {images.map((image, index) => (
          <Grid item key={index}>
            <motion.div
              whileHover={{ scale: 1.4, rotate: 5 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Paper
                component="img"
                src={image}
                alt={`Gallery Sample ${index + 1}`}
                sx={{
                  width: 200,
                  height: 200,
                  transition: "transform 0.2s ease-in-out",
                  borderRadius: 10,
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <motion.div
                className="absolute border-2 border-cyan-100 "
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Gallery;
