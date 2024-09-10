"use client";
import React from "react";
import {
  Container,
  LetGetCarFeatureCard,
  Section,
  Spacer,
} from "@/components/common";
import { onlineBookingImage } from "@/constants/images";
import { Heading } from "@/components/UI";

const LetGetCarFeaturessection = () => {
  return (
    <Section>
      <Container>
        <Heading
          text="Explore Letgetcar"
          type="h2"
          color="dark"
          fontWeight="bold"
        />
        <Spacer />
        <div className="grid grid-cols-3 gap-4">
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost"
            title="Online Booking"
          />
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost"
            title="Online Booking"
          />
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost"
            title="Online Booking"
          />
        </div>
      </Container>
    </Section>
  );
};

export default LetGetCarFeaturessection;
