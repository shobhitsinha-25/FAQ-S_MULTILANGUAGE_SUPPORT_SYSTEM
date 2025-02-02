import React from "react";

const FAQList = ({ faqs }) => {
  return (
    <div>
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQList;
