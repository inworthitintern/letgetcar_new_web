"use client";

import React from "react";
import { SampleNextArrow, SamplePrevArrow } from "../CarousalArrows";
import Slider from "react-slick";
import CarCard1 from "../Cards/CarCard1";

const CarsSlider = ({ carsData }) => {
  const settings = {
    dots: false,
    infinite: carsData.length > 5, // Only make it infinite if there are more than 10 carsDatas
    speed: 500,
    slidesToShow: Math.min(5, carsData.length), // Show as many slides as there are carsDatas if less than 10
    slidesToScroll: Math.min(5, carsData.length), // Scroll as many slides as there are carsDatas if less than 10
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className="hidden" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: carsData.length > 5 ? 5 : carsData.length,
          slidesToScroll: carsData.length > 5 ? 5 : carsData.length,
          infinite: carsData.length > 5, // Adjust infinite for this breakpoint as well
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: carsData.length > 2, // Adjust infinite for this breakpoint as well
        },
      },
    ],
  };

  console.log(carsData, "hehehe");

  return (
    <Slider {...settings}>
      {carsData.map((item, index) => (
        <div key={index} className="px-2">
          <CarCard1
            key={index}
            emi={item.emi_price}
            image={item?.images?.length > 0 ? item.images[0]?.url : null}
            name={item.name}
            price={item.sale_price}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CarsSlider;
