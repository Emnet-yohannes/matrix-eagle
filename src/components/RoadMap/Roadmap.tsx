import { CheckCircle } from "../icons/CheckCircle";

const timelineData = [
  {
    quarter: "Q1 2025",
    direction: "left",
    points: [
      "Build the platform design and tokenomics",
      "Recruit the core team",
    ],
    image: "/roadmap/roadmap1.png",
  },
  {
    quarter: "Q2 2025",
    direction: "right",
    points: [
      "Launch presale of Etata token",
      "Begin marketing and community efforts",
      "Onboard initial farm partners",
    ],
    image: "/roadmap/roadmap2.png",
  },
  {
    quarter: "Q3 2025",
    direction: "left",
    points: [
      "Launch staking and reward programs",
      "Release MVP of the platform",
    ],
    image: "/roadmap/roadmap3.png",
  },
  {
    quarter: "Q4 2025",
    direction: "right",
    points: [
      "Expand partnerships with farms and suppliers",
      "Roll out mobile experience and new features",
    ],
    image: "/roadmap/roadmap4.png",
  },
];

export default function RoadMap() {
  return (
    <div className="bg-transparent text-white py-4 md:py-8 2xl:py-12 px-4">
      <div className="max-w-6xl 2xl:max-w-[60%] mx-auto">
        {/* Header */}
        <h1 className="text-xl  md:text-3xl  2xl:text-7xl text-center font-bold mb-0 md:mb-8 2xl:mb-16 text-[#7fe4ff]">
          Roadmap
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line for md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full z-0" />

          {timelineData.map((item) => (
            <div
              key={item.quarter}
              className="relative 2xl:mb-20 flex flex-col py-10"
            >
              {/* Timeline Circle */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 z-10 rounded-full border-4 border-[#7FE4FF] bg-[#7FE4FF] items-center justify-center">
                <div className="w-5 h-5">
                  <CheckCircle />
                </div>
              </div>

              {/* Mobile version */}
              <div className="md:hidden flex flex-col items-center gap-6">
                <div className="rounded-2xl overflow-hidden ">
                  <img
                    src={item.image}
                    alt={`${item.quarter} illustration`}
                    className="w-[250px] h-[250px] object-cover"
                  />
                </div>
                <div className="text-center max-w-xs">
                  <h2 className="text-lg md:text-2xl 2xl:text-2xl font-bold mb-2 text-[#7fe4ff]">
                    {item.quarter}:
                  </h2>
                  <ul className="text-base space-y-1">
                    {item.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop version */}
              <div className="hidden md:flex mt-20 md:mt-28 relative flex-col xl:flex-row items-center justify-between gap-2 md:gap-4 2xl:gap-8">
                {item.direction === "left" ? (
                  <>
                    {/* Text Left */}
                    <div className="w-full xl:w-1/2 text-left">
                      <h2 className="text-lg md:text-xl 2xl:text-3xl font-bold mb-4 text-[#7fe4ff]">
                        {item.quarter}:
                      </h2>
                      <ul className="text-sm md:text-base 2xl:text-lg space-y-2">
                        {item.points.map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Right */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 xl:pl-8">
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.quarter} illustration`}
                          className="w-[200px] 2xl:w-[400px] h-[200px] border-4 2xl:mt-16 2xl:h-[260px] object-cover"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image Left */}
                    <div className="left-1/2 transform -translate-x-1/2 relative">
                      <div className="rounded-2xl overflow-hidden ">
                        <img
                          src={item.image}
                          alt={`${item.quarter} illustration`}
                          className="w-[200px] 2xl:w-[400px] h-[200px] 2xl:h-[260px] object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Right */}
                    <div className="w-full xl:w-1/2 xl:pl-8 flex justify-end">
                      <div>
                        <h2 className="text-lg md:text-xl 2xl:text-3xl font-bold mb-4 text-[#7fe4ff]">
                          {item.quarter}:
                        </h2>
                        <ul className="text-sm md:text-base 2xl:text-lg space-y-2">
                          {item.points.map((point, idx) => (
                            <li key={idx}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-0 md:mt-8 2xl:mt-12 flex justify-center">
          <div className="w-full max-w-4xl text-center text-white space-y-6 text-lg">
          <p className="text-sm md:text-base 2xl:text-lg">
              This roadmap provides a clear step-by-step plan for building and
              growing the project. It starts with setting up the foundation,
              platform design, team, and tokenomics and moves toward launching
              the presale, marketing, and farming partnerships.
            </p>
            <p>
              Each quarter focuses on real progress like launching staking,
              expanding features, and growing community reach. By following this
              timeline, Matrix Eagle can grow steadily and build trust with
              investors. It shows we have a clear vision and are ready to
              deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
