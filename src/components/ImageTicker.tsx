import React from "react";
import clsx from "clsx";

type ImageItem = {
  src: string;
  alt: string;
  maxHeight?: string;
};

type ImageTickerProps = {
  images: ImageItem[];
  direction?: "left" | "right";
  className?: string;
};

const ImageTicker: React.FC<ImageTickerProps> = ({
  images,
  direction = "left",
  className = "",
}) => {
  const animationClass = direction === "left" ? "ticker-track-left" : "ticker-track-right";

  return (
    <div className={clsx("relative w-full overflow-hidden", className)}>
      <div className={clsx("flex w-max", animationClass, "space-x-6 items-center")}>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex items-center md:space-x-3 text-white text-sm md:px-4 md:py-2"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full object-cover max-h-[280px]"
            //   style={{ maxHeight: image.maxHeight || "300px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTicker;
