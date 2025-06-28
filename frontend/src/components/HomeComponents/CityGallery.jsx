import React from "react";
import delhi from '../../assets/Enterprises/Delhi.webp';
import mumbai from '../../assets/Enterprises/Mumbai.webp';
import bangalore from '../../assets/Enterprises/Bangalore.webp';
import hyderabad from '../../assets/Enterprises/Hyderabad.webp';
import chennai from '../../assets/Enterprises/Chennai.webp';
import pune from '../../assets/Enterprises/Pune.webp';
import ahmedabad from '../../assets/Enterprises/Ahmedabad.webp';
import surat from '../../assets/Enterprises/Surat.webp';
import kolkata from '../../assets/Enterprises/Kolkata.webp';

const cities = [
  { name: 'Delhi NCR', img: delhi },
  { name: 'Mumbai', img: mumbai },
  { name: 'Bengaluru', img: bangalore },
  { name: 'Hyderabad', img: hyderabad },
  { name: 'Chennai', img: chennai },
  { name: 'Pune', img: pune },
  { name: 'Ahmedabad', img: ahmedabad },
  { name: 'Surat', img: surat },
  { name: 'Kolkata', img: kolkata },
];

const CityGallery = () => (
  <section className="city-gallery py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Cities We Love to Serve</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          From bustling metros to charming cities, we're connecting communities across India.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cities.map((city, i) => (
          <div key={city.name} className="group relative bg-[var(--white)] rounded-3xl shadow-lg overflow-hidden border-2 border-[var(--primary-color)]/20 hover:border-[var(--secondary-color)]/40 transition-all duration-300 card-hover">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={city.img} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 text-center">
              <span className="text-lg font-bold text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300">
                {city.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-[var(--text-secondary)] text-lg">
          And many more cities coming soon! 🚀
        </p>
      </div>
    </div>
  </section>
);

export default CityGallery; 