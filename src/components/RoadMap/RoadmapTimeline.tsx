"use client";
import * as React from "react";
import { PhaseSection } from "./PhaseSection";
import { PhaseIndicator } from "./PhaseIndicator";
import { PhaseImage } from "./PhaseImage";

export default function RoadmapTimeline() {
  const roadmapData = [
    {
      title: "Phase 1: Technical and Legal Preparation (Q2 2025)",
      points: [
        "Technical architecture",
        "Smart contract development",
        "Legal framework for decentralization and governance",
        "Simulation/profile breakdown",
      ],
      image:
        "/phase2.png",
    },
    {
      title: "Phase 2: Community Building and Education (Q3-Q4 2025)",
      points: [
        "Ambassador & reward campaigns",
        "Content creation, education, workshops",
        "Establishing multilingual communities",
        "Community-led initiatives and incentives",
      ],
      image:
        "/phase1.png",
    },
    {
      title: "Phase 3: Token Issuance and Fundraising (Q3-Q4 2025)",
      points: [
        "Utility token $FARM",
        "$FARM Private Sale & Fundraising for DAO in multiple tranches",
        "Establishing initial DAO treasury",
        "Token listing on DEXs",
      ],
      image:
        "/phase3.png",
    },
    {
      title:
        "Phase 4: Activation of Investment Programs (Productive Staking) (Q4 2025 - Q1 2026)",
      points: [
        "Following $FARM listing – deploy core farming society features",
        "Land registry, staking, governance, on-chain reputation",
        "Expansion of farming assets and partner projects",
      ],
      image:
        "/phase4.png",
    },
    {
      title: "Phase 5: Traceability and Automation with Oracles (Q1 2026)",
      points: [
        "Use of simulation and research",
        "Biological protocol integrations",
        "DeSci partners and knowledge translation pipelines",
      ],
      image:
        "/phase5.png",
    },
    {
      title: "Phase 6: Ecosystem Consolidation and Expansion (Q2 2026 onwards)",
      points: [
        "Ongoing token incentives",
        "Private/public partnerships and stablecoin integrations",
        "New market expansion",
      ],
      image:
        "/phase6.png",
    },
  ];
  return (
    <div>
      <div className="w-full mt-[152px] mb-[32px] px-2 sm:px-8  ">
        <div className="text-[#FFA100] text-2xl lg:text-[32px] 2xl:text-[64px] w-full flex justify-center">
          ROAD MAP
        </div>
        <div className="flex justify-center text-base lg:text-lg 2xl:text-[64px] text-center">
          Roadmap outlines the Steps and Process of our tokens and company’s
          project, ensuring the long-term success and stability of the Etata
          project.
        </div>
      </div>
      <div className="relative w-full  py-10 text-white">
        {/* Vertical Line */}
        <div className="my-3 hidden sm:block absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[#FFFFFF]" />

        <div className="space-y-20  mx-auto">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className={` w-full  relative flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row justify-center"
                  : "md:flex-row-reverse"
              } items-center gap-6`}
            >
              {/* Dot */}
              <div className="hidden sm:block absolute left-1/2  -translate-y-11 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFA100] z-10 border-4 border-[#FFA100]" />

              {/* Content */}
              <div className="  md:w-1/2 space-y-2 text-center md:text-left  flex flex-col items-center">
                <div className="flex w-[70%] flex-col  items-center">
                  <h3 className="text-xl font-semibold text-[#FFA100] text-center">
                    {phase.title}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {phase.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={phase.image}
                  alt={phase.title}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
