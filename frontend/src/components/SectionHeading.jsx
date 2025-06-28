import React from 'react';

const waveIcon = (
  <img
    src="https://dom-website-prod-cdn-web.porter.in/public/assets/icons/home/section-header-wave.svg"
    alt="Wave Icon"
    className="h-8 w-8 md:h-12 md:w-12 inline-block align-middle mx-2"
  />
);

const SectionHeading = ({ children }) => (
  <div className="flex items-center justify-center gap-2 my-8">
    {waveIcon}
    <h2 className="text-2xl md:text-3xl font-bold text-center tracking-wide">{children}</h2>
    {waveIcon}
  </div>
);

export default SectionHeading; 