"use client";

import React, { use, useEffect, useState } from "react";
import {
  CarDetailsSlider,
  CarsSlider,
  Container,
  LoadingSpinner,
  Section,
  Spacer,
} from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  CheckIcon,
  HomeIcon,
  LocationIcon,
  WishListFilledIcon,
  WishListNonFilledIcon,
} from "@/constants/icons";
import { Card } from "flowbite-react";
import {
  featureIcon,
  carConditionImage,
  bannerLoanImage,
} from "@/constants/images";
import { PresenceLocationsSection } from "@/components/pages/home";
import TestimonialSlider from "@/components/common/TestimonalsSection";
import {
  BuyCarCheckout,
  CarReportDetails,
} from "@/components/pages/buycarsdetails";
import { useDispatch, useSelector } from "react-redux";
import buyCarServices from "@/services/buycarService";
import { getBuyCarDetailModels } from "@/GlobalRedux/Features/buyCarModel/buyCarSlice";
import { RootState } from "@/GlobalRedux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import wishlistServices from "@/services/wishlistService";

interface ICarDetailsWrapper {
  carSlug: string;
}

const CarDetailsWrapper: React.FC<ICarDetailsWrapper> = ({ carSlug }) => {
  const [openBuyCarReport, setOpenBuyCarReport] = useState(false);
  const [openCarCheckout, setOpenCarCheckout] = useState(false);
  const [carWishListedId, setCarWishListedId] = useState(null);
  const [relatedCars, setRelatedCars] = useState([]);

  const router = useRouter();

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { buyCarDetails, loading } = useSelector(
    (state: RootState) => state.buyCarModel
  );

  useEffect(() => {
    if (buyCarDetails?.wishlist_id) {
      setCarWishListedId(buyCarDetails?.wishlist_id);
    }

    if (buyCarDetails?.brand_id) {
      relatedCarsFetch(buyCarDetails?.brand_id);
    }
  }, [buyCarDetails]);

  useEffect(() => {
    if (user) {
      dispatch(getBuyCarDetailModels({ slug: carSlug, isLoggedIn: true }));
    } else {
      dispatch(getBuyCarDetailModels({ slug: carSlug, isLoggedIn: false }));
    }
  }, [carSlug, user]);

  const carBookingCheckoutHandler = () => {
    if (user) {
      setOpenCarCheckout(true);
    } else {
      toast("You have to Login Before Booking Test Drive");
      router.push("/login");
    }
  };

  const addToWishListHandler = async () => {
    if (user) {
      const addToWishlist = await wishlistServices.addToWishlist(
        buyCarDetails?.id
      );

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
      carWishListedId
    );

    if (removeWishlist) {
      setCarWishListedId(null);
    }
  };

  const relatedCarsFetch = async (brandId: number) => {
    const fetchedRelatedCars = await buyCarServices.getBuyCars({
      brand_id: brandId,
    });

    if (fetchedRelatedCars.data) {
      setRelatedCars(fetchedRelatedCars.data.data);
    }
  };

  console.log(relatedCars, "jeej");

  return (
    <Section className="mt-10">
      {loading ? (
        <LoadingSpinner />
      ) : (
        buyCarDetails?.id && (
          <>
            <Container>
              <div className="grid grid-cols-12 gap-8 h-full">
                <div className="col-span-12 lg:col-span-8">
                  <CarDetailsSlider images={buyCarDetails?.images} />

                  <div className="block lg:hidden">
                    <div className="sticky top-28">
                      <Heading
                        text={buyCarDetails?.name}
                        type="h4"
                        textAlign="left"
                      />
                      {/*  */}
                      <div className="flex items-center mt-2 mb-2">
                        <NormalText
                          text={buyCarDetails?.option}
                          color="gray"
                          fontWeight="medium"
                          size="sm"
                          className="mr-2"
                        />{" "}
                        <span className="text-primary">|</span>
                        <NormalText
                          text={buyCarDetails?.kilometers}
                          color="gray"
                          fontWeight="medium"
                          size="sm"
                          className="mx-2"
                        />{" "}
                        <span className="text-primary">|</span>
                        <NormalText
                          text={buyCarDetails?.specification}
                          color="gray"
                          fontWeight="medium"
                          size="sm"
                          className="ml-2"
                        />
                      </div>
                      {/*  */}
                      <div>
                        <div className="flex items-center gap-x-2 mb-2 mt-2">
                          <LocationIcon />{" "}
                          <NormalText
                            text="Free Hub test drive in Jebel Ali, Dubai"
                            color="gray"
                          />
                        </div>
                        <div className="flex items-center gap-x-2">
                          <HomeIcon />{" "}
                          <NormalText
                            text="Home test drive at your preferred location"
                            color="gray"
                          />
                        </div>
                      </div>

                      {/*  */}
                      <div className="flex justify-between items-center mt-4">
                        <Heading
                          text={"AED " + buyCarDetails?.sale_price}
                          color="primary"
                          type="h4"
                        />
                        {/* <NormalText
                  text="Understand Price"
                  fontWeight="regular"
                  textUnderline
                  color="dark"
                  cursorEnabled
                  hoverColor="primary"
                /> */}
                      </div>

                      {/*  */}

                      <div className="flex flex-col gap-1 mt-4">
                        <NormalText
                          text={`EMI AED ${buyCarDetails?.emi_price}/mo for 5 years`}
                          color="dark"
                          size="md"
                          fontWeight="medium"
                        />
                        <NormalText
                          text="For 5 yrs with Zero downpayment options available"
                          color="gray"
                          size="xs"
                        />
                      </div>

                      <Spacer spacing="md" />
                      <div className="flex gap-x-2">
                        <Button
                          text="Book Free Test Drive"
                          className="w-full"
                          htmlType="submit"
                          onClick={carBookingCheckoutHandler}
                        />
                        <div className="cursor-pointer">
                          {carWishListedId ? (
                            <div onClick={removeWishListHandler}>
                              <WishListFilledIcon width={60} height={60} />
                            </div>
                          ) : (
                            <div onClick={addToWishListHandler}>
                              <WishListNonFilledIcon width={60} height={60} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Spacer spacing="lg" />
                  {/*  */}
                  <div className="border-gray-25 border p-6 rounded-lg">
                    <Heading text="Overview" type="h4" textAlign="left" />
                    <Spacer spacing="sm" />

                    <NormalText
                      color="gray"
                      text={buyCarDetails?.description}
                    />
                    <Spacer spacing="md" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {buyCarDetails?.overview_points?.map((overview, i) => (
                        <Card
                          className={`features-card ${
                            i % 2 === 0 ? "bg-gray-5" : ""
                          }`}
                          key={i}
                        >
                          <NormalText text={overview?.title} />
                          <NormalText
                            text={overview?.description}
                            size="sm"
                            color="gray"
                          />
                        </Card>
                      ))}
                    </div>
                    {/*  */}
                    <Spacer spacing="lg" />
                    <Heading
                      text="What’s Included"
                      type="h4"
                      textAlign="left"
                    />
                    <Spacer spacing="xs" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Mileage" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.mileage}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Option" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.option}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Transmission" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.transmission}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Drive Type" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.drive_type}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Body type" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.body_type?.name}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Fuel Type" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.fuel_type}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Wheel Type" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.wheel_type}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon /> <NormalText text="Color" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.color?.name}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="Seat Type" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.seat_type}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="No Of Airbags" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.no_air_bags}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="No Of Seats" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.no_seats}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                          <CheckIcon />{" "}
                          <NormalText text="No Of Keys" color="gray" />{" "}
                          <NormalText
                            text={buyCarDetails?.no_keys}
                            color="primary"
                            fontWeight="bold"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-3 gap-4 border-b border-gray-15 py-6">
                      <div className="flex gap-2">
                        <img src={featureIcon.src} alt="" />
                        <NormalText text="3.5L" />
                      </div>
                      <div className="flex gap-2">
                        <img src={featureIcon.src} alt="" />
                        <NormalText text="Semi Loaded" />
                      </div>
                      <div className="flex gap-2">
                        <img src={featureIcon.src} alt="" />
                        <NormalText text="Automatic" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-b border-gray-15 py-6">
                      <div className="flex gap-2">
                        <img src={featureIcon.src} alt="" />
                        <NormalText text="3.5L" />
                      </div>
                      <div className="flex gap-2">
                        <img src={featureIcon.src} alt="" />
                        <NormalText text="3.5L" />
                      </div>
                      <div className="flex gap-2">
                        <img src={featureIcon.src} alt="" />
                        <NormalText text="3.5L" />
                      </div>
                    </div> */}
                  </div>

                  {/* Feature */}

                  <div className="border-gray-25 border p-6 rounded-lg mt-6">
                    <Heading text="Features" type="h4" textAlign="left" />
                    <Spacer spacing="md" />

                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Fog Light Front" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Fog Light Front" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Fog Light Front" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Fog Light Front" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Fog Light Front" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Fog Light Front" />
                      </div>
                    </div>
                    <Spacer spacing="md" />
                    {/* <Button
                      text="View All Features"
                      // className="w-full"
                      htmlType="submit"
                    /> */}
                  </div>

                  {/* Car Condition */}
                  {buyCarDetails?.condition_checks?.length ? (
                    <div className="border-gray-25 border p-6 rounded-lg mt-6">
                      <Heading
                        text="Car Conditions"
                        type="h4"
                        textAlign="left"
                      />
                      <Spacer spacing="md" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex gap-2 items-center">
                            <CheckIcon />{" "}
                            <Heading
                              text="ESMA CERTIFIED"
                              type="h6"
                              textAlign="left"
                              color="primary"
                            />
                          </div>
                          <Spacer spacing="sm" />

                          <NormalText
                            color="gray"
                            text="Mega Refurbishment Labs (MRL) is 5 star rated"
                          />

                          <Spacer spacing="md" />
                          <Button
                            text="View Full Report"
                            // className="w-full"
                            htmlType="submit"
                            onClick={() => setOpenBuyCarReport(true)}
                          />
                        </div>

                        <div>
                          <img
                            src={carConditionImage.src}
                            alt="Car condition ceryificate"
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Service History */}

                  <div className="border-gray-25 border p-6 rounded-lg mt-6">
                    <Heading
                      text="Service History"
                      type="h4"
                      textAlign="left"
                    />
                    <Spacer spacing="md" />

                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Air filter cleaning" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon />{" "}
                        <NormalText text="Brake cleaning & adjustment" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon />{" "}
                        <NormalText text="Computer diagnostic check" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon /> <NormalText text="Air filter cleaning" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon />{" "}
                        <NormalText text="Computer diagnostic check" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <CheckIcon />{" "}
                        <NormalText text="Brake cleaning & adjustment" />
                      </div>
                    </div>
                    <Spacer spacing="md" />
                    <Heading
                      text="Servicing due after 10,000 kms/ 6months"
                      type="h6"
                      textAlign="left"
                      color="primary"
                      className="mb-2"
                    />
                    <NormalText
                      color="gray"
                      text="We consider the earliest date from the date of delivery on a chargeable basis"
                    />
                    <Spacer spacing="sm" />

                    <Card className="features-card bg-gray-5 w-fit">
                      <NormalText text="2024-04-25 (97,046 km)" />
                      <NormalText
                        text="Mega Refurbishment Labs, Jebel Ali"
                        size="sm"
                        color="gray"
                      />
                    </Card>
                  </div>
                  <Spacer spacing="md" />
                  {/* Banner Loan */}
                  <div>
                    <img src={bannerLoanImage.src} alt="banner-loan" />
                  </div>

                  {/* Recommented Cars */}
                  <div>{/* <CarsSlider carsData={carsData} /> */}</div>

                  {/*  */}
                </div>
                <div className="hidden lg:block col-span-12 lg:col-span-4">
                  <div className="sticky top-28">
                    <Heading
                      text={buyCarDetails?.name}
                      type="h4"
                      textAlign="left"
                    />
                    {/*  */}
                    <div className="flex items-center mt-2 mb-2">
                      <NormalText
                        text={buyCarDetails?.option}
                        color="gray"
                        fontWeight="medium"
                        size="sm"
                        className="mr-2"
                      />{" "}
                      <span className="text-primary">|</span>
                      <NormalText
                        text={buyCarDetails?.kilometers}
                        color="gray"
                        fontWeight="medium"
                        size="sm"
                        className="mx-2"
                      />{" "}
                      <span className="text-primary">|</span>
                      <NormalText
                        text={buyCarDetails?.specification}
                        color="gray"
                        fontWeight="medium"
                        size="sm"
                        className="ml-2"
                      />
                    </div>
                    {/*  */}
                    <div>
                      <div className="flex items-center gap-x-2 mb-2 mt-2">
                        <LocationIcon />{" "}
                        <NormalText
                          text="Free Hub test drive in Jebel Ali, Dubai"
                          color="gray"
                        />
                      </div>
                      <div className="flex items-center gap-x-2">
                        <HomeIcon />{" "}
                        <NormalText
                          text="Home test drive at your preferred location"
                          color="gray"
                        />
                      </div>
                    </div>

                    {/*  */}
                    <div className="flex justify-between items-center mt-4">
                      <Heading
                        text={"AED " + buyCarDetails?.sale_price}
                        color="primary"
                        type="h4"
                      />
                      {/* <NormalText
                  text="Understand Price"
                  fontWeight="regular"
                  textUnderline
                  color="dark"
                  cursorEnabled
                  hoverColor="primary"
                /> */}
                    </div>

                    {/*  */}

                    <div className="flex flex-col gap-1 mt-4">
                      <NormalText
                        text={`EMI AED ${buyCarDetails?.emi_price}/mo for 5 years`}
                        color="dark"
                        size="md"
                        fontWeight="medium"
                      />
                      <NormalText
                        text="For 5 yrs with Zero downpayment options available"
                        color="gray"
                        size="xs"
                      />
                    </div>

                    <Spacer spacing="md" />
                    <div className="flex gap-x-2">
                      <Button
                        text="Book Free Test Drive"
                        className="w-full"
                        htmlType="submit"
                        onClick={carBookingCheckoutHandler}
                      />
                      <div className="cursor-pointer">
                        {carWishListedId ? (
                          <div onClick={removeWishListHandler}>
                            <WishListFilledIcon width={60} height={60} />
                          </div>
                        ) : (
                          <div onClick={addToWishListHandler}>
                            <WishListNonFilledIcon width={60} height={60} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Spacer spacing="lg" />
            <div>
              <PresenceLocationsSection />
            </div>
            <Section>
              <Container>
                <TestimonialSlider />
              </Container>
            </Section>
            {relatedCars?.length > 0 && (
              <Section bgType="gray">
                <Container>
                  <Heading text="Related Cars" type="h3" textAlign="left" />
                  <Spacer spacing="md" />
                  <CarsSlider carsData={relatedCars} />
                </Container>
              </Section>
            )}

            {buyCarDetails?.condition_checks?.length && (
              <CarReportDetails
                setOpenCarReport={setOpenBuyCarReport}
                openCarReport={openBuyCarReport}
                carReports={buyCarDetails?.condition_checks[0]?.conditions}
                carName={buyCarDetails?.name}
              />
            )}

            <BuyCarCheckout
              openCarCheckout={openCarCheckout}
              setOpenCarCheckout={setOpenCarCheckout}
              carName={buyCarDetails?.name}
              carId={buyCarDetails?.id}
            />
          </>
        )
      )}
    </Section>
  );
};

export default CarDetailsWrapper;
