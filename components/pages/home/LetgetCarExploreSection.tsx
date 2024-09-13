import { Container, ExploreCard, Section, Spacer } from "@/components/common";
import { Heading } from "@/components/UI";
import {
  GarageCarIcon,
  HireDriverIcon,
  InsuranceIcon,
  LimousineIcon,
  LuxuaryCarsIcon,
  ModifyCarIcon,
  RentcarIcon,
  FinaceIcon,
} from "@/constants/icons";
import React from "react";

const LetgetCarExploreSection = () => {
  return (
    <Section bgType="gray">
      <Container>
        <Heading
          text="Explore Letgetcar"
          type="h2"
          color="dark"
          fontWeight="bold"
        />
        <Spacer />
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
          <ExploreCard
            text="Finance"
            Icon={FinaceIcon}
            path="/carloan"
            iconH={90}
            iconW={90}
            className="top-12 "
            textMt={28}
          />
          <ExploreCard
            text="Insurance"
            Icon={InsuranceIcon}
            path="/"
            className="top-10"
            textMt={28}
          />
          <ExploreCard
            text="Rent Car"
            Icon={RentcarIcon}
            path="/rentcar-limousine"
            iconH={130}
            iconW={130}
            className="top-6"
            textMt={28}
          />
          <ExploreCard
            text="Limousine"
            Icon={LimousineIcon}
            path="/rentcar-limousine"
            iconH={140}
            iconW={140}
            className="top-10"
            textMt={28}
          />
          <ExploreCard
            text="Luxuary Cars"
            Icon={LuxuaryCarsIcon}
            path="/buycarslist"
            iconH={100}
            iconW={100}
            className="top-10"
          />
          <ExploreCard
            text="Hire Driver"
            Icon={HireDriverIcon}
            path="/hiredriver"
            iconH={180}
            iconW={180}
            className="top-1"
          />
          <ExploreCard
            text="Modify Your Car"
            Icon={ModifyCarIcon}
            path="/garagebooking"
            iconH={150}
            iconW={150}
            className="top-1"
          />
          <ExploreCard
            text="Garage Booking"
            Icon={GarageCarIcon}
            path="/garagebooking"
            iconH={120}
            iconW={120}
            className="top-5"
          />
        </div>
      </Container>
    </Section>
  );
};

export default LetgetCarExploreSection;
