import {
  Container,
  ExploreCard,
  LetGetCarFeatureCard,
  Section,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { GarageBookingForm } from "@/components/pages/garagebooking";
import { HireDriverForm } from "@/components/pages/hireDriver";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  hireDriveAboutusImg,
  hiredriverBgImage,
  onlineBookingImage,
  garageBookingImage,
} from "@/constants/images";
import { List } from "flowbite-react";

import React from "react";

const HireDriver = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${garageBookingImage.src})`,
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          // height: "100vh", // You can adjust this as needed (e.g., 100vh for full viewport height)
          width: "100%", // Ensure it takes full width
        }}
      >
        <Container>
          <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center">
              <div>
                <h1
                  className="font-poppins text-2xl md:text-5xl font-bold text-white"
                  style={{ lineHeight: "1.2em" }}
                >
                  Trusted Car Servicing And Repair Workshop{" "}
                  <span className="text-primary">in Dubai</span>
                </h1>
                <p className="text-sm md:text-base text-white font-normal  py-6">
                  Car Maintenance Has Never Been Easier! GET ESTIMATE NOW
                </p>
                <Button
                  text={"Book Garage"}
                  type="primary"
                  //   onClick={() => {}}
                />
              </div>
              <GarageBookingForm />
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
                text="Are you not in a position to drive your car? Hiring a safe driver Dubai is the best thing to do if you are in Dubai and Awesome Drive is the best safe Driver Company. Awesome Drive welcomes you to a chauffeur-driven service. It is a driver company operating in Dubai."
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

      <Section bgType="gray">
        <Container>
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
          </div>
        </Container>
      </Section>

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
          <Heading text="Book Garage Now" type="h3" textAlign="left" />
          <Spacer spacing="sm" />
          <NormalText
            size="sm"
            color="gray"
            text="When you are in search of hiring a  driver in Dubai then awesome drive is your one stop solution. We have a lot of experience that provides an innovative and unique chauffeur service to the people in the UAE public. When you are looking for a safe driver who is reliable and can take you to your loved ones and with comfort, we have the best private drivers you will find anywhere in Dubai. We are specialists when it comes to offering safe driver services. We will not let you down in your hunt for the best driver service in Dubai."
          />
          <Spacer spacing="sm" />
          <Button
            text={"Book Garage Now"}
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
