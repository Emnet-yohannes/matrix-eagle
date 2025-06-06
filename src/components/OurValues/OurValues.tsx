import MediaCard from "../MediaCard/MediaCard";

const OurValues = () => {
  const values = [
    {
      image: "/ourValues6.svg",
      title: "SUSTAINABILITY  ",
      description:
        "Cherish the Environment Sustainable Growth Preserve for the Future",
    },

    {
      image: "/ourValues5.svg",
      title: "RESILIENCE",
      description: "Adapt and Overcome Long-term Vision Strength in Stability",
    },
    {
      image: "/ourValues1.svg",
      title: "INNOVATION",
      description: "Pioneer Change Embrace Technology Continuous Improvement",
    },
    {
      image: "/ourValues3.svg",
      title: "INTEGRITY",
      description: "Transparent Operations Ethical Practices Accountability",
    },

    {
      image: "/ourValues2.svg",
      title: "COMMUNITY",
      description:
        "Empower Locals Build Strong Relationships Inclusive Success",
    },

    {
      image: "/ourValues4.svg",
      title: "EXCELLENCE",
      description: "Quality Commitment Achieve Greatness Lead by Example",
    },
  ];
  return (
    <div className="bg-[url('/herobg3.svg')] bg-no-repeat bg-[length:100%_auto] bg-[center_-40px] md:bg-[center_-130px] w-full min-h-screen">

      <div className="w-full text-center py-[20px] flex justify-center ">
        <p className="bg-[#F6B38732] text-[#FFA100] text-xl md:text-2xl 2xl:text-[38px] py-1 px-4 rounded-[20px]">
          Our Values
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-flow-col grid-rows-6 md:grid-rows-2 gap-[20px] 2xl:gap-[40px] px-3 md:px-0 md:w-[80%]">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-[22px] h-[500px] flex justify-center items-center bg-[#030B15] border border-white/20  mb-4"
            >
              <MediaCard
                imageUrl={value.image}
                title={value.title}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
