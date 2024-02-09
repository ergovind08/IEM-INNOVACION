import React from "react";
import "./Media.css"; // Assuming this is the correct path for the styles

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
    <div className="w-full" style={{ fontFamily: "montserrat" }}>
      <h2 className="w-full my-7 text-5xl italic font-bold text-center">
        Collaborators
      </h2>
      <div className="w-40 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded"></div>
      <div className="flex overflow-hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-cyan-300/10 shadow-cyan-300*10 shadow-xl"
            style={{ width: "30vw" }}
          >
            <img
              src={image.url}
              alt=""
              className="object-contain p-2 mx-2 w-[250px] l h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
