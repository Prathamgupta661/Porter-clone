import React from "react";
import img from '../assets/Desktop_2.webp';
import bike from '../assets/bike.webp';
import truck from '../assets/truck.webp';
import packers from '../assets/sofa.webp';
import courier from '../assets/allindia.webp';

const HeroSection = () => {
  return (
    <section 
      className="text-white pt-20 pb-16 relative min-h-[60vh] mt-16"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-22 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Delivery hai?
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-yellow-400">
                #HoJayega!
              </h1>
            </div>
          </div>
          {/* Responsive white card */}
          <div className="flex absolute top-[12rem] left-1/2 -translate-x-1/2 w-full max-w-5xl h-fit z-20 px-2">
            <div className="bg-white rounded-sm shadow-2xl text-gray-800 w-full p-4 md:p-18 flex flex-col md:flex-row items-center justify-around  gap-6">
              {/* City Selector */}
              <div className="absolute top-0 left-1 flex items-center space-x-2 pr-0 md:p-7 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-5 w-full md:w-auto justify-center md:justify-around">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-base sm:text-lg">City:</span>
                <button className="font-bold flex items-center focus:outline-none text-base sm:text-lg">
                  Bangalore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {/* Service Icons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pl-0 md:pl-6 justify-between w-full md:w-auto">
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2">
                    <img src={bike} alt="Two Wheelers" className="w-24 h-24 object-contain" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1">Two Wheelers</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2">
                    <img src={truck} alt="Trucks" className="w-24 h-24 object-contain" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1">Trucks</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2">
                    <img src={packers} alt="Packers & Movers" className="w-24 h-24 object-contain" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1">Packers & Movers</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2">
                    <img src={courier} alt="Intercity Courier Service" className="w-24 h-24 object-contain" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1 text-center">Intercity Courier<br />Service</span>
                </div>
              </div>
              {/* Estimate Button */}
              <div className="flex flex-col items-center justify-center w-full md:w-auto">
                <button className="bg-[#0057ff] text-white rounded-xl px-6 py-6 sm:py-8 flex flex-col items-start shadow-lg hover:bg-blue-700 transition-all  w-full md:w-[120px] text-center">
                  <span className="font-bold text-base sm:text-lg">Get an estimate</span>
                  <span className="text-xs text-white/80 mt-1 mb-2">(takes ~2 mins)</span>
                  <span className="text-2xl ml-auto mt-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 