import React from 'react';
import feat1 from '../../assets/driverpartner/feature_1_partner.png';
import feat2 from '../../assets/driverpartner/feature_2_partner.png';
import feat3 from '../../assets/driverpartner/feature_3_partner.png';
const advantages = [
  {
    icon: feat1,
    title: 'Regular Trips',
    description: 'With our growing presence across multiple cities, we always have our hands full! This means you will never run out of trips.',
  },
  {
    icon: feat2,
    title: 'Better Earning',
    description: 'Earn more by partnering with the best! Regular trips and efficient service can grow your earnings!',
  },
  {
    icon: feat3,
    title: 'On-Time Payment',
    description: 'Be assured to receive all payments on time & get the best in class support, by renting/ hiring your vehicle along with the operator to Porter.',
  },
];

const PorterAdvantage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">PORTER ADVANTAGE</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="max-w-xs mx-auto md:mx-0">
              <img src={advantage.icon} alt={advantage.title} className="h-40 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PorterAdvantage; 