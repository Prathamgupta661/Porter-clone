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
  { icon: 'fa-brands fa-facebook-f', link: '#' },
  { icon: 'fa-brands fa-x-twitter', link: '#' },
  { icon: 'fa-brands fa-instagram', link: '#' },
  { icon: 'fa-brands fa-linkedin-in', link: '#' },
  { icon: 'fa-brands fa-youtube', link: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Left: Logo, Social, App Download */}
        <div className="md:w-1/4 flex flex-col items-start">
          <img
            src="https://dom-website-prod-cdn-web.porter.in/public/images/common/porter-logo-v3-white.svg"
            alt="Porter Logo"
            className="h-8 mb-6"
          />
          <hr className="border-gray-700 w-full mb-4" />
          <div className="mb-4">
            <span className="font-semibold">Follow us on</span>
            <div className="flex gap-3 mt-2">
              {socialIcons.map((s, i) => (
                <a key={i} href={s.link} className="text-2xl hover:text-yellow-400 transition">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <hr className="border-gray-700 w-full mb-4" />
          <div className="flex items-center gap-2 mb-2">
            <img src="https://dom-website-prod-cdn-web.porter.in/public/images/common/porter-logo-v3-blue.svg" alt="App" className="h-8" />
            <div>
              <div className="font-semibold text-sm">Download our app now!</div>
              <div className="text-xs text-gray-300">Scan the QR Code to download</div>
            </div>
          </div>
          <img
            src={qr}
            alt="QR Code"
            className="w-32 h-32 bg-white p-2 rounded"
          />
        </div>
        {/* Right: Links */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1">
              {companyLinks.map((l) => (
                <li key={l}><a href="#" className="hover:underline">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1">
              {quickLinks.map((l) => (
                <li key={l}><a href="#" className="hover:underline">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Support</div>
            <ul className="space-y-1">
              {supportLinks.map((l) => (
                <li key={l}><a href="#" className="hover:underline">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Countries</div>
            <ul className="space-y-1">
              {countries.map((l) => (
                <li key={l}><a href="#" className="hover:underline">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Domestic Cities */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="font-semibold mb-2">Domestic Cities</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-sm">
          {domesticCities.map((city) => (
            <span key={city}>{city}</span>
          ))}
        </div>
      </div>
      <hr className="border-gray-700 my-6" />
      <div className="text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Porter Clone. All rights reserved.
      </div>
      {/* FontAwesome CDN for icons (add in your public/index.html if not already) */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> */}
    </footer>
  );
}