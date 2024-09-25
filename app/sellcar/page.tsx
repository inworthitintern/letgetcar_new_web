"use client";

import {
  AboutUsSection,
  BannerImage,
  Container,
  CtnSection,
  FaqSection,
  HowItWorks,
  ItemCard,
  LetGetCarFeatureCard,
  Section,
  SectionPoints,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { HireDriverForm } from "@/components/pages/hireDriver";
import { SellCarFormModal } from "@/components/pages/sellcar";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  hireDriverEx,
  onlineBookingImage,
  sellcarBgImage,
  sellcarCashImg,
  sellcarEnterDetailsImg,
  sellcarInspectionImg,
} from "@/constants/images";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";
import { RootState } from "@/GlobalRedux/store";
import { Card, List } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const howItWorksContents = [
  {
    img: sellcarEnterDetailsImg,
    title: "Enter car details",
    desc: "Share few vehicle details and we will give you a best price instantly",
  },
  {
    img: sellcarCashImg,
    title: "Car inspection",
    desc: "Our car expert physically verifies your car’s condition and we will give you the final offer",
  },
  {
    img: sellcarInspectionImg,
    title: "Car pick up & payment",
    desc: "We will transfer the amount after RTA check before your car is picked up",
  },
];

const SellCarScreen = () => {
  const [openSellCarForm, setOpenSellCarForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const onSellCarBtnHandler = async () => {
    if (user) {
      setOpenSellCarForm(true);
    } else {
      toast.warn("You have Login Before Sell Car Enquiry");
      router.push("/login");
    }
  };

  const { banners } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(getBanners({ type: "sellcar" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${sellcarBgImage.src})`,
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          height: "100vh", // You can adjust this as needed (e.g., 100vh for full viewport height)
          width: "100%", // Ensure it takes full width
        }}
      >
        <Container>
          <div className="h-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <div>
              <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white">
                Sell Any Car Online in <span className="text-primary">UAE</span>
              </h1>
              <p className="text-sm md:text-base text-white font-normal  py-6">
                You will get full amount before pick up
              </p>
              <Button
                text={"Sell Your Car Now"}
                type="primary"
                onClick={onSellCarBtnHandler}
                //   onClick={() => {}}
              />
            </div>
          </div>
        </Container>
      </div>

      <Container className="-mt-16">
        <div className="flex justify-center">
          <Card
            title="Start Sell Your Car Now At Best Price!"
            className="w-full md:w-2/3"
          >
            <Heading
              text="Why Wait? Start Sell Your Car at Decent Price"
              type="h4"
              textAlign="left"
            />
            <NormalText
              text="Act now and get the best value for your car with our simple and straightforward selling process. We offer competitive offers and handle all the details, ensuring a smooth and efficient transaction. Click below to get started and sell your car with confidence."
              color="gray"
            />
            {/* <div className="grid grid-cols-12">
            {["", "", "", "", "", "", "", "", "", "", ""].map((_, i) => {
              return (
                <ItemCard
                  image="https://res.cloudinary.com/dntrefeat/image/upload/v1722660362/zjo0tbqs4eefy5tw2fda.jpg"
                  name="BMW"
                  key={i}
                />
              );
            })}
            <ItemCard name="All" bg="primary" />
          </div> */}
            <Button
              text="Get best price"
              type="primary"
              onClick={onSellCarBtnHandler}
            />
          </Card>
        </div>
      </Container>

      <SellCarFormModal setOpen={setOpenSellCarForm} open={openSellCarForm} />

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
          img={hireDriverEx}
          title="Sell Your Car Easily"
          desc="Looking to sell your car quickly and for a great price? LetGetCar makes the process easy and efficient. Start by submitting basic details about your vehicle, including its make, model, year, mileage, and condition. This information helps us provide an initial valuation. Next, schedule a convenient time for one of our experts to inspect your car. During the inspection, we assess the vehicle's condition, accounting for any wear and tear, and evaluate it based on current market trends. After the inspection, you’ll receive a competitive offer that reflects your car’s value. If you’re happy with the offer, we handle all the paperwork and finalize the sale swiftly. Our goal is to ensure you get the best possible price with minimal hassle. We pride ourselves on providing a transparent and seamless selling experience, with no hidden fees or surprises. Our team of professionals is dedicated to making the process as smooth as possible, offering expert support every step of the way. Whether you're looking to upgrade your vehicle or simply need to sell it quickly, LetGetCar is here to help. Start today and experience a fast, fair, and straightforward way to sell your car."
        />
      </Section>

      <Section>
        <Container>
          <SectionPoints
            title="Benefits of Selling Your Car with Us"
            lists={[
              "Competitive Offers: Receive a fair and competitive offer based on the current market value and condition of your vehicle.",
              "Fast and Simple Process: Enjoy a streamlined selling experience with minimal paperwork and a quick turnaround time.",
              "No Hidden Fees: Experience a transparent transaction with no hidden fees or unexpected charges.",
              "Expert Valuation: Benefit from accurate and professional vehicle assessments by our knowledgeable team.",
              "Hassle-Free Transaction: Leave the details to us—we handle all paperwork and ensure a smooth, efficient sale.",
            ]}
            // desc="Awesome Drive provides monthly driver service in Dubai. A professional driver with many years of experience will take you any corner of the city.we are registered with Dubai Roads and Transport Authority (RTA) to outsource private, personal & corporate Drivers to Customer. with an honest objective to assist everybody to reach their destination,safety,comfortably and above all, cost-effectively"
          />
        </Container>
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

      {/* 
      <Section bgType="primary">
        <Container>
          <Heading text="SELL YOU CARS NOW" type="h3" textAlign="left" />
          <Spacer spacing="sm" />
          <NormalText
            size="sm"
            color="gray"
            text="When you are in search of hiring a  driver in Dubai then awesome drive is your one stop solution. We have a lot of experience that provides an innovative and unique chauffeur service to the people in the UAE public. When you are looking for a safe driver who is reliable and can take you to your loved ones and with comfort, we have the best private drivers you will find anywhere in Dubai. We are specialists when it comes to offering safe driver services. We will not let you down in your hunt for the best driver service in Dubai."
          />
          <Spacer spacing="sm" />
          <Button
            text={"SELL YOUR CAR NOW"}
            type="dark"
            onClick={onSellCarBtnHandler}
            //   onClick={() => {}}
          />
        </Container>
      </Section> */}

      <Section>
        <CtnSection
          ctnText="Download Our App Now"
          desc="Get exclusive offers, manage your bookings, and access our full range of services right from your phone. Download now for a seamless experience and special discounts!"
          title="Download From Playstore"
        />
      </Section>

      <Section>
        <Container>
          <TestimonialsSection />
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

      <Container className="mb-9">
        <FaqSection />
      </Container>
    </div>
  );
};

export default SellCarScreen;
