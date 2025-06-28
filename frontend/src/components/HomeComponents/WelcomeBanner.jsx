import React from "react";
import reactLogo from '../../assets/react.svg';

const WelcomeBanner = () => (
  <section className="welcome-banner py-12 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] relative overflow-hidden flex flex-col text-center min-h-[80vh]">
    {/* Background image from Unsplash */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 "
      style={{
        backgroundImage: `url('https://mobibox.com.au/blog/wp-content/uploads/2022/01/reasons-you-should-let-movers-load-your-mobibox.jpg')`,
        opacity: 0.8,
        filter: 'brightness(0.8) contrast(1.2)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>
    
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[var(--primary-color)]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
    </div>

    {/* Sab Easy Ha text overlay in top-left corner */}
    <div className="absolute top-6 left-6 z-20">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] drop-shadow-lg bg-[var(--white)]/90 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
        # Sab Easy Ha
      </h2>
    </div>

    <div className="relative z-10">
      <div className="bg-[var(--white)]/80 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-[var(--primary-color)]/20 mb-8 inline-block">
        <img src={reactLogo} alt="Welcome" className="w-20 h-20 animate-spin-slow" />
      </div>
      
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 gradient-text drop-shadow-lg">
        Welcome to MoveEasy!
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-800 mb-10 max-w-2xl mx-auto leading-relaxed">
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