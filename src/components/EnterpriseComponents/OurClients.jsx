import React from "react";

// Placeholder logo images (replace with actual client logos)
import logo1 from "../../assets/pr1.png";
import logo2 from "../../assets/pr2.png";
import logo3 from "../../assets/pr3.png";
import logo4 from "../../assets/pr1.png";
import logo5 from "../../assets/pr2.png";
import logo6 from "../../assets/pr3.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const OurClients = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-20">Our Clients</h2>
      <div className="relative w-full">
        <div className="flex gap-16 animate-scroll-x whitespace-nowrap items-center">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-20 object-contain inline-block mx-4"
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurClients; 