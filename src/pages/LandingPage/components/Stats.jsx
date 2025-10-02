import React from "react";
import { statsData } from "../data/testimonial";

const Stats = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-800">{item.value}</h2>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
