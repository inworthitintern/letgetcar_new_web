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
          <ExploreCard Icon={FinanceIcon} path="/carloan" />
          <ExploreCard Icon={InsuranceIcon} path="/" />
          <ExploreCard Icon={RentcarIcon} path="/rentcar" />
          <ExploreCard Icon={LimousineIcon} path="/rentcar" />
          <ExploreCard Icon={LuxuaryCarsIcon} path="/buycarslist" />
          <ExploreCard Icon={HireDriverIcon} path="/hiredriver" />
          <ExploreCard Icon={ModifyCarIcon} path="/garagebooking" />
          <ExploreCard Icon={GarageCarIcon} path="/garagebooking" />
        </div>
      </Container>
    </Section>
  );
};

export default LetgetCarExploreSection;
