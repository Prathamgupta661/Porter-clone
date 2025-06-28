import React from "react";
import { Download, CalendarCheck, UserCheck, LocateFixed } from 'lucide-react';

const steps = [
  {
    icon: <Download className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Download the App",
    desc: "Get started by downloading MoveEasy from the app store."
  },
  {
    icon: <CalendarCheck className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Book Your Move",
    desc: "Choose your service, set your locations, and book instantly."
  },
  {
    icon: <UserCheck className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Meet Your Helper",
    desc: "A friendly, verified partner arrives to assist you."
  },
  {
    icon: <LocateFixed className="w-16 h-16 mx-auto text-[var(--primary-color)] group-hover:text-[var(--secondary-color)] transition-colors duration-300" />,
    title: "Track & Relax",
    desc: "Track your move in real-time and enjoy a stress-free experience."
  }
];

const HowItWorks = () => (
  <section className="how-it-works py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">How It Works</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          Moving is easy with MoveEasy. Just follow these simple steps!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div key={i} className="group bg-[var(--white)] rounded-3xl shadow-lg p-8 border-2 border-[var(--primary-color)]/10 hover:border-[var(--secondary-color)]/30 transition-all duration-300 card-hover flex flex-col items-center">
            <div className="bg-[var(--primary-bg)] rounded-2xl p-4 mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4 text-center group-hover:text-[var(--secondary-color)] transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-center leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks; 