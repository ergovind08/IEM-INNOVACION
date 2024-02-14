import React from "react";
import "./Media.css"; // Assuming this is the correct path for the styles
import logo from "./ImageFolder/about.png";
import IIC from "./ImageForEvents/iic.png";
import Nascom from "./ImageForEvents/nasscom.png";
import Iemlab from "./ImageForEvents/iemlab.png";
import Rotary from "./ImageForEvents/rotary.png";

const images = [
  {
    url: IIC,
  },
  {
    url: Nascom,
  },
  {
    url: Iemlab,
  },
  {
    url: logo,
  },
  {
    url: Rotary,
  },
];

const Media = () => {
  return (
    <div className="w-ful " style={{ fontFamily: "montserrat" }}>
      <h2
        className="w-full my-7 text-5xl  font-bold text-center"
        style={{ fontFamily: "montserrat" }}
      >
        Collaborators
      </h2>
      <div className="w-40 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded"></div>

      <div className=" grid grid-cols-2 sm:flex overflow-auto sm:overflow-hidden w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-auto sm:overflow-x-hidden sm:w-[30vw] sm:shadow-cyan-600 sm:shadow-xl"
          >
            <img
              src={image.url}
              alt=""
              className="object-contain p- mx-4 w-[160px] sm:w-[200px] ml-6 h-[7rem] sm:h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
