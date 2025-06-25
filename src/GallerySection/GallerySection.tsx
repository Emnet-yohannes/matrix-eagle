import ImageTicker from "../components/ImageTicker";

export default function GallerySection() {
  const galleryImages = [
    // Top row
    { src: "/galleryImages/gallery1.png", alt: "Agricultural field visit" },
    { src: "/galleryImages/gallery2.png", alt: "Team meeting with farmers" },
    { src: "/galleryImages/gallery3.png", alt: "Community event" },
    { src: "/galleryImages/gallery4.png", alt: "Partnership meeting" },
    { src: "/galleryImages/gallery5.png", alt: "Agricultural demonstration" },
    { src: "/galleryImages/gallery6.png", alt: "Group discussion" },
    { src: "/galleryImages/gallery7.png", alt: "Field event" },

    // Bottom row
    { src: "/galleryImages/gallery8.png", alt: "Team collaboration" },
    { src: "/galleryImages/gallery9.png", alt: "Conference presentation" },
    { src: "/galleryImages/gallery10.png", alt: "Africana event" },
    { src: "/galleryImages/gallery11.png", alt: "Field inspection" },
    { src: "/galleryImages/gallery12.png", alt: "Partnership ceremony" },
    { src: "/galleryImages/gallery13.png", alt: "Group photo" },
  ];

  // Split top and bottom row images
  const topRowImages = galleryImages.slice(0, 7);
  const bottomRowImages = galleryImages.slice(7);

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="max-w-7xl 2xl:max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#7fe4ff" }}
          >
            Our Gallery
          </h2>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our gallery captures the journey of Matrix Eagle, from participating
            in industry events to collaborating with farmers, investors, and
            agricultural experts. These moments reflect our commitment to
            building a stronger, greener future through real connections, shared
            knowledge, and meaningful partnerships.
          </p>
        </div>

        {/* Gallery Tickers */}
        <div className="space-y-8">
          {/* Top Row - moves left */}
          <ImageTicker images={topRowImages} direction="left" />

          {/* Bottom Row - moves right */}
          <ImageTicker images={bottomRowImages} direction="right" />
        </div>
      </div>
    </section>
  );
}
