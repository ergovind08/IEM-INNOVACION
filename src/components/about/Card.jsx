import React from "react";
import { ArrowUpRight } from "lucide-react";

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
                Event{/* Event <ArrowUpRight className="ml-2 h-8 w-8" /> */}
              </h3>
            </div>
            <div className="mt-4 text-lg font-Consolas text-gray-400 overflow-auto max-w-[700px]">
              <h4 className="font-Consolas text-rigth ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
              </h4>
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
                Event{/* Event <ArrowUpRight className="ml-2 h-8 w-8" /> */}
              </h3>
            </div>
            <div className="mt-4 text-lg font-Consolas text-gray-400 overflow-auto max-w-[700px]">
              <h4 className="font-Consolas text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
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
