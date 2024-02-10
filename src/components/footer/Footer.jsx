// Footer.js
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterBtn from './FooterBtn';

const Footer = () => {
    return (
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-6 text-white bg-[#010525] h-[400px] sm:h-[300px] w-full flex sm:justify-evenly"
      >
      <div className="flex sm:flex-row flex-col sm:justify-around w-full justify-between px-4 sm:px-0 sm:gap-10 h-fit">
  
          <div className="flex gap-5 justify-evenly sm:w-[40%]">
            
            {/* Heading */}
            <div className="flex flex-col sm:gap-3">
              <div className="flex items-center gap-3">
                <span className=" text-[24px] sm:text-2xl font-bold text-gray-100">
                  INNOVACION
                </span>
              </div>
              <span className=" text-[16px] sm:text-sm">
                &copy; {new Date().getFullYear()} Innovacion. All rights reserved.
              </span>
            </div>
  
            {/* Links */}
            <div className="flex flex-col gap-3 text-left w-[60%] sm:w-auto ">
              <h3 className=" text-[18px] sm:text-2xl font-bold w-full ">Quick links</h3>
              <div className="flex flex-col gap-3">
                <FooterBtn item="Register Now" />
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative flex items-center justify-center py-1 overflow-hidden font-medium duration-500 bg-gray-500 rounded-md cursor-pointer hover:border-gray-600 group text-sky-50">
            <div className="absolute z-10 w-48 h-48 transition-all duration-500 ease-in-out delay-150 btnG1 rounded-full group-hover:scale-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 transition-all duration-500 ease-in-out delay-150 btnG2 rounded-full group-hover:scale-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-32 h-32 transition-all duration-500 ease-in-out delay-150 btnG3 rounded-full group-hover:scale-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 transition-all duration-500 ease-in-out delay-150 btnG4 rounded-full group-hover:scale-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 transition-all duration-500 ease-in-out delay-150 btnG5 rounded-full group-hover:scale-150 group-hover:delay-300"></div>
            <span className="z-10">Location</span>
        </motion.button>
              </div>
           </div>
  
          
          </div>
  
  
          {/* Contact */}
          <div className="flex flex-col gap-2 text-left text-sm sm:text-[16px] ">
            <h3 className=" text-xl sm:text-2xl font-bold">Contact us</h3>
            <div className="flex flex-col gap-2 ">
              <span>
                Management House, D-1, Sector-V, Saltlake Electronics Complex
              </span>
              <span>Kolkata – 700 091, West Bengal, India.</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email: </span>
                <span> iemxinnovacion@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <FaFacebook className="text-[28px] my-2 cursor-pointer text-gray-300 hover:text-gray-100" />
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <FaInstagram className="text-[28px] my-2 cursor-pointer text-gray-300 hover:text-gray-100" />
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <FaYoutube className="text-[28px] my-2 cursor-pointer text-gray-300 hover:text-gray-100" />
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <BiLogoGmail className="text-[28px] my-2 cursor-pointer text-gray-300 hover:text-gray-100" />
                </motion.span>
              </div>
            </div>
          </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
