import React from 'react';
import trip from "../../assets/Enterprises/Trip.png"
import employee from "../../assets/Enterprises/Employee.png"
import payments from "../../assets/Enterprises/Payments.png"
import business from "../../assets/Enterprises/Business.png"


const features = [
  {
    title: 'Unified Trip Details',
    description: 'Check all your goods transportation trip information in the city.',
    content: trip,
  },
  {
    title: 'Payments through Prepaid Wallet',
    description: 'No cash reimbursement hassles, as all trips are prepaid.',
    content: payments,
  },
  {
    title: 'Complete Clarity and Control',
    description: 'Monitor wallet usage with full visibility.',
    content: business,
  },
  {
    title: 'Multi-User Access',
    description: 'Seamlessly add, remove, activate, or deactivate users to maintain unified logistics operations.',
    content: employee,
  },
];

const KeyFeatures = () => {
  return (
    <div className="bg-[#0f172a] text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-20">Key Features We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1e293b] p-8 rounded-lg text-left">
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <div className="bg-gray-100 text-gray-900 p-6 rounded-lg h-64 flex items-center justify-center">
                {/* Placeholder for the complex image content */}
                <img src={feature.content} alt={feature.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures; 