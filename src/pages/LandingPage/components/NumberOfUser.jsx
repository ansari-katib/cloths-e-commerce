import React from 'react'

import { UsersImage } from "../data/testimonial"

const NumberOfUser = () => {
    return (
        <div className='w-full mt-5'>
            <div className='max-w-7xl flex items-center mx-auto'>
                <div className='flex items-center justify-between gap-10 bg-gray-300 p-2 rounded-full'>
                    <div className='flex '>
                        {
                            UsersImage.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={image}
                                    className='h-8 w-8 md:h-10 md:w-10 rounded-full'
                                />
                            ))
                        }
                    </div>
                    <span className='p-2 font-semibold text-gray-600 italic'>100k + Users</span>
                </div>
            </div>
        </div>
    )
}

export default NumberOfUser
