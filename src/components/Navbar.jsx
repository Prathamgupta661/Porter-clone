import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Porter</h1>
          </div>
        </NavLink>
        {/* Centered Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavLink
            to="/enterprise"
            className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
          >
            For Enterprise
          </NavLink>
          <NavLink
            to="/packers-movers"
            className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
          >
            Delivery Partners
          </NavLink>
        </div>
        {/* Support Button */}
        <div className="hidden md:flex items-center">
          <NavLink to="/support">
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
              Support
            </button>
          </NavLink>
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
        {/* Nav links for mobile */}
        <div
          className={`flex-col md:hidden items-center space-y-4 absolute md:static top-16 left-0 w-full bg-white shadow transition-all duration-200 z-40 ${
            open ? "flex" : "hidden"
          }`}
        >
          <NavLink
            to="/enterprise"
            className="text-gray-700 hover:text-blue-600 font-medium block px-4 py-2"
            onClick={() => setOpen(false)}
          >
            For Enterprise
          </NavLink>
          <NavLink
            to="/packers-movers"
            className="text-gray-700 hover:text-blue-600 font-medium block px-4 py-2"
            onClick={() => setOpen(false)}
          >
            Delivery Partners
          </NavLink>
          <NavLink to="/support" onClick={() => setOpen(false)}>
            <button className="text-gray-700 hover:text-blue-600 font-medium block px-4 py-2">
              Support
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
