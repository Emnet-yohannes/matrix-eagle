"use client";
import { useTranslation } from "react-i18next";
import { ThreeDNetwork } from "../Animated3dLines/ThreeDNetwork";
import { TeamMember } from "./TeamMember";

export function TeamAndAdvisors() {
  const { t } = useTranslation("team");

  const teamMembers = [
    {
      name: "John Doe",
      role: t("team.member1.role"),
      description: t("team.member1.description"),
      imageUrl: "Blockchain.png",
    },
    {
      name: "Jane Smith",
      role: t("team.member2.role"),
      description: t("team.member2.description"),
      imageUrl: "Blockchain.png",
    },
    {
      name: "Carlos Perez",
      role: t("team.member3.role"),
      description: t("team.member3.description"),
      imageUrl: "Blockchain.png",
    },
    {
      name: "Maria Garcia",
      role: t("team.member4.role"),
      description: t("team.member4.description"),
      imageUrl: "Blockchain.png",
    },
    {
      name: "David Lee",
      role: t("team.member5.role"),
      description: t("team.member5.description"),
      imageUrl: "Blockchain.png",
    },
    {
      name: "Sophia Chen",
      role: t("team.member6.role"),
      description: t("team.member6.description"),
      imageUrl: "Blockchain.png",
    },
  ];

  return (
    <section className="relative flex mt-40 flex-col items-center text-4xl font-medium text-amber-500 rounded-none">
      <div className="absolute top-40 inset-0 z-20 w-[40%]">
        <ThreeDNetwork />
      </div>

      <div className="w-full sm:w-[60%]">
        <h1 className="text-[#FFA100] font-bold text-2xl lg:text-[32px] 2xl:text-[64px] w-full flex justify-center">
          {t("team.sectionTitle")}
        </h1>

        <div className="grid gap-5 mt-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-3">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              role={member.role}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamAndAdvisors;
