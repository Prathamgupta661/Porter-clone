import React, { useState, useEffect } from "react";
import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: "What is Porter App?",
    answer: "Porter is a leading logistics service provider offering a wide range of transportation solutions. With operations across 22 Indian cities, Porter makes deliveries quick and effortless. You can book trucks, two-wheelers, packers & movers, and intercity courier services for business or personal needs.",
    icon: "🚚"
  },
  {
    question: "How do I use Porter App?",
    answer: "Download the app, select your service, pick locations, choose the vehicle, and complete your booking. Your transport is on its way!",
    icon: "📱"
  },
  {
    question: "What are the charges for goods transportation services?",
    answer: "The charges are based on the number of kilometres travelled and the type of vehicle chosen, and this differs from locality to locality. You can check the estimate tab on the Porter website to get an exact idea of your final fare amount.",
    icon: "💸"
  },
  {
    question: "Does Porter provide Packers and Movers services?",
    answer: "Yes, Porter caters to all kinds of house shifting needs through Porter Packers & Movers. Intracity shifting services are available in major cities including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, and more.",
    icon: "📦"
  },
  {
    question: "What types of goods does Porter transport?",
    answer: "From a pin to an entire house, we will help transport anything, anywhere, anytime. However, Porter does not help in the transportation of prohibited goods like flammable items, explosives, alcohol, tobacco, medicines, drugs, and other restricted items.",
    icon: "📋"
  },
  {
    question: "How long does it take to transport goods via Porter?",
    answer: "When choosing on-demand goods transport services via trucks and two-wheelers, transportation takes place via road. The distance and traffic play a major role in determining the delivery time. For intercity services, there are multiple options with some packages delivered within a couple of days or express air services for faster delivery.",
    icon: "⏱️"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.faq-section');
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
    <section className="faq-section py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <SectionHeading className="text-3xl font-bold mb-4">Frequently Asked Questions</SectionHeading>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about Porter's services and how we can help you
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={faq.question} 
              className={`group ${isVisible ? 'animate-slide-in-up' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 card-hover overflow-hidden">
                <button
                  className={`w-full text-left p-6 focus:outline-none group/btn flex items-center gap-4 transition-all duration-300 ${
                    openIndex === idx 
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700' 
                      : 'hover:bg-gray-50/50 text-gray-800'
                  }`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {/* Icon */}
                  <div className={`text-2xl transition-transform duration-300 group-hover/btn:scale-110 ${
                    openIndex === idx ? 'rotate-12' : ''
                  }`}>
                    {faq.icon}
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-relaxed">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className={`transition-all duration-300 ${
                    openIndex === idx 
                      ? 'rotate-180 text-blue-600' 
                      : 'text-gray-400 group-hover/btn:text-blue-600'
                  }`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200/50 pt-4">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-md rounded-3xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our support team is here to help you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 button-glow">
                Contact Support
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 