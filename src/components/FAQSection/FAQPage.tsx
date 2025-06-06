"use client";

import React from 'react';
import { KeyObjectives } from '../KeyObjectives/KeyObjectives';
import { FAQSection } from './FAQSection';
import { Footer } from '../Fotter/Footer';

export const FAQPage: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-black">
      <KeyObjectives />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default FAQPage;
