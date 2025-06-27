import React, { useState } from "react";
import supportCard from '../../assets/support_card.svg';

const faqs = [
  "How do I book a move?",
  "What if I need to reschedule?",
  "Are my belongings insured?",
  "How do I contact support?"
];

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const filteredFaqs = faqs.filter(q => q.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="help-center py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
        <img src={supportCard} alt="Help" className="w-20 h-20 mb-6" />
        <h2 className="text-3xl font-bold text-center mb-4 text-green-700">Need Help?</h2>
        <p className="text-gray-700 mb-6 text-center">Find answers to common questions or reach out to our support team.</p>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-full border border-green-200 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <ul className="w-full mb-6">
          {filteredFaqs.map((q, i) => (
            <li key={i} className="py-2 px-4 bg-white rounded-lg mb-2 text-gray-800 shadow-sm">{q}</li>
          ))}
        </ul>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-green-700 transition-all">Contact Support</button>
      </div>
    </section>
  );
};

export default HelpCenter; 