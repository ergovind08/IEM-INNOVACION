import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex w-5xl h-[600px] flex-col-reverse items-center justify-center rounded-md md:flex-row shadow-lg transform ">
          <div className="h-full lg:w-[500px]  lg:h-[500px] w-full md:h-[200px] md:w-[300px] overflow-hidden rounded-b-md md:rounded-r-md md:rounded-b-none">
            <img
              src="src\components\about\ImageFolder\iem.jpg"
              alt="Laptop"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-full sm:p-8">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-md md:rounded-l-md p-3">
              <h3 className="inline-flex font-Consolas items-center text-3xl font-semibold text-cyan-400	">
                Innovación 2024
              </h3>
            </div>
            <div className="mt-4 text-lg  text-gray-100 overflow-auto max-w-[900px]">
              <h4 className=" text-rigt">
                Institute of Engineering and Management has always been a class
                apart in putting up some of the most amazing technical festivals
                in Kolkata region over the years in its current avatar as
                innovacion, having leveled up several notches, it has firmly
                established itself as one of the marquee tech fest in Eastern
                India over the last couple of years. <br/>Innvoción attracts a
                football over 10000 every year with a reach of over 500 colleges
                and schools across the country. The 2015 onwards editions also
                saw overseas participation from England, Brazil, France, Taiwan
                and China amongst other countries.<br/> Innovacion is an arena to
                exhibit creativity and latent talent of students in varied
                dimensions of technology and management. Innovación caters to a
                wide variety of disciplines ranging from Robotics, Electronics,
                Coding, and core fundamentals of Science and Mathematics. It is
                our endeavour to challenge participants to think ideate innovate
                and push themselves to go that extra mile
              </h4>
            </div>
            <div className="mt-4 flex-row">
              <a href="https://iem.edu.in/" target="_blank">
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

export default Card;
