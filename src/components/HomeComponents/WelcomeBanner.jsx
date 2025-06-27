import React from "react";
import reactLogo from '../../assets/react.svg';

const WelcomeBanner = () => (
  <section className="welcome-banner py-24 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[80vh]">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[var(--primary-color)]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
    </div>

    <div className="relative z-10">
      <div className="bg-[var(--white)]/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[var(--primary-color)]/20 mb-8 inline-block">
        <img src={reactLogo} alt="Welcome" className="w-20 h-20 animate-spin-slow" />
      </div>
      
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 gradient-text drop-shadow-lg">
        Welcome to MoveEase!
      </h1>
      
      <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
        Experience a new way to move your world. Fast, friendly, and always reliable—your journey starts here.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[var(--primary-color)] text-[var(--white)] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[var(--primary-dark)] transition-all duration-300 transform hover:scale-105 button-glow">
          Get Started
        </button>
        <button className="border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--secondary-color)] hover:text-[var(--white)] transition-all duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default WelcomeBanner; 