import { Container, ExclusiveCard, Section, Spacer } from "@/components/common";
import { Heading } from "@/components/UI";
import {
  carInsuranceEx,
  carSubscriptionEx,
  hireDriverEx,
  loanCalculatorEx,
  luxuarycarEx,
  sellCarEx,
} from "@/constants/images";
import React from "react";

const LetGetCarExclusiveSection: React.FC = () => {
  const exclusiveDatas = [
    {
      name: "Hire Driver",
      link: "/hiredriver",
      img: hireDriverEx,
    },
    {
      name: "Luxury Cars Modification",
      link: "/garagebooking",
      img: luxuarycarEx,
    },
    // {
    //   name: "Loan Calculator",
    //   link: "/carloan",
    //   img: loanCalculatorEx,
    // },
    {
      name: "Car Subscription",
      link: "#",
      img: carSubscriptionEx,
    },
    // {
    //   name: "Renew Your Car Insurance",
    //   link: "#",
    //   img: carInsuranceEx,
    // },
    {
      name: "Sell Your Cars",
      link: "/sellcar",
      img: sellCarEx,
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
              img={data.img}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LetGetCarExclusiveSection;
