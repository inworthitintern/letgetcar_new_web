"use client";
import Link from "next/link";
import React from "react";
import { Container, Section, Spacer } from "@/components/common";
import { Heading, NormalText, Button } from "@/components/UI";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { carmartLogo } from "@/constants/images";

interface ICarMartCategorySectionProps {
  categories: { image: string; title: string }[];
}

const CarMartCategorySection: React.FC<ICarMartCategorySectionProps> = ({
  categories,
}) => {
  const router = useRouter();

  return (
    <Section bgType="gray">
      <Container>
        <div className="text-center">
          {/* Section Heading */}
          {/* Section Heading with Logo */}
          <div className="flex items-center justify-center gap-3 flex-col">
            <img
              src={carmartLogo.src}
              style={{ width: "160px", objectFit: "cover" }}
              alt="Logo"
            />
            <Heading text="Car Mart" type="h3" />
          </div>

          <Spacer spacing="sm" />
          <NormalText
            size="md"
            color="gray"
            text="Explore our range of car spare parts and accessories. Designed to fit your car's needs with top-notch quality and affordability."
          />

          <Spacer spacing="lg" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="cursor-pointer relative group h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() =>
                  (window.location.href = "https://lgccarmart.meatado.com")
                }
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
                {/* Text at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white text-center bg-gradient-to-t from-black/60 to-transparent">
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
              </div>
            ))}
          </div>

          <Spacer spacing="lg" />

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <Link href="https://lgccarmart.meatado.com">
              <Button
                text="View Cart Mart"
                className="w-fit"
                htmlType="submit"

                //   onClick={carBookingCheckoutHandler}
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CarMartCategorySection;
