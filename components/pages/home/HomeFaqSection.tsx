import { Container, Section, FaqSection } from "@/components/common";
import { Heading } from "@/components/UI";
import React from "react";

const HomeFaqSection = () => {
  return (
    <Section>
      <Container>
        <Heading
          text="Frequently Asked Questions"
          type="h2"
          textAlign="left"
          color="dark"
          fontWeight="bold"
        />
        <FaqSection />
      </Container>
    </Section>
  );
};

export default HomeFaqSection;
