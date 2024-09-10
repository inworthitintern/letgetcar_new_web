"use client";

import React from "react";
import { SampleNextArrow, SamplePrevArrow } from "../CarousalArrows";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

interface ISliderComponent {
  items: any;
  type: "brand_id" | "category_id" | "body_type_id";
}

const SliderComponent: React.FC<ISliderComponent> = ({
  items,
  type = "brand_id",
}) => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: items.length > 10, // Only make it infinite if there are more than 10 itemss
    speed: 500,
    slidesToShow: Math.min(10, items.length), // Show as many slides as there are itemss if less than 10
    slidesToScroll: Math.min(10, items.length), // Scroll as many slides as there are itemss if less than 10
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className="hidden" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: items.length > 10 ? 10 : items.length,
          slidesToScroll: items.length > 10 ? 10 : items.length,
          infinite: items.length > 10, // Adjust infinite for this breakpoint as well
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: items.length > 4, // Adjust infinite for this breakpoint as well
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div
          key={index}
          className="px-2"
          onClick={() => router.push(`/buycarslist?${type}=${item.id}`)}
        >
          <div className="bg-white border border-gray-200 shadow-sm p-3 flex flex-col items-center rounded-lg">
            <img
              style={{ height: "60px", objectFit: "contain" }}
              src={item.image}
              alt="image"
              //   height={40}
              //   width={90}
            />
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
