"use client";
import React, { useState } from "react";

interface ContractAddressProps {
  address: string;
  copyIconSrc: string;
  warningText: string;
}

export const ContractAddress: React.FC<ContractAddressProps> = ({
  address,
  copyIconSrc,
  warningText,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // icon reverts after 1 sec
  };
  return (
    <section className="flex flex-col justify-center items-center  py-3 2xl:py-12  mt-8 2xl:mt-19 w-full text-center border lg:border-2 2xl:border-4 border-[#7FE4FF] border-solid rounded-[29px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-linear-to-r from-[#737373]/38 to-black/38">
      <div className="2xl:py-6 flex flex-col w-full max-md:max-w-full">
        <div className="flex justify-center flex-wrap gap-3.5 items-start text-xs sm:text-sm 2xl:text-[50px] tracking-wide text-white">
          <div className="self-stretch my-auto font-bold ">
            Contract Address:
          </div>
          <div className="flex items-center w-full md:w-auto">
            <div className="w-[90%] md:w-auto overflow-hidden text-ellipsis whitespace-nowrap grow shrink max-md:max-w-full  text-sm sm:text-sm 2xl:text-[38px] 3xl:text-[50px] font-normal">
              {address}
            </div>
            {copied ? (
              <p className="text-xs 2xl:text-4xl">copied</p>
            ) : (
              <img
                src={copyIconSrc} 
                alt={copied ? "Copied!" : "Copy address"}
                onClick={handleCopy}
                className="ml-3 object-contain shrink-0 aspect-square w-[20px] 2xl:w-[34px] 3xl:w-[45px] cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
        <p className="self-center mt-3.5 text-xs sm:text-xs 2xl:text-[25px] tracking-normal text-yellow-500 max-md:max-w-full">
          {warningText}
        </p>
      </div>
    </section>
  );
};
