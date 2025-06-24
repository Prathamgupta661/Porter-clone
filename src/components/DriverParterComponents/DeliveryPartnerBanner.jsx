import React from 'react';
import googlePlay from '../../assets/pr1.png';
import fleetImg from '../../assets/driverpartner/deliverypage.jpeg';



const DeliveryPartnerBanner = () => {
  return (
    <div 
      className="bg-cover  py-16 px-4 sm:px-8 lg:px-16 " 
      style={{ backgroundImage: `url(${fleetImg})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-4">Have a mini truck or bike?</h1>
          <p className="text-lg text-gray-700">Earn money by fulfilling transportation orders assigned by Porter</p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Attach Vehicle Now</h2>
            <form>
              <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded-lg" />
              <input type="text" placeholder="Mobile Number" className="w-full p-3 mb-4 border rounded-lg" />
              <div className="flex space-x-4 mb-4">
                <select className="w-1/2 p-3 border rounded-lg">
                  <option>BANGALORE</option>
                  {/* Add other cities here */}
                </select>
                <select className="w-1/2 p-3 border rounded-lg">
                  <option>Vehicle</option>
                  {/* Add vehicle types here */}
                </select>
              </div>
              <select className="w-full p-3 mb-4 border rounded-lg">
                <option>Source</option>
                {/* Add sources here */}
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">REGISTER</button>
            </form>
            <div className="mt-6 text-center">
                <p className="font-bold text-lg">Start Earning Immediately</p>
                <p className="text-sm text-gray-600 mb-2">Download the partner app and register</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartnerBanner; 