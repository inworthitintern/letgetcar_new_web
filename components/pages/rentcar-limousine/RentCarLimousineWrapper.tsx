"use client";

import {
  AboutUsSection,
  BannerImage,
  CarCard1,
  CarCard2,
  CarRentCard,
  Container,
  CtnSection,
  FaqSection,
  FeatureCard,
  HowItWorks,
  LoadingSpinner,
  Section,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { Button, Heading } from "@/components/UI";
import {
  rentCarLimousineImage,
  sellcarCashImg,
  sellcarEnterDetailsImg,
  sellcarInspectionImg,
  sellCarEx,
} from "@/constants/images";
import rentCarLimousineService from "@/services/rentCarLimousineService";
import React, { useEffect, useState } from "react";
import RentCarBookingForm from "./RentCarBookingForm";
import { FilledLocationIcon } from "@/constants/icons";
import { hireDriverEx } from "@/constants/images";
import { RentCarCategories } from ".";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";
import { RootState } from "@/GlobalRedux/store";

const howItWorksContents = [
  {
    img: sellcarEnterDetailsImg,
    title: "Choose Your Vehicle",
    desc: "Browse our wide selection of cars and luxury limousines, and pick the one that suits your needs. Whether for business, leisure, or special events, we have the perfect vehicle for you.",
  },
  {
    img: sellcarCashImg,
    title: "Select Rental Duration",
    desc: "Choose from flexible rental options—daily, weekly, or monthly—based on your schedule. We offer tailored plans to ensure you have the vehicle for as long as you need it.",
  },
  {
    img: sellCarEx,
    title: "Book and Drive",
    desc: "Complete your booking online or via phone, and you're ready to go. Enjoy a seamless experience, with optional chauffeur services available for ultimate convenience.",
  },
];

const RentCarLimousineWrapper = () => {
  const [rentCarsData, setRentCarsData] = useState([]);
  const [limousineData, setLimousineData] = useState([]);

  const [openBookingOpen, setBookingOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { banners } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(getBanners({ type: "rentcar" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  const getCarsData = async () => {
    setLoading(true);
    try {
      const [rentCarsApiData, limousineApiData] = await Promise.all([
        rentCarLimousineService.getCars({ type: "rentcar" }),
        rentCarLimousineService.getCars({ type: "limousine" }),
      ]);

      if (rentCarsApiData.data) {
        setRentCarsData(rentCarsApiData.data);
      }

      if (limousineApiData.data) {
        setLimousineData(limousineApiData.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  };

  console.log(rentCarsData, "djkhkd");

  useEffect(() => {
    getCarsData();
  }, []);

  console.log(rentCarsData, limousineData, "heiiiiii");

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div
        style={{
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center", // Center the background image
          // backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          height: "100vh", // You can adjust this as needed (e.g., 100vh for full viewport height)
          width: "100%", // Ensure it takes full width
        }}
      >
        <video 
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2, 
        }}
        >
          <source
            src="https://purplesevencars.com/wp-content/uploads/2023/11/p7cars-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
        ></div>
        <Container>
          <div className="h-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <div>
              <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white">
                Your Go-To for Car <br />
                <span className="text-primary">
                  Rentals & Limousine Bookings
                </span>
              </h1>
              <p className="text-sm md:text-base text-white font-normal  py-6">
                Experience luxury on the roads of dubai with our premium car
                rental services
              </p>
              <Button
                text={"Rent Car Now"}
                type="primary"
                //   onClick={() => {}}
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 -mt-12">
          <FeatureCard
            title="Wide Vehicle Selection"
            description="Choose from a range of well-maintained cars and luxury limousines to suit your needs, ensuring comfort, style, and convenience for every occasion."
            // Icon={FilledLocationIcon}
          />
          <FeatureCard
            title="Flexible Rental Plans"
            description="We offer daily, weekly, and monthly rental options to match your schedule, giving you the freedom to rent on your own terms without any hassle."
            // Icon={FilledLocationIcon}
          />
          <FeatureCard
            title="Professional Chauffeurs"
            description="Our expert drivers provide a safe, comfortable, and professional driving experience, ensuring you arrive at your destination in style and on time."
            // Icon={FilledLocationIcon}
          />
          <FeatureCard
            title="Affordable Pricing"
            description="Enjoy competitive rates and transparent pricing with no hidden fees, offering you the best value for both car rentals and limousine services."
            // Icon={FilledLocationIcon}
          />
        </div>
      </Container>

      <Section>
        <Container>
          <RentCarCategories />
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

      {!loading && rentCarsData?.data?.length && (
        <Section bgType="gray">
          <Container>
            <Heading text="Available Rent Cars" type="h3" />
            <Spacer spacing="lg" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {rentCarsData.data.map((cur) => (
                <CarRentCard
                  key={cur.id}
                  car={cur}
                  setBookingOpen={setBookingOpen}
                  setSelectedCar={setSelectedCar}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

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

      {!loading && limousineData?.data?.length && (
        <Section>
          <Container>
            <Heading text="Available Limousine Cars" type="h3" />
            <Spacer spacing="lg" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {limousineData.data.map((cur) => (
                <CarRentCard
                  // brand={cur.brand}
                  // kmsDriven={cur.driven_kms}
                  // id={cur.id}
                  // imageUrl={cur.images[0].url}
                  // location={cur.situated_location}
                  // name={cur.name}
                  // price={cur.price_per_day}
                  // status={cur.status}
                  // transmission={cur.transmission}
                  // year={cur.year}
                  car={cur}
                  key={cur.id}
                  setBookingOpen={setBookingOpen}
                  setSelectedCar={setSelectedCar}
                  // type={cur.type}
                />
              ))}
            </div>
          </Container>

          <RentCarBookingForm
            open={openBookingOpen}
            setOpen={setBookingOpen}
            selectedCar={selectedCar}
          />
        </Section>
      )}

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Corporate Rental"
              description="Efficient and flexible car rental solutions for businesses, perfect for meetings, business trips, or long-term needs."
            />
            <FeatureCard
              title="Individual Rental"
              description="Personalized car rental options for daily, weekly, or monthly use, tailored to fit your lifestyle and travel needs."
            />
            <FeatureCard
              title="Luxury Car Rental"
              description="Experience high-end comfort and style with our premium luxury car rentals, ideal for special occasions or indulgent trips."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <AboutUsSection
            img={hireDriverEx}
            title="About Our Car Rental & Limousine Booking Service"
            desc="LetGetCar offers premium car rental and limousine booking services, tailored to meet your every need. Whether you're looking for a reliable vehicle for a short trip, a luxurious limousine for a special event, or a long-term rental for business purposes, we provide a diverse range of well-maintained vehicles to suit any occasion. Our fleet includes everything from compact cars to high-end limousines, ensuring you travel in style, comfort, and safety. We pride ourselves on flexibility, offering daily, weekly, and monthly rental plans to accommodate your schedule, no matter the length of your stay or the nature of your journey. In addition to our exceptional vehicles, our professional chauffeurs guarantee a smooth and punctual driving experience, ensuring that you reach your destination with ease and comfort. At LetGetCar, customer satisfaction is our priority. We offer competitive, transparent pricing without any hidden fees, so you know you're getting the best deal. Whether you need a rental for business, leisure, or a special occasion, our seamless booking process and dedicated service make LetGetCar your trusted partner for car rental and limousine services."
          />
        </Container>
      </Section>

      <Section bgType="gray">
        <Container>
          <HowItWorks
            data={howItWorksContents}
            mainDescription="Renting a car or booking a limousine with LetGetCar is simple and hassle-free. Our streamlined process ensures you get the right vehicle with minimal effort and maximum convenience. Just follow these three easy steps:"
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

      <Section bgType="gray">
        <Container>
          <TestimonialsSection />
        </Container>
      </Section>

      <Container className="mb-9">
        <FaqSection />
      </Container>
    </>
  );
};

export default RentCarLimousineWrapper;
