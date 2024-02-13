import React, { useEffect, useState } from "react";
import robot from "../../../assets/robot.png";
import { motion } from "framer-motion";

const Card = ({ item, index }) => {
  const [imageleft, setImageleft] = useState(0);
  useEffect(() => {
    if (index === 1 || index === 3) {
      setImageleft(500);
    } else {
      setImageleft(-500);
    }
  }, [index]);

  const [textleft, setTextleft] = useState(0);
  useEffect(() => {
    if (index === 1 || index === 3) {
      setTextleft(500);
    } else {
      setTextleft(-500);
    }
  }, [index]);

  const imageAnimate = {
    offscreen: { x: -500, opacity: 0 },
    onscreen: {
      x: 0,
      rotate: 390,
      opacity: 1,
      transition: { type: "spring", bounce: 0.7, duration: 3 },
    },
  };
  const textAnimate = {
    offscreen: { x: -500, opacity: 0, scale: 0.8 },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 2 },
    },
  };

  return (
    <div className="container max-w-[1200px] -pb-5">
      {(index === 0 || index === 1 || index === 3 || index === 2) && (
        <motion.div
          className={`w-full flex overflow-hidden relative px-10 py-2 items-center justify-center ${
            index === 1 || index === 3 ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col flex-wrap md:gap-4  items-center`}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div
            className="flex flex-[0.75] md:flex-1 justify-center items-center border-white overflow-hidden h-[460px] md:w-auto"
            variants={imageAnimate}
          >
            <img
              src={robot}
              alt="Robot"
              className="w-full h-full object-contain md:w-auto md:h-auto max-w-[300px]"
            />
          </motion.div>
          <div className="container flex  items-center flex-col md:gap-4 w-full md:w-auto h-[460px]">
            <motion.h2
              className="mt-[2px] font-bold text-center md:text-[60px] text-[40px] text-white undefined"
              variants={textAnimate}
            >
              {item?.heading}
            </motion.h2>
            <motion.div
              className="container flex flex-col items-center gap-2 md:gap-2 my-2 font-normal text-[17px] text-yellow-200"
              variants={textAnimate}
            >
              <ul>
                <li>{item?.p1}</li>
                <li>{item?.p2}</li>
                <li>{item?.p3}</li>
                <li>
                  <a
                    href="https://forms.gle/GtswDucZwmD81DqcA"
                    className="text-center"
                  >
                    <button className="mt-[20px] inline-flex items-center font-extrabold text-white text-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2.5 mb-2">
                      {item?.button}
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      )}

      {index === 4 && (
        <motion.div
          className="container w-full flex overflow-hidden relative px-2 py-12 md:flex-row flex-col flex-wrap gap-3 md:gap-2 items-center"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div
            className="flex flex-[0.75] md:flex-1 justify-center items-center border-white overflow-hidden h-[460px] md:w-auto"
            variants={imageAnimate}
          >
            <img
              src={robot}
              alt="Robot"
              className="w-full h-full object-contain md:w-auto md:h-auto max-w-[300px]"
            />
          </motion.div>
          <div className="flex-2 flex justify-center md:items-center flex-col">
            <motion.h2
              className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white undefined"
              variants={textAnimate}
            >
              Gaming Registration
            </motion.h2>
            <div className="mt-[48px] flex flex-wrap justify-between gap-[5px]">
              <motion.div
                className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] md:items-center"
                variants={textAnimate}
              >
                <h1 className="mt-[26px] md:mt-[40px] font-bold text-[24px] md:text-[40px] leading-[30.24px] text-white">
                  Team
                </h1>
                <p className="flex-1 mt-[16px] font-normal text-[16px] text-yellow-200 leading-[27.4px]">
                  Battleground Championship-COD Mobile: Rs 400 per Team Valiants
                  Championship-VALORANT: Rs 800 per Team
                </p>
                <div>
                  <a href="https://forms.gle/yeMtEd8GKNyefYYh8">
                    <button className="mt-[11px] text-center inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      {item.button1}
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] md:items-center"
                variants={textAnimate}
              >
                <h1 className="mt-[26px] font-bold text-[24px] md:text-[40px] leading-[30.24px] text-white">
                  Individual
                </h1>
                <p className="flex-1 mt-[16px] font-normal text-[16px] text-yellow-200 leading-[27.4px]">
                  Battleground Championship-COD Mobile: Rs 100 per person
                  Valiants Championship-VALORANT: Rs 200 per person FIFA
                  Championship-FIFA: Rs 200 per person
                </p>
                <div>
                  <a href="https://forms.gle/yeMtEd8GKNyefYYh8">
                    <button className="mt-[31px] text-center inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      {item.button}
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
