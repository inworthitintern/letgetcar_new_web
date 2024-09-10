import { Heading } from "@/components/UI";
import { loanCalculatorImage } from "@/constants/images";
import { Card } from "flowbite-react";
import React from "react";

interface IExclusiveCardProps {
  name: string;
  link: string;
  isOdd: boolean;
}

const ExclusiveCard: React.FC<IExclusiveCardProps> = ({
  name,
  link = "#",
  isOdd,
}) => {
  return (
    <Card
      href={link}
      className=""
      style={{
        background: `url(${loanCalculatorImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        position: "relative",
      }}
    >
      <Heading
        className={`${
          isOdd ? "bg-white" : "bg-primary"
        } py-4 px-6 w-fit rounded-lg absolute bottom-4 right-4`}
        text={name}
        type="h5"
      />
    </Card>
  );
};

export default ExclusiveCard;
