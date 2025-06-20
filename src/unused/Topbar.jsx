import React from "react";

const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-72 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <button className="relative focus:outline-none">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"/></svg>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
        </button>
        {/* User Avatar Dropdown */}
        <div className="relative">
          <button className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 focus:outline-none">
            U
          </button>
          {/* Dropdown placeholder */}
        </div>
      </div>
    </header>
  );
};

export default Topbar; 