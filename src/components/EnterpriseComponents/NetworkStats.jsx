import React from 'react';

const stats = [
  { value: '21+', label: 'CITIES' },
  { value: '7.5L+', label: 'DRIVER PARTNERS' },
  { value: '5000+', label: 'ENTERPRISE CLIENTS' },
];

const NetworkStats = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">OUR GROWING NETWORK</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-bold">{stat.value}</p>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkStats; 