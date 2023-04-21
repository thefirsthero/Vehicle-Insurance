import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const faqItems = [
    {
      question: 'What is car insurance?',
      answer:
        'Car insurance is a contract between you and an insurance company that helps protect you financially in the event of an accident or theft. You pay a premium to the insurance company, and they agree to cover certain costs related to damages or injuries you may cause to others or suffer yourself while driving your car.',
    },
    {
      question: 'Is car insurance required by law?',
      answer:
        "In most states, yes, car insurance is required by law. The minimum amount of coverage required varies by state, so it's important to check with your state's department of motor vehicles to ensure you have the appropriate coverage.",
    },
    {
      question: 'What does car insurance typically cover?',
      answer:
        'Car insurance can cover a range of things, depending on the policy you choose. Some common coverages include liability (which helps cover damages you cause to others), collision (which helps cover damages to your own car), and comprehensive (which helps cover damages caused by things like theft or weather).',
    },
    {
      question: 'How much car insurance do I need?',
      answer:
        "The amount of car insurance you need depends on a variety of factors, including your state's requirements, your driving history, the value of your car, and your personal financial situation. It's a good idea to speak with an insurance agent to help determine the right amount of coverage for your needs.",
    },
    {
      question: 'How can I save money on car insurance?',
      answer:
        'There are several ways to save money on car insurance, including bundling policies (such as combining your car and home insurance), raising your deductible, maintaining a good driving record, and shopping around for the best rates.',
    },
    {
      question: 'What should I do if I get into an accident?',
      answer:
        'If you get into an accident, the first thing you should do is make sure everyone is safe and call the police if necessary. You should also exchange insurance information with the other driver(s) involved and take pictures of the damage. Finally, you should contact your insurance company as soon as possible to report the accident and begin the claims process.',
    },
  ];

  return (
    

    <div className="faq-container">
      <h2>Frequently Asked Questions !!</h2>
     
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${selectedQuestion === index ? 'selected' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <h3>{item.question}</h3>
            {selectedQuestion === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>

    </div>


  );
};

export default FAQ;
