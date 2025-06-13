"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FAQItem } from "./FAQItem";
import { ThreeDNetwork } from "../Animated3dLines/ThreeDNetwork";

export const FAQSection: React.FC = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
  ];

  return (
    <section className="relative w-full mt-4 lg:mt-[82px]">
      <div className="flex relative flex-col lg:gap-10 items-center px-6 pt-0 pb-20 mx-auto my-0 max-w-full w-[1200px] max-md:px-5 max-md:pt-0 max-md:pb-16 max-sm:px-4 max-sm:pt-0 max-sm:pb-10">
        <div className="absolute inset-0 z-20 w-full">
          <ThreeDNetwork />
        </div>
        <header className="lg:mb-10 h-12 text-lg 2xl:text-3xl font-bold tracking-wide leading-10 text-center text-white w-[110px] max-md:text-3xl max-sm:mb-5 max-sm:h-auto max-sm:text-2xl">
          <h2>{t("faq.title")}</h2>
        </header>

        <div className="flex flex-col 2xl:gap-y-10 h-auto w-[90%]">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
