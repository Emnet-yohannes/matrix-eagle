"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export const AgricultureProblemAndSolution: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center px-6 py-10 w-full 2xl:mt-12">
      <div className="flex flex-col gap-y-10 items-center md:w-[75%]">
        {/* Problem Section */}
        <div className="max-w-full text-xl font-medium tracking-normal leading-6 text-center text-white max-md:px-5 max-md:py-0 max-md:w-full">
          <h1 className="text-2xl mb-7 lg:text-[32px] 2xl:text-[40px] font-medium text-[#FFA100] max-md:text-2xl max-sm:text-xl">
            {t("agriculture.problemTitle")}
          </h1>
          <div className="text-base 2xl:text-[20px] font-medium">
            {t("agriculture.problemIntro")}
          </div>
          <div className="flex text-left">
            <p className="mt-4 text-sm 2xl:text-[15px] 2xl:max-w-[550px] font-normal text-white max-md:text-lg max-sm:text-base max-sm:leading-5">
              • {t("agriculture.problem1")} <br />
              • {t("agriculture.problem2")} <br />
              • {t("agriculture.problem3")} <br />
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="flex flex-col items-center max-w-full text-xl font-medium tracking-normal leading-6 text-center text-white max-md:px-5 max-md:py-0 max-md:w-full">
          <h1 className="text-lg 2xl:text-[40px] font-medium text-[#FFA100] max-md:text-2xl max-sm:text-xl">
            {t("agriculture.solutionTitle")}
          </h1>
          <div className="text-base 2xl:text-[20px] font-medium">
            {t("agriculture.solutionIntro")}
          </div>
          <div className="flex text-left">
            <p className="mt-4 text-sm 2xl:text-[15px] 2xl:max-w-[550px] font-normal text-white max-md:text-lg max-sm:text-base max-sm:leading-5">
              • {t("agriculture.solution1")} <br />
              • {t("agriculture.solution2")} <br />
              • {t("agriculture.solution3")} <br />
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="flex justify-center">
          <h1 className="text-center text-lg 2xl:text-2xl font-medium text-[#FFA100]">
            {t("agriculture.solutionSummary")}
          </h1>
        </div>
      </div>
    </section>
  );
};
