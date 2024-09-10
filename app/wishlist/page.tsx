"use client";

import {
  CarCard2,
  Container,
  LoadingSpinner,
  Section,
  Spacer,
} from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import { RootState } from "@/GlobalRedux/store";
import wishlistServices from "@/services/wishlistService";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WishListScreen = () => {
  const [allwishlistItems, setAllWishlistItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state: RootState) => state.auth);

  const getWishlistItems = async () => {
    setLoading(true);
    const allWishlist = await wishlistServices.getWishlistItems();

    setAllWishlistItems(allWishlist.data);

    setLoading(false);
  };

  useEffect(() => {
    getWishlistItems();
  }, []);

  console.log(allwishlistItems, "heyy");

  if (loading) {
    <LoadingSpinner />;
  }

  console.log();

  if (user) {
    return (
      <Section>
        <Container className="mt-12">
          <Heading text="Wishlist iItems" textAlign="left" />
          <Spacer spacing="lg" />
          {allwishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {allwishlistItems.map((car, index) => (
                <CarCard2
                  id={car.model.id}
                  wishlistedId={car.id}
                  key={index}
                  name={car.model.name}
                  booked={car.model.status === "Booked"}
                  emi={car.model.emi_price}
                  imageUrl={
                    car.model.images?.length > 0
                      ? car.model.images[0].url
                      : null
                  }
                  location={car.model.location.name}
                  newCar={car.model.is_new_car === 1}
                  price={car.model.sale_price}
                  slug={car.model.slug}
                />
              ))}
            </div>
          ) : (
            !loading && (
              <div className="flex flex-col items-center gap-6">
                <Heading text="No Wishlist Items Found" />
                <NormalText text="Start adding to wishlist now" color="gray" />
                <Button text="Start Adding To wishlist" type="dark" />
              </div>
            )
          )}
        </Container>
      </Section>
    );
  } else {
    <Section>
      <Container>You have login before accessing wishlist</Container>
    </Section>;
  }
};

export default WishListScreen;
