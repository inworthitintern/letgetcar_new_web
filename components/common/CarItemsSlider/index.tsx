"use client";

import { NormalText } from "@/components/UI";
import React, { useState } from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../CarousalArrows";
// import Image from "next/image";

interface ICarDetailsSliderProps {
  images: { url: string; text: string }[];
}

const CarDetailsSlider: React.FC<ICarDetailsSliderProps> = ({ images }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: nav2 ?? undefined,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className="hidden" />,
  };

  const settingsThumbs = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: nav1 ?? undefined,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className="hidden" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: images.length > 5 ? 5 : images.length,
          slidesToScroll: images.length > 5 ? 5 : images.length,
          infinite: images.length > 5, // Adjust infinite for this breakpoint as well
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: images.length > 3 ? 3 : images.length,
          slidesToScroll: images.length > 3 ? 3 : images.length,
          infinite: images.length > 3, // Adjust infinite for this breakpoint as well
        },
      },
    ],
  };

  console.log;

  return (
    <div className="w-full">
      <Slider
        {...settingsMain}
        ref={(slider) => setNav1(slider)}
        className="main-slider"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-96">
            <NormalText
              className="py-2 px-4 bg-primary absolute right-0 rounded-lg m-2"
              text={image.text}
              size="sm"
              color="dark"
              fontWeight="semiBold"
              textAlign="left"
            />
            <img
              src={image.url}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              alt={`Car image ${index + 1}`}
              //   layout="fill"
              //   objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
      <Slider
        {...settingsThumbs}
        ref={(slider) => setNav2(slider)}
        className="thumb-slider mt-4"
      >
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full h-20 cursor-pointer">
              <img
                src={image.url}
                alt={`Car thumbnail ${index + 1}`}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                // layout="fill"
                // objectFit="cover"
                className="rounded-lg"
              />
              <NormalText
                text={image.text}
                size="xs"
                color="gray"
                textAlign="left"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarDetailsSlider;
