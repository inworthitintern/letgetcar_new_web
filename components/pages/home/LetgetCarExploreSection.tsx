import { Container, ExploreCard, Section, Spacer } from "@/components/common";
import { FinanceIcon } from "@/components/svgs";
import { Heading } from "@/components/UI";
import {
  GarageCarIcon,
  HireDriverIcon,
  InsuranceIcon,
  LimousineIcon,
  LuxuaryCarsIcon,
  ModifyCarIcon,
  RentcarIcon,
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
          <ExploreCard text="Finance" Icon={FinanceIcon} path="/carloan" />
          <ExploreCard text="Insurance" Icon={InsuranceIcon} path="/" />
          <ExploreCard
            text="Rent Car"
            Icon={RentcarIcon}
            path="/rentcar-limousine"
          />
          <ExploreCard
            text="Limousine"
            Icon={LimousineIcon}
            path="/rentcar-limousine"
          />
          <ExploreCard
            text="Luxuary Cars"
            Icon={LuxuaryCarsIcon}
            path="/buycarslist"
          />
          <ExploreCard
            text="Hire Driver"
            Icon={HireDriverIcon}
            path="/hiredriver"
          />
          <ExploreCard
            text="Modify Your Car"
            Icon={ModifyCarIcon}
            path="/garagebooking"
          />
          <ExploreCard
            text="Garage Booking"
            Icon={GarageCarIcon}
            path="/garagebooking"
          />
        </div>
      </Container>
    </Section>
  );
};

export default LetgetCarExploreSection;
