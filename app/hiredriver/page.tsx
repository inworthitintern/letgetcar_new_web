import {
  Container,
  ExploreCard,
  HowItWorks,
  LetGetCarFeatureCard,
  Section,
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
} from "@/constants/images";
import { List } from "flowbite-react";

import React from "react";

const HireDriver = () => {
  const howItWorksContents = [
    {
      img: sellcarEnterDetailsImg,
      title: "Enter car details",
      desc: "Call  +971 52 894 8931 or Whatsapp and let us know when and where you want the Driver to pick you up from, or book online and we’ll call you back to confirm your booking.",
    },
    {
      img: sellcarCashImg,
      title: "STEP 2: MEET YOUR DESIGNATED DRIVER",
      desc: "Our team leader will drop your designated driver to your required location usually 15 minutes before pickup time and will give you a call.",
    },
    {
      img: sellcarInspectionImg,
      title: "STEP 3: SAFE JOURNEY WITH AWESOME DRIVE",
      desc: "Have a safe journey to your destination in the comfort of your own car with our professional chauffeur.",
    },
  ];

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

      <Section>
        <Container>
          <HowItWorks data={howItWorksContents} />
        </Container>
      </Section>

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

      <Section>
        <Container>
          <Heading
            text="Benefits of Hiring Monthly Driver From Awesome Drive"
            type="h4"
            textAlign="left"
          />
          <Spacer spacing="sm" />
          <List>
            <List.Item>
              At least 10 characters (and up to 100 characters)
            </List.Item>
            <List.Item>At least one lowercase character</List.Item>
            <List.Item>
              Inclusion of at least one special character, e.g., ! @ # ?
            </List.Item>
          </List>
        </Container>
      </Section>

      <Section bgType="primary">
        <Container>
          <Heading text="HIRE DRIVER NOW" type="h3" textAlign="left" />
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
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <TestimonialsSection />
        </Container>
      </Section>
    </div>
  );
};

export default HireDriver;
