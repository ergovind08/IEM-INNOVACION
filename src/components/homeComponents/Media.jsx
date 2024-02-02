// import React from "react";
import "react-slideshow-image/dist/styles.css";
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
    <div className="w-full  ">
      <h2 className="w-full my-4 text-5xl italic font-bold text-center">
        MEDIA
      </h2>
      <div className="w-40 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded"></div>
      <div className="flex ">
        {images.map((image, index) => (
          <marquee
            className="w-full shadow-cyan-300/10 shadow-cyan-300*10  shadow-xl"
            direction="right"
            scrollamount="10"
          >
            <img
              key={index}
              src={image.url}
              alt=""
              className="object-contain shadow-2xl  p-2 mx-2 w-60 h-60"
            />
          </marquee>
        ))}
      </div>
    </div>
  );
};

export default Media;
