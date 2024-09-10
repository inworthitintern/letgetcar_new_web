import {
  Container,
  Section,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { Heading } from "@/components/UI";
import React from "react";

const HomeTestimonailsSection = () => {
  return (
    <Section>
      <Container>
        <Heading
          text="What Our Customers Say"
          type="h2"
          textAlign="left"
          color="dark"
          fontWeight="bold"
        />
        <TestimonialsSection />
      </Container>
    </Section>
  );
};

export default HomeTestimonailsSection;
