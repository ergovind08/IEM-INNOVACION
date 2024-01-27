import React from 'react';
import Slider from "react-slick";
import { chiefGuests } from '../../assets/about';
import ChiefGuestCard from './ChiefGuestCard';

const ChiefGuest = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='my-4 min-h-32'>
            <h2 className='w-full my-4 text-3xl italic font-bold text-center'>Chief Guests</h2>
            <div className="w-20 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
            <div className='w-full mx-auto md:w-1/2'>
                <Slider {...settings} className='mx-4 '>
                    {
                        chiefGuests.map((item, index) => (
                            <ChiefGuestCard key={index} item={item} />
                        ))
                    }
                </Slider >
            </div>
        </div >
    )
}

export default ChiefGuest
