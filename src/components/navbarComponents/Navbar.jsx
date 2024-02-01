import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbarActive } from '../../reducer/activenessSlice';
import { BiLogIn } from 'react-icons/bi';

const navbarItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Events',
        link: '/events'
    },
    {
        name: 'Schedule',
        link: '/schedule'
    },
    {
        name: 'Gallery',
        link: '/gallery'
    },
    {
        name: 'Partners',
        link: '/partners'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { navbarActive } = useSelector(state => state.activenessSlice);

    // console.log(navbarActive);
    const handleNavbarItemClick = (item) => {
        dispatch(setNavbarActive(item.name));
        navigate(item.link);
    }
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, duration: 1 }}
            className="fixed w-full bg-opacity-10 z-[1000] bg-blue-500 p-2 transition-transform duration-500 -translate-y-full">
            <div className="container flex items-center justify-between mx-auto">
                <div className="flex items-center justify-between">
                    <img onClick={() => navigate('/')} src="https://iem-innovacion.com/Home%20Page/assets/media/logo.png" alt="logo" className='h-10 ' />
                    { <button
                        onClick={() => setShowNavItems(!showNavItems)}
                        className="text-white focus:outline-none md:hidden"
                    >
                        ☰
                    </button> }
                </div>
                <motion.div
                    className={` transition-opacity flex items-center`}
                >
                    <ul className="flex justify-end space-x-4">
                        {navbarItems.map((item, index) => (
                            <li onClick={() => handleNavbarItemClick(item)} key={index} className={` cursor-pointer hover:text-gray-50 ${navbarActive === item.name ? 'text-gray-50' : 'text-gray-400'}`}>{item.name}</li>
                        ))}
                    </ul>
                    <motion.div className="flex items-center gap-2 p-1 mx-2 border border-blue-500 rounded-full"
                        // initial={{ scaleX: 0 }}
                        // animate={{ scaleX: 1 }}
                        // transition={{
                        //     duration: 2,
                        //     repeat: Infinity,
                        //     ease: 'linear',
                        // }}
                        whileTap={{ scale: 1.03 }}
                        whileHover={{ scale: 0.97 }}
                        title='SignIn/SignUp'
                        onClick={() => {
                            dispatch(setNavbarActive('Login'));
                            navigate('/login');
                        }}
                    >
                        < motion.span

                            className="text-2xl text-blue-500 cursor-pointer"
                            initial={{ x: 0 }}
                            animate={{ x: 10 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <BiLogIn className='text-2xl font-bold' />
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div >
        </motion.nav >
    );
};

export default Navbar;
