"use client";
import { useTranslation } from "react-i18next";

export default function AgricultureProblemAndSolution() {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent px-4 py-6 sm:p-8 2xl:mt-[60px] 2xl:pb-[100px] 3xl:mt-[100px] 3xl:pb-[200px]">
      <div className="max-w-4xl 2xl:max-w-[80%] mx-auto space-y-6 sm:space-y-[28px]">
        <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-[40px] 2xl:text-[56px] 3xl:text-[76px] font-extrabold text-center text-[#FFEB31]">
          {t("agriculture.title")}
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl xl:text-[25px] 2xl:text-[30px] 3xl:text-[46px] font-semibold text-center text-white">
          {t("agriculture.subtitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-x-[165px] 2xl:mt-[43px]">
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl border border-[#FFEB31] lg:border-2 3xl:border-4 p-4 sm:p-8 text-center">
            <p className="text-white text-sm sm:text-lg 2xl:text-[28px] 3xl:text-[34px] font-medium">
              {t("agriculture.problems.0")}
            </p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl border border-[#FFEB31] lg:border-2 3xl:border-4 p-4 sm:p-8 text-center">
            <p className="text-white text-sm sm:text-lg 2xl:text-[28px] 3xl:text-[34px] font-medium">
              {t("agriculture.problems.1")}
            </p>
          </div>
        </div>

        <div className="2xl:mt-[70px] bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl p-4 sm:p-8 2xl:py-12 text-center border border-[#00D962] lg:border-2 2xl:border-4">
          <p className="text-white text-sm sm:text-lg 2xl:text-[23px] 3xl:text-[40px] font-medium">
            {t("agriculture.problems.2")}
          </p>
        </div>

        <h2 className="2xl:mt-[81px] text-xl sm:text-2xl md:text-3xl xl:text-[35px] 2xl:text-[47px] 3xl:text-[76px] font-extrabold text-center text-[#FFEB31]">
          {t("agriculture.solution.title")}
        </h2>

        <h3 className="text-white text-sm sm:text-lg 2xl:text-[30px] 3xl:text-[46px] font-medium">
          {t("agriculture.solution.subtitle")}
        </h3>
        <h3 className="2xl:mt-[70px] text-base sm:text-2xl md:text-3xl 2xl:text-[36px] 3xl:text-[56px] font-semibold text-center text-[#FFEB31]">
          {t("agriculture.solution.highlight")}
        </h3>

        <div className="space-y-4 sm:space-y-6 2xl:space-y-[71px] 2xl:mt-[70px]">
          {["0", "1", "2"].map((i) => (
            <div
              key={i}
              className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl p-4 sm:p-8 2xl:py-12 text-center border border-[#FFEB31] lg:border-2 3xl:border-4"
            >
              <p className="text-white text-sm sm:text-lg 2xl:text-[28px] 3xl:text-[40px] font-medium">
                {t(`agriculture.solution.points.${i}`)}
              </p>
            </div>
          ))}
        </div>

        <p className="2xl:mt-[68px] text-base sm:text-2xl md:text-3xl xl:text-[28px] 2xl:text-[32px] 3xl:text-[56px] font-semibold text-center leading-relaxed text-[#FFEB31]">
          {t("agriculture.closing")}
        </p>

        <div className="2xl:mt-[92px] flex justify-center pt-4">
          <button className="bg-[#00D962] hover:bg-[#00D962]/70 text-black font-bold text-sm sm:text-base md:text-lg 2xl:text-[30px] 3xl:text-[50px] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-colors duration-200 border border-[#38B6FF]">
            {t("agriculture.cta")}
          </button>
        </div>
      </div>
    </div>
  );
}
