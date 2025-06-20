import React from 'react';
import india from '../assets/india.webp';

const stats = [
  { value: '21+', label: 'Indian Cities' },
  { value: '7.5 Lakh+', label: 'Driver Partners' },
  { value: '1.5+ Crore', label: 'Customers' },
];

const cities = [
  'Delhi NCR', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Pune', 'Kolkata', 'Surat', 'Chennai',
  'Coimbatore', 'Indore', 'Nagpur', 'Chandigarh', 'Lucknow', 'Vadodara', 'Ludhiana', 'Kochi', 'Nashik', 'Kanpur',
  'Trivandrum', 'Vizag'
];

const CitiesSection = () => (
  <section className="py-16 bg-black">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
        And thanks to you, we are growing each & every day!
      </h1>
      {/* Announcement Bar */}
      <div className="flex justify-center mb-8">
        <div className="bg-yellow-400/90 text-black px-6 py-2 rounded border border-yellow-300 font-medium flex items-center gap-2 text-base shadow">
          <span role="img" aria-label="party">🎉</span>
          Marhaba Dubai! We're now live & ready to take care of all your logistical needs.
        </div>
      </div>
      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
            <span className="text-gray-300 text-lg md:text-xl font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Map */}
      <div className="flex justify-center mb-8">
        <img
          src={india}
          alt="India Map with Cities"
          className="mx-auto rounded-lg shadow-lg w-full max-w-2xl"
        />
      </div>
      {/* City List */}
      <p className="max-w-4xl mx-auto text-sm text-gray-400">
        We are serving in {cities.join(', ')}.
      </p>
    </div>
  </section>
);

export default CitiesSection;