import React from 'react'
import Footer from '../footer/Footer'
import ContactSection from './ContactSection'

const ContactUs = () => {
    return (
        <div className='fixed top-0 w-screen h-screen mt-20 overflow-auto'>
            <ContactSection />
            <Footer />
        </div>
    )
}

export default ContactUs
