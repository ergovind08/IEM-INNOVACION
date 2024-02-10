import React from "react";
import "./Media.css"; // Assuming this is the correct path for the styles
import logo from "./ImageFolder/about.png";

const images = [
  {
    url: "https://iem-innovacion.com/Home%20Page/assets/media/supporters/4.png",
  },
  {
    url: "https://iem-innovacion.com/Home%20Page/assets/media/supporters/7.png",
  },
  {
    url: "https://iem-innovacion.com/Home%20Page/assets/media/supporters/8.png",
  },
  {
    url: logo,
  },
  {
    url: "https://iem-innovacion.com/Home%20Page/assets/media/supporters/9.png",
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
              className="object-contain p-2 mx-4 w-[160px] sm:w-[200px] ml-6 h-[7rem] sm:h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
