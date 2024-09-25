import React from "react";
import Image from "next/image";

const BannerImage = ({ img }: { img: string }) => {
  return (
    <div style={{ width: "100%", height: 200, position: "relative" }}>
      <Image
        src={img}
        alt="banners"
        layout="fill" // Makes the image fill the container
        objectFit="cover" // Keeps the image aspect ratio
        priority // Optional: ensures that the image is loaded faster (helpful for above-the-fold content)
      />
    </div>
  );
};

export default BannerImage;
