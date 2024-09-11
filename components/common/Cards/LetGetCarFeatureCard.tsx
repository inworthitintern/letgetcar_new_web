import { Heading, NormalText } from "@/components/UI";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

interface ILetGetCarFeatureCardProps {
  image: any;
  title: string;
  description: string;
}

const LetGetCarFeatureCard: React.FC<ILetGetCarFeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card>
      <Image
        src={image}
        alt="feature-image"
        style={{ height: "210px", objectFit: "cover" }}
      />
      <Heading text={title} type="h5" textAlign="left" />
      <NormalText text={description} textAlign="left" color="gray" />
    </Card>
  );
};

export default LetGetCarFeatureCard;
