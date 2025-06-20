import React, { useState, useEffect } from "react";

const newsItems = [
  {
    title: "Logistics Company Porter has launched its latest social media brand campaign House shifting hai? Ho Jayega’, highlighting its packers and movers service offerings",
    sourceLogo: "https://etimg.etb2bimg.com/photo/68288725.cms", // Example ET Brand Equity logo
    source: "ET BRAND EQUITY.com",
    link: "#",
  },
  {
    title: "Porter announces INR 50 Cr ESOP liquidation scheme for current and former employees as a sign of appreciation and incentive for their growth and well-being.",
    sourceLogo: "https://etimg.etb2bimg.com/photo/68288725.cms",
    source: "ET BRAND EQUITY.com",
    link: "#",
  },
  {
    title: "On-demand intra-city logistics provider Porter has raised ₹750 crore in a Series E funding round led by Tiger Global Management and Vitruvian Partners.",
    sourceLogo: "https://etimg.etb2bimg.com/photo/68288725.cms",
    source: "ET BRAND EQUITY.com",
    link: "#",
  }
];

const NewsSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="py-16 bg-[#0b0d13]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="h-px w-8 bg-gray-600" />
          <span className="uppercase text-gray-300 tracking-widest text-sm font-semibold">
            In the news
          </span>
          <span className="h-px w-8 bg-gray-600" />
        </div>
        {/* News Slide */}
        <div className="flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
            {newsItems[current].title}
          </h2>
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
              <img src={newsItems[current].sourceLogo} alt="Source" className="h-7 w-auto" />
              <span className="text-white text-lg font-serif tracking-wide">{newsItems[current].source}</span>
            </div>
            <a
              href={newsItems[current].link}
              className="mt-2 text-white font-semibold underline underline-offset-4 decoration-dotted hover:text-yellow-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              Read Article <span className="inline-block ml-1">→</span>
            </a>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-gray-500"} transition`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to news ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;