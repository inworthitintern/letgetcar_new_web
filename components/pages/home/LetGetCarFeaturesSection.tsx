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
        <Heading text="How It Works" type="h2" color="dark" fontWeight="bold" />
        <Spacer />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Come visit us or arrange a test drive from the comfort of home."
            title="Test Drive Any Vehicle, Anytime"
          />
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Return your car for a full value refund. Terms apply."
            title="7 Day Trial"
          />
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Get premium insurance plans with unbeatable discounts."
            title="Easy Insurance Purchase"
          />
          <LetGetCarFeatureCard
            image={onlineBookingImage}
            description="Service every 10,000 km and enjoy extended warranty options."
            title="Upto 6 Month Warranty"
          />
        </div>
      </Container>
    </Section>
  );
};

export default LetGetCarFeaturessection;
