import { NormalText } from "@/components/UI";
import Image from "next/image";
import React from "react";

interface ICarCard1Props {
  image: any;
  name: string;
  price: number;
  emi: number;
}

const CarCard1: React.FC<ICarCard1Props> = ({ image, name, price, emi }) => {
  return (
    <div className="group bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="car"
          height={135}
          style={{ objectFit: "cover", height: "135px", width: "100%" }}
          className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="py-3 px-4 flex flex-col gap-2">
        <NormalText text={name} textAlign="left" />
        <NormalText
          text={"AED " + price}
          fontWeight="bold"
          textAlign="left"
          color="primary"
        />
        <div>
          <NormalText
            text={`From EMI ${emi}/ month`}
            size="xs"
            color="gray"
            textAlign="left"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard1;
