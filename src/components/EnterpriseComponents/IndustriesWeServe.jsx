import React from 'react';

// Using placeholders from assets
import img1 from '../../assets/sofa.webp';
import img2 from '../../assets/bike.webp';
import img3 from '../../assets/truck.webp';

const industries = [
  'ELECTRONICS & APPLIANCES', 'CONSTRUCTION MATERIALS',
  'CHEMICALS & PHARMACEUTICALS', 'E-COMMERCE',
  'F&B*s & PROCESSED FOODS', 'EFFICIENT LOGISTICS',
  'FURNITURES', 'FMCG'
];

const IndustriesWeServe = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">INDUSTRIES WE SERVE</h2>
        <p className="max-w-4xl mx-auto text-gray-600 mb-12">
          With unmatched expertise and experience in handling diverse goods & consignments, we pride ourselves on being the trusted goods transport agency for businesses of all sizes. From small enterprises to large businesses, we transport a wide array of items with efficiency and reliability. Our capabilities span across industries. For seamless and effortless logistics for businesses and enterprises, choose Porter Enterprise, your trusted partner for goods transportation services.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 grid grid-cols-3 gap-2">
            {/* Placeholder images */}
            <img src={img1} className="rounded-lg shadow-md" />
            <img src={img2} className="rounded-lg shadow-md" />
            <img src={img3} className="rounded-lg shadow-md" />
            <img src={img3} className="rounded-lg shadow-md" />
            <img src={img1} className="rounded-lg shadow-md" />
            <img src={img2} className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4 -skew-y-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-blue-300 p-4 text-center text-sm font-semibold text-blue-900 rounded-md">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe; 