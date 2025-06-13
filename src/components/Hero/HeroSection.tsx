import * as React from "react";
import { useTranslation } from "react-i18next";
// import { RocketIcon } from "../icons/RocketIcon";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mx-auto mt-9 mb-0 w-full  max-md:px-5 max-md:py-0 2xl:mt-22">
      <h1 className="mx-auto mt-0 mb-11 w-full text-3xl 2xl:text-5xl font-bold tracking-wide text-center text-white leading-[72px] max-w-[1028px] max-md:mb-8 max-md:text-4xl max-md:leading-[54px] max-sm:mb-6 max-sm:text-3xl max-sm:leading-10">
        {t("hero.title")}
      </h1>
      <p className="mx-auto mt-0 mb-[44px] w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px] max-md:mb-24 max-md:text-sm max-md:leading-5 max-sm:mb-20 max-sm:text-sm max-sm:leading-5 2xl:text-[22px]">
        {t("hero.description1")}
      </p>
      <div className="relative flex gap-20 justify-center mb-8 2xl:mb-7  max-md:gap-5 max-md:items-center ">
        <button
          className="w-[271px] h-[68px] relative overflow-hidden rounded-[14px] bg-radial from-[#FFDF00] from-0% to-[#FFA100] bg-opacity-0"
          style={{
            background:
              "linear-gradient(26.6deg, #30304e -3%, #27283c 65.14%);",
          }}
        >
          <div className="w-[271px] h-[68px] relative  rounded-[14px] ">
            <p className="w-56  absolute left-6  top-1/2 -translate-y-1/2 text-[19px] font-semibold text-center text-black">
              {t("hero.connectWallet")}
            </p>
          </div>
        </button>
      </div>
      <div>
        <p className="2xl:text-[22px] mx-auto mt-0 mb-7 2xl:mb-8 w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px]  max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5">
          {t("hero.description2")}
        </p>
      </div>
      <div>
        <p className="2xl:text-[22px] mx-auto mt-0 mb-7 2xl:mb-8 w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px]  max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5">
          {t("hero.description3")}
        </p>
      </div>
      <div className="flex justify-center mb-7 2xl:mb-8">
        <h2 className="text-xl 2xl:text-[28px] font-bold text-[#FFA100]">
          {t("hero.joinCall")}
        </h2>
      </div>

      <div className="flex gap-20 justify-center mb-8 2xl:mb-7  max-md:gap-5 max-md:items-center ">
        <button
          className="w-[271px] h-[68px] relative overflow-hidden rounded-[14px] bg-radial from-[#FFDF00] from-0% to-[#FFA100] bg-opacity-0"
          style={{
            background:
              "linear-gradient(26.6deg, #30304e -3%, #27283c 65.14%);",
          }}
        >
          <div className="w-[271px] h-[68px] relative left-0 top-0 rounded-[14px]">
            <p className="w-56  absolute left-6  top-1/2 -translate-y-1/2 text-[19px] font-semibold text-center text-black">
            {t("hero.downloadWhitepaper")}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};
