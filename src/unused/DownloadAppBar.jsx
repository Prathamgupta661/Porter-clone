import React, { useState } from 'react';

const DownloadAppBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="w-full bg-white shadow-md flex items-center justify-between px-4 py-2 fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <img src="https://dom-website-prod-cdn-web.porter.in/public/images/common/app-icon-compressed.png" alt="Porter App Icon" className="h-10 w-10" />
        <div>
          <div className="font-bold text-base">Install Porter</div>
          <div className="text-xs text-gray-500">for seamless goods delivery</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a href="https://porter.in/app" target="_blank" rel="noopener noreferrer" className="bg-[#2549bb] text-white px-4 py-2 rounded-lg font-semibold text-xs">OPEN APP</a>
        <button onClick={() => setVisible(false)} className="ml-2 p-1 hover:bg-gray-100 rounded-full">
          <img src="https://dom-website-prod-cdn-web.porter.in/public/images/common/cross_20_grey.svg" alt="hide" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DownloadAppBar; 