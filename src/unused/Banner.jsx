import React from 'react';

const Banner = () => (
  <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <img
      src="https://dom-website-prod-cdn-cms.porter.in/Desktop_2_5fd0d00dd3.webp"
      alt="Home Banner Image"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
    <div className="relative z-20 flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">Delivery hai?</h1>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffe600] drop-shadow">#HoJayega!</h1>
    </div>
  </div>
);

export default Banner; 