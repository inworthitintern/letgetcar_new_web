"use client";

import {
  CarCard1,
  CarCard2,
  CarRentCard,
  Container,
  FeatureCard,
  LoadingSpinner,
  Section,
  Spacer,
} from "@/components/common";
import { Button, Heading } from "@/components/UI";
import { rentCarLimousineImage } from "@/constants/images";
import rentCarLimousineService from "@/services/rentCarLimousineService";
import React, { useEffect, useState } from "react";
import RentCarBookingForm from "./RentCarBookingForm";

const RentCarLimousineWrapper = () => {
  const [rentCarsData, setRentCarsData] = useState([]);
  const [limousineData, setLimousineData] = useState([]);

  const [openBookingOpen, setBookingOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  const [loading, setLoading] = useState(false);

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
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${rentCarLimousineImage.src})`,
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
                Rent Car Or{" "}
                <span className="text-primary">Limousine Booking</span>
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
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </Container>
      {!loading && rentCarsData?.data?.length && (
        <Section>
          <Container>
            <Heading text="Available Rent Cars" type="h3" />
            <Spacer spacing="lg" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {rentCarsData.data.map((cur) => (
                <CarRentCard
                  brand={cur.brand}
                  kmsDriven={cur.driven_kms}
                  id={cur.id}
                  imageUrl={cur.images[0].url}
                  location={cur.situated_location}
                  name={cur.name}
                  price={cur.price_per_day}
                  status={cur.status}
                  transmission={cur.transmission}
                  year={cur.year}
                  key={cur.id}
                  setBookingOpen={setBookingOpen}
                  setSelectedCar={setSelectedCar}
                  type={cur.type}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {!loading && limousineData?.data?.length && (
        <Section bgType="gray">
          <Container>
            <Heading text="Available Limousine Cars" type="h3" />
            <Spacer spacing="lg" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {limousineData.data.map((cur) => (
                <CarRentCard
                  brand={cur.brand}
                  kmsDriven={cur.driven_kms}
                  id={cur.id}
                  imageUrl={cur.images[0].url}
                  location={cur.situated_location}
                  name={cur.name}
                  price={cur.price_per_day}
                  status={cur.status}
                  transmission={cur.transmission}
                  year={cur.year}
                  key={cur.id}
                  setBookingOpen={setBookingOpen}
                  setSelectedCar={setSelectedCar}
                  type={cur.type}
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
    </>
  );
};

export default RentCarLimousineWrapper;
