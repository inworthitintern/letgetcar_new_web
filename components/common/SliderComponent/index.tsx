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
    infinite: items.length > 3, // Adjust for mobile
    speed: 500,
    slidesToShow: Math.min(10, items.length), // Default for larger screens
    slidesToScroll: Math.min(10, items.length),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets and medium devices
        settings: {
          slidesToShow: Math.min(5, items.length),
          slidesToScroll: Math.min(5, items.length),
          infinite: items.length > 5,
        },
      },
      {
        breakpoint: 768, // Small tablets
        settings: {
          slidesToShow: Math.min(4, items.length),
          slidesToScroll: Math.min(4, items.length),
          infinite: items.length > 4,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: Math.min(3, items.length), // Show 3 items
          slidesToScroll: Math.min(3, items.length), // Scroll 3 items
          infinite: items.length > 3, // Infinite scroll for mobile if items > 3
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
            />
            <span className="text-sm text-center">{item.name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
