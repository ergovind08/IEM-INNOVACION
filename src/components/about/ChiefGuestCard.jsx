import React from 'react';
// import "./ChiefGuestCard.css";

const ChiefGuestCard = ({ item }) => {
    return (
        <div className="flex justify-center w-full my-5 text-center bg-[#000]">
            <div className='flex items-center text-gray-900 max-w-fit'>
                <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-blue-200 via-green-200 to-red-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                    <div className="z-10 mt-8 transition-all duration-500 bg-blue-700 border-4 rounded-full w-28 h-28 border-slate-50 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20"><img src={item.url} alt='img.png' className='rounded-full w-28 h-28' /></div>
                    <div className="z-10 transition-all duration-500 group-hover:-translate-y-10">
                        <span className="text-2xl font-semibold">{item.name}</span>
                        <p>{item.about}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChiefGuestCard
