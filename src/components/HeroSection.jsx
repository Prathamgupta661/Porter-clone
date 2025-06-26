import React, { useState, useEffect } from "react";
import img from '../assets/Desktop_2.webp';
import bike from '../assets/bike.webp';
import truck from '../assets/truck.webp';
import packers from '../assets/sofa.webp';
import courier from '../assets/allindia.webp';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="text-white pt-20 pb-16 relative min-h-[90vh] overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/8 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center min-h-[70vh]">
          {/* Left Content - Takes up more space */}
          <div className={`lg:col-span-8 space-y-8 ${isVisible ? 'animate-slide-in-left' : ''}`}>
            <div className="ml-2 sm:ml-6 md:ml-10 mt-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-shadow mb-4">
                Delivery hai?
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-pulse-slow mb-6">
                #HoJayega!
              </h1>
              <p className="text-xl sm:text-2xl mt-8 text-blue-50 font-medium max-w-2xl leading-relaxed">
                India's largest marketplace for intracity logistics. Making delivery simple, reliable, and efficient.
              </p>
              
              {/* Service Icons - Horizontal Layout */}
              <div className="flex flex-wrap gap-6 mt-12">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <img src={bike} alt="Two Wheelers" className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-sm text-white">Two Wheelers</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <img src={truck} alt="Trucks" className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-sm text-white">Trucks</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <img src={packers} alt="Packers & Movers" className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-sm text-white">Packers & Movers</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <img src={courier} alt="Intercity Courier Service" className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-sm text-white">Intercity Courier</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - White Card */}
          <div className={`lg:col-span-4 ${isVisible ? 'animate-slide-in-up' : ''}`}>
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl text-gray-800 p-6 md:p-8 border border-white/20 relative">
              {/* City Selector */}
              <div className="flex items-center space-x-3 border-b border-gray-200 pb-4 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-base">City:</span>
                <button className="font-bold flex items-center focus:outline-none text-base hover:text-blue-600 transition-colors duration-200">
                  Bangalore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Enhanced Estimate Button */}
              <div className="space-y-4">
                <button className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl px-6 py-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all w-full hover:scale-105 button-glow overflow-hidden group">
                  <span className="font-bold text-lg relative z-10">Get an estimate</span>
                  <span className="text-sm text-white/80 mt-1 relative z-10">(takes ~2 mins)</span>
                  <span className="text-2xl mt-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">21+</div>
                    <div className="text-xs text-gray-600">Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">7.5L+</div>
                    <div className="text-xs text-gray-600">Drivers</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 