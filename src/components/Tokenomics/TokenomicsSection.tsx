"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { TokenomicsHeader } from "./TokenomicsHeader";
import { BasicTokenInfo } from "./BasicTokenInfo";
import { ContractAddress } from "./ContractAddress";
import { TokenDistribution } from "./TokenDistribution";
import { TokenomicsImage } from "./TokenomicsImage";
import { TotalSupply } from "./TotalSupply";
interface TokenomicsSectionProps {
  title?: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenDecimal?: number;
  totalTokens?: string;
  contractAddress?: string;
  copyIconSrc?: string;
  warningText?: string;
  distributions?: Array<{
    label: string;
    percentage: string;
  }>;
  SecondDistributions?: Array<{
    label: string;
    percentage: string;
  }>;
}

export const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({
  // title,
  tokenName = "ETATA",
  tokenSymbol = "ETATA",
  tokenDecimal = 9,
  totalTokens = "100,000,000",
  contractAddress = "0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c",
  copyIconSrc = "/copyIcon.svg",
  // warningText,
  distributions = [
    { label: "privateSale", percentage: "5.33%" },
    { label: "ecosystem", percentage: "15%" },
    { label: "liquidity", percentage: "10%" },
    { label: "publicSale", percentage: "10.18%" },
  ],
  SecondDistributions = [
    { label: "staking", percentage: "28%" },
    { label: "contingency", percentage: "15%" },
    { label: "presale", percentage: "2%" },
    { label: "partnersFounders", percentage: "14.49%" },
  ],
}) => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col rounded-[29px] w-full items-center">
      <div className="p-4 w-full 2xl:w-[70%]">
        <TokenomicsHeader title={t("tokenomics.title")} />

        <BasicTokenInfo
          name={tokenName}
          symbol={tokenSymbol}
          decimal={tokenDecimal}
          totalTokens={totalTokens}
        />

        <ContractAddress
          address={contractAddress}
          copyIconSrc={copyIconSrc}
          warningText={t("tokenomics.warningText")}
        />

        <TokenDistribution
          distributions={distributions.map((d) => ({
            label: t(`tokenomics.distribution.${d.label}`),
            percentage: d.percentage,
          }))}
        />
        <TokenDistribution
          distributions={SecondDistributions.map((d) => ({
            label: t(`tokenomics.distribution.${d.label}`),
            percentage: d.percentage,
          }))}
        />

        <TotalSupply
          totalSupply={t("tokenomics.totalSupply")}
          description={t("tokenomics.description")}
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[90%] flex flex-col items-center ">
          <div className="relative flex ml-15 md:ml-40 2xl:ml-80">
            {/* <div className="absolute top-[60px] inset-0 z-20 w-[40%] h-full">
              <ThreeDNetwork />
            </div> */}
            <TokenomicsImage
              src="/tokenomics_graph.svg"
              alt={t("tokenomics.imageAlt")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TokenomicsSection;
