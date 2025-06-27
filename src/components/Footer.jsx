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
    <footer className="bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] text-[var(--text-primary)] pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--secondary-color)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[var(--primary-color)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Logo, Social, App Download */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-2">MoveEase</h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                India's most delightful way to move. Fast, friendly, and always reliable.
              </p>
            </div>

            <div className="mb-8 w-full">
              <h3 className="font-semibold mb-4 text-lg text-[var(--primary-color)]">Follow us on</h3>
              <div className="flex gap-4">
                {socialIcons.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center text-[var(--white)] hover:scale-110 hover:shadow-lg transition-all duration-300 group"
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
              <h3 className="font-semibold mb-4 text-lg text-[var(--primary-color)]">Download our app</h3>
              <div className="bg-[var(--white)]/80 backdrop-blur-md rounded-2xl p-6 border border-[var(--primary-color)]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center">
                    <span className="text-[var(--white)] text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">MoveEase App</div>
                    <div className="text-xs text-[var(--text-secondary)]">Get instant delivery estimates</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={qr}
                    alt="QR Code"
                    className="w-20 h-20 bg-[var(--white)] p-2 rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-[var(--text-secondary)]">
                    Scan QR code to download<br />
                    <span className="text-[var(--primary-color)]">Available on iOS & Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-[var(--primary-color)]">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-[var(--primary-color)]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-lg text-[var(--primary-color)]">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
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
        <div className="mt-12 pt-8 border-t border-[var(--primary-color)]/20">
          <h3 className="font-semibold mb-4 text-lg text-[var(--primary-color)]">International Presence</h3>
          <div className="flex flex-wrap gap-4">
            {countries.map((country) => (
              <span 
                key={country}
                className="px-4 py-2 bg-[var(--primary-color)]/10 backdrop-blur-md rounded-full text-sm border border-[var(--primary-color)]/20 hover:bg-[var(--secondary-color)]/20 transition-all duration-200 cursor-pointer"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Domestic Cities */}
        
      </div>

      {/* Bottom section */}
      <div className="mt-12 pt-8 border-t border-[var(--primary-color)]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-[var(--text-secondary)] text-sm mb-2">
              &copy; {new Date().getFullYear()} MoveEase. All rights reserved.
            </p>
            <p className="text-[var(--primary-color)] text-xs">
              Built with ❤️ for a better moving experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}