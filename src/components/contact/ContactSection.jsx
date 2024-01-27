import React from 'react'
import ContactHeadCard from './ContactHeadCard'
import { contactContent } from '../../assets/contactHead'

const ContactSection = () => {
    return (
        <div className='w-full p-2 bg-[#111111] bg-opacity-70 '>
            <h2 className='w-full my-4 text-3xl italic font-bold text-center'>Student Head</h2>
            <div className="w-20 h-1 mx-auto mb-[50px] -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
            <div className='flex flex-wrap justify-center w-full gap-[80px] '>
                {
                    contactContent.map((content, index) => (
                        <ContactHeadCard key={index} content={content} />
                    ))
                }

                {
                    contactContent.map((content, index) => (
                        <ContactHeadCard key={index} content={content} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactSection
