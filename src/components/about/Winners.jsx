import React from 'react';
import Slider from "react-slick";
import { galleryImages } from "./../../assets/gallery.js";
import "./Winner.css";

const Winners = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0
                }
            }
        ]
    };
    return (
        <div className='px-4'>
            <h2 className='w-full px-4 my-4 text-3xl italic font-bold text-center'>Winners 2023</h2>
            <div className="w-20 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
            <Slider {...settings} className=''>
                {
                    galleryImages.map((imageURL, index) => (
                        <div key={index}>
                            <img src={imageURL} alt='img.png' className='rounded shadow-md w-72 h-72 shadow-gray-100' />
                        </div>
                    ))
                }


            </Slider>
        </div>
    )
}

export default Winners;
