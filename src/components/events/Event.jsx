import React from "react";
import Footer from "../footer/Footer";
// import EventsDetails from "./EventsDetails";
import { Cards } from "./Cards";

const Event = () => {
  const cardArray = Array.from({ length: 10 }, (_, index) => index); // Create an array of length 10

  return (
    <div className="mb-[200px] pt-9 ml-10 text-black mt-[200px] overflow-auto">
      <div className="flex flex-wrap justify-center">
        {cardArray.map((index) => (
          <div className="w-1/3 px-2 rounded-2xl" key={index}>
            <Cards />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Event;
