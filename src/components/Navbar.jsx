import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-lg' 
        : 'bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/" className="group">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              MoveEasy
            </h1>
          </div>
        </NavLink>

        {/* Centered Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <NavLink
            to="/enterprise"
            className="relative text-gray-800 hover:text-blue-600 font-semibold px-4 py-2 transition-all duration-300 group text-lg"
          >
            For Enterprise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/packers-movers"
            className="relative text-gray-800 hover:text-blue-600 font-semibold px-4 py-2 transition-all duration-300 group text-lg"
          >
            Delivery Partners
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </div>

        {/* Support Button */}
        <div className="hidden md:flex items-center">
          <NavLink to="/support">
            <button className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 button-glow overflow-hidden text-lg">
              <span className="relative z-10">Support</span>
            </button>
          </NavLink>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Mobile menu overlay */}
        {open && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}></div>
        )}

        {/* Nav links for mobile */}
        <div
          className={`flex-col md:hidden items-center space-y-4 absolute md:static top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 z-40 ${
            open ? "flex animate-slide-in-up" : "hidden"
          }`}
        >
          <div className="w-full p-4 space-y-4">
            <NavLink
              to="/enterprise"
              className="block text-gray-800 hover:text-blue-600 font-semibold px-4 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg"
              onClick={() => setOpen(false)}
            >
              For Enterprise
            </NavLink>
            <NavLink
              to="/packers-movers"
              className="block text-gray-800 hover:text-blue-600 font-semibold px-4 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg"
              onClick={() => setOpen(false)}
            >
              Delivery Partners
            </NavLink>
            <NavLink 
              to="/support" 
              onClick={() => setOpen(false)}
              className="block"
            >
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-200 hover:shadow-lg text-lg">
                Support
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
