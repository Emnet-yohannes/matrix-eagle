import * as React from "react";
import { RocketIcon } from "../icons/RocketIcon";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative mx-auto mt-9 mb-0 w-full  max-md:px-5 max-md:py-0 max-md:mt-12">
      <h1 className="mx-auto mt-0 mb-11 w-full text-3xl 2xl:text-5xl font-bold tracking-wide text-center text-white leading-[72px] max-w-[1028px] max-md:mb-8 max-md:text-4xl max-md:leading-[54px] max-sm:mb-6 max-sm:text-3xl max-sm:leading-10">
        Revolutionizing Food Production Through Blockchain Innovation
      </h1>
      <p className="mx-auto mt-0 mb-[44px] w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px] max-md:mb-24 max-md:text-sm max-md:leading-5 max-sm:mb-20 max-sm:text-sm max-sm:leading-5">
        Revolutionizing Food Production Through Blockchain Innovation In a world
        where technology meets tradition, Matrix Eagle stands as a beacon of
        progress and sustainability. Partnering with Puro Finca and Essentium
        Labs, Matrix Eagle is pioneering a transformative approach to food
        production through the power of tokenization. Our mission is rooted in
        sustainability, community empowerment, and technological advancement,
        striving to redefine the narrative of prosperity across global
        agricultural practices.
      </p>
      <h2 className="mx-auto mt-0 mb-[43px] w-full text-3xl 2xl:text-5xl font-bold tracking-wide text-center text-white leading-[72px] max-w-[608px]  max-md:text-4xl max-md:leading-[54px]  max-sm:text-3xl max-sm:leading-10">
        Introducing Etata Token
      </h2>
      <p className="mx-auto mt-0 mb-15 2xl:mb-28 w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px]  max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5">
        At the heart of our operation lies the Etata token, a dynamic blockchain
        innovation designed to fund and facilitate the scalable and sustainable
        production of sweet potatoes in Colombia. This token represents more
        than just a financial instrument; it embodies our commitment to
        eco-friendly practices and community growth. Each Etata token is backed
        by real-world assets (RWA) — the tangible hectares of sweet potatoes
        cultivated under our care. This backing not only assures the intrinsic
        value of each token but also aligns investor interests with the
        long-term viability and ethical integrity of our operations.
      </p>
      <div className=" flex gap-20 justify-center mb-8 2xl:mb-20 max-md:flex-col max-md:gap-5 max-md:items-center max-md:mb-12">
        <a
          href="#whitepaper"
          className="relative w-44 rounded-2xl shadow-md cursor-pointer bg-gradient-to-r from-[#F6B387] to-[#F0B90BB2] bg-opacity-0 h-[50px] max-sm:h-11 max-sm:w-[150px] group"
        >
          <div className="absolute rounded-2xl h-[50px] left-[-53px] top-[-3px] w-[282px]" />
          <div className="flex absolute justify-center items-center h-10 rounded-2xl shadow-2xl left-[3px] top-[5px] w-[170px] max-sm:w-36 max-sm:h-9">
            <div className="flex absolute left-0 -top-0.5 justify-center items-center py-2.5 pr-5 pl-5 rounded-2xl h-[45px] w-[170px] max-sm:px-5 max-sm:py-2 max-sm:w-36 max-sm:h-10 bg-gradient-to-r from-[#455666] to-[#222222] group-hover:from-[#F0B90BB2] group-hover:to-[#222222] transition-all duration-300">
              <div className="flex absolute top-2.5 gap-1.5 justify-center items-start h-[25px] left-[22px] w-[126px] max-sm:top-2 max-sm:left-[18px] max-sm:w-[108px]">
                <RocketIcon className="w-6 h-6 flex-shrink-0" />
                <span className="text-sm lg:text-base tracking-normal leading-6 text-center text-white h-[23px] w-[97px] max-sm:w-20 ">
                  Whitepaper
                </span>
              </div>
            </div>
          </div>
        </a>
        
        <a
          href="#invest"
          className="relative w-44 rounded-2xl shadow-md cursor-pointer bg-gradient-to-r from-[#F6B387] to-[#F0B90BB2] bg-opacity-0 h-[50px] max-sm:h-11 max-sm:w-[150px] group"
        >
          <div className="absolute rounded-2xl h-[50px] left-[-53px] top-[-3px] w-[282px]" />
          <div className="flex absolute justify-center items-center h-10 rounded-2xl shadow-2xl left-[3px] top-[5px] w-[170px] max-sm:w-36 max-sm:h-9">
              <div className="flex absolute left-0 -top-0.5 justify-center items-center py-2.5 pr-5 pl-5 rounded-2xl h-[45px] w-[170px] max-sm:px-5 max-sm:py-2 max-sm:w-36 max-sm:h-10 bg-gradient-to-r from-[#455666] to-[#222222] group-hover:from-[#F0B90BB2] group-hover:to-[#222222] transition-all duration-300">
              <div className="flex absolute top-2.5 gap-1.5 justify-center items-start h-[25px] left-[22px] w-[126px] max-sm:top-2 max-sm:left-[18px] max-sm:w-[108px]">
                <RocketIcon className="w-6 h-6 flex-shrink-0" />
                <span className="text-sm lg:text-base tracking-normal leading-6 text-center text-white h-[23px] w-[97px] max-sm:w-20">
                  Invest now
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
