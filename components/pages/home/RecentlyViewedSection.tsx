"use client";

import { CarCard1, Container, Section, Spacer } from "@/components/common";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "@/components/common/CarousalArrows";
import { Heading, NormalText } from "@/components/UI";
import React from "react";
import Slider from "react-slick";
import { carImage } from "@/constants/images";

const RecentlyViewedSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = new Array(20).fill({
    image: carImage,
    name: "NissanMagnite RedEdition 2024",
    price: 2000,
    emi: 1073,
  });

  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center">
          <Heading
            text="Recently Viewed Cars"
            type="h2"
            textAlign="left"
            color="dark"
            fontWeight="bold"
          />
          <NormalText
            text="View All"
            fontWeight="semiBold"
            textUnderline
            color="gray"
            cursorEnabled
            hoverColor="primary"
          />
        </div>

        <Spacer />

        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-2">
              <CarCard1
                key={index}
                emi={item.emi}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </Slider>

        <Spacer />
      </Container>
    </Section>
  );
};

export default RecentlyViewedSection;
