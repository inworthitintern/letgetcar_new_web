"use client";

import { Button, NormalText } from "@/components/UI";
import { LocationIcon } from "@/constants/icons";
import { RootState } from "@/GlobalRedux/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

interface CarRentCardProps {
  id: number;
  name: string;
  location: string;
  price: string;
  year: number;
  imageUrl: string;
  status: string;
  transmission: string;
  brand: string;
  kmsDriven: number;
  setBookingOpen: (arg: boolean) => void;
  setSelectedCar: (arg: any) => void;
  type: ["rentcar", "limousine"];
}

const CarRentCard: React.FC<CarRentCardProps> = ({
  id,
  name,
  location,
  price,
  year,
  imageUrl,
  status,
  transmission,
  brand,
  kmsDriven,
  setBookingOpen,
  setSelectedCar,
  type,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden flex flex-col justify-between relative cursor-pointer"
      //   onClick={() => router.push(`/buycarslist/${id}`)}
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
        <div className="bg-primary py-2 px-4 w-fit absolute bottom-0 rounded">
          <span className="text-xs font-medium flex items-center gap-2">
            <LocationIcon height={20} /> {location}
          </span>
        </div>
        <div className="bg-success-medium pt-0 pb-1 px-4 w-fit absolute top-0 right-0 rounded">
          <span className="text-xs font-medium text-white">{status}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <NormalText text={name} color="dark" fontWeight="medium" size="md" />
          {/* <h3 className="text-lg font-bold mb-2">{}</h3> */}
        </div>
        <div className="flex items-center mt-1 mb-2">
          <NormalText
            text={brand}
            color="gray"
            fontWeight="medium"
            size="xs"
            className="mr-2"
          />{" "}
          <span className="text-primary">|</span>
          <NormalText
            text={transmission}
            color="gray"
            fontWeight="medium"
            size="xs"
            className="mx-2"
          />{" "}
          <span className="text-primary">|</span>
          <NormalText
            text={kmsDriven}
            color="gray"
            fontWeight="medium"
            size="xs"
            className="ml-2"
          />
        </div>
        <div className="flex justify-between items-end">
          <NormalText
            text={`${year}`}
            color="dark"
            size="md"
            fontWeight="medium"
          />
          <div className="flex gap-1">
            <NormalText
              text={price}
              color="primary"
              fontWeight="bold"
              size="md"
            />
            <NormalText text={"/Per Day"} color="gray" size="md" />
          </div>
        </div>
        <Button
          text="Book Now"
          className="w-full mt-2"
          onClick={() => {
            setBookingOpen(true);
            setSelectedCar({ id, name, location, type });
          }}
        />
      </div>
    </div>
  );
};

export default CarRentCard;
