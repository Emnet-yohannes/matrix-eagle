"use client";

import React from 'react';
import { FAQItem } from './FAQItem';

const faqData = [
  {
    question: "What is Matrix Eagle?",
    answer: "Matrix Eagle is a blockchain-based platform for agricultural tokenization and smart farming solutions."
  },
  {
    question: "What types of assets can I tokenize with Matrix Eagle?",
    answer: "You can tokenize various agricultural assets including crops, livestock, farmland, and agricultural equipment."
  },
  {
    question: "How can I start investing with Matrix Eagle?",
    answer: "You can start by creating an account, completing KYC verification, and purchasing ETATA tokens through our platform."
  },
  {
    question: "What is ETATA Token?",
    answer: "ETATA Token is the native utility token of the Matrix Eagle ecosystem, used for governance, staking, and transactions."
  },
  {
    question: "How will I receive ETATA Tokens?",
    answer: "ETATA Tokens will be distributed to your wallet after successful participation in agricultural staking or token purchases."
  },
  {
    question: "How can I contact Matrix Eagle team?",
    answer: "You can contact our team through our official website, social media channels, or customer support portal."
  },
  {
    question: "Where can I sell my ETATA tokens?",
    answer: "ETATA tokens can be traded on supported cryptocurrency exchanges and through our platform's marketplace."
  },
  {
    question: "My wallet is Hacked, What should I do?",
    answer: "Immediately contact our security team, change all passwords, and report the incident to relevant authorities."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="flex relative flex-col gap-10 items-center px-6 pt-0 pb-20 mx-auto my-0 max-w-full w-[1200px] max-md:px-5 max-md:pt-0 max-md:pb-16 max-sm:px-4 max-sm:pt-0 max-sm:pb-10">
        <header className="mb-10 h-12 text-lg 2xltext-3xl font-bold tracking-wide leading-10 text-center text-white w-[110px] max-md:text-3xl max-sm:mb-5 max-sm:h-auto max-sm:text-2xl">
          <h2>FAQs</h2>
        </header>

        <div className="flex flex-col gap-0  h-auto w-[70%]">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
