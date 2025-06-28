import React, { useState } from 'react';
import bike from '../../assets/bike.webp';
import truck from '../../assets/truck.webp';
import packers from '../../assets/sofa.webp';
import courier from '../../assets/allindia.webp';
import EstimateFormModal from './EstimateFormModal';

const services = [
  {
    label: 'Two Wheelers',
    icon: bike,
    value: 'two_wheelers',
  },
  {
    label: 'Trucks',
    icon: truck,
    value: 'trucks',
  },
  {
    label: 'Packers & Movers',
    icon: packers,
    value: 'packers_movers',
  },
  {
    label: 'Intercity Courier Service',
    icon: courier,
    value: 'intercity_courier',
  },
];

const EstimateModal = ({ open, onClose, onSubmit }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  if (!open) return null;

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setSelectedService(null);
    onClose();
  };

  const handleFormSubmit = (data) => {
    if (onSubmit) onSubmit(data);
    setFormOpen(false);
    setSelectedService(null);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-3xl min-h-[420px] relative overflow-hidden animate-fade-in">
          {/* Left section */}
          <div className="bg-[#f4f7fe] flex flex-col justify-center items-start px-10 py-12 w-2/5 min-w-[220px]">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Get an Estimate</h2>
            <p className="text-gray-500 text-base">Please fill in the details, so we can provide you with the best of our services</p>
          </div>
          {/* Right section */}
          <div className="flex-1 flex flex-col justify-center px-6 py-20 gap-4 bg-white">
            <button onClick={onClose} className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-gray-700 transition-colors">&times;</button>
            {services.map((service) => (
              <button
                key={service.value}
                className="flex items-center justify-between w-full bg-white border border-gray-200 rounded-xl px-6 py-5 mb-2 hover:shadow-lg transition-all group"
                onClick={() => handleServiceSelect(service)}
              >
                <div className="flex items-center gap-4">
                  <img src={service.icon} alt={service.label} className="w-10 h-10 object-contain" />
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-[var(--primary-color)]">{service.label}</span>
                </div>
                <span className="text-2xl text-gray-300 group-hover:text-[var(--primary-color)]">&gt;</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <EstimateFormModal
        open={formOpen}
        onClose={handleFormClose}
        service={selectedService}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default EstimateModal; 