"use client";

import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    location: "New York, USA",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    location: "London, UK",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Robert Brown",
    location: "Sydney, Australia",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    location: "London, UK",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Robert Brown",
    location: "Sydney, Australia",
  },
  {
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Robert Brown",
    location: "Sydney, Australia",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
              <video
                className="w-full h-auto rounded-t-lg"
                src={testimonial.videoSrc}
                controls
              />
              <div className="py-3 px-4 flex flex-col gap-2">
                <p className="text-gray-700 mb-2">{testimonial.text}</p>
                <p className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
