import React from "react";

const Card = ({ item, index }) => {
  return (
    <div className="card m-auto mb-5 p-8 text-gray-300 w-96 hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative h-[520px] flex items-center">
      <div>
        <div className="text-2xl font-bold">{item?.heading}</div>

        {index === 0 && (
          <div className="flex flex-col w-full gap-2 my-2 ">
            <p>{item?.p1}</p>
            <p>{item?.p2}</p>
            <p>{item?.p3}</p>
          </div>
        )}
        {index === 1 && (
          <div className="flex flex-col w-full gap-2 my-2">
            <p>{item?.p1}</p>
            <p>{item?.p2}</p>
            <p>{item?.p3}</p>
            <p>{item?.p4}</p>
          </div>
        )}
        {(index === 2 || index === 3) && (
          <div className="flex flex-col w-full gap-2 my-2">
            <p>{item?.p1}</p>
          </div>
        )}
        {index === 4 && (
          <div className="flex flex-col w-full gap-2 my-2">
            <h4>{item?.heading1}</h4>
            <p>{item?.subheading1}</p>
            <button className="flex justify-center items-center gap-2 w-28 min-w-fit px-4 h-10 mx-auto cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mb-3">
              {item?.button1}
            </button>
            <h4>{item?.heading2}</h4>
            <p>{item?.subheading2}</p>
          </div>
        )}
        {/* </div> */}
        <button className="flex justify-center items-center gap-2 w-28 min-w-fit px-4 h-10 mx-auto cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mb-2">
          {item?.button}
        </button>
      </div>

      <div className="absolute bottom-0 w-full h-2 m-auto transition-all rounded bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl"></div>
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
    </div>
  );
};

export default Card;
