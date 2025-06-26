"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { SocialIcons } from "./SocialIcons";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t("footer.whitepaper"), href: "#" },
    { label: t("footer.howToBuy"), href: "#" },
  ];

  return (
    <footer className="relative mt-4  md:mt-20 w-full">
      <div className="relative w-full h-auto sm:h-auto 2xl:h-[529px]">
        <div className="relative w-full px-5 sm:px-24 md:px-48 mx-auto pb-4 pt-0 sm:py-0 h-auto sm:h-[285px]">
          {/* Social Icons */}
          <SocialIcons />

          {/* Links */}
          <nav className="mt-6 flex justify-center items-center gap-4 sm:gap-6 2xl:gap-x-[38px] sm:h-[45px] sm:w-[36%] mx-auto">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs sm:text-sm 2xl:text-[26px] 3xl:text-[32px] font-bold text-white hover:text-white/70 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Disclaimer */}
          <div className="mt-4 sm:mt-7 text-center px-2">
            <p className="text-xs sm:text-sm 2xl:text-[28px] 3xl:text-[35px] text-white tracking-normal leading-relaxed">
              {t("footer.disclaimer1")} <br />
              {t("footer.disclaimer2")} <br />
              {t("footer.disclaimer3")}
            </p>

            <p className="mt-4 text-xs sm:text-sm 2xl:text-[25px] text-[#7FE4FF] font-medium w-full sm:w-auto">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
