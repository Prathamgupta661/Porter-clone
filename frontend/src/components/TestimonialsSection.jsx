import React, { useState, useEffect } from 'react';
import vinay from '../assets/pr1.png';
import dinesh from '../assets/pr2.png';
import ashok from '../assets/pr3.png';

const testimonials = [
  {
    name: 'Vinay',
    avatar: vinay,
    service: 'Trucks',
    rating: 5.0,
    city: 'Nagpur',
    text: 'Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Dinesh',
    avatar: dinesh,
    service: 'Trucks',
    rating: 4.0,
    city: 'Mumbai',
    text: 'Excellent service by multiple drivers. I own a business and do multiple shiftings. Rather than ask local drivers and bargain every time, I use porter which fulfils all my need. Thanks a lot!',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Ashok',
    avatar: ashok,
    service: 'Trucks',
    rating: 5.0,
    city: 'Delhi NCR',
    text: 'Have had an amazing experience. Had three successful deliveries where it\'s a struggle to arrange a tempo service for your desired pickup and drop off. Must try this app!',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    name: 'Syamantak Mitra',
    avatar: '', // No avatar, will use initial
    service: 'Packers and Movers',
    rating: 5.0,
    city: 'Hyderabad',
    text: "Smooth experience with Porter's packers and movers! The team was fantastic, handling every detail. Highly recommend their services!",
    gradient: 'from-orange-500 to-red-500'
  }
];

const starIcon = (
  <svg className="h-4 w-4 text-yellow-400 inline-block mb-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
  </svg>
);

const TestimonialsSection = () => {
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

    const element = document.querySelector('.testimonials-section');
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
    <section className="testimonials-section bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="uppercase text-blue-400 tracking-widest text-sm font-semibold">
              Customer Testimonials
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real experiences from satisfied customers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className={`group relative ${isVisible ? 'animate-slide-in-up' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 card-hover">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-4xl text-blue-400/30 group-hover:text-blue-400/50 transition-colors duration-300">
                  "
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                      </svg>
                    ))}
                    <span className="text-yellow-400 font-semibold ml-2">{testimonial.rating.toFixed(1)}</span>
                  </div>

                  {/* Testimonial text */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* User info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/30 group-hover:ring-blue-500/50 transition-all duration-300" 
                        />
                      ) : (
                        <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-lg font-bold text-white ring-2 ring-blue-500/30 group-hover:ring-blue-500/50 transition-all duration-300`}>
                          {testimonial.name[0]}
                        </div>
                      )}
                      {/* Service badge */}
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {testimonial.service}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.city}</div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : ''}`}>
          <p className="text-gray-400 mb-6">
            Join thousands of satisfied customers across India
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 button-glow">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;