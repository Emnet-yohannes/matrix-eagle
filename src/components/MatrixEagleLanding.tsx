import * as React from "react";
import { Navbar } from "./Navbar/Navbar";
import { HeroSection } from "./Hero/HeroSection";
import { PresaleWidget } from "./PresaleWidget";
import OurValues from "./OurValues/OurValues";
import RoadmapTimeline from "./RoadMap/RoadmapTimeline";
import { AgricultureProblemAndSolution } from "./AgricultureProblemAndSolution/AgricultureProblemAndSolution";
import { FAQSection } from "./FAQSection/FAQSection";
import { Footer } from "./Fotter/Footer";
import TokenomicsSection from "./Tokenomics/TokenomicsSection";
import Vision from "./VisionAndMission/VisionAndMission";
import TeamAndAdvisors from "./TeamAndAdvisor/TeamAndAdvisors";
import { PartnersSection } from "./PartnersSection";
import { ThreeDNetwork } from "./Animated3dLines/ThreeDNetwork";

export const MatrixEagleLanding: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section with background Image*/}
      <div className="w-full bg-[url('/tech-bg.gif')] bg-contain bg-no-repeat ">
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="w-full">
            <HeroSection />
            <div className="relative">
              <div className="absolute inset-0 z-20 w-[40%] h-full ">
                <ThreeDNetwork />
              </div>
              <PresaleWidget
                tokenName="Etata"
                tokenSymbol="ETATA"
                launchPrice={0.25}
                presalePrice={0.2}
                raisedAmount={49085538}
                goalAmount={56000000}
                soldTokens={93425401}
                totalTokens={100000000}
                conversionRate={1 / 0.2} // 1 USD gives 5 tokens
              />
            </div>
          </div>
        </div>
      </div>
      <Vision />
      <OurValues />
      <TokenomicsSection />
      <RoadmapTimeline />
      {/* Footer Section */}
      <AgricultureProblemAndSolution />
      <TeamAndAdvisors />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default MatrixEagleLanding;
