import ImageTicker from "../components/ImageTicker";

export default function GallerySection() {
  const galleryImages = [
    { src: "/galleryImages/gallery1.png", alt: "Agricultural field visit" },
    { src: "/galleryImages/gallery2.png", alt: "Team meeting with farmers" },
    { src: "/galleryImages/gallery3.png", alt: "Community event" },
    { src: "/galleryImages/gallery4.png", alt: "Partnership meeting" },
    { src: "/galleryImages/gallery5.png", alt: "Agricultural demonstration" },
    { src: "/galleryImages/gallery6.png", alt: "Group discussion" },
    { src: "/galleryImages/gallery7.png", alt: "Field event" },
    { src: "/galleryImages/gallery8.png", alt: "Team collaboration" },
    { src: "/galleryImages/gallery9.png", alt: "Conference presentation" },
    { src: "/galleryImages/gallery10.png", alt: "Africana event" },
    { src: "/galleryImages/gallery11.png", alt: "Field inspection" },
    { src: "/galleryImages/gallery12.png", alt: "Partnership ceremony" },
    { src: "/galleryImages/gallery13.png", alt: "Group photo" },
  ];

  const topRowImages = galleryImages.slice(0, 7);
  const bottomRowImages = galleryImages.slice(7);

  return (
    <section className="bg-transparent py-10 sm:py-16 px-4 sm:px-6 2xl:pt-[149px]">
      <div className="max-w-7xl 2xl:max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl 2xl:text-[66px] 3xl:text-[87px] font-bold mb-4 sm:mb-6 2xl:mb-8"
            style={{ color: "#7fe4ff" }}
          >
            Our Gallery
          </h2>
          <p className="text-sm sm:text-lg md:text-xl 2xl:text-[30px] 3xl:text-[40px] font-medium max-w-[90vw] sm:max-w-4xl 2xl:max-w-[80%] mx-auto leading-relaxed">
            Our gallery captures the journey of Matrix Eagle, from participating
            in industry events to collaborating with farmers, investors, and
            agricultural experts. These moments reflect our commitment to
            building a stronger, greener future through real connections, shared
            knowledge, and meaningful partnerships.
          </p>
        </div>

        {/* Gallery Tickers */}
        <div className="space-y-6 sm:space-y-8 2xl:space-y-[94px] sm:mt-10 2xl:mt-[81px]">
          <ImageTicker images={topRowImages} direction="left" />
          <ImageTicker images={bottomRowImages} direction="right" />
        </div>
      </div>
    </section>
  );
}
