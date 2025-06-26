"use client";
import React from "react";
import { useTranslation } from "react-i18next";

interface DistributionItem {
  label: string;
  percentage: string;
}

interface TokenDistributionProps {
  distributions: DistributionItem[];
}

export const TokenDistribution: React.FC<TokenDistributionProps> = ({
  distributions,
}) => {
  const { t } = useTranslation();

  return (
    <section className="py-3 2xl:py-12 mt-8 2xl:mt-28 w-full border lg:border-2 2xl:border-4 border-[#7FE4FF] border-solid rounded-[29px] md:mt-10 bg-linear-to-r from-[#737373]/38 to-black/38">
      <div className="flex flex-col gap-x-5 md:flex-row py-3">
        <div className="lg:border-r-[4px] 2xl:h-[80px] border-r-[#7FE4FF] md:ml-0 md:w-full flex items-center justify-center">
          <div className="text-xs sm:text-sm 2xl:text-[38px] 3xl:text-[50px] font-semibold tracking-wide text-center text-white">
            {t(distributions[0].label)}: {distributions[0].percentage}
          </div>
        </div>
        <div className="lg:border-r-[4px] 2xl:h-[80px] border-r-[#7FE4FF] md:ml-0 md:w-full flex items-center justify-center">
          <div className="text-xs sm:text-sm 2xl:text-[38px] 3xl:text-[50px] font-semibold tracking-wide text-center text-white">
            {t(distributions[1].label)}: {distributions[1].percentage}
          </div>
        </div>
        <div className="lg:border-r-[4px] 2xl:h-[80px] border-r-[#7FE4FF] md:ml-0 md:w-full flex items-center justify-center">
          <div className="text-xs sm:text-sm 2xl:text-[38px] 3xl:text-[50px] font-semibold tracking-wide text-center text-white">
            {t(distributions[2].label)}: {distributions[2].percentage}
          </div>
        </div>
        <div className="md:ml-0 md:w-full flex items-center justify-center">
          <div className="text-xs sm:text-sm 2xl:text-[38px] 3xl:text-[50px] font-semibold tracking-wide text-center text-white">
            {t(distributions[3].label)}: {distributions[3].percentage}
          </div>
        </div>
      </div>
    </section>
  );
};
