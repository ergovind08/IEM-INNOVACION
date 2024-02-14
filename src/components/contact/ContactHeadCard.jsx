import React from 'react';
// import "./ContactCard.css"
import { MdOutlineEmail, MdCall } from "react-icons/md";

const ContactHeadCard = ({ content }) => {
    return (
        <div
            className="relative rounded-lg -skew-x-6 -translate-y-6 hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0 p-2 bg-neutral-50 card-compact hover:bg-base-200 transition-all duration-200 [box-shadow:12px_12px] hover:[box-shadow:4px_4px] border-2 border-gray-900 my-4"
        >
            <figure className="w-full h-full ">
                <div
                    className="min-h-fit border-2 border-red-500 rounded-lg bg-[#000] text-neutral-50 border-opacity-5 flex items-center gap-3 p-2 "
                >
                    <div className=''>
                        <img src={content.img} alt='img.png' className='rounded-full w-36 h-36' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-xl font-bold'>{content.name}</h2>
                        <p className='text-sm text-gray-300'>{content.about}</p>
                        <div className='flex items-center justify-end w-full gap-2 mt-2'>
                        <a href={`tel:+91${content.contact}`}>
                            <MdCall className='cursor-pointer' />
                        </a> 
                            <MdOutlineEmail className='cursor-pointer' />
                        </div>
                    </div>
                </div>

            </figure>


        </div>

    )
}

export default ContactHeadCard
