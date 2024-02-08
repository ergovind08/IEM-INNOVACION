import React from "react";
import { ArrowUpRight } from "lucide-react";
import TypewriterAnimation from "./TextLoadingAnimation";
import { motion } from "framer-motion";



<div>
        <div className="container bg-slate-900/20 border-fuchsia-500/30 p-3 w-1/2 border-y-4 rounded">
          <p className="brightness-100 font-extrabold mx-auto ">
            Institute of Engineering & Management, Kolkata in association with
            University of Engineering & Management is organising its Annual
            Techno-Management Fest-Innovación <span>2024</span> from 8th - 10th
            March, <span className="text-cyan-200">2024</span>
          </p>
        </div>
      </div>


const Card = () => {
  return (
    
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-5xl h-[600px] flex-col-reverse items-center justify-center rounded-md md:flex-row shadow-lg transform ">
          <div className="h-full lg:w-[500px]  lg:h-[500px] w-full md:h-[200px] md:w-[300px] overflow-hidden rounded-b-md md:rounded-r-md md:rounded-b-none">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-full p-8">
            <div className="bg-gradient-to-r from-slate-700 to-slate-500 rounded-t-md md:rounded-l-md p-4">
              <h3 className="inline-flex font-Consolas items-center text-3xl font-semibold text-white">
                TRACKER(Line Tracing Robot) {/* Event <ArrowUpRight className="ml-2 h-8 w-8" /> */}
              </h3>
            </div>
            <div className="mt-4 text-lg font-Consolas text-gray-400 overflow-auto max-w-[700px]">
              <h4 className="font-Consolas text-rigth ">
               Enter the thrilling realm where robots equipped with remarkable line-following
              abilities converge to vie for the ultimate prize. In the high-stakes arena of the tracker,
              the discipline and precision of your automatons will undergo rigorous testing. Only
              the most adept and strategically programmed robots will navigate the twists and
              turns of the arena with unfaltering accuracy, aiming to emerge triumphant. Join us for
              an electrifying competition where innovation meets precision, and where the quest
              for victory pushes the boundaries of technological prowess.
              </h4>
              <br> </br>
            </div>
            <div className="mt-4">
              <button className="inline-block px-3 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                Vist Now <ArrowUpRight className="ml-2 h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-5xl h-[600px] flex-col-reverse items-center justify-center rounded-md md:flex-row shadow-lg transform ">
          <div className="flex flex-col justify-center w-full p-8">
            <div className="bg-gradient-to-r from-slate-700 to-slate-500 rounded-t-md md:rounded-l-md p-4">
              <h3 className="inline-flex font-Consolas items-center text-3xl font-semibold text-white">
              Hell in a cell{/* Event <ArrowUpRight className="ml-2 h-8 w-8" /> */}
              </h3>
            </div>
            <div className="mt-4 text-lg font-Consolas text-gray-400 overflow-auto max-w-[700px]">
              <h4 className="font-Consolas text-left ">
              Prepare to be immersed in a whirlwind of chaos and excitement as technologically
enhanced and weaponized robots engage in a relentless battle for supremacy within
the treacherous confines of the Hell in a Cell arena. With unyielding determination
and ruthless efficiency, these mechanized warriors unleash rampant destruction
upon their adversaries, leaving no stone unturned in their quest for victory. Only the
most formidable and strategically adept robots will emerge triumphant, as they
ruthlessly decimate their opponents and seize the coveted prize. Brace yourself for
an adrenaline-fueled spectacle where only the strongest survive and dominance
knows no bounds!
              </h4>
            </div>
            <div className="mt-4">
              <button className="inline-block px-3 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                Vist Now <ArrowUpRight className="ml-2 h-8 w-8" />
              </button>
            </div>
          </div>
          <div className="h-full lg:w-[500px]  lg:h-[500px] w-full md:h-[200px] md:w-[300px] overflow-hidden rounded-b-md md:rounded-r-md md:rounded-b-none">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="h-full w-full rounded-5xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
