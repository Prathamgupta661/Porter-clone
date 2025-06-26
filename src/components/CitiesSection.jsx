import React, { useState, useEffect } from 'react';
import india from '../assets/india.webp';

const stats = [
  { value: '21+', label: 'Indian Cities', icon: '🏙️' },
  { value: '7.5 Lakh+', label: 'Driver Partners', icon: '🚛' },
  { value: '1.5+ Crore', label: 'Customers', icon: '👥' },
];

const cities = [
  'Delhi NCR', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Pune', 'Kolkata', 'Surat', 'Chennai',
  'Coimbatore', 'Indore', 'Nagpur', 'Chandigarh', 'Lucknow', 'Vadodara', 'Ludhiana', 'Kochi', 'Nashik', 'Kanpur',
  'Trivandrum', 'Vizag'
];

const CitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          const timer = setTimeout(() => {
            setAnimatedStats([21, 7.5, 1.5]);
          }, 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.cities-section');
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
    <section className="cities-section py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            And thanks to you, we are{' '}
            <span className="gradient-text">growing each & every day!</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From bustling metros to emerging cities, we're connecting India through reliable logistics
          </p>
        </div>

        {/* Enhanced Announcement Bar */}
        <div className={`flex justify-center mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="relative bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-md text-yellow-300 px-8 py-6 rounded-2xl border border-yellow-400/30 font-medium flex items-center gap-4 text-lg shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-2xl animate-bounce-slow">🎉</div>
            <div>
              <div className="font-bold">Marhaba Dubai!</div>
              <div className="text-sm text-yellow-200">We're now live & ready to take care of all your logistical needs.</div>
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {animatedStats[i] > 0 ? `${animatedStats[i]}+` : '0+'}
                </div>
                <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Map Section */}
        <div className={`mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Network Across India</h2>
            <p className="text-gray-400">Serving millions of customers across major cities</p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
              <img
                src={india}
                alt="India Map with Cities"
                className="mx-auto rounded-2xl shadow-2xl w-full max-w-4xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating city indicators */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Enhanced City List */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : ''}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Cities We Serve</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {cities.map((city, index) => (
              <div
                key={city}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                  {city}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-gray-400 mt-8 text-lg">
            And many more cities coming soon! 🚀
          </p>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-md rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Porter?</h3>
            <p className="text-gray-300 mb-6">Join millions of satisfied customers across India</p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 button-glow">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;