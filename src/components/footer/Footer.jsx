// Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterBtn from './FooterBtn';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-6 text-white bg-[#010525] h-[300px] w-full flex justify-evenly "
        >

            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl font-bold text-gray-100'>INNOVACION</span>

                </div>
                <span className="text-sm">
                    &copy; {new Date().getFullYear()} Innovacion. All rights reserved.
                </span>
            </div>
            <div className='flex flex-col gap-3 text-left'>
                <h3 className='text-2xl font-bold '>Quick links</h3>
                <div className='flex flex-col gap-3'>
                    <FooterBtn item='Register Now' />
                    <FooterBtn item='Location' />
                </div>
            </div>
            <div className='flex flex-col gap-3 text-left'>
                <h3 className='text-2xl font-bold'>Contact us</h3>
                <div className='flex flex-col gap-2'>
                    <span>Management House, D-1, Sector-V, Saltlake Electronics Complex</span>
                    <span>Kolkata – 700 091, West Bengal, India.</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-semibold'>Email: </span>
                        <span> iemxinnovacion@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>

                            <FaFacebook className='text-[14px] cursor-pointer text-gray-300 hover:text-gray-100' />
                        </motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                            <FaInstagram className='text-[14px] cursor-pointer text-gray-300 hover:text-gray-100' />
                        </motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                            <FaYoutube className='text-[14px] cursor-pointer text-gray-300 hover:text-gray-100' />
                        </motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                            <BiLogoGmail className='text-[14px] cursor-pointer text-gray-300 hover:text-gray-100' />
                        </motion.span>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
