"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mx-auto mt-9 mb-0 w-full px-4 sm:px-[50px]  2xl:pl-[130px] 2xl:mt-0">
      {/* Title */}
      <h1
        className="
          mt-0 mb-2 lg:mb-11 w-full
          text-3xl
          2xl:text-[66px] 2xl:leading-[108px]
          font-semibold
          text-left text-white
          -tracking-[5%]
          /* 3xl overrides 2xl if present */
          3xl:text-[87px]
        "
      >
        {t("hero.title")} <span className="text-[#7FE4FF]">{t("hero.titleSpan")}</span>
      </h1>

      {/* Description paragraph 1 */}
      <p
        className="
          mt-0 mb-2 leading-normal tracking-normal w-full
          text-base text-left text-white
          max-md:text-sm max-sm:text-sm
          2xl:text-[32px]
          /* 3xl will override 2xl */
          3xl:text-[42px]
          font-light
          lg:mb-[44px] lg:leading-[49px]
        "
      >
        {t("hero.description1")}
      </p>

      {/* Description paragraph 2 */}
      <div>
        <p
          className="
            font-light
            mt-0 mb-2 w-full max-w-[1192px]
            text-base text-left text-white tracking-normal
            max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5
            2xl:text-[32px]
            3xl:text-[42px]
            lg:mb-7 3xl:mb-8
          "
        >
          {t("hero.description2")}
        </p>
      </div>

      {/* Description paragraph 3 */}
      <div>
        <p
          className="
            font-light
            mt-0 mb-7 w-full max-w-[1192px]
            text-base text-left text-white tracking-normal
            max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5
            2xl:text-[32px]
            3xl:text-[42px]
            3xl:mb-8
          "
        >
          {t("hero.description3")}
        </p>
      </div>

      {/* Join call to action */}
      <div className="flex justify-start mb-7">
        <h2 className="text-xl font-bold text-[#7FE4FF] 2xl:text-[39px] 3xl:text-[51px]">
          {t("hero.joinCall")}
        </h2>
      </div>

      {/* Example button (commented out) */}
      {/* 
      <div className="flex gap-20 justify-center mb-8 3xl:mb-7 max-md:gap-5 max-md:items-center">
        <button
          className="w-[271px] h-[68px] relative overflow-hidden rounded-[14px] bg-radial from-[#FFDF00] from-0% to-[#FFA100] bg-opacity-0"
          style={{ background: "linear-gradient(26.6deg, #30304e -3%, #27283c 65.14%)" }}
        >
          <div className="w-[271px] h-[68px] relative left-0 top-0 rounded-[14px]">
            <p className="w-56 absolute left-6 top-1/2 -translate-y-1/2 text-[19px] font-semibold text-center text-black">
              {t("hero.downloadWhitepaper")}
            </p>
          </div>
        </button>
      </div>
      */}
    </section>
  );
};
