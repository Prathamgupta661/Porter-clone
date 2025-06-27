import React from "react";
import { Headset, Smartphone, BadgeCheck, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Headset className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "24/7 Friendly Support",
    desc: "Our team is always here to help, no matter the hour."
  },
  {
    icon: <Smartphone className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Easy App Access",
    desc: "Scan and go! Manage your moves with our intuitive app."
  },
  {
    icon: <BadgeCheck className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Verified Partners",
    desc: "All helpers are background-checked and rated by users."
  },
  {
    icon: <Cpu className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Powered by Tech",
    desc: "Smart algorithms for the smoothest experience."
  }
];

const UniqueFeatures = () => (
  <section className="unique-features py-20 bg-[var(--white)] relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-10 w-32 h-32 bg-[var(--secondary-color)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[var(--primary-color)]/5 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Choose MoveEasy?</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Discover what makes us different and why thousands of customers trust us with their moves.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group bg-gradient-to-br from-[var(--primary-bg)] to-[var(--white)] rounded-3xl shadow-lg p-8 border border-[var(--primary-color)]/10 hover:border-[var(--secondary-color)]/30 transition-all duration-300 card-hover">
            <div className="bg-[var(--white)] rounded-2xl p-4 mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4 text-center group-hover:text-[var(--secondary-color)] transition-colors duration-300">
              {f.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-center leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UniqueFeatures; 