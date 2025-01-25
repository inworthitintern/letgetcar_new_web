// components/CustomSection.tsx
import React from "react";
import Container from "../Container";
import { Heading, NormalText } from "@/components/UI";

interface CustomSectionProps {
  heading: string;
  description: string[];
  images: { src: string; alt: string }[];
}

const CustomSection: React.FC<CustomSectionProps> = ({
  heading,
  description,
  images,
}) => {
  return (
    <Container>
      <div className="text-center mb-8">
        <Heading text={heading} type="h3" textAlign="center" />
        {description.map((text, index) => (
          <NormalText
            key={index}
            text={text}
            type="p"
            size="sm"
            color="gray"
            textAlign="center"
            className="mt-4"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </Container>
  );
};

export default CustomSection;
