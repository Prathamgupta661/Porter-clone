import React from "react";

const partners = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
  { name: 'Flipkart', logo: 'https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png' },
  { name: 'DHL', logo: 'https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg' },
];

const PartnersTrust = () => (
  <section className="partners-trust py-20 bg-gradient-to-br from-[var(--secondary-bg)] via-[var(--white)] to-[var(--primary-bg)] relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text p-2">Trusted by Partners</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          We're proud to be trusted by leading businesses and thousands of happy customers.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 items-center">
        {partners.map((p, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-[var(--white)] rounded-2xl shadow-lg p-6 border-2 border-[var(--primary-color)]/10 mb-4 flex items-center justify-center" style={{height: '110px', width: '110px'}}>
              <img src={p.logo} alt={p.name} className="max-w-full max-h-16 object-contain" />
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