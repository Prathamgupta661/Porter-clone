import React, { useState, useEffect } from 'react';
import SectionHeading from '../SectionHeading';
import { Bike, Truck, Boxes, PackageSearch, Building2, Zap, Users, CreditCard } from 'lucide-react';

const services = [
  {
    tag: 'Porter Enterprise',
    title: 'Streamlining operations to drive business growth',
    gradient: 'bg-gradient-to-br from-[var(--primary-color)] via-[#7579ff] to-[#21d4fd]',
    icon: <Building2 className="w-12 h-12" />,
    description: 'Enterprise solutions for seamless logistics',
    features: ['API Integration', 'Real-time Tracking', 'Analytics Dashboard']
  },
  {
    tag: 'API Integration',
    title: 'Automate the transportation of your goods by integrating our APIs',
    gradient: 'bg-gradient-to-br from-[#11998e] via-[#38ef7d] to-[#43cea2]',
    icon: <Zap className="w-12 h-12" />,
    description: 'Seamless integration for your business',
    features: ['RESTful APIs', 'Webhooks', 'SDK Support']
  },
  {
    tag: 'Two Wheelers',
    title: 'Reliable goods transportation services for up to 20 kg',
    gradient: 'bg-gradient-to-br from-[var(--primary-color)] via-[#7579ff] to-[#21d4fd]',
    icon: <Bike className="w-12 h-12" />,
    description: 'Quick and efficient delivery',
    features: ['Same Day Delivery', 'Live Tracking', 'Instant Booking']
  },
  {
    tag: 'Trucks',
    title: 'Hassle-free goods transportation up to 2500 kg',
    gradient: 'bg-gradient-to-br from-[#2193b0] via-[#6dd5ed] to-[var(--primary-color)]',
    icon: <Truck className="w-12 h-12" />,
    description: 'Heavy load transportation',
    features: ['Heavy Loads', 'Multiple Stops', 'Professional Drivers']
  },
  {
    tag: 'Packers & Movers',
    title: 'House shifting hai? Ho Jayega!',
    gradient: 'bg-gradient-to-br from-[var(--primary-color)] via-[#7579ff] to-[#21d4fd]',
    icon: <Boxes className="w-12 h-12" />,
    description: 'Complete relocation services',
    features: ['Packing Service', 'Insurance', 'Storage Solutions']
  },
  {
    tag: 'Intercity Courier',
    title: 'Send parcels across India to 19000+ pincodes',
    gradient: 'bg-gradient-to-br from-[#43cea2] via-[#185a9d] to-[var(--primary-color)]',
    icon: <PackageSearch className="w-12 h-12" />,
    description: 'Nationwide delivery network',
    features: ['Pan India', 'COD Available', 'Express Delivery']
  },
  {
    tag: 'Bulk Orders',
    title: 'Smart solutions for bulk transportation and distribution',
    gradient: 'bg-gradient-to-br from-[#ff512f] via-[#dd2476] to-[var(--primary-color)]',
    icon: <Users className="w-12 h-12" />,
    description: 'Large scale logistics',
    features: ['Volume Discounts', 'Dedicated Fleet', 'Custom Solutions']
  },
  {
    tag: 'Express Delivery',
    title: 'Fastest delivery for urgent consignments',
    gradient: 'bg-gradient-to-br from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb]',
    icon: <CreditCard className="w-12 h-12" />,
    description: 'Priority delivery service',
    features: ['Same Day', 'Priority Handling', 'Guaranteed Delivery']
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

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
    <section className="services-section w-full bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] py-20 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[var(--primary-color)]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[var(--secondary-color)]/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <SectionHeading className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Services
          </SectionHeading>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions tailored to meet all your transportation needs. 
            From small packages to enterprise solutions, we've got you covered.
          </p>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-thin scrollbar-thumb-[var(--primary-color)] scrollbar-track-[var(--primary-bg)]">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`min-w-[400px] max-w-sm h-[420px] rounded-3xl p-8 flex flex-col justify-between shadow-2xl text-white relative ${service.gradient} card-hover group ${
                isVisible ? 'animate-slide-in-up' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Enhanced Floating icon with animation */}
              <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                {service.icon}
              </div>

              {/* Enhanced Tag */}
              <span className="absolute top-4 left-4 bg-white/25 text-white font-bold text-xs px-4 py-2 rounded-full backdrop-blur-md border border-white/40 group-hover:bg-white/35 transition-all duration-300 shadow-lg">
                {service.tag}
              </span>

              {/* Enhanced Content */}
              <div className="mt-16 mb-8 flex-1">
                <h3 className="text-2xl font-bold leading-tight whitespace-pre-line mb-4 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features list */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-white/80 text-xs">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced button with better styling */}
              <button className="mt-auto bg-white/25 text-white rounded-full px-8 py-4 flex items-center justify-between font-bold backdrop-blur-md w-full group/btn border border-white/40 hover:bg-white/35 transition-all duration-300 hover:scale-105 shadow-lg">
                <span>Explore Service</span>
                <span className="text-xl transform transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:rotate-12">→</span>
              </button>

              {/* Enhanced Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/20 to-transparent blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-[var(--text-secondary)] text-sm bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[var(--primary-color)]/20">
            <span className="font-medium">Scroll to explore more services</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-full inline-flex items-center gap-3 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Ready to get started?</span>
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;