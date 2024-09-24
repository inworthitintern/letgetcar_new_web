"use client";

import {
  CarCard1,
  CarsSlider,
  Container,
  Section,
  Spacer,
} from "@/components/common";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "@/components/common/CarousalArrows";
import { Heading, NormalText } from "@/components/UI";
import React from "react";
import Slider from "react-slick";
import { carImage } from "@/constants/images";
import { useRouter } from "next/navigation";

const RecommentedCarsSection = ({ carsData }: { carsData: any }) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const router = useRouter();

  return (
    <Section bgType="gray">
      <Container>
        <div className="flex justify-between items-center">
          <Heading
            text="Recommented Cars"
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
            onClick={() => router.push(`/buycarslist?is_recommended_car=1`)}
          />
        </div>

        <Spacer />

        <CarsSlider carsData={carsData} />

        {/* <Slider {...settings}>
          {carsData.map((item, index) => (
            <div key={index} className="px-2">
              <CarCard1
                key={index}
                emi={item.emi_price}
                image={item.images[0].url}
                name={item.name}
                price={item.sale_price}
              />
            </div>
          ))}
        </Slider> */}

        <Spacer />
      </Container>
    </Section>
  );
};

export default RecommentedCarsSection;
