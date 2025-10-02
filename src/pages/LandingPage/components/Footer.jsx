import React from 'react'
import { Link } from 'react-router'

const Footer = () => {

  const navItem = [
    {
      listItem: "Home",
      link: "/"
    },
    {
      listItem: "About us",
      link: "/"
    },
    {
      listItem: "trending product",
      link: "/"
    },
    {
      listItem: "privacy policy",
      link: "/"
    },
  ]

  return (
    <div className='w-full h-auto bg-gray-300 '>
      
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly'>
        
        <div className='text-3xl font-bold text-gray-80 mt-10'>
          <Link to={'/'}>OutFit-Trend</Link>
        </div>
        
        <div className="">
          <ul className="flex flex-col sm:flex-row sm:gap-6 gap-4 mt-4 sm:mt-0">
            {navItem.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline block px-2 py-1"
                >
                  {item.listItem}
                </Link>
              </li>
            ))}
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
