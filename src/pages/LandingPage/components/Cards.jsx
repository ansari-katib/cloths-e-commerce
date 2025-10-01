import React, { useEffect, useState } from 'react'
import { cardData } from './cardData'


const Cards = ({ data , setData }) => {

  const handleAddToCart = (item) => {

    // console.log(item);

    const isAlreadyInCart = data.some(
      (cartItem) => cartItem.productName === item.productName
    );

    if (!isAlreadyInCart) {
      setData((prevData) => [...prevData, item]);
    } else {
      alert("This item is already in your cart");
    }
  }

  return (
    <section className='max-w-7xl mx-auto my-10 flex items-center justify-center flex-col'>
      {/* heading  */}
      <div className='flex flex-col items-center gap-1 justify-center'>
        <h1 className='text-3xl font-semibold text-gray-700 '>Our trending products</h1>
        <p className='text-lg text-gray-500 '>Step into the world of fashion meets comfort. Discover outfit that define your personality</p>
      </div>

      {/* card section */}
      <div className=" min-h-screen p-10">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="h-64 w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h1 className="text-lg font-bold text-gray-800 mb-2">
                  {item.productName}
                </h1>
                <p className="text-sm text-gray-600 mb-3">{item.productDes}</p>
                <p className="text-md font-semibold text-green-700">
                  {item.productPrice}
                </p>
                <p className="text-yellow-500 text-lg">⭐ {item.productRating}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between p-4 border-t border-gray-400">
                <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition">
                  Explore More
                </button>
                <button onClick={() => handleAddToCart(item)} className="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Cards
