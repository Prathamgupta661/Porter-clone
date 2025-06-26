import React from 'react';

const testimonials = [
  {
    role: 'Logistics Manager',
    company: 'at a Leading FMCG MNC',
    quote: '"Porter has emerged as a highly reliable goods transporting agency, offering us an excellent option to scale with improved SLAs."',
  },
  {
    role: 'CEO',
    company: 'of an Ecommerce company',
    quote: '"They brought ground-level expertise in goods transportation services, and their reliable driver-partner allocation ensured a seamless transportation experience while helping us identify and address inefficiencies."',
  },
  {
    role: 'Logistics Head',
    company: 'at a Leading FMCG MNC',
    quote: '"Porter Enterprise sets the standard for reliable logistics services. Their city-wide reach and dedicated account managers ensure our goods are handled with care and efficiency."',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-20">SOME WORDS FROM OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="font-bold">{testimonial.role}</p>
              <p className="text-sm text-gray-400 mb-4">{testimonial.company}</p>
              <p className="text-lg italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 