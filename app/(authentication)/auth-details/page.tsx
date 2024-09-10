import { Container, Section, Spacer } from "@/components/common";
import { AuthDetailsForm } from "@/components/pages/auth-details";
import { Heading, NormalText } from "@/components/UI";
import { Card } from "flowbite-react";
import React from "react";

const AuthDetails = () => {
  return (
    <Section className="h-screen flex items-center justify-center">
      <Container>
        <Card className="space-y-8 p-6 bg-white rounded-lg shadow-md md:w-[600px] w-full">
          <div className="text-center">
            <Heading text="Enter Your Details" type="h2" />
            <Spacer spacing="xs" />
            <NormalText
              text="Enter Profile Details"
              color="primary"
              type="p"
              size="md"
              textAlign="center"
            />
          </div>
          <AuthDetailsForm />

          {/* <OTPForm phone_number={93722033} /> */}
        </Card>
      </Container>
    </Section>
  );
};

export default AuthDetails;
