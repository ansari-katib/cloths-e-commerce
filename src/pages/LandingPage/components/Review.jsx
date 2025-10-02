// Review.jsx
import React from "react";
import { testimonialsData } from "../data/testimonial";

const Review = () => {
  return (
    <div className=" py-16 px-6 max-w-7xl flex items-center flex-col justify-center mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-1 border-gray-500"
            />
            <p className="text-gray-600 italic mb-4">"{item.quote}"</p>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
