"use client";

import { NormalText } from "@/components/UI";
import {
  LocationIcon,
  locationIcon,
  WishlistFilledPrimaryIcon,
  WishlistNonFilledPrimaryIcon,
} from "@/constants/icons";
import { RootState } from "@/GlobalRedux/store";
import wishlistServices from "@/services/wishlistService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface CarCard2Props {
  id: number;
  name: string;
  location: string;
  price: string;
  emi: string;
  imageUrl: string;
  newCar: boolean;
  booked: boolean;
  wishlistedId: number;
  slug: string;
}

const CarCard2: React.FC<CarCard2Props> = ({
  id,
  name,
  location,
  price,
  emi,
  imageUrl,
  newCar,
  booked,
  wishlistedId,
  slug,
}) => {
  const [CarWishListedId, setCarWishListedId] = useState(null);

  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (wishlistedId) {
      setCarWishListedId(wishlistedId);
    }
  }, [wishlistedId]);

  const addToWishListHandler = async () => {
    if (user) {
      const addToWishlist = await wishlistServices.addToWishlist(id);

      if (addToWishlist.data) {
        setCarWishListedId(addToWishlist.data.id);
      }
    } else {
      toast("You have to Login Before Wishlisting Car");
      router.push("/login");
    }
  };

  const removeWishListHandler = async () => {
    const removeWishlist = await wishlistServices.removeWishlistItem(
      CarWishListedId
    );

    if (removeWishlist) {
      setCarWishListedId(null);
    }
  };

  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden flex flex-col justify-between relative cursor-pointer"
      onClick={() => router.push(`/buycarslist/${slug}`)}
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
        <div className="bg-primary py-2 px-4 w-fit absolute bottom-0 rounded">
          <span className="text-xs font-medium flex items-center gap-2">
            <LocationIcon height={20} /> {location}
          </span>
        </div>
        {newCar ? (
          <div className="bg-success-medium pt-0 pb-1 px-4 w-fit absolute top-0 right-0 rounded">
            <span className="text-xs font-medium text-white">New Car</span>
          </div>
        ) : (
          <div className="bg-primary pt-0 pb-1 px-4 w-fit absolute top-0 right-0 rounded">
            <span className="text-xs font-medium">Used Car</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <NormalText text={name} color="dark" fontWeight="medium" size="md" />
          {/* <h3 className="text-lg font-bold mb-2">{}</h3> */}
          <NormalText
            text={price}
            color="primary"
            fontWeight="bold"
            size="md"
          />
        </div>
        <div className="flex items-center mt-1 mb-2">
          <NormalText
            text="Basic"
            color="gray"
            fontWeight="medium"
            size="xs"
            className="mr-2"
          />{" "}
          <span className="text-primary">|</span>
          <NormalText
            text="62,203km"
            color="gray"
            fontWeight="medium"
            size="xs"
            className="mx-2"
          />{" "}
          <span className="text-primary">|</span>
          <NormalText
            text="GCC"
            color="gray"
            fontWeight="medium"
            size="xs"
            className="ml-2"
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <NormalText text="Auto loan down payment" color="gray" size="xs" />
            <NormalText
              text={`EMI ${emi}/mo for 5 years`}
              color="dark"
              size="md"
              fontWeight="medium"
            />
          </div>

          <div className="cursor-pointer absolute right-2 bottom-2 z-10">
            {CarWishListedId ? (
              <div onClick={removeWishListHandler}>
                <WishlistFilledPrimaryIcon height={40} width={40} />
              </div>
            ) : (
              <div onClick={addToWishListHandler}>
                <WishlistNonFilledPrimaryIcon height={40} width={40} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard2;
