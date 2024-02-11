import React from "react";
import "./reg.css";
import Card from "./registerationComponents/Card";
import { reg_data } from "../../assets/registerationData";
// import "./Animatedcard.css";

const Registeration = () => {
  return (
    <>
      <h2 className="w-full mt-[100px] text-6xl font-bold text-center text-gray-200">
        Registration
      </h2>

      <div className="w-32 h-1 mx-auto mt-3  text-gray-100 bg-gray-100 rounded"></div>


      <div className="w-full h-fit my-4 px-4 bg-transparent bg-gray-700 bg-opacity-80 ">
        <div className="flex flex-wrap items-center w-full gap-2">
          {reg_data.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Registeration;
