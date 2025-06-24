import React from 'react';
import avatar1 from '../../assets/pr1.png';
import avatar2 from '../../assets/pr2.png';
import avatar3 from '../../assets/pr3.png';

const testimonials = [
  {
    avatar: avatar1,
    name: 'Krishna',
    city: 'Hyderabad',
    quote: `Getting business at vehicle stand has become very tough today due to intense competition. But with Porter's partner driver app, transparent fare structure and standard pricing, my life has become easier. Now I don't worry about finding customers and getting payments.`,
  },
  {
    avatar: avatar2,
    name: 'Umesh',
    city: 'Bangalore',
    quote: `Earlier there were many restrictions on earnings because I got limited trips in market which were only from my known customers and to nearby places. I gave my truck on rent with Porter there are no such restrictions, there are a lot of orders throughout city. I enjoy being a part of Porter family.`,
  },
  {
    avatar: avatar3,
    name: 'Birju',
    city: 'Chennai',
    quote: `I was new to Chennai and went ahead to attach my tata ace with Porter. Porter app's inbuilt map and navigational capability never made me feel new to city. Payment is done on time and their vendor helpdesk provides immediate solutions to all my issues.`,
  },
];

const ChangingLifeOfPeople = () => {
  return (
    <div className="bg-[#070c13] text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">CHANGING LIFE OF PEOPLE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-cyan-700 mr-4" />
                <div className="text-left">
                  <p className="font-bold text-lg leading-tight">{t.name}</p>
                  <p className="text-gray-300 text-sm">{t.city}</p>
                </div>
              </div>
              <p className="text-left text-lg leading-relaxed max-w-xs">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangingLifeOfPeople; 