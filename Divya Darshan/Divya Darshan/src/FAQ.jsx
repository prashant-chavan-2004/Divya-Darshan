import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is a Hindu temple?",
    answer:
      "A Hindu temple is a sacred place where devotees worship deities, perform rituals, and seek blessings."
  },
  {
    question: "Why do people visit temples?",
    answer:
      "People visit temples for spiritual peace, prayers, festivals, and positive energy."
  },
  {
    question: "What is the meaning of Darshan?",
    answer:
      "Darshan means seeing and being seen by the deity, believed to bring blessings and spiritual connection."
  },
  {
    question: "Why remove shoes before entering temple?",
    answer:
      "Shoes are removed to maintain cleanliness and purity inside the temple."
  },
  {
    question: "What should you wear in temples?",
    answer:
      "Modest and traditional clothing is preferred such as covered shoulders and clean attire."
  },
  {
    question: "What is the significance of temple architecture?",
    answer:
      "Temple design represents the universe and helps guide devotees toward spiritual awareness."
  },
  {
    question: "How many temples are there in India?",
    answer:
      "India is home to over 2 million temples across cities, towns, and villages."
  },
  {
    question: "Which city has the most temples in India?",
    answer:
      "Varanasi is known for having the highest number of temples and is a major spiritual center."
  },
  {
    question: "Which are the four Dhams of Lord Vishnu?",
    answer:
      "Badrinath, Dwarka, Puri, and Rameswaram are the four Dhams believed to bring moksha."
  },
  {
    question: "How many Jyotirlingas are there in India?",
    answer:
      "There are 12 Jyotirlingas of Lord Shiva including Kashi Vishwanath, Somnath, and Kedarnath."
  },
  {
    question: "How many Shakti Peeths are there in India?",
    answer:
      "There are 51 Shakti Peeths including Kamakhya Devi, Vaishno Devi, and Kanyakumari."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Temple FAQ</h1>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">

          {/* Question Row */}
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{item.question}</span>
            <button className="faq-btn">
              {activeIndex === index ? "-" : "+"}
            </button>
          </div>

          {/* Answer */}
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        
        </div>
        
      ))}
      
    </div>
  );
};

export default FAQ;