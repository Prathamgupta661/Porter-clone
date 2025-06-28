import React from 'react';
import benefit1 from "../../assets/driverpartner/benefits_1_partner.png";
import benefit2 from "../../assets/driverpartner/benefits_2_partner.png";
import benefit3 from "../../assets/driverpartner/benefits_3_partner.png";
import benefit4 from "../../assets/driverpartner/benefits_4_partner.png";

const benefits = [
  {
    icon: benefit1,
    title: 'Health Care Assistance',
    description: 'Get healthcare benefits for you and your family for a mini truck.',
  },
  {
    icon: benefit2,
    title: 'Insurance',
    description: 'Insurance Save money with reduced annual maintenance and insurance costs on your vehicle.',
  },
  {
    icon: benefit3,
    title: 'Fuel card for Savings',
    description: 'Save big on fuel costs with our smart fuel card and increase your profit margins!',
  },
  {
    icon: benefit4, 
    title: 'Discount on Vehicle Purchase',
    description: 'Get major discounts on purchase of new vehicles. Add to your fleet and grow your business!',
  },
];

const AdditionalBenefits = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-20">ADDITIONAL BENEFITS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={benefit.icon} alt={benefit.title} className="h-32 mx-auto mb-6" />
              <h3 className="text-md font-semibold mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-sm text-wrap text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalBenefits; 