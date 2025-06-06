const TechnologyInfrastructure = () => {
  return (
    <div className=" bg-[url('/technologyInfrastructure1.svg')] bg-cover bg-center  w-full h-[709px] ">
      <div className="flex justify-center w-full  pt-6  text-xl md:text-2xl 2xl:text-[50px]">
        <p className="bg-[#F6B38732] text-[#FFA100]  py-1 px-4 rounded-[20px]">
          Technological Infrastructure
        </p>
      </div>
      <div className="px-3 md:px-0 flex pt-[50px] h-full  md:justify-around flex-col md:flex-row">
        <div className="flex flex-col items-center ">
          <div className="text-[20px] font-bold  2xl:text-[28px] mb-4 md:mb-[30px]">
            1. Blockchain Platform
          </div>
          <div className="text-sm 2xl:text-[22px] font-normal">
            <p>• BEP-20 Standard</p>
            <p>• Compatibility</p>
            <p>• Smart Contracts</p>
            <p>• Oracles</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <div className="text-[20px] font-bold  2xl:text-[28px] mb-4 md:mb-[30px] text-center">
            2. Security and Technical Architecture
          </div>
          <div className="text-sm 2xl:text-[22px] font-normal ">
            <p>• BEP-20 Blockchain</p>
            <p>• Interoperability</p>
            <p>• External audit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInfrastructure;
