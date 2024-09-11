import React from "react";
import Container from "../Container";
import { Heading, NormalText } from "@/components/UI";
import Spacer from "../Spacer";
import LetGetCarFeatureCard from "../Cards/LetGetCarFeatureCard";

interface IHowItWorks {
  data: { img: any; title: string; desc: string }[];
  mainDescription?: string;
}

const HowItWorks: React.FC<IHowItWorks> = ({ data, mainDescription }) => {
  return (
    <Container>
      <div>
        <Heading text="How it Works?" type="h3" textAlign="left" />
        <Spacer spacing="sm" />
        {mainDescription && (
          <NormalText
            size="sm"
            color="gray"
            text="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
          />
        )}

        <Spacer spacing="md" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((cur, i) => (
            <LetGetCarFeatureCard
              key={i}
              image={cur?.img}
              description={cur?.desc}
              title={cur?.title}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
