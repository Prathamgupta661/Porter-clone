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
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-22 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="ml-2 sm:ml-6 md:ml-10 mt-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                Delivery hai?
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                #HoJayega!
              </h1>
            </div>
          </div>
          {/* Responsive white card */}
          <div className="flex absolute top-[11rem] left-1/2 -translate-x-1/2 w-full max-w-[67rem] h-auto md:h-[19rem] z-20">
            <div className="bg-white rounded-sm shadow-2xl text-gray-800 w-full p-2 sm:p-4 md:p-10 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0">
              {/* City Selector */}
              <div className="absolute top-3 sm:top-5 left-2 sm:left-9 flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 w-full md:w-auto justify-center md:justify-around px-2 sm:px-0">
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
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-15 pl-0 md:pl-6 w-full md:w-auto mt-20 md:mt-0">
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2 hover:scale-105 transition-transform">
                    <img src={bike} alt="Two Wheelers" className="w-20 h-20 sm:h-24 object-cover" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1">Two Wheelers</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2 hover:scale-105 transition-transform">
                    <img src={truck} alt="Trucks" className="w-20 h-20 sm:h-24 object-cover" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1">Trucks</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2 hover:scale-105 transition-transform">
                    <img src={packers} alt="Packers & Movers" className="w-20 h-20 sm:h-24 object-cover" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1">Packers & Movers</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#f4f7fe] rounded-xl p-2 sm:p-4 flex items-center justify-center mb-2 hover:scale-105 transition-transform">
                    <img src={courier} alt="Intercity Courier Service" className="w-20 h-20 sm:h-22 object-cover" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm mt-1 text-center">Intercity Courier<br />Service</span>
                </div>
              </div>
              {/* Estimate Button */}
              <div className="flex flex-col items-center justify-center w-full md:w-auto mt-6 md:mt-0">
                <button className="bg-[#0057ff] text-white rounded-2xl px-4 py-4 sm:py-5 flex flex-col items-start shadow-lg hover:bg-blue-700 transition-all w-full md:w-[120px] text-left hover:scale-105 hover:shadow-2xl">
                  <span className="font-bold text-base sm:text-lg">Get an estimate</span>
                  <span className="text-xs text-white/80 mt-1 mb-2">(takes ~2 mins)</span>
                  <span className="text-2xl mt-2">→</span>
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