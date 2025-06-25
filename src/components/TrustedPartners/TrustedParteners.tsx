
const TrustedParteners = () => {
  const TrustedParteners = [
    "/trustedpartner1.png",
    "/trustedpartner2.png",
    "/trustedpartner3.png",
    "/trustedpartner4.png",
  ];

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 2xl:mt-30 ">
      <div className="w-full md:max-w-7xl 2xl:max-w-[86%]">
        <div className="text-center text-white font-bold tracking-wider mb-12">
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-6xl">
            SUPPORTED BY OUR{" "}
            <span className="text-[#7fe4ff]">TRUSTED PARTNERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 2xl:gap-12">
          {TrustedParteners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-[#7FE4FF] rounded-xl bg-black/35 h-16 sm:h-20 md:h-24 transition-all duration-300"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="object-contain max-h-full max-w-[80%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedParteners;
