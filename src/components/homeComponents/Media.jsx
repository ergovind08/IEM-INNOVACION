// import React from "react";
import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
    url: "https://iem-innovacion.com/Home%20Page/assets/media/supporters/icommunication.jpeg",
  },
  {
    url: "https://iem-innovacion.com/Home%20Page/assets/media/supporters/9.png",
  },
];
const Media = () => {
  return (
    <div className="w-full p-2 bg-[#111111] bg-opacity-70 ">
      <h2 className="w-full my-4 text-5xl italic font-bold text-center">
        MEDIA
      </h2>
      <div className="w-20 h-1 mx-auto ml-3 mt-4 text-gray-100 bg-gray-100 rounded"></div>


      <div className="grid mx-0 w-full p-5 grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-col-1">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image.url}
              alt=""
              className="object-contain sm:ml-9 w-[200px] h-[200px] sm:w-60 sm:h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
