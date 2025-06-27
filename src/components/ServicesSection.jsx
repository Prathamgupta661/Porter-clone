import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import business from '../assets/Enterprises/Business.png';
import api from '../assets/Enterprises/enterprise_query.svg';
import bike from '../assets/bike.webp';
import truck from '../assets/truck.webp';
import packers from '../assets/sofa.webp';
import courier from '../assets/allindia.webp';
import bulk from '../assets/Enterprises/Trip.png';
import express from '../assets/Enterprises/Payments.png';

const services = [
  {
    tag: 'Porter Enterprise',
    title: 'Streamlining operations to drive business growth',
    gradient: 'bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#21d4fd]',
    icon: business,
    description: 'Enterprise solutions for seamless logistics'
  },
  {
    tag: 'API Integration',
    title: 'Automate the transportation of your goods by integrating our APIs',
    gradient: 'bg-gradient-to-br from-[#11998e] via-[#38ef7d] to-[#43cea2]',
    icon: api,
    description: 'Seamless integration for your business'
  },
  {
    tag: 'Two Wheelers',
    title: 'Reliable goods transportation services for up to 20 kg',
    gradient: 'bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#21d4fd]',
    icon: bike,
    description: 'Quick and efficient delivery'
  },
  {
    tag: 'Trucks',
    title: 'Hassle-free goods transportation up to 2500 kg',
    gradient: 'bg-gradient-to-br from-[#2193b0] via-[#6dd5ed] to-[#b224ef]',
    icon: truck,
    description: 'Heavy load transportation'
  },
  {
    tag: 'Packers & Movers',
    title: 'House shifting hai? Ho Jayega!',
    gradient: 'bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#21d4fd]',
    icon: packers,
    description: 'Complete relocation services'
  },
  {
    tag: 'Intercity Courier',
    title: 'Send parcels across India to 19000+ pincodes',
    gradient: 'bg-gradient-to-br from-[#43cea2] via-[#185a9d] to-[#b224ef]',
    icon: courier,
    description: 'Nationwide delivery network'
  },
  {
    tag: 'Bulk Orders',
    title: 'Smart solutions for bulk transportation and distribution',
    gradient: 'bg-gradient-to-br from-[#ff512f] via-[#dd2476] to-[#b224ef]',
    icon: bulk,
    description: 'Large scale logistics'
  },
  {
    tag: 'Express Delivery',
    title: 'Fastest delivery for urgent consignments',
    gradient: 'bg-gradient-to-br from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb]',
    icon: express,
    description: 'Priority delivery service'
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="services-section w-full bg-gradient-to-br from-[#f8fafd] to-[#e8f4fd] py-16 border-b  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <SectionHeading className="text-3xl font-bold mb-4">OUR SERVICES</SectionHeading>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet all your transportation needs
          </p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`min-w-[360px] max-w-xs h-[340px] rounded-3xl p-8 flex flex-col justify-between shadow-xl text-white relative ${service.gradient} card-hover group ${
                isVisible ? 'animate-slide-in-up' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Floating icon */}
              <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <img src={service.icon} alt={service.tag} className="w-12 h-12 object-contain" />
              </div>

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-full backdrop-blur-md border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                {service.tag}
              </span>

              {/* Content */}
              <div className="mt-12 mb-8 flex-1">
                <h3 className="text-2xl font-bold leading-tight whitespace-pre-line mb-3 group-hover:scale-105 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Enhanced button */}
              <button className="mt-auto bg-white/20 text-white rounded-full px-6 py-3 flex items-center gap-3 font-semibold backdrop-blur-md w-fit group/btn border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <span>Learn More</span>
                <span className="text-xl transform transition-transform duration-300 group-hover/btn:translate-x-2 group-hover/btn:rotate-12">→</span>
              </button>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span>Scroll to explore more services</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;