import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card2 = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[80vh] sm:h-screen">
        <div className="flex w-5xl h-[600px] flex-col-reverse items-center justify-center rounded-md md:flex-row shadow-lg transform ">
          <div className="lg:w-[500px] lg:h-[500px] h-[0] w-[0]] overflow-hidden rounded-b-md md:rounded-r-md md:rounded-b-none">
            <img
              src="src\components\about\ImageFolder\eventsimg.png"
              alt="Laptop"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-[90%] sm:w-full sm:p-8">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-md md:rounded-l-md p-3">
              <h3 className="inline-flex font-Consolas items-center text-3xl font-semibold text-lime-200		">
                Events Detail
              </h3>
            </div>
            <div className="mt-4 text-lg  text-gray-100 overflow-auto max-w-[900px]">
              <h4 className=" text-rigth ">
              Get ready for an unforgettable experience at Innovación 2024! From testing your knowledge in Quiz Crusade to showcasing your FIFA skills in FIFA Extravaganza, there's something for everyone. Dive into mind-bending puzzles in MATHEMAGIC, unleash your coding prowess in CodeBreak Odyssey, and join the ultimate tech battle in CYBERTHON: The CTF Warzone. <br/> Explore the power of AI in our hackathon, unleash your creativity in the Ad-Mad contest, and experience the thrill of the battleground in our Valorant Tournament. Join us and be a part of the innovation revolution at Innovación 2024!
              </h4>
            </div>
            <div className="mt-4 flex-row">
            <a href="https://iem.edu.in/" target="_blank" >
              <button className=" flex flex-row px-3 py-2 align-center text-sm font-semibold text-white bg-gradient-to-r from-blue-900 to-red-600 rounded-2xl hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                <p className="text-xl shadow-2xl">Vist Now</p>
                <ArrowUpRight className="ml-2 h-8 w-8" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
