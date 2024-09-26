import React from "react";
import { Card, Button, Carousel } from "flowbite-react";
import { sellcarBgImage } from "@/constants/images";
import { Container, Section, TestimonialsSection } from "@/components/common";
import { Heading } from "@/components/UI";

const AboutUs = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-cover bg-center bg-hero-pattern">
        <div className="absolute inset-0 bg-primary flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold text-dark">Welcome to LetGetCar</h1>
          <p className="mt-4 text-xl text-dark">
            Your all-in-one automotive platform for buying, selling, and more.
          </p>
          {/* <Button className="mt-8 px-6 py-2">Explore Our Services</Button> */}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold">Our Commitment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <Card>
            <h3 className="text-xl font-semibold">Ease of Use</h3>
            <p className="text-gray-600">
              Streamlined processes for buying, selling, and renting cars.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Trusted Services</h3>
            <p className="text-gray-600">
              Verified listings and secure transactions.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Complete Solutions</h3>
            <p className="text-gray-600">
              From driver hiring to garage bookings.
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">About LetGetCar</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={sellcarBgImage.src}
              alt="LetGetCar Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <p className="text-gray-700 text-lg leading-relaxed">
              LetGetCar is your trusted automotive platform, designed to offer
              you a seamless and stress-free journey in all things car-related.
              Whether you're looking to buy your dream car, sell your existing
              one, or rent a vehicle for a short trip, LetGetCar has it all. We
              also provide exclusive services like garage bookings and driver
              hiring, ensuring you never face any roadblocks. Let us drive you
              to a better automotive experience today.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <h3 className="text-xl font-semibold">Buy & Sell Cars</h3>
            <p>Find your dream car or sell with ease.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Rent a Car</h3>
            <p>Flexible rental services.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Driver Hiring</h3>
            <p>Hire a driver with ease.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Garage Bookings</h3>
            <p>Book professional car care.</p>
          </Card>
        </div>
      </section>

      <Section>
        <Container>
          <Heading
            text="What Our Customers Say"
            type="h2"
            textAlign="left"
            color="dark"
            fontWeight="bold"
          />
          <TestimonialsSection />
        </Container>
      </Section>

      {/* Testimonials or Why Choose Us Section */}
      {/* <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">Why LetGetCar?</h2>
        <div className="mt-8">
          <Carousel>
            <div>
              <p className="text-gray-700">
                "LetGetCar made the process of buying my new car incredibly
                simple!"
              </p>
              <p className="text-gray-500">- Customer A</p>
            </div>
            <div>
              <p className="text-gray-700">
                "Their driver hiring service was a lifesaver during my trip."
              </p>
              <p className="text-gray-500">- Customer B</p>
            </div>
          </Carousel>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
