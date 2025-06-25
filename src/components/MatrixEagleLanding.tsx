import * as React from "react";
import { Navbar } from "./Navbar/Navbar";
import { HeroSection } from "./Hero/HeroSection";
import OurValues from "./OurValues/OurValues";
import { FAQSection } from "./FAQSection/FAQSection";
import { Footer } from "./Fotter/Footer";
import TokenomicsSection from "./Tokenomics/TokenomicsSection";
import TeamAndAdvisors from "./TeamAndAdvisor/TeamAndAdvisors";

import Purchase from "./Purchase/Purchase";
import RoadMap from "./RoadMap/Roadmap";
import AgricultureProblemAndSolution from "./AgricultureProblemAndSolution/AgricultureProblemAndSolution";
import ContactForm from "./ContactUs/ContactForm";
import GallerySection from "../GallerySection/GallerySection";
import TrustedParteners from "./TrustedPartners/TrustedParteners";
import VisionMissionSection from "./VisionAndMission/VisionMissionSection";

export const MatrixEagleLanding: React.FC = () => {
  return (
      <div className="w-full ">
    <div className="w-full">
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:gap-x-4 md:justify-between px-0 md:px-10 2xl:px-16">
              <div className="w-[100%] md:w-[50%] ">
                <HeroSection />
              </div>
              <div className="w-[100%] md:w-[50%] flex justify-center md:justify-end">
                <Purchase />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-10">

      <TrustedParteners />
      <VisionMissionSection />
      <OurValues />
      <TokenomicsSection />
      <div className="flex justify-center">

      <div className="w-[84%]">

      <RoadMap />
      </div>
      </div>
      <AgricultureProblemAndSolution />
      <TeamAndAdvisors />
      </div>
      <GallerySection />
      <div className="px-0 md:px-10">

      <ContactForm />
      <FAQSection />
      <Footer />
      </div>
    </div>
  );
};

export default MatrixEagleLanding;
