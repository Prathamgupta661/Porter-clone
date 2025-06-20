import React, { useState } from 'react';

const cities = [
  'Delhi NCR', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Pune', 'Kolkata', 'Surat', 'Chennai',
  'Coimbatore', 'Indore', 'Nagpur', 'Chandigarh', 'Lucknow', 'Vadodara', 'Ludhiana', 'Kochi', 'Nashik', 'Kanpur',
  'Trivandrum', 'Vizag'
];

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md border border-gray-200 min-w-[160px]"
        onClick={() => setOpen((o) => !o)}
      >
        <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/common/location/location-picker-v2.svg" alt="Location" className="h-5 w-5" />
        <span className="text-sm text-gray-700">City:</span>
        <span className="font-semibold text-gray-900">{selectedCity || 'Select'}</span>
        <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/common/arrows/drop-down-v2.svg" alt="Arrow" className="h-5 w-5 ml-2" />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-30 max-h-60 overflow-y-auto">
          {cities.map((city) => (
            <div
              key={city}
              className={`px-4 py-2 cursor-pointer hover:bg-[#f2f4f6] ${selectedCity === city ? 'bg-[#f2f4f6] font-bold' : ''}`}
              onClick={() => { setSelectedCity(city); setOpen(false); }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySelector; 