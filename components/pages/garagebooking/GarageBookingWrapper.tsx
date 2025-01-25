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
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const tuningDescription = [
  "At Purple Seven Cars, we transcend the ordinary with our integrated tuning workshop in Dubai, dedicated to perfecting the performance and aesthetics of your premium vehicle.",
  "Trust Purple Seven Cars to transform your already premium vehicle into a unique masterpiece, embodying the opulence that defines Dubai’s automotive landscape.",
];

const rentalDescription = [
  "We offer premium car rental services in Dubai, ensuring you experience the city in comfort and style.",
  "Choose from a wide range of vehicles tailored to suit your preferences, whether for business or leisure.",
];

const tuningImages = [
  { src: "/images/steering-wheel.jpg", alt: "Steering Wheel" },
  { src: "/images/white-car.jpg", alt: "White Car" },
  { src: "/images/car-interior.jpg", alt: "Car Interior" },
];

const rentalImages = [
  { src: "/images/luxury-car.jpg", alt: "Luxury Car" },
  { src: "/images/suv.jpg", alt: "SUV" },
  { src: "/images/sedan.jpg", alt: "Sedan" },
];

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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { banners } = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners({ type: "garage" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  const openForm = () => {
    setIsFormOpen(true); // Open the form
  };

  const closeForm = () => {
    setIsFormOpen(false); // Close the form
  };

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

      <Section bgType="gray" className="-mb-20">
  <Container>
    <div className="text-center mb-8">
      <Heading
        text="TUNING"
        type="h2"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        className="mb-8"
      />

      <NormalText
        text="At LetGetCar, we transcend the ordinary with our integrated tuning workshop in Dubai, dedicated to perfecting the performance and aesthetics of your premium vehicle. From bespoke interior modifications to precision engine upgrades, our skilled technicians ensure that your car not only meets but exceeds the highest standards of luxury."
        type="p"
        textAlign="left"
      />

      <NormalText
        text="Trust LetGetCar to transform your already premium vehicle into a unique masterpiece, embodying the opulence that defines Dubai’s automotive landscape. In a city that thrives on exclusivity, our luxury tuning services set your car apart as a symbol of individuality and refined taste."
        type="p"
        textAlign="left"
        className="mt-6"
      />

      <Button text="Book Appointment" type="primary" className="mt-10" />
    </div>
  </Container>

  
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
    <div className="relative w-full h-[450px]">
        <Image
          src="/images/tuning-img2.webp"
          alt="Steering Wheel"
          layout="fill" 
          objectFit="cover"
          // className="rounded-lg shadow-lg"
        />
      </div>
      <div className="relative w-full h-[450px]">
        <Image
          src="/images/tuning-img.webp"
          alt="White Car"
          layout="fill"
          objectFit="cover"
          // className="rounded-lg shadow-lg"
        />
      </div>
      <div className="relative w-full h-[450px]">
        <Image
          src="/images/tuning-img3.webp"
          alt="Car Interior"
          layout="fill"
          objectFit="cover"
          // className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>

  {/* Painting */}
  <Container>
    <div className="text-center mb-8 mt-20">
      <Heading
        text="PAINTING"
        type="h2"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        className="mb-8"
      />

      <NormalText
        text="Make a bold statement on Dubai’s luxurious roads by customizing your premium vehicle’s exterior with LetGetCars exclusive painting services. Choose from a palette of vibrant colors or opt for a sophisticated matte finish to enhance the aesthetic allure of your car. Employing cutting-edge techniques, our expert team ensures a flawless and enduring result."
        type="p"
        textAlign="left"
      />

      <NormalText
        text="Whether you desire a complete color overhaul or a subtle touch-up, LetGetCar brings your vision to life with an unparalleled level of craftsmanship. In a metropolis synonymous with luxury, our bespoke painting services ensure your premium car stands out as a true work of art."
        type="p"
        textAlign="left"
        className="mt-6"
      />

      <Button text="Book Appointment" type="primary" className="mt-10" />
    </div>
  </Container>

  
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
    <div className="relative w-full md:h-[600px] h-[400px]">
        <Image
          src="/images/painting-img1.webp"
          alt="Steering Wheel"
          layout="fill" 
          objectFit="cover"
          // className="rounded-lg shadow-lg"
        />
      </div>
      <div className="relative w-full md:h-[600px] h-[400px]">
        <Image
          src="/images/painting-img2.webp"
          alt="White Car"
          layout="fill"
          objectFit="cover"
          // className="rounded-lg shadow-lg"
        />
      </div>
      
    </div>
  </div>

  {/* Wrapping */}
  <Container>
    <div className="text-center mb-8 mt-20">
      <Heading
        text="WRAPPING"
        type="h2"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        className="mb-8"
      />

      <NormalText
        text="Express your individuality on Dubai’s exclusive streets with LetGetCar's professional wrapping services. Elevate the appearance of your premium car with a custom wrap that reflects your unique style. Choose from a curated selection of high-quality materials and finishes, ensuring a perfect blend of elegance and distinction."
        type="p"
        textAlign="left"
      />

      <NormalText
        text="Our skilled team guarantees precision in every detail, providing a protective and visually stunning wrap that turns heads and embodies the essence of Dubai’s premium automotive scene. In a city where every detail matters, our premium wrapping services make your car an unmistakable symbol of sophistication and exclusivity."
        type="p"
        textAlign="left"
        className="mt-6"
      />

      <Button text="Book Appointment" type="primary" className="mt-10" />
    </div>
  </Container>

  
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
    <div className="relative w-full md:h-[600px] h-[400px]">
        <Image
          src="/images/wrapping-img1.jpg"
          alt="Steering Wheel"
          layout="fill" 
          objectFit="cover"
          // className="rounded-lg shadow-lg"
        />
      </div>
      <div className="relative w-full md:h-[600px] h-[400px]">
        <Image
          src="/images/wrapping-img2.jpg"
          alt="White Car"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
    </div>
  </div>

  <Container>
    <div className="text-center mb-8 mt-20">
      <Heading
        text="ARE YOU GET ENOUGH ?!"
        type="h2"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        className="mb-8"
      />

      <NormalText
        text="At LetGetCar, we redefine luxury in Dubai’s automotive landscape, offering not just cars but experiences that epitomize exclusivity and opulence. Experience the unparalleled blend of performance and prestige with our premium car rental, tuning, painting, and wrapping services."
        type="p"
        textAlign="left"
      />

      <NormalText
        text="Your journey with LetGetCar is not just a drive – it’s an indulgence in the extraordinary."
        type="p"
        textAlign="left"
        className="mt-6"
      />

      <Button text="Book Appointment" type="primary" className="mt-10" />
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

      <Section>
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
      </Section>
    </div>
  );
};

export default GarageBookingWrapper;
