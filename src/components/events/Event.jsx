import React from 'react'
import Footer from '../footer/Footer'
import EventsDetails from './EventsDetails';

const Event = () => {
    return (
        <div className='fixed top-0 w-screen h-screen mt-20 overflow-auto'>

            <EventsDetails />
            <Footer />
        </div>
    )
}

export default Event
