import React, { useState } from 'react'

import carousal_1 from '../assets/carousal_1.webp'
import carousal_2 from '../assets/carousal_2.jpg'
import carousal_3 from '../assets/carousal_3.webp'
import carousal_4 from '../assets/carousal_4.jpg'
import carousal_5 from '../assets/carousal_5.jpg'
import carousal_6 from '../assets/carousal_6.webp'

const carousalData = [
  carousal_1,
  carousal_2,
  carousal_3,
  carousal_4,
  carousal_5,
  carousal_6
]

const Carousal = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carousalData.length - 1 : prev - 1));
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === carousalData.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className=' relative w-full h-[350px] max-w-7xl flex items-center justify-center mx-auto overflow-hidden my-10'>
      <div className='bg-gray-300 w-full h-92 rounded-3xl shadow-lg'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${current * 100}%` }}
        >
          {carousalData.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Slide ${item}`}
              className={`w-full flex-shrink-0 object-cover h-86 rounded-2xl`}
            />
          ))}
        </div>

        {/* Left button */}
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-4 -translate-y-1/2 bg-gray-600/50 text-white p-4 rounded-full hover:bg-gray-700'
        >
          &lt;
        </button>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className='absolute  top-1/2 right-4 -translate-y-1/2 bg-gray-600/50 text-white p-4 rounded-full hover:bg-gray-700'
        >
          &gt;
        </button>


        {/* position Dots */}

        <div className='absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2'>
          {carousalData.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Carousal
