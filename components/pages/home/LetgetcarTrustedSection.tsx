"use client";

import { CarsSlider, Container, Section, Spacer } from "@/components/common";

import { Heading, NormalText } from "@/components/UI";
import React from "react";

const LetgetcarsTrustedSection = ({ carsData }) => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center">
          <Heading
            text="LetGetCars Trusted"
            type="h2"
            textAlign="left"
            color="dark"
            fontWeight="bold"
          />
          <NormalText
            text="View All"
            fontWeight="semiBold"
            textUnderline
            color="gray"
            cursorEnabled
            hoverColor="primary"
          />
        </div>

        <Spacer />

        <CarsSlider carsData={carsData} />

        <Spacer />
      </Container>
    </Section>
  );
};

export default LetgetcarsTrustedSection;
