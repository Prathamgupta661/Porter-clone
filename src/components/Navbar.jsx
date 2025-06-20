import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <NavLink to="/">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Porter</h1>
          </div>
        </NavLink>
        <div className="flex items-center">
          
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Nav links */}
        <div
          className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none transition-all duration-200 z-40 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          <NavLink
            to="/enterprise"
            className="text-gray-700 hover:text-blue-600 font-medium block px-4 py-2 md:p-0"
          >
            For Enterprise
          </NavLink>
          <NavLink
            to="/packers-movers"
            className="text-gray-700 hover:text-blue-600 font-medium block px-4 py-2 md:p-0"
          >
            Delivery Partners
          </NavLink>
          <NavLink to="/support">
            <button className="text-gray-700 hover:text-blue-600 font-medium block px-4 py-2 md:p-0">
              Support
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
