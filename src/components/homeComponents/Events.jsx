import React from "react";
import { motion } from "framer-motion";

const eventsItem = [
    {
        name: 'Robotics',
        imgUrl: 'https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/robof.png',
        link: ''
    },
    {
        name: 'Exihibitions',
        imgUrl: 'https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/bulbb.png',
        link: ''
    }, {
        name: 'Gaming',
        imgUrl: 'https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/game.png',
        link: ''
    }, {
        name: 'Hackathons',
        imgUrl: 'https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/x%20race.png',
        link: ''
    }, {
        name: 'Management',
        imgUrl: 'https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/error404.png',
        link: ''
    }, {
        name: 'Others',
        imgUrl: 'https://iem-innovacion.com/Home%20Page/assets/media/Ourevents/quiz.png',
        link: ''
    },
]

function Events() {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const itemTransition = {
        delay: 0.3, // Adjust delay between each item animation
    };

    const animations = [
        {
            type: 'continuousAppearDisappear',
            variant: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { yoyo: Infinity, duration: 1 } }
            }
        },
        {
            type: 'rotate',
            variant: {
                hidden: { rotateY: 0 },
                visible: { rotateY: 360, transition: { loop: Infinity, duration: 2, ease: 'linear' } }
            }
        },
        {
            type: 'faded',
            variant: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1 } }
            }
        },
        {
            type: 'bounce',
            variant: {
                hidden: { scale: 0.5 },
                visible: { scale: 1, transition: { type: 'spring', stiffness: 200, damping: 10, loop: Infinity } }
            }
        },
        {
            type: 'slide',
            variant: {
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 1, loop: Infinity } }
            }
        },
        {
            type: 'wiggle',
            variant: {
                hidden: { scale: 0.8, rotate: 0 },
                visible: { scale: 1, transition: { yoyo: Infinity, duration: 0.5 } }
            }
        }
    ];
    return (
        <div className=" h-fit bg-opacity-10 z-[100] bg-blue-500 m-0">
            <h3 className="my-4 text-5xl italic font-bold text-center ">Events</h3>
            <div className="w-20 h-1 mx-auto text-gray-100 bg-gray-100 rounded" ></div>
            <motion.div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3"
            >
                {/* For each item */}
                {
                    eventsItem.map((item, index) =>
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={animations[index % animations.length].variant}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="flex flex-col w-full mx-auto cursor-pointer lg:w-1/3 md:w-1/2 sm:w-full">
                            <img src={item.imgUrl} alt='img.png' className="h-36 w-44" />
                            <h3 className="text-2xl font-bold text-center">{item.name}</h3>
                        </motion.div>
                    )
                }
            </motion.div>
        </div>
    );
}

export default Events;
