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
    <div className="bg-white py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 px-4">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Client ${idx + 1}`}
            className="h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients; 