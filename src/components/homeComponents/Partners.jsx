// import React from "react";
import { m_images, m_partner_img } from "../../assets/partner";
import "./Partner.css";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="w-full p-2 py-4 bg-[rgb(17,17,17)] bg-opacity-50">
      <h1 className="w-full my-4 text-5xl italic font-bold text-center">
        PARTNERS
      </h1>
      <div className="w-20 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded"></div>

      <div className="relative flex items-center justify-center w-[26em] h-[30em] sm:w-full sm:h-full ">
        <div className="relative p-20 border-2 border-none rounded-full profileCard_container border-spacing-4 bg-gray-900 border-gray-400/50 animated-border">
          <motion.div
            className="relative py-[75px] px-[75px] sm:py-40 sm:px-40 border-2 border-dashed bg-zinc-900 bg-opacity-100 shadoow-xl-white rounded-full profileCard_container border-spacing-8 border-cyan-300 animated-border"
            initial={{ rotate: 20 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <button className="profile_item left-[45px] -top-[6px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[5px] active:scale-95 hover:scale-95 transition-all duration-200">
              <img
                src={m_images[0].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] transition-all duration-500 rounded-full z-[2] bg-slate-800"
              />
            </button>

            {/* <button className="profile_item right-[43px]  bg-slate-900 -top-[6px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[5px] active:scale-95 hover:scale-95 transition-all duration-500">
              <img
                src={m_images[1].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] transition-all duration-500 rounded-full z-[2] bg-white"
              />
            </button> */}

            <button className="profile_item -left-6 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[5px] active:scale-95 hover:scale-95 transition-all duration-500">
              <img
                src={m_images[2].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] transition-all duration-500 rounded-full z-[2] bg-white"
              />
            </button>

            <button className="profile_item -right-6 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[5px] active:scale-5 hover:scale-95 transition-all duration-500">
              <img
                src={m_images[3].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] transition-all duration-500 rounded-full z-[2] bg-white"
              />
            </button>

            <button className="profile_item bottom-9 -left-0 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[5px] active:scale-95 hover:scale-95 transition-all duration-500">
              <img
                src={m_images[0].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] transition-all duration-500 rounded-full z-[2] bg-white"
              />
            </button>

            <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[5px] active:scale-95 hover:scale-95 transition-all duration-500">
              <img
                src={m_images[1].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] object-contain transition-all duration-500 rounded-full z-[2] bg-white"
              />
            </button>

            <button className="profile_item right-[40%] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[5px] active:scale-95 hover:scale-95 transition-all duration-500">
              <img
                src={m_images[2].url}
                alt="img.png"
                className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] transition-all duration-500 rounded-full z-[2] bg-white object-contain"
              />
            </button>

            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="flex items-center justify-center object-cover w-full h-full p-2 transition-all duration-500 bg-white rounded-full active:scale-95 hover:scale-95">
                <img
                  src={m_partner_img}
                  alt="img.png"
                  className="w-full h-full transition-all duration-500 rounded-full z-[2] bg-white"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
