"use client";

import {
  AboutUsSection,
  BannerImage,
  Container,
  CtnSection,
  ExploreCard,
  FeatureCard,
  HowItWorks,
  LetGetCarFeatureCard,
  Section,
  SectionPoints,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { GarageBookingForm } from "@/components/pages/garagebooking";
import { HireDriverForm } from "@/components/pages/hireDriver";
import { Button, Heading, NormalText } from "@/components/UI";
import { FilledLocationIcon } from "@/constants/icons";
import {
  garageBookingImage,
  sellcarBgImage,
  sellcarEnterDetailsImg,
  sellcarCashImg,
  sellcarInspectionImg,
} from "@/constants/images";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";
import { RootState } from "@/GlobalRedux/store";
import { List } from "flowbite-react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const howItWorksContents = [
  {
    img: sellcarEnterDetailsImg,
    title: "Let Us Know What You Need",
    desc: "Share your garage service requirements with us, and we'll take care of the rest.",
  },
  {
    img: sellcarCashImg,
    title: "Pick a Convenient Date and Time",
    desc: "Choose a time that suits you for our garage service appointment.",
  },
  {
    img: sellcarInspectionImg,
    title: "Drive It Over and We’ll Handle It for You",
    desc: "Bring your vehicle to our garage, and we’ll take care of all the necessary services.",
  },
];

const GarageBookingWrapper = () => {
  const { banners } = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners({ type: "garage" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Expert Service"
              description="Benefit from our experienced technicians who provide top-notch care and maintenance for your vehicle."
              // Icon={FilledLocationIcon}
            />
            <FeatureCard
              title="Convenient Booking"
              description="Easily schedule your garage services online or by phone, with flexible appointment options to suit your schedule."
              // Icon={FilledLocationIcon}
            />
            <FeatureCard
              title="Reliable Results"
              description="Count on us for high-quality repairs and maintenance that keep your vehicle running smoothly and efficiently."
              // Icon={FilledLocationIcon}
            />
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

      <Section bgType="gray">
        <AboutUsSection
          img={sellcarBgImage}
          title="Expert Care for Your Vehicle"
          desc="At LetGetCar, we offer comprehensive garage services designed to keep your vehicle in peak condition. Our skilled technicians provide a range of services, from routine maintenance to complex repairs, ensuring your car runs smoothly and reliably. With our user-friendly booking system, you can easily schedule a convenient time for your service, whether it's an oil change, brake repair, or any other need. We prioritize quality and efficiency, handling every job with precision and care. Trust LetGetCar for all your garage service needs and experience exceptional service that keeps your vehicle performing at its best."
        />
      </Section>

      <Section bgType="gray">
        <HowItWorks data={howItWorksContents} />
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
            title="What We Provide for You"
            lists={["Garage Booking", "Car Services", "car Modification"]}
          />
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

      <Section>
        <Container>
          <TestimonialsSection />
        </Container>
      </Section>
    </div>
  );
};

export default GarageBookingWrapper;
