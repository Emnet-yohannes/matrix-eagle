export default function TeamAndAdvisors() {
  const teamMembers = [
    {
      name: "Bonner Gibbs",
      title: "Founder & CEO at Matrix Eagle",
      image: "/teamMemberImages/CEO.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Hector",
      title: "Co-founder at Matrix Eagle",
      image: "/teamMemberImages/coFounder.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Eder Castro",
      title: "Strategic Advisor - Finance & Operations",
      image: "/teamMemberImages/strategicAdvisor.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "José Antonio Vega Henao",
      title: "Food engineering & crops planning expert & curing plants",
      image: "/teamMemberImages/foodEngineer.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Aryan (Usama)",
      title: "Project Manager & Senior Marketing Executive",
      image: "/teamMemberImages/projectManager.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Marko Milanović",
      title: "Blockchain Developer",
      image: "/teamMemberImages/blockchainDeveloper.png",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-transparent  py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl 2xl:max-w-[86%] mx-auto">
        <h1 className="text-[#7fe4ff] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-center mb-12 sm:mb-16">
          Team and Advisors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl 2xl:max-w-[60%] mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-transparent">
              <div className="p-0">
                <div className="relative mb-3 sm:mb-4 border bg-gradient-to-r from-[#737373]/30 to-[#000000]/70 border-[#7FE4FF] rounded-2xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 md:h-80 rounded-2xl object-cover"
                  />
                </div>
                <div className="flex justify-between items-start gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-[#7fe4ff] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#ffffff] text-sm sm:text-base md:text-lg leading-relaxed max-w-[280px] md:max-w-full">
                      {index === 0 && member.title.includes("Matrix Eagle") ? (
                        <>
                          {member.title.replace(" at Matrix Eagle", " at ")}
                          <span className="text-[#7fe4ff]">Matrix Eagle</span>
                        </>
                      ) : (
                        member.title
                      )}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-1">
                    <a
                      href={member.twitter}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-[#7fe4ff] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-[#7fe4ff] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
