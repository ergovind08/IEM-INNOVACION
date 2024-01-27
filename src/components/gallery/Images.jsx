import React, { useState } from 'react'
import { galleryImages } from '../../assets/gallery'

const Images = () => {

    const [activeURL, setActiveURL] = useState('');
    const [activeModel, setActiveModel] = useState(false);
    const handleImageClick = (imgURL) => {
        // console.log(imgURL);
        setActiveModel(true);
        setActiveURL(imgURL);
    }

    const closeModel = () => {
        setActiveModel(false);
        setActiveURL('');
    }
    return (
        <div
            className="flex flex-wrap justify-center gap-5 p-2 rounded"
        >
            <div className={`z-[11000] bg-gray-800 w-screen h-screen  fixed top-0 right-0 bottom-0 left-0 ${activeModel ? 'flex' : 'hidden'}`}>
                <div className='w-screen h-screen bg-gray-100'>

                    <img onClick={closeModel} src={activeURL} alt='img.png' className='w-full h-full' />
                </div>
            </div>
            {
                galleryImages.map((image, index) => (
                    <div key={index} className='p-1 bg-gray-100 rounded shadow-md shadow-gray-100 hover:-translate-y-2 hover:duration-500'>
                        <img src={image} alt='img.png' className='w-64 h-64 rounded cursor-pointer' onClick={() => handleImageClick(image)} />
                    </div>
                ))
            }
            {/* <img src='https://i.ibb.co/M2vpX1c/IMG-1130.jpg' alt='img.png' className='w-64 h-64 rounded' /> */}
        </div>

    )
}

export default Images
