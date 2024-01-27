import React from 'react'
import Footer from '../footer/Footer'
import Images from './Images'

const Gallery = () => {
    return (
        <div className='fixed top-0 w-screen h-screen mt-20 overflow-auto'>
            <Images />
            <Footer />
        </div>
    )
}

export default Gallery
