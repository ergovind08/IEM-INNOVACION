import React, { useState, useEffect } from "react";
import Card from "./Cardslide";
import "./Templates.css";
import image1 from "../ImageFolder/1.JPG";
import image2 from "../ImageFolder/2.JPG";
import image3 from "../ImageFolder/3.jpg";
import image4 from "../ImageFolder/4.JPG";
import image5 from "../ImageFolder/5.jpg";
import image6 from "../ImageFolder/6.JPG";
import image7 from "../ImageFolder/7.jpg";
import image8 from "../ImageFolder/8.jpg";
import image9 from "../ImageFolder/9.jpg";
import image10 from "../ImageFolder/10.jpg";
import image11 from "../ImageFolder/11.JPG";
// import image12 from "../ImageFolder/12.jpg";

const Slideimage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, dataImages.length]);

  const slideNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataImages.length);
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h1
        className="title text-white mt-20 text-6xl"
        style={{ fontFamily: "montserrat" }}
      >
        Memories
      </h1>
      <div className="w-40 h-1 mx-auto mt-3  text-gray-100 bg-gray-100 rounded"></div>
      <div
        className="container text-black flex-col"
        style={{ fontFamily: "montserrat" }}
      >
        <div id="app" className="container -mt-4">
          {dataImages
            .slice(currentIndex, currentIndex + 4)
            .map((image, index) => (
              <Card key={index} dataImage={image}>
                <h1 slot="header" className="text-slate-800"></h1>
                <p slot="content">{/* Content text */}</p>
              </Card>
            ))}
        </div>
        <div className="flex justify-center ">
          <button
            onClick={slidePrev}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-l"
          >
            Previous
          </button>
          <button
            onClick={slideNext}
            className="bg-blue-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Slideimage;
