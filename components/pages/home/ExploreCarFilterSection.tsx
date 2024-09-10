"use client";

import {
  Container,
  Section,
  SliderComponent,
  Spacer,
} from "@/components/common";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "@/components/common/CarousalArrows";
import { BmwIcon } from "@/components/svgs";
import { Heading, NormalText } from "@/components/UI";
import { Card, Tabs } from "flowbite-react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface IExploreCarFilterSectionProps {
  brands: any;
  bodyTypes: any;
}

const ExploreCarFilterSection: React.FC<IExploreCarFilterSectionProps> = ({
  brands,
  bodyTypes,
  categories,
}) => {
  return (
    <Section>
      <Container>
        <Heading
          text="Why Wait! Explore Car With Ease"
          type="h2"
          color="dark"
          fontWeight="bold"
        />
        <Spacer />

        <Tabs
          aria-label="Pills"
          variant="pills"
          className="tab-container flex justify-center"
        >
          <Tabs.Item active title="Top Brands" style={{ background: "red" }}>
            <Spacer spacing="md" />
            <SliderComponent items={brands} />

            {/* <Slider {...settings}>
              {brands.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white border border-gray-200 shadow-sm p-3 flex flex-col items-center rounded-lg">
                    <Image
                      style={{ height: "60px", objectFit: "cover" }}
                      src={item.image}
                      alt="brand-image"
                      height={60}
                      width={60}
                    />
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </Slider> */}
          </Tabs.Item>
          <Tabs.Item title="Price Range">
            <div className="flex gap-4 justify-center">
              <Card className="hover:bg-primary transition-all cursor-pointer">
                <NormalText
                  text="Less than AED 40K"
                  size="md"
                  fontWeight="semiBold"
                  cursorEnabled
                />
              </Card>
              <Card className="hover:bg-primary transition-all cursor-pointer">
                <NormalText
                  text="Less than AED 40K"
                  size="md"
                  fontWeight="semiBold"
                  cursorEnabled
                />
              </Card>
              <Card className="hover:bg-primary transition-all cursor-pointer">
                <NormalText
                  text="Less than AED 40K"
                  size="md"
                  fontWeight="semiBold"
                  cursorEnabled
                />
              </Card>
              <Card className="hover:bg-primary transition-all cursor-pointer">
                <NormalText
                  text="Less than AED 40K"
                  size="md"
                  fontWeight="semiBold"
                  cursorEnabled
                />
              </Card>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Body Type">
            <SliderComponent items={bodyTypes} />
          </Tabs.Item>
          <Tabs.Item title="Categories">
            <SliderComponent items={categories} />
          </Tabs.Item>
        </Tabs>
      </Container>
    </Section>
  );
};

export default ExploreCarFilterSection;
