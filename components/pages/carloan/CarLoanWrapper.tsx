"use client";

import {
  AboutUsSection,
  BannerImage,
  Container,
  CtnSection,
  FaqSection,
  HowItWorks,
  Section,
  SectionPoints,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  onlineBookingImage,
  sellcarBgImage,
  sellcarEnterDetailsImg,
  sellCarEx,
  hireDriverEx,
} from "@/constants/images";

import React, { useEffect, useState } from "react";
import CarLoanApplyForm from "./CarLoanApplyForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";

const howItWorksContents = [
  {
    img: sellCarEx,
    title: "Choose Your Car",
    desc: "Select the car you want to purchase and, after your test drive, pay a small token amount to reserve it.",
  },
  {
    img: onlineBookingImage,
    title: "Upload Your Documents",
    desc: "Easily upload the required documents to complete your loan application with the bank.",
  },
  {
    img: hireDriverEx,
    title: "Track Your Loan Progress",
    desc: "Stay updated with daily notifications as our finance team works with your bank to expedite the approval process.",
  },
];

const CarLoan = () => {
  const [openCarLoanForm, setOpenCarLoanForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const { banners } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(getBanners({ type: "buycar" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

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
        <Heading text="Why get loan from LetGetCar?" type="h3" className="mt-6" />

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
          // mainDescription="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
        />
      </Section>

      {topBanner?.length > 0 && (
        <>
          {topBanner?.map((cur) => (
            <Section key={cur.id}>
              <Container>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                >
                  {cur?.images?.map((img: string) => (
                    <BannerImage img={img} />
                  ))}
                </div>
              </Container>
            </Section>
          ))}
        </>
      )}

      <Section bgType="gray">
        <AboutUsSection
          img={sellcarBgImage}
          title="Zero Downpayment With Our Loan"
          desc="Enjoy the convenience of owning your dream car without the burden of an upfront payment. With our zero downpayment car loan option, you can drive away without paying anything upfront. Our hassle-free financing solutions make car ownership more accessible, offering flexible repayment plans tailored to your budget. Whether you're buying a new or used car, our zero downpayment option ensures you can get behind the wheel faster. LetGetCar partners with trusted banks to provide fast approvals and competitive interest rates, giving you peace of mind as you enjoy a smooth and affordable car-buying experience."
        />
      </Section>

      {middleBanner?.length > 0 && (
        <>
          {middleBanner?.map((cur) => (
            <Section key={cur.id}>
              <Container>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                >
                  {cur?.images?.map((img: string) => (
                    <BannerImage img={img} />
                  ))}
                </div>
              </Container>
            </Section>
          ))}
        </>
      )}

      <Section>
        <Container>
          <SectionPoints
            title="What's Required To Apply Car Loan"
            lists={[
              "Passport Copy",
              "Emirates ID",
              "Visa Page",
              "Salary Certificate",
            ]}
            // desc="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
          />
          <Spacer spacing="md" />
          <div>
            <Button text="Apply Car Loan Now" onClick={applyCarLoan} />
          </div>
        </Container>
      </Section>

      <Section>
        <CtnSection
          ctnText="Download Our App Now"
          desc="Get exclusive offers, manage your bookings, and access our full range of services right from your phone. Download now for a seamless experience and special discounts!"
          title="Download From Playstore"
        />
      </Section>

      {bottomBanner?.length > 0 && (
        <>
          {bottomBanner?.map((cur) => (
            <Section key={cur.id}>
              <Container>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                >
                  {cur?.images?.map((img: string) => (
                    <BannerImage img={img} />
                  ))}
                </div>
              </Container>
            </Section>
          ))}
        </>
      )}

      {/* <Section> */}
      <Container>
        <Heading 
        text="What our customers are saying"
        type="h2"
        textAlign="left"
        color="dark"
        fontWeight="bold"
        />
        <TestimonialsSection />
      </Container>
      {/* </Section> */}

      <Section>
        <Container className="mb-9">
          <FaqSection />
        </Container>
      </Section>

      <CarLoanApplyForm setOpen={setOpenCarLoanForm} open={openCarLoanForm} />
    </div>
  );
};

export default CarLoan;
