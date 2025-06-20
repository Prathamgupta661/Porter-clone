import React, { useState } from 'react';
export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? null : i)}>
            {faq.q}
          </button>
          <div className={`faq-answer ${open === i ? 'open' : ''}`}>
            {open === i && <p>{faq.a}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}