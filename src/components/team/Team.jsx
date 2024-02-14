import React, { useState } from "react";
import {teamData} from "./teamData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./team.css"
import Footer from "../footer/Footer.jsx";
import { motion } from "framer-motion";
import Card from "./Card.jsx";

const Team = () => {

  const [member, setMember] = useState(teamData[0].members);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleTeamClick = (teamMembers) => {
    setMember(teamMembers);
    console.log(teamMembers);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
  };

  return (
    <div className='fixed top-0 w-screen h-screen mt-20 overflow-auto'>
    <div className='w-full h-[240px]  bg-[#111111] bg-opacity-70 py-2'>
    <h2 className='w-full my-6 text-3xl italic font-bold text-center'>TEAM</h2>
    <div className="w-20 h-1 mx-auto mb-[50px] -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
    <div className='w-2/4 m-auto'>
    <Slider {...settings}>
      {teamData.map((item, index) => (
          <div
          key={index}
          onClick={() => handleTeamClick(item.members)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="flex items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-4 "
        >
          <button className="w-full font-bold text-white text-xl sm:text-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg py-2 mb-2">
            {item?.teamName}
          </button>
        </div>
        
      ))} 
    </Slider>
    </div>
    </div>
    <div className="mb-[100px]  pt-5 py-4 ml-10 text-white mt-[100px] overflow-auto">
      <div className="flex flex-wrap justify-center">
        {member.map((item,index) => (
          <div className="w-1/3 px-8 rounded-2xl" key={index}>
            <Card content={item}/>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Team;
