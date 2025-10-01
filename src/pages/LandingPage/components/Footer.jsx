import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='w-full h-42 bg-gray-300 '>
      <div className='max-w-7xl mx-auto flex items-center justify-evenly'>
        <div className='text-3xl font-bold text-gray-80 mt-10'>
          <Link to={'/'}>OutFit-Trend</Link>
        </div>
        <div className=''>
          <ul className='flex items-center gap-15 mt-10'>
            <Link to={'#'}><li className='text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline '>Home</li></Link>
            <Link to={'#'}><li className='text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline'>About us</li></Link>
            <Link to={'#'}><li className='text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline'>Trending product</li></Link>
            <Link to={'#'}><li className='text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline'>Privecy Policy</li></Link>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center mt-10'>
         &copy; <p className='text-sm text-gray-600'> All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
