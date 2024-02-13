import React, { useState } from "react";
import teamData from "../../assets/TeamData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./team.css"
import Footer from "../footer/Footer.jsx";
import MyCard from "./Card.jsx";
import { motion } from "framer-motion";

const Team = () => {

  const [member, setMember] = useState([]);
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 300,
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
    <div className='absolute top-0 w-screen h-screen mt-20 overflow-auto'>
    <div className='w-full h-[350px] p-1 bg-[#111111] bg-opacity-70 '>
    <h2 className='w-full my-8 text-3xl italic font-bold text-center'>TEAM</h2>
    <div className="w-20 h-1 mx-auto mb-[50px] -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
    <div className='w-3/4 m-auto h-[200px]'>
    <Slider {...settings}>
      {teamData.map((item, index) => (
         <div key={index}className="h-full cursor-pointer">
          <div
            className={`box transition-transform ${
                hoveredIndex === index ? "scale-120" : ""
              }`}
              onClick={() => handleTeamClick(item.members)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
          >{item.teamName}
          </div>
          </div>
      ))}
     </Slider>
    </div>
    </div>
    <div className="mb-[100px]  pt-9 ml-10 text-white mt-[100px] overflow-auto">
      <div className="flex flex-wrap justify-center">
        {member.map((item,index) => (
          <div className="w-1/3 px-8 rounded-2xl" key={index}>
            <MyCard content={item} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Team;
