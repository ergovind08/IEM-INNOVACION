import Slider from "react-slick";
import { sliderImages } from '../../assets/about';
import { motion } from 'framer-motion';

const AboutSlider = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='w-full '>
            <Slider {...settings} className='w-full text-center '>
                {
                    sliderImages.map((item, index) => (
                        <div key={index} className='relative w-full text-center'>
                            <img src={item.url} alt='img.png' className='w-full max-h-[70vh] mx-auto z-[5]' />
                            <div className='absolute top-0 z-[10] w-full h-full flex justify-center items-center '>
                                <motion.div className='flex flex-col w-3/4 gap-3 p-4 text-gray-100 bg-gray-900 rounded opacity-75 sm:w-1/2 md:1/3 lg:1/4'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <h3 className='text-2xl font-bold sm:text-3xl md:text-5xl'> INNOVACIÓN</h3>
                                    <p className='text-[12px] sm:text-xl md:text-2xl'>Empowered by Innovation
                                        Where tomorrow begins today</p>
                                </motion.div>
                            </div>
                        </div>
                    ))
                }


            </Slider>
        </div>
    )
}

export default AboutSlider
