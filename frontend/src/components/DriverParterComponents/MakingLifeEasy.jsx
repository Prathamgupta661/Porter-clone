import React from 'react';
import driver from "../../assets/driverpartner/driver_experience_partner.gif"

const MakingLifeEasy = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-20 leading-tight">MAKING YOUR LIFE EASY</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:gap-10">
          <div className="md:w-1/2">
            <img 
              src={driver} 
              alt="Making life easy" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="leading-relaxed">
              Provide your two wheeler or commercial vehicle on rent/hire along with the operator. If you got a 2 wheeler, or a tata ace commercial vehicle, you are good to go! With Porter, no more waiting on the stand - Offer your tata ace along with operator on rent/hire to Porter to have a steady stream of trips with an agreed fee on every order you undertake and added incentives based on your performance, so that there is no waiting and idle time at the stand! No more bargaining. Standard Rates - The rates and calculation methods are standardized and completely transparent. No more wasting time in fixing the rates for every trip. Hassle Free Navigation with our GPS-based navigation you can drive anywhere across your city without worrying about the directions. Get real-time navigation assistance on the go!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingLifeEasy; 