import React from 'react';
import qr from '../assets/qr.png';

const companyLinks = ['About Us', 'Careers', 'Blog'];
const quickLinks = [
  'API Integrations', 'InterCity Courier', 'Packers & Movers', 'Two Wheelers', 'Trucks', 'Porter Enterprise'
];
const supportLinks = [
  'Contact Us', 'Privacy Policy', 'Terms of Service', 'Terms of Service - SSI', 'Insurance FAQs',
  'Driver Partner Terms & Conditions', 'Zero Tolerance Policy'
];
const countries = ['United Arab Emirates', 'Turkey', 'Bangladesh'];
const domesticCities = [
  'Delhi NCR', 'Chandigarh', 'Ahmedabad', 'Coimbatore', 'Visakhapatnam', 'Hyderabad', 'Jaipur', 'Surat', 'Ludhiana', 'Trivandrum',
  'Bangalore', 'Chennai', 'Nagpur', 'Kochi', 'Mumbai', 'Kolkata', 'Lucknow', 'Nashik', 'Vadodara', 'Indore', 'Pune', 'Kanpur'
];

const socialIcons = [
  { icon: '📘', name: 'Facebook', link: '#' },
  { icon: '🐦', name: 'Twitter', link: '#' },
  { icon: '📷', name: 'Instagram', link: '#' },
  { icon: '💼', name: 'LinkedIn', link: '#' },
  { icon: '📺', name: 'YouTube', link: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Logo, Social, App Download */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-2">Porter</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                India's largest marketplace for intracity logistics. Making delivery simple, reliable, and efficient.
              </p>
            </div>

            <div className="mb-8 w-full">
              <h3 className="font-semibold mb-4 text-lg">Follow us on</h3>
              <div className="flex gap-4">
                {socialIcons.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group"
                    title={social.name}
                  >
                    <span className="text-lg group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full">
              <h3 className="font-semibold mb-4 text-lg">Download our app</h3>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Porter App</div>
                    <div className="text-xs text-gray-300">Get instant delivery estimates</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={qr}
                    alt="QR Code"
                    className="w-20 h-20 bg-white p-2 rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-gray-300">
                    Scan QR code to download<br />
                    <span className="text-blue-400">Available on iOS & Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-blue-400">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-blue-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-blue-400">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="font-semibold mb-4 text-lg text-blue-400">International Presence</h3>
          <div className="flex flex-wrap gap-4">
            {countries.map((country) => (
              <span 
                key={country}
                className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Domestic Cities */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="font-semibold mb-6 text-lg text-blue-400">Domestic Cities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {domesticCities.map((city) => (
              <span 
                key={city}
                className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm hover:translate-x-1 inline-block"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 pt-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              &copy; {new Date().getFullYear()} Porter Clone. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with ❤️ for better logistics experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}