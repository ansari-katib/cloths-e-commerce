import React from 'react'
import { Link } from 'react-router'

const navItem = [
  {
    listItem : "Home",
    link : "/"
  },
    {
    listItem : "About us",
    link : "/"
  },
    {
    listItem : "trending",
    link : "/"
  },
    {
    listItem : "privacy policy",
    link : "/"
  },

]

const Navbar = ({ data }) => {

  return (
    <div className='flex items-center justify-evenly w-full mx-auto h-20 bg-gray-200 sticky top-0 z-10'>
      <div className='text-3xl font-bold text-gray-80'>
        <Link to={'/'}>OutFit-Trend</Link>
      </div>
      <div className=''>
        <ul className='flex items-center gap-15 '>
          {
            navItem.map((item , index) => (
              <div key={index}>
                  <Link to={item.link}><li className='text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline '>{item.listItem}</li></Link>
              </div>
            ))
          }
        </ul>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Link to={'#'} className='text-lg bg-gray-400 hover:bg-gray-500 hover:text-gray-300 font-semibold  px-5 py-2 rounded-full'>Sign in</Link>
        <Link to={'/cart'} className='text-lg bg-gray-400 hover:bg-gray-500 hover:text-gray-300 font-semibold  px-5 py-2 rounded-full'>
          Cart
          {data.length > 0 && (
            <span className="absolute top-4 right-42 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {data.length}
            </span>
          )}        
          </Link>
      </div>
    </div>
  )
}

export default Navbar
