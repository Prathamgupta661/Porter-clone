import React from 'react';

const MobileMenu = ({ open, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-30" onClick={onClose}></div>
      <div className={`absolute right-0 top-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <img src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/common/cross/cross_icon.svg" alt="Close" className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 text-base font-medium">
          <a href="https://porter.in/api-integrations" className="hover:text-[#2549bb]">API Integrations</a>
          <a href="https://porter.in/partners" className="hover:text-[#2549bb]">Delivery Partners</a>
          <a href="https://porter.in/support" className="hover:text-[#2549bb]">Support</a>
          <a href="https://porter.in/enterprise" className="hover:text-[#2549bb]">For Enterprise</a>
        </nav>
        <div className="mt-8 px-6">
          <div className="bg-[#f8fafd] rounded-lg p-4 flex flex-col items-center">
            <div className="font-semibold mb-2">We are better on the app!</div>
            <a href="https://porter.in/app" target="_blank" rel="noopener noreferrer" className="bg-[#2549bb] text-white px-4 py-2 rounded-lg font-semibold text-xs">Download Now</a>
            <img src="https://dom-website-prod-cdn-web.porter.in/public/images/track-order/download-app.svg" alt="download app" className="h-16 mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 