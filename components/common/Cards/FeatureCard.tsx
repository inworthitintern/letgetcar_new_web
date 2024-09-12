import { NormalText } from "@/components/UI";
import { Card } from "flowbite-react";
import React from "react";

interface IFeatureCard {
  Icon?: any;
  title: string;
  description: string;
  bg?: "white" | "primary";
}

const FeatureCard: React.FC<IFeatureCard> = ({
  Icon,
  title,
  description,
  bg = "white",
}) => {
  return (
    <Card className={`bg-${bg}`}>
      {Icon && <Icon height={54} width={54} />}

      <NormalText text={title} size="md" fontWeight="semiBold" />
      <NormalText text={description} size="sm" color="gray" />
    </Card>
  );
};

export default FeatureCard;
