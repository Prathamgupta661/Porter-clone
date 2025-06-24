import React from 'react';
import fleetImg from '../../assets/driverpartner/owner_banner_partner.jpg';

const OwnMultipleVehicles = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-5">
        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img src={fleetImg} alt="Fleet owner" className="w-full h-full object-cover" />
        </div>
        {/* Text and Button */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <h2 className="text-3xl font-bold mb-6">OWN MULTIPLE VEHICLES?</h2>
          <p className="font-bold text-lg mb-2">If you are a fleet owner and own multiple vehicles.</p>
          <p className="text-gray-500 mb-8 max-w-xl">
            Keeping track of your vehicle fleet and optimising their efficiency can be a huge challenge. Partner with Porter to boost your earnings and manage your vehicles easily.
          </p>
          <button className="px-10 py-4 rounded-md text-white font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnMultipleVehicles; 