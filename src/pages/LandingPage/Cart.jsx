import React, { useEffect, useState } from 'react'
import CheckOut from './components/CheckOut';
import { Link } from 'react-router';

const Cart = () => {

  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("cartData");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(data));
  },[data]);

  // console.log(data);
  const removeItemFromCart = () => {
    setData([]);
    localStorage.removeItem('cartData');
    alert("your order place successfully");
  }

  return (
    <>
      <div className='grid grid-cols-2'>
        {data.length > 0
          ? (
            <>
              <div className=" min-h-screen p-10">
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {data.map((item, index) => (
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
                          Remove from Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*  checkout section */}
              <div className=''>
                <CheckOut data={data} removeItemFromCart={removeItemFromCart} />
              </div>
            </>
          ) : (
            <div className="text-center text-3xl col-span-2 text-gray-500 mt-20 flex flex-col gap-10">
              <h1>Your cart is empty.</h1>
              <Link className='text-blue-500 underline' to={'/'}>Move to home page</Link>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Cart
