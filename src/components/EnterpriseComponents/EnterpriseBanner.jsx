import React from 'react';

const EnterpriseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#000033] to-[#000066] text-white py-16">
      <div className="container mx-auto flex justify-around items-center">
        <div className="max-w-xl">
          <p className="bg-white/10 text-yellow-400 py-2 px-4 rounded-full inline-block mb-4 font-bold">PORTER FOR DRIVER PARTNERS</p>
          <h1 className="text-4xl font-bold mb-4">Drive with Porter and Earn More</h1>
          <p className="text-yellow-400 text-lg">
            Flexible Timings <span className="mx-2">|</span> Regular Trips <span className="mx-2">|</span> Better Earnings
          </p>
        </div>
        <div className="bg-white text-gray-800 p-8 rounded-2xl w-96">
          <h3 className="text-2xl font-bold text-center mb-6">Fill Out For More Details</h3>
          <form>
            <div className="mb-5 relative">
              <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input type="text" placeholder="Enter your Name*" required className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-5 relative">
              <i className="fas fa-phone-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input type="text" placeholder="Enter your Phone Number*" required className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-5 relative">
              <i className="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input type="text" placeholder="Enter your City*" required className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors">Get in Touch</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseBanner; 