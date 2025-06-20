import React from 'react';
import CitySelector from './CitySelector';

const services = [
  {
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1a5e?auto=format&fit=crop&w=400&q=80',
    label: 'Two Wheelers',
  },
  {
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
    label: 'Trucks',
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    label: 'Packers & Movers',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    label: 'Intercity Courier',
  },
];

const ServicesCategory = () => (
  <div className="w-full bg-white py-8 border-b">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
      <CitySelector />
      <div className="flex-1 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 md:mt-0">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-2 min-h-[140px] hover:shadow-lg transition">
              <img src={service.img} alt={service.label} className="w-16 h-16 object-cover rounded mb-2" />
              <span className="font-semibold text-center text-sm md:text-base">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ServicesCategory; 