import React from 'react';
import ahmedabad from "../../assets/Enterprises/Ahmedabad.webp"
import bangalore from "../../assets/Enterprises/Bangalore.webp"
import chandigarh from "../../assets/Enterprises/Chandigarh.webp"
import chennai from "../../assets/Enterprises/Chennai.webp"
import coimbatore from "../../assets/Enterprises/Coimbatore.webp"
import delhi from "../../assets/Enterprises/Delhi.webp"
import hyderabad from "../../assets/Enterprises/Hyderabad.webp"
import indore from "../../assets/Enterprises/Indore.webp"
import jaipur from "../../assets/Enterprises/Jaipur.webp"
import kolkata from "../../assets/Enterprises/Kolkata.webp"
import lucknow from "../../assets/Enterprises/Lucknow.webp"
import ludhiana from "../../assets/Enterprises/Ludhiana.webp"
import mumbai from "../../assets/Enterprises/Mumbai.webp"
import nagpur from "../../assets/Enterprises/Nagpur.webp"
import pune from "../../assets/Enterprises/Pune.webp"
import surat from "../../assets/Enterprises/Surat.webp"
import vadodara from "../../assets/Enterprises/Vadodara.webp"

// Placeholder data for cities. Replace with actual data and images.
const cities = [
  {name: 'AHMEDABAD', image: ahmedabad},
  {name: 'BANGALORE', image: bangalore},
  {name: 'CHANDIGARH', image: chandigarh},
  {name: 'CHENNAI', image: chennai},
  {name: 'COIMBATORE', image: coimbatore},
  {name: 'DELHI', image: delhi},
  {name: 'HYDERABAD', image: hyderabad},
  {name: 'INDORE', image: indore},
  {name: 'JAIPUR', image: jaipur},
  {name: 'KOLKATA', image: kolkata},
  {name: 'LUCKNOW', image: lucknow},
  {name: 'LUDHIANA', image: ludhiana},
  {name: 'MUMBAI', image: mumbai},
  {name: 'NAGPUR', image: nagpur},
  {name: 'PUNE', image: pune},
  {name: 'SURAT', image: surat},
  {name: 'VADODARA', image: vadodara},
];

// Using a placeholder image from assets

const TransformingCities = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">WE ARE TRANSFORMING CITIES</h2>
        <p className="max-w-4xl mx-auto text-gray-600 mb-12">
          Our business is growing by the minute! We are now present in 21+ cities and have an extensive fleet base of more than 7.5L driver-partners! We have established ourselves as a trusted goods transportation service provider for big or small businesses, eCommerce merchants, supermarkets, kirana store owners and many more for their business goods transportation services. Our loyal customers across 21+ cities serve as a testament of our top notch service and ever expanding presence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {cities.slice(0, 18).map((city, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={city.image} alt={city.name} className="w-24 h-16 object-cover rounded-lg mb-2 shadow-md" />
              <p className="font-semibold text-sm">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformingCities; 