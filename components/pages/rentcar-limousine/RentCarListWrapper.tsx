"use client";

import React, { useState, useEffect } from "react";
import rentCarLimousineService from "@/services/rentCarLimousineService"; // Adjust your import path
import {
  CarRentCard,
  Container,
  LoadingSpinner,
  Section,
} from "@/components/common";
import RentCarBookingForm from "./RentCarBookingForm";

const RentCarList = () => {
  const [activeTab, setActiveTab] = useState("rentcar");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const [bookingOpen, setBookingOpen] = useState(false);

  // Fetch cars based on the active tab
  const fetchCars = async (type: string) => {
    setLoading(true);
    try {
      const response = await rentCarLimousineService.getCars({ type });
      setCars(response.data.data); // Assuming the API response has a `data` field
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
    setLoading(false);
  };

  // Fetch cars when the active tab changes
  useEffect(() => {
    fetchCars(activeTab);
  }, [activeTab]);

  const tabs = [
    { key: "rentcar", label: "Rent Car" },
    { key: "limousine", label: "Limousine Booking" },
    { key: "corporate", label: "Corporate Rental" },
    { key: "luxury", label: "Luxury Rental" },
  ];

  return (
    <Section className="relative">
      <Container>
        <div className="p-6">
          {/* Fixed Tab Navigation */}
          <div className="fixed top-20 left-0 w-full bg-white z-50 py-4 shadow-md">
            <Container>
              <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`whitespace-nowrap py-2 px-6 rounded-md text-lg font-semibold transition-colors duration-300 ease-in-out shadow-lg ${
                      activeTab === tab.key
                        ? "bg-primary text-dark hover:bg-primary"
                        : "bg-white text-gray-600 hover:text-gray-600 hover:bg-yellow-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </Container>
          </div>

          {/* Padding to account for the fixed tab header */}
          <div className="pt-24">
            {/* Loading Spinner */}
            {loading ? (
              <div className="flex justify-center items-center h-96">
                <LoadingSpinner />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                {cars.map((cur: any) => (
                  <div
                    key={cur.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <CarRentCard
                      car={cur}
                      setBookingOpen={setBookingOpen}
                      setSelectedCar={setSelectedCar}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <RentCarBookingForm
          open={bookingOpen}
          setOpen={setBookingOpen}
          selectedCar={selectedCar}
        />
      </Container>
    </Section>
  );
};

export default RentCarList;
