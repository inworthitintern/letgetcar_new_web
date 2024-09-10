"use client";

import { CarsSlider, Container, Section, Spacer } from "@/components/common";

import { Heading, NormalText } from "@/components/UI";
import React from "react";

const NewArrivalsSection = ({ carsData }) => {
  return (
    <Section bgType="gray">
      <Container>
        <div className="flex justify-between items-center">
          <Heading
            text="New Arrival Cars"
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

export default NewArrivalsSection;
