import React from "react";
import pr1 from '../../assets/pr1.png';
import pr2 from '../../assets/pr2.png';
import pr3 from '../../assets/pr3.png';

const stories = [
  {
    name: 'Aarav',
    avatar: pr1,
    quote: 'MoveEase made my shifting day a breeze! Friendly helpers and no stress.',
    rating: 5
  },
  {
    name: 'Priyanshu',
    avatar: pr2,
    quote: 'Loved the app! Booking was super easy and the team was on time.',
    rating: 5
  },
  {
    name: 'Rohan',
    avatar: pr3,
    quote: 'I never thought moving could be this fun. Highly recommend MoveEase!',
    rating: 5
  }
];

const CustomerStories = () => (
  <section className="customer-stories py-20 bg-gradient-to-br from-[var(--secondary-bg)] via-[var(--white)] to-[var(--primary-bg)] relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-10 w-32 h-32 bg-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[var(--primary-color)]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text p-2">Happy Stories</h2>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Real experiences from our satisfied customers across India.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <div key={i} className="group bg-[var(--white)] rounded-3xl shadow-lg p-8 border-2 border-[var(--secondary-color)]/20 hover:border-[var(--primary-color)]/40 transition-all duration-300 card-hover">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img 
                  src={story.avatar} 
                  alt={story.name} 
                  className="w-20 h-20 rounded-full border-4 border-[var(--secondary-color)]/30 group-hover:border-[var(--primary-color)]/50 transition-all duration-300" 
                />
                <div className="absolute -top-2 -right-2 bg-[var(--secondary-color)] text-[var(--white)] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  ★
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                {story.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-[var(--secondary-color)] text-xl">★</span>
                ))}
              </div>
              
              <p className="text-[var(--text-secondary)] italic leading-relaxed">
                "{story.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-[var(--primary-color)] text-[var(--white)] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[var(--primary-dark)] transition-all duration-300 transform hover:scale-105 button-glow">
          Share Your Story
        </button>
      </div>
    </div>
  </section>
);

export default CustomerStories; 