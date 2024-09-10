"use client";

import {
  AboutUsSection,
  Container,
  CtnSection,
  HowItWorks,
  Section,
  SectionPoints,
  Spacer,
} from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import { onlineBookingImage, sellcarBgImage } from "@/constants/images";

import React, { useState } from "react";
import CarLoanApplyForm from "./CarLoanApplyForm";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const howItWorksContents = [
  {
    img: onlineBookingImage,
    title: "Select a car you wish to purchase",
    desc: "Once your test drive is completed pay token amount to reserve that car.",
  },
  {
    img: onlineBookingImage,
    title: "Select a car you wish to purchase",
    desc: "Once your test drive is completed pay token amount to reserve that car.",
  },
  {
    img: onlineBookingImage,
    title: "Select a car you wish to purchase",
    desc: "Once your test drive is completed pay token amount to reserve that car.",
  },
];

const CarLoan = () => {
  const [openCarLoanForm, setOpenCarLoanForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const applyCarLoan = () => {
    if (user) {
      setOpenCarLoanForm(true);
    } else {
      toast("You have to Login Before Applying Car Loan");
      router.push("/login");
    }
  };

  return (
    <div>
      <div className="h-[60vh] bg-primary flex flex-col justify-center items-center">
        <Heading text="Why get loan from CARS24?" type="h3" className="mt-6" />

        <div className="flex justify-between gap-16 mt-4">
          <NormalText text="Zero downpayment" />
          <NormalText text="Dedicated finance team" />
        </div>
        <Spacer spacing="md" />
        <Button text="Apply Car Loan Now" type="dark" onClick={applyCarLoan} />
      </div>

      <Section>
        <HowItWorks
          data={howItWorksContents}
          mainDescription="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
        />
      </Section>

      <Section bgType="gray">
        <AboutUsSection
          img={sellcarBgImage}
          title="Zero Downpayment With Our Loan"
          desc="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
        />
      </Section>

      <Section>
        <Container>
          <SectionPoints
            title="What's Required To Apply Car Loan"
            lists={["Passport", "Emirates ID", "Visa"]}
            // desc="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
          />
        </Container>
      </Section>

      <Section>
        <CtnSection
          ctnText="Apply Car Loan Now"
          desc="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
          title="Apply Car Loan Now"
        />
      </Section>

      <CarLoanApplyForm setOpen={setOpenCarLoanForm} open={openCarLoanForm} />
    </div>
  );
};

export default CarLoan;
