import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="https://porter.in" className="flex items-center gap-2">
          <img src="https://dom-website-prod-cdn-web.porter.in/public/images/common/porter-logo-v3-blue.svg" alt="Porter Logo" className="h-10" />
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="https://porter.in/enterprise" className="hover:text-[#2549bb]">For Enterprise</a>
          <a href="https://porter.in/partners" className="hover:text-[#2549bb]">Delivery Partners</a>
          <a href="https://porter.in/support" className="hover:text-[#2549bb]">Support</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(true)}>
          <img src="https://dom-website-prod-cdn-web.porter.in/public/images/common/hamburger-black.svg" alt="Mobile Menu Icon" className="h-7 w-7" />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header; 