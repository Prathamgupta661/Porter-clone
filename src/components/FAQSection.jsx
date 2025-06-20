import React, { useState } from "react";
import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: "What is Porter App?",
    answer: "Porter is a leading logistics service provider offering a wide range of transportation solutions. With operations across 22 Indian cities, Porter makes deliveries quick and effortless."
  },
  {
    question: "How do I use Porter App?",
    answer: "Download the app, select your service, pick locations, choose the vehicle, and complete your booking. Your transport is on its way!"
  },
  {
    question: "What are the charges for goods transportation services?",
    answer: "The charges are based on the number of kilometres travelled and the type of vehicle chosen, and this differs from locality to locality. You can check the estimate tab on the Porter website to get an exact idea of your final fare amount."
  },
  {
    question: "Does Porter provide Packers and Movers services?",
    answer: "Yes, Porter caters to all kinds of house shifting needs through Porter Packers & Movers. Intracity shifting services are available in major cities including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, and more."
  },
  {
    question: "What types of goods does Porter transport?",
    answer: "From a pin to an entire house, we will help transport anything, anywhere, anytime. However, Porter does not help in the transportation of prohibited goods like flammable items, explosives, alcohol, tobacco, medicines, drugs, and other restricted items."
  },
  {
    question: "How long does it take to transport goods via Porter?",
    answer: "When choosing on-demand goods transport services via trucks and two-wheelers, transportation takes place via road. The distance and traffic play a major role in determining the delivery time. For intercity services, there are multiple options with some packages delivered within a couple of days or express air services for faster delivery."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="space-y-4 mt-8">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="bg-[#f8fafd] rounded-lg shadow p-6">
              <button
                className={`w-full text-left font-semibold text-lg focus:outline-none group flex justify-between items-center ${openIndex === idx ? 'text-[#2549bb]' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIndex === idx && (
                <p className="text-sm mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 