import React from "react";
import payments from '../../assets/Enterprises/Payments.png';
import business from '../../assets/Enterprises/Business.png';

const updates = [
  {
    date: '2024-06-01',
    title: 'MoveEase App Launch',
    desc: 'Our brand new app is live! Manage your moves, track helpers, and more—all in one place.',
    icon: payments,
    category: 'Product Launch'
  },
  {
    date: '2024-05-20',
    title: 'Partner Program Expanded',
    desc: 'We now have verified partners in 20+ cities. Find a helper near you!',
    icon: business,
    category: 'Expansion'
  }
];

const LatestUpdates = () => (
  <section className="latest-updates py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--white)] to-[var(--secondary-bg)] relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Latest Updates</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Stay updated with our latest features, expansions, and improvements.
        </p>
      </div>
      
      <div className="space-y-8">
        {updates.map((u, i) => (
          <div key={i} className="group bg-[var(--white)] rounded-3xl shadow-lg p-8 border-l-8 border-[var(--primary-color)] hover:border-[var(--secondary-color)] transition-all duration-300 card-hover">
            <div className="flex items-start gap-6">
              <div className="bg-[var(--primary-bg)] rounded-2xl p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img src={u.icon} alt={u.title} className="w-16 h-16 rounded-lg" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-[var(--primary-color)] font-semibold bg-[var(--primary-bg)] px-3 py-1 rounded-full">
                    {u.category}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)] font-medium">
                    {u.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-3 group-hover:text-[var(--secondary-color)] transition-colors duration-300">
                  {u.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {u.desc}
                </p>
                
                <button className="text-[var(--primary-color)] font-semibold hover:text-[var(--secondary-color)] transition-colors duration-300 group-hover:translate-x-2 transform transition-transform duration-300">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-[var(--secondary-color)] text-[var(--white)] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[var(--secondary-dark)] transition-all duration-300 transform hover:scale-105 button-glow">
          View All Updates
        </button>
      </div>
    </div>
  </section>
);

export default LatestUpdates; 