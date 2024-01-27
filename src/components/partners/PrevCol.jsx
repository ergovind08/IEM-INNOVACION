import React from 'react'
import { prevYearPartnerImages } from '../../assets/partner'

const PrevCol = () => {
    return (
        <div>
            <h2 className='w-full my-4 text-3xl italic font-bold text-center'>Previous Year Collaborators / Mentoring Partners</h2>
            <div className="w-40 h-1 mx-auto mb-4 -mt-4 text-gray-100 bg-gray-100 rounded" ></div>
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    prevYearPartnerImages.map((item, index) => (
                        <div key={index} className='bg-[#000]'>
                            <img src={item.imageURL} alt="img.png" className='mx-auto my-4 rounded shadow-md w-60 h-60 shadow-gray-400 border-[1px] border-gray-100' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PrevCol
