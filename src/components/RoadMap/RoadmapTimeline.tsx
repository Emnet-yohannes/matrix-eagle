"use client";

import { useTranslation } from "react-i18next";
import { ThreeDNetwork } from "../Animated3dLines/ThreeDNetwork";

export default function RoadmapTimeline() {
  const { t } = useTranslation();

  const roadmapData = [
    {
      title: t("roadmap.q1.title"),
      points: [
        t("roadmap.q1.point1"),
        t("roadmap.q1.point2"),
      ],
      image: "/phase2.png",
    },
    {
      title: t("roadmap.q2.title"),
      points: [
        t("roadmap.q2.point1"),
        t("roadmap.q2.point2"),
        t("roadmap.q2.point3"),
      ],
      image: "/phase1.png",
    },
    {
      title: t("roadmap.q3.title"),
      points: [
        t("roadmap.q3.point1"),
        t("roadmap.q3.point2"),
        t("roadmap.q3.point3"),
      ],
      image: "/phase3.png",
    },
    {
      title: t("roadmap.q4.title"),
      points: [
        t("roadmap.q4.point1"),
        t("roadmap.q4.point2"),
        t("roadmap.q4.point3"),
      ],
      image: "/phase4.png",
    },
  ];

  return (
    <div>
      <div className="w-full mt-[90px] lg:mt-[152px] 2xl:mt-[143px] mb-[32px] px-2 sm:px-8">
        <div className="relative">
          <div className="absolute top-120 inset-0 z-20 w-[100%]">
            <ThreeDNetwork />
          </div>
        </div>

        <div className="text-[#FFA100] font-bold text-2xl lg:text-[32px] 2xl:text-[64px] w-full flex justify-center">
          {t("roadmap.title")}
        </div>

        <div className="flex justify-center text-base lg:text-lg 2xl:text-[28px] font-semibold text-center 2xl:mt-10">
          {t("roadmap.subtitle")}
        </div>
      </div>

      <div className="relative w-full py-10 text-white">
        <div className="my-3 hidden sm:block absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[#FFFFFF]" />

        <div className="space-y-20 mx-auto">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className={`w-full relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row justify-center" : "md:flex-row-reverse"
              } items-center gap-6`}
            >
              <div className="hidden sm:block absolute left-1/2 -translate-y-11 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFA100] z-10 border-4 border-[#FFA100]" />

              <div className="md:w-1/2 space-y-2 text-center md:text-left flex flex-col items-center">
                <div className="flex w-[70%] flex-col items-center 2xl:text-[28px]">
                  <h3 className="text-xl font-semibold text-[#FFA100] text-center 2xl:mb-[22px] 2xl:text-[32px]">
                    {phase.title}
                  </h3>
                  <ul className="[&>li]:pl-5 [&>li]:-indent-5 list-disc text-left text-sm text-gray-300 font-semibold 2xl:text-[28px]">
                    {phase.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

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

      <div className="flex justify-center mt-8">
        <div className="w-full md:w-[50%] text-center text-sm lg:text-lg px-2 md:px-0">
          {t("roadmap.description")}
        </div>
      </div>
    </div>
  );
}
