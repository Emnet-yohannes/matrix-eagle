import * as React from "react";
import { Navbar } from "./Navbar/Navbar";
import { HeroSection } from "./Hero/HeroSection";
import { PresaleWidget } from "./PresaleWidget";
import { PartnersSection } from "./PartnersSection";
import FeatureAndStability from "./StabilityGrowth/StabilityGrowth";
import TechnologyInfrastructure from "./TechnologyInfrastructure/TechnologyInfrastructure";
import OurValues from "./OurValues/OurValues";
import RoadmapTimeline from "./RoadMap/RoadmapTimeline";
import { KeyObjectives } from "./KeyObjectives/KeyObjectives";
import { FAQSection } from "./FAQSection/FAQSection";
import { Footer } from "./Fotter/Footer";
import TokenomicsSection from "./Tokenomics/TokenomicsSection";

export const MatrixEagleLanding: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section with background */}
      <div className="w-full bg-[url('/herobg1.svg')] bg-contain bg-no-repeat ">
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="w-full">
            <HeroSection />
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

      {/* Main Sections */}
      <PartnersSection />
      <FeatureAndStability />
      <TechnologyInfrastructure />
      <OurValues />
      <TokenomicsSection />
      <RoadmapTimeline />

      {/* Footer Section */}
      <KeyObjectives />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default MatrixEagleLanding;
