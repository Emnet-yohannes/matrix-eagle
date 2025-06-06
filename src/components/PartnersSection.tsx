import * as React from "react";

export const PartnersSection: React.FC = () => {
  const partners = [
    {
      src: "/partner1.svg",
      alt: "Partner 1",
      maxHeight: "67px",
    },
    {
      src: "/partner2.svg",
      alt: "Partner 2",
      maxHeight: "67px",
    },
    {
      src: "/partner3.svg",
      alt: "Partner 3",
      maxHeight: "67px",
    },
    {
      src: "/partner4.svg",
      alt: "Partner 4",
      maxHeight: "67px",
    },
    {
      src: "/partner5.svg",
      alt: "Partner 5",
      maxHeight: "67px",
    },
    {
      src: "/partner6.svg",
      alt: "Partner 6",
      maxHeight: "67px",
    },
    {
      src: "/partner7.svg",
      alt: "Partner 7",
      maxHeight: "67px",
    },
  ];

  return (
    <section className="relative w-full mt-[68px]">
      <div className="max-sm:text-lg lg:text-2xl mb-[44px]  w-full text-center">
        Featured In
      </div>

      
      <div >
        {/* Ticker at the bottom of the screen */}
        <div className=" w-full  overflow-hidden z-50 mb-3">
          <div className="flex space-x-6 animate-scroll items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center md:space-x-3 text-white text-sm md:px-4 md:py-2"
              >
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
