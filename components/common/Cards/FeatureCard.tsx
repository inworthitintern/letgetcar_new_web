import { NormalText } from "@/components/UI";
import { FilledLocationIcon } from "@/constants/icons";
import { Card } from "flowbite-react";
import React from "react";

const FeatureCard = () => {
  return (
    <Card>
      <FilledLocationIcon height={54} width={54} />
      <NormalText text="More Locaton" size="md" fontWeight="semiBold" />
      <NormalText
        text="Explore an array of inspected used cars in dubai - we offer 1288 top-quality vehicles. Whether you prefer , we've got your match in dubai. Plus, we have hundreds of"
        size="sm"
        color="gray"
      />
    </Card>
  );
};

export default FeatureCard;
