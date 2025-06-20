import React from 'react';
import vinay from '../assets/pr1.png';
import dinesh from '../assets/pr2.png';
import ashok from '../assets/pr3.png';

const testimonials = [
  {
    name: 'Vinay',
    avatar: vinay,
    service: 'Trucks',
    rating: 5.0,
    city: 'Nagpur',
    text: 'Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!',
  },
  {
    name: 'Dinesh',
    avatar: dinesh,
    service: 'Trucks',
    rating: 4.0,
    city: 'Mumbai',
    text: 'Excellent service by multiple drivers. I own a business and do multiple shiftings. Rather than ask local drivers and bargain every time, I use porter which fulfils all my need. Thanks a lot!',
  },
  {
    name: 'Ashok',
    avatar: ashok,
    service: 'Trucks',
    rating: 5.0,
    city: 'Delhi NCR',
    text: 'Have had an amazing experience. Had three successful deliveries where it’s a struggle to arrange a tempo service for your desired pickup and drop off. Must try this app!',
  },
  {
    name: 'Syamantak Mitra',
    avatar: '', // No avatar, will use initial
    service: 'Packers and Movers',
    rating: 5.0,
    city: 'Hyderabad',
    text: "Smooth experience with Porter's packers and movers! The team was fantastic, handling every detail. Highly recommend their services!",
  },
];

const starIcon = (
  <svg className="h-4 w-4 text-yellow-400 inline-block mb-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
  </svg>
);

const TestimonialsSection = () => (
  <section className="bg-[#0b0d13] py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-px w-8 bg-gray-600" />
          <span className="uppercase text-gray-300 tracking-widest text-sm font-semibold">
            Some words from our happy customers!
          </span>
          <span className="h-px w-8 bg-gray-600" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className={`rounded-2xl p-6 flex flex-col bg-[#181c23] text-white shadow-lg ${
              idx === 0 ? 'bg-[#181c23]/80 border border-gray-700' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold text-gray-700">
                  {t.name[0]}
                </div>
              )}
              <div>
                <div className="font-bold text-base">{t.name}</div>
                <div className="text-xs text-gray-300">
                  {t.service}, {t.rating.toFixed(1)} {starIcon}
                </div>
                <div className="text-xs text-gray-400">{t.city}</div>
              </div>
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-white/90">
              “{t.text}”
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;