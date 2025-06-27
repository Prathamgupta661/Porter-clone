import React from "react";
import business from '../../assets/Enterprises/Business.png';
import payments from '../../assets/Enterprises/Payments.png';
import pr1 from '../../assets/pr1.png';

const partners = [
  { name: 'BizCorp', logo: business },
  { name: 'PayFast', logo: payments },
  { name: 'MovePro', logo: pr1 },
];

const PartnersTrust = () => (
  <section className="partners-trust py-20 bg-gradient-to-br from-[var(--secondary-bg)] via-[var(--white)] to-[var(--primary-bg)] relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Trusted by Partners</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          We're proud to be trusted by leading businesses and thousands of happy customers.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 items-center">
        {partners.map((p, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-[var(--white)] rounded-2xl shadow-lg p-6 border-2 border-[var(--primary-color)]/10 mb-4">
              <img src={p.logo} alt={p.name} className="w-24 h-24 object-contain" />
            </div>
            <span className="text-lg font-bold text-[var(--primary-color)]">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-[var(--text-secondary)] text-lg">
          Your trust is our greatest asset. We use secure technology and verified partners for every move.
        </p>
      </div>
    </div>
  </section>
);

export default PartnersTrust; 