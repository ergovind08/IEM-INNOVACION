import React from "react";
import "./reg.css";
import Card from "./registerationComponents/Card";
import { reg_data } from "../../assets/registerationData";

const Registeration = () =>{
  return (
    <>
    <h2 className="w-full my-4 text-5xl font-bold text-center text-gray-100">
      Registration
    </h2>

    {/* for horizontal line */}
    <div className="w-32 h-1 mx-auto mt-3  text-gray-100 bg-gray-100 rounded"></div> 

    <div className=" sm:columns-3 w-full h-fit my-8 px-4 bg-transparent bg-gray-700 bg-opacity-80 ">
      <div className=" flex w-full flex-wrap text-center  md:grid-cols-3 min-h-fit">
        {reg_data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
        <Card />
      </div>
    </div>
    </>
  );
};
export default Registeration;
