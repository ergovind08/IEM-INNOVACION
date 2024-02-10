import React from "react";
import "./reg.css";
import Card from "./registerationComponents/Card";
import { reg_data } from "../../assets/registerationData";
// import "./Animatedcard.css";

const Registeration = () => {
  return (
    <>
      <h2 className="w-full my-4 text-5xl font-bold text-center text-gray-200">
        Registration
      </h2>

      <div className="w-32 h-1 mx-auto mt-3  text-gray-100 bg-gray-100 rounded"></div>

      <div className="w-fullflex items-center justify-center h-fit my-8 px-4 bg-transparent bg-gray-700 bg-opacity-80 ">
        <div className="flex flex-col flex-wrap items-center justify-center w-full gap-12">
          {reg_data.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Registeration;
