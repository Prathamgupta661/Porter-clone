import React from 'react';
import SectionHeading from './SectionHeading';

const services = [
  {
    tag: 'Porter Enterprise',
    title: 'Streamlining operations to drive business growth',
    gradient: 'bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#21d4fd]',
  },
  {
    tag: 'API Integration',
    title: 'Automate the transportation of your goods by integrating our APIs',
    gradient: 'bg-gradient-to-br from-[#11998e] via-[#38ef7d] to-[#43cea2]',
  },
  {
    tag: 'Two Wheelers',
    title: 'Reliable goods transportation services for up to 20 kg',
    gradient: 'bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#21d4fd]',
  },
  {
    tag: 'Trucks',
    title: 'Hassle-free goods transportation up to 2500 kg',
    gradient: 'bg-gradient-to-br from-[#2193b0] via-[#6dd5ed] to-[#b224ef]',
  },
  {
    tag: 'Packers & Movers',
    title: 'House shifting hai? Ho Jayega!',
    gradient: 'bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#21d4fd]',
  },
  {
    tag: 'Intercity Courier',
    title: 'Send parcels across India to 19000+ pincodes',
    gradient: 'bg-gradient-to-br from-[#43cea2] via-[#185a9d] to-[#b224ef]',
  },
  {
    tag: 'Bulk Orders',
    title: 'Smart solutions for bulk transportation and distribution',
    gradient: 'bg-gradient-to-br from-[#ff512f] via-[#dd2476] to-[#b224ef]',
  },
  {
    tag: 'Express Delivery',
    title: 'Fastest delivery for urgent consignments',
    gradient: 'bg-gradient-to-br from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb]',
  },
];

const ServicesSection = () => (
  <section className="w-full bg-[#f8fafd] py-12 border-b mt-[55rem] sm:mt-60">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading className="text-2xl font-bold mb-6">OUR SERVICES</SectionHeading>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`min-w-[340px] max-w-xs h-[270px] rounded-[2rem] p-6 flex flex-col justify-between shadow-lg text-white relative ${service.gradient}`}
          >
            <span className="absolute top-4 left-4 bg-white/30 text-white font-semibold text-xs px-4 py-1 rounded-full backdrop-blur-sm">
              {service.tag}
            </span>
            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-bold leading-tight whitespace-pre-line">{service.title}</h3>
            </div>
            <button className="mt-auto bg-white/30 text-white rounded-full px-6 py-2 flex items-center gap-2 font-semibold backdrop-blur-sm w-fit group">
              Learn More
              <span className="text-xl transform transition-transform duration-200 group-hover:translate-x-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;