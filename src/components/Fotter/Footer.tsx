"use client";

import React from 'react';
import { SocialIcons } from './SocialIcons';
import Logo from '../../../public/Logo.svg';
import LanguageSelector from './languageSelector';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 w-full">
      <div className="relative w-full h-auto lg:h-[289px]">
        <img
            src={Logo}
          className="absolute left-0 h-[121px] top-[168px] w-[131px] max-sm:block max-sm:relative max-sm:top-auto max-sm:left-auto max-sm:mx-auto max-sm:my-5 max-sm:h-[92px] max-sm:w-[100px]"
          alt="Matrix Eagle Logo"
        />

        <div className="relative px-48 py-0 mx-auto my-0 w-full max-w-screen-2xl h-[285px] max-md:px-24 max-md:py-0 max-sm:px-5 max-sm:py-0">
          <hr className="mx-auto my-0 w-full h-[1px] bg-gradient-to-r from-[#030B15] via-neutral-400 to-[#030B15] border-0 max-w-[1488px]" />

          <SocialIcons />

          <nav className="flex relative gap-6 justify-center items-center mx-auto mt-6 mb-0 h-[45px] w-[774px] max-md:flex-wrap max-md:gap-4 max-md:w-full  max-sm:gap-3 max-sm:mx-auto max-sm:mt-5 max-sm:mb-0 max-sm:h-auto">
            <a
              href="#"
              className="text-sm font-bold tracking-normal leading-5 text-[#FFA100] hover:text-text-[#FFA100] transition-colors"
            >
              Whitepaper
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-normal leading-5 text-[#FFA100] hover:text-text-[#FFA100] transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-normal leading-5 text-[#FFA100] hover:text-text-[#FFA100] transition-colors"
            >
              How To Buy
            </a>
          </nav>
        <div >
          <p className=" mx-auto mt-0 md:mt-7 mb-0 text-sm tracking-normal leading-5 text-center text-white md:h-[39px] w-[742px] max-md:px-5 max-md:py-0 max-md:w-full max-md:max-w-[600px] max-sm:mx-auto max-sm:mt-5 max-sm:mb-0 max-sm:text-xs max-sm:leading-5">
            Disclaimer: Cryptocurrency may be unregulated in your
            jurisdiction. The value of cryptocurrencies may fluctuate
            Profits may be subject to capital gains or other taxes
            applicable in your jurisdiction
          </p>

          <p className=" mx-auto mt-6 mb-0 text-sm tracking-normal leading-5 text-center text-[#FFA100] h-[19px] w-[275px] max-sm:mx-auto max-sm:mt-4 max-sm:mb-0 max-sm:w-full">
            2025© Matrix Eagle | All Rights Reserved
          </p>
        </div>
        </div>
        <div className="flex pb-10 pt-4 absolute bottom-0 lg:bottom-4 right-0 justify-center items-center h-8 w-[173px] max-md:relative max-md:top-auto max-md:right-auto max-md:mx-auto max-md:mt-5 max-md:mb-0 max-sm:mx-auto max-sm:mt-4 max-sm:mb-0">
            <LanguageSelector /> 
        </div>
      </div>
    </footer>
  );
};
