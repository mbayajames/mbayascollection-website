import React from "react";
import { motion } from "framer-motion";
import "../styles/HelpCenter.css";

function HelpCenter() {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Go to the Track Order page and enter your order ID.",
    },
    {
      question: "What is your return policy?",
      answer: "Returns are accepted within 30 days of purchase.",
    },
  ];

  return (
    <motion.div
      className="help-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Help Center</h2>
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default HelpCenter;
