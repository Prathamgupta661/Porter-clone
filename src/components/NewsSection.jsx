import React, { useState, useEffect } from "react";

const newsItems = [
  {
    title: "Logistics Company Porter has launched its latest social media brand campaign 'House shifting hai? Ho Jayega', highlighting its packers and movers service offerings",
    sourceLogo: "https://etimg.etb2bimg.com/photo/68288725.cms",
    source: "ET BRAND EQUITY.com",
    link: "#",
    category: "Brand Campaign",
    date: "2024"
  },
  {
    title: "Porter announces INR 50 Cr ESOP liquidation scheme for current and former employees as a sign of appreciation and incentive for their growth and well-being.",
    sourceLogo: "https://etimg.etb2bimg.com/photo/68288725.cms",
    source: "ET BRAND EQUITY.com",
    link: "#",
    category: "Company News",
    date: "2024"
  },
  {
    title: "On-demand intra-city logistics provider Porter has raised ₹750 crore in a Series E funding round led by Tiger Global Management and Vitruvian Partners.",
    sourceLogo: "https://etimg.etb2bimg.com/photo/68288725.cms",
    source: "ET BRAND EQUITY.com",
    link: "#",
    category: "Funding",
    date: "2024"
  }
];

const NewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.news-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="news-section py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="uppercase text-blue-400 tracking-widest text-sm font-semibold">
              In the news
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Making Headlines
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news and developments from Porter
          </p>
        </div>

        {/* News Carousel */}
        <div className={`relative ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700/50">
            {/* Category Badge */}
            <div className="flex justify-center mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {newsItems[current].category}
              </span>
            </div>

            {/* News Content */}
            <div className="text-center mb-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold leading-relaxed mb-6">
                {newsItems[current].title}
              </h3>
              
              {/* Source Info */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                  <img 
                    src={newsItems[current].sourceLogo} 
                    alt="Source" 
                    className="h-8 w-auto rounded" 
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold">{newsItems[current].source}</div>
                    <div className="text-gray-400 text-sm">{newsItems[current].date}</div>
                  </div>
                </div>
                
                <a
                  href={newsItems[current].link}
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Read Full Article</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>

            {/* Enhanced Carousel Dots */}
            <div className="flex justify-center gap-3">
              {newsItems.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    current === idx 
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 scale-125" 
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to news ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
            onClick={() => setCurrent((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
            onClick={() => setCurrent((prev) => (prev + 1) % newsItems.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-md rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest news and updates from Porter</p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 button-glow">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;