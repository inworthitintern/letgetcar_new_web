import { Container, ExclusiveCard, Section, Spacer } from "@/components/common";
import { Heading } from "@/components/UI";
import React from "react";

const LetGetCarExclusiveSection: React.FC = () => {
  const exclusiveDatas = [
    {
      name: "Hire Driver",
      link: "#",
    },
    {
      name: "Luxury Cars Modification",
      link: "#",
    },
    {
      name: "Loan Calculator",
      link: "#",
    },
    {
      name: "Car Subscription",
      link: "#",
    },
    {
      name: "Renew Your Car Insurance",
      link: "#",
    },
    {
      name: "Buy/Sell Your Luxuary Cars",
      link: "#",
    },
  ];

  return (
    <Section bgType="gray">
      <Container>
        <Heading
          text="Let Get Car Exclusive"
          type="h2"
          textAlign="left"
          color="dark"
          fontWeight="bold"
        />
        <Spacer />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusiveDatas.map((data, index) => (
            <ExclusiveCard
              isOdd={index % 2 ? false : true}
              key={index}
              name={data.name}
              link={data.link}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LetGetCarExclusiveSection;
