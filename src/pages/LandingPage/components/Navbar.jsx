import { Menu, ShoppingBag, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

const Navbar = ({ data }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center justify-evenly w-full mx-auto h-20 bg-gray-200 sticky top-0 z-10'>
      <div className='flex items-center justify-between lg:justify-evenly w-full max-w-7xl'>

        {/*  burger icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-8 h-8 text-gray-800" />
          ) : (
            <Menu className="w-8 h-8 text-gray-800" />
          )}
        </button>


        {/* Logo */}
        <div className='text-2xl font-bold text-gray-80'>
          <Link to={'/'}>OutFit-Trend</Link>
        </div>

        {/*menu items */}
        <div className='hidden lg:flex'>
          <ul className='flex items-center gap-15 '>
            {
              navItem.map((item, index) => (
                <div key={index}>
                  <Link to={item.link}><li className='text-lg font-semibold text-gray-700 hover:text-gray-500 hover:underline '>{item.listItem}</li></Link>
                </div>
              ))
            }
          </ul>
        </div>

        {/* sign in + cart buttons  + hamburger for responsive screen*/}
        <div className='flex items-center justify-center gap-2'>

          {/* sigin btn  */}
          <Link
            to={'/sign-in'}
            className='text-lg bg-gray-400 hover:bg-gray-500 hover:text-gray-300 font-semibold  px-5 py-2 rounded-xl'
          >
            Sign in
          </Link>

          {/* cart button , icon */}
          <Link to={'/cart'} className=' relative text-lg bg-gray-300 hover:bg-gray-400 hover:text-gray-800 font-semibold px-4 py-2 rounded-xl'>
            <ShoppingBag className='size-8 ' />
            {data.length > 0 && (
              <span className="absolute -top-3 right-1 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                {data.length}
              </span>
            )}
          </Link>



        </div>
      </div>


      {/*  for mobile screen */}

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-300/90 shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItem.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:underline"
                  onClick={() => setIsOpen(false)} // close on click
                >
                  {item.listItem}
                </Link>
              </li>
            ))}

            <Link
              to="/sign-in"
              className="text-lg bg-gray-400 hover:bg-gray-500 hover:text-gray-300 font-semibold px-5 py-2 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
