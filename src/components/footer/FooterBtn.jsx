import React from 'react';
import { motion } from 'framer-motion';
import './btnEffect.css';

const FooterBtn = ({ item }) => {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative flex items-center justify-center py-1 overflow-hidden font-medium duration-500 bg-gray-500 rounded-md cursor-pointer hover:border-gray-600 group text-sky-50">
            <div className="absolute z-10 w-48 h-48 transition-all duration-500 ease-in-out delay-150 btnB1 rounded-full group-hover:scale-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 transition-all duration-500 ease-in-out delay-150 btnB2 rounded-full group-hover:scale-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-32 h-32 transition-all duration-500 ease-in-out delay-150 btnB3 rounded-full group-hover:scale-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 transition-all duration-500 ease-in-out delay-150 btnB4 rounded-full group-hover:scale-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 transition-all duration-500 ease-in-out delay-150 btnB5 rounded-full group-hover:scale-150 group-hover:delay-300"></div>
            <span className="z-10">{item}</span>
        </motion.button>
    )
}

export default FooterBtn
