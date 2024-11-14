"use client";

// pages/index.tsx
import React, { useEffect, useState } from "react";

import {
  BuyCarFilters,
  CarCard2,
  Container,
  LoadingSpinner,
  Section,
  Sorter,
  Spacer,
} from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import { SortIcon } from "@/constants/icons";
import { Card, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { getBuyCarModels } from "@/GlobalRedux/Features/buyCarModel/buyCarSlice";
import { useRouter } from "next/navigation";

const BuyCarsList: React.FC = () => {
  const [apiParameter, setApiParameters] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  const { buyCarLists, loading } = useSelector(
    (state: RootState) => state.buyCarModel
  );

  const { user } = useSelector((state: RootState) => state.auth);

  // const [sortedValue, setSortedValue] = useState("Best Matches");

  //   Add API CALL
  useEffect(() => {
    if (user) {
      dispatch(getBuyCarModels({ filters: apiParameter, isLoggedIn: true }));
    } else {
      dispatch(getBuyCarModels({ filters: apiParameter, isLoggedIn: false }));
    }
  }, [apiParameter, user]);

  console.log(buyCarLists, "heloooooo");

  const resetFilters = () => {
    router.replace(`?`);
    setApiParameters("");
  };

  return (
    <Section className="bg-[#FCFBFB] relative overflow-auto">
      <Container>
        <div className="py-16">
          <div className="flex justify-between gap-8 relative">
            <div className="hidden lg:block w-1/4 top-0 z-10">
              <BuyCarFilters
                budgetRange={[0, 410000]}
                emiRange={[0, 410000]}
                setApiParameters={setApiParameters}
              />
            </div>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between">
                <Heading
                  text={`${buyCarLists?.total || 0} Available Cars`}
                  type="h4"
                  fontWeight="bold"
                  textAlign="left"
                />

                {/* <Sorter
                  setSortedValue={setSortedValue}
                  sortedValue={sortedValue}
                /> */}
              </div>

              <Spacer spacing="sm" />
              <NormalText
                size="sm"
                color="gray"
                text="Explore an array of inspected used cars in dubai - we offer 1058 top-quality vehicles. Whether you prefer , we've got your match in dubai. Plus, we have hundreds of second-hand cars in other states, shipped to dubai for FREE. Select from SUV, SEDAN,"
              />

              <Spacer spacing="sm" />
              <>
                {!loading && buyCarLists?.data?.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {buyCarLists?.data?.map((car, index) => (
                        <CarCard2
                          id={car?.id}
                          wishlistedId={car?.wishlist_model_id}
                          key={index}
                          name={car?.name}
                          booked={car?.status === "Booked"}
                          emi={car?.emi_price}
                          imageUrl={
                            car?.images?.length > 0 ? car.images[0].url : null
                          }
                          location={car?.location?.name}
                          newCar={car?.is_new_car === 1}
                          price={car?.sale_price}
                          slug={car?.slug}
                        />
                      ))}
                    </div>
                  </>
                ) : loading ? (
                  <LoadingSpinner />
                ) : (
                  <Card className="mt-8">
                    <NormalText
                      text="OOPS.. No Result or Something went wrong"
                      size="lg"
                      fontWeight="semiBold"
                    />
                    <Button text="Load Other Cars" onClick={resetFilters} />
                  </Card>
                )}

                {!loading &&
                buyCarLists?.data?.length > 0 &&
                apiParameter?.length ? (
                  <div className="flex justify-center mt-8">
                    <Button
                      text="Load All Cars"
                      onClick={resetFilters}
                      type="dark"
                    />
                  </div>
                ) : null}
              </>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BuyCarsList;
