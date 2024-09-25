"use client";

import {
  Container,
  CtnSection,
  ExploreCard,
  HowItWorks,
  LetGetCarFeatureCard,
  Section,
  SectionPoints,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { HireDriverForm } from "@/components/pages/hireDriver";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  hireDriveAboutusImg,
  hiredriverBgImage,
  onlineBookingImage,
  sellcarCashImg,
  sellcarEnterDetailsImg,
  sellcarInspectionImg,
  hireDriverEx,
} from "@/constants/images";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";
import { RootState } from "@/GlobalRedux/store";
import { List } from "flowbite-react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HireDriverWrapper = () => {
  const howItWorksContents = [
    {
      img: sellcarEnterDetailsImg,
      title: "STEP 1 : BOOK YOUR DESIGNATED DRIVER",
      desc: "Call  +971 52 894 8931 or Whatsapp and let us know when and where you want the Driver to pick you up from, or book online and we’ll call you back to confirm your booking.",
    },
    {
      img: hireDriverEx,
      title: "STEP 2: MEET YOUR DESIGNATED DRIVER",
      desc: "Our team leader will drop your designated driver to your required location usually 15 minutes before pickup time and will give you a call.",
    },
    {
      img: hireDriveAboutusImg,
      title: "STEP 3: SAFE JOURNEY WITH AWESOME DRIVE",
      desc: "Have a safe journey to your destination in the comfort of your own car with our professional chauffeur.",
    },
  ];

  const dispatch = useDispatch();

  const { banners } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(getBanners({ type: "hiredriver" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${hiredriverBgImage.src})`,
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          height: "100vh", // You can adjust this as needed (e.g., 100vh for full viewport height)
          width: "100%", // Ensure it takes full width
        }}
      >
        <Container>
          <div className="h-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <div className="grid grid-cols-2 gap-x-4 items-center">
              <div>
                <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white">
                  Monthly Safe Driver Service{" "}
                  <span className="text-primary">@AED 1200</span>
                </h1>
                <p className="text-sm md:text-base text-white font-normal  py-6">
                  We provides safe driving services at an affordable price. You
                  can hire a safe driver Dubai for your trip from Awesome Drive
                  Dubai to Abu Dhabi, Sharjah, and other Emirates.
                </p>
                <Button
                  text={"Hire Driver Now"}
                  type="primary"
                  //   onClick={() => {}}
                />
              </div>
              <HireDriverForm />
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <img src={hireDriveAboutusImg.src} alt="hire Driver" />
            <div>
              <Heading
                text="Hire a Safe driver Dubai Most Trusted Private Driver Service in UAE"
                type="h4"
                textAlign="left"
              />
              <Spacer spacing="sm" />
              <NormalText
                size="sm"
                color="gray"
                text="If you're unable to drive in Dubai, LetGetCar provides reliable and professional chauffeur services for a seamless travel experience. Our experienced drivers are available around the clock for personal, private, and corporate needs, including airport transfers, business trips, and special events. We make booking easy—simply call us, message via WhatsApp, or use our website to schedule your driver. Authorized by the RTA, LetGetCar ensures safe, efficient, and affordable transportation, offering peace of mind and convenience for all your travel needs."
              />
              <NormalText
                size="sm"
                color="gray"
                text="When you are in search of hiring a  driver in Dubai then awesome drive is your one stop solution. We have a lot of experience that provides an innovative and unique chauffeur service to the people in the UAE public. When you are looking for a safe driver who is reliable and can take you to your loved ones and with comfort, we have the best private drivers you will find anywhere in Dubai. We are specialists when it comes to offering safe driver services. We will not let you down in your hunt for the best driver service in Dubai."
              />
            </div>
          </div>
        </Container>
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

      <Section>
        <Container>
          <HowItWorks data={howItWorksContents} />
        </Container>
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

      {/* <Section bgType="gray">
          <Container>
            <HowItWorks data={howItWorksContents} />
            <div>
              <Heading text="How it Works?" type="h4" textAlign="left" />
              <Spacer spacing="sm" />
              <NormalText
                size="sm"
                color="gray"
                text="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
              />
              <Spacer spacing="md" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <LetGetCarFeatureCard
                  image={onlineBookingImage}
                  description="Call +9719999999999999 or Whatsapp and let us know when and where you want the Driver to pick you up from, or book online and we’ll call you back to confirm your booking."
                  title="STEP 1 : BOOK YOUR DESIGNATED DRIVER"
                />
                <LetGetCarFeatureCard
                  image={onlineBookingImage}
                  description="Our team leader will drop your designated driver to your required location usually 15 minutes before pickup time and will give you a call."
                  title="STEP 2: MEET YOUR DESIGNATED DRIVER"
                />
                <LetGetCarFeatureCard
                  image={onlineBookingImage}
                  description="Have a safe journey to your destination in the comfort of your own car with our professional chauffeur."
                  title="STEP 3: SAFE JOURNEY WITH AWESOME DRIVE"
                />
              </div>
            </div>
          </Container>
        </Section> */}

      <Section bgType="gray">
        <Container>
          <SectionPoints
            lists={[
              " Professional Drivers: Our drivers are highly trained, experienced, and committed to ensuring your safety and comfort",
              "24/7 Availability: We provide reliable driver services any time of day or night, whenever you need them",
              "Affordable Rates: Enjoy competitive pricing with no hidden fees, ensuring value for your money",
              "Flexible Booking: Easily book your driver via phone, WhatsApp, or our website for a hassle-free experience",
              "RTA-Authorized Service: Our drivers are licensed and authorized by the Roads and Transport Authority (RTA) for your peace of mind.",
              "Corporate and Personal Options: Whether it's for business trips, airport transfers, or special events, we cater to both personal and corporate needs.",
            ]}
            title="Benefits of Hiring a Driver with Us"
          />
        </Container>
      </Section>

      <Section bgType="primary">
        <Container>
          <CtnSection
            ctnText="Download Our App Now"
            desc="Get exclusive offers, manage your bookings, and access our full range of services right from your phone. Download now for a seamless experience and special discounts!"
            title="Download From Playstore"
          />
          {/* <Heading text="HIRE DRIVER NOW" type="h3" textAlign="left" />
            <Spacer spacing="sm" />
            <NormalText
              size="sm"
              color="gray"
              text="When you are in search of hiring a  driver in Dubai then awesome drive is your one stop solution. We have a lot of experience that provides an innovative and unique chauffeur service to the people in the UAE public. When you are looking for a safe driver who is reliable and can take you to your loved ones and with comfort, we have the best private drivers you will find anywhere in Dubai. We are specialists when it comes to offering safe driver services. We will not let you down in your hunt for the best driver service in Dubai."
            />
            <Spacer spacing="sm" />
            <Button
              text={"GET YOUR DRIVE NOW"}
              type="dark"
              //   onClick={() => {}}
            /> */}
        </Container>
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

      <Section>
        <Container>
          <TestimonialsSection />
        </Container>
      </Section>
    </div>
  );
};

export default HireDriverWrapper;
