"use client";

import { Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import {
  HomeFaqSection,
  HomeTestimonailsSection,
  LetGetCarExclusiveSection,
  LetGetCarFeaturesSection,
  PresenceLocationsSection,
  NewArrivalsSection,
  LetgetcarsTrustedSection,
  RecommentedCarsSection,
  RecentlyViewedSection,
  LetgetCarExploreSection,
  ExploreCarFilterSection,
  HeroSliderSection,
} from ".";
import LargeSearchBlock from "@/components/common/LargeSearchBlock";
import { getHomePageData } from "@/GlobalRedux/Features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { LoadingSpinner } from "@/components/common";

const HomeWrapper: React.FC = () => {
  const dispatch = useDispatch();

  const { homeData, loading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getHomePageData({}));
  }, []);

  console.log(homeData, "heyyy");
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        homeData?.length > 0 && (
          <div>
            <div className="h-screen">
              <Carousel slide={true} className="h-full">
                <HeroSliderSection
                  image="images/slide-1.jpg"
                  headingFirst="FIND YOUR"
                  headingLast="CAR NOW"
                  paragraph="Select the element or layer you want to apply gradient on through
            the left bar. 2. Now click on the fill section on the right bar"
                  btnText="Explore More"
                />

                <HeroSliderSection
                  image="images/slide-1.jpg"
                  headingFirst="FIND YOUR"
                  headingLast="CAR NOW"
                  paragraph="Select the element or layer you want to apply gradient on through
            the left bar. 2. Now click on the fill section on the right bar"
                  btnText="Explore More"
                />
                <HeroSliderSection
                  image="images/slide-1.jpg"
                  headingFirst="FIND YOUR"
                  headingLast="CAR NOW"
                  paragraph="Select the element or layer you want to apply gradient on through
            the left bar. 2. Now click on the fill section on the right bar"
                  btnText="Explore More"
                />
              </Carousel>
            </div>

            <LargeSearchBlock />

            <ExploreCarFilterSection
              brands={homeData[0].data}
              bodyTypes={homeData[1].data}
              categories={homeData[2].data}
            />

            <LetgetCarExploreSection />

            {/* <RecentlyViewedSection /> */}

            <RecommentedCarsSection carsData={[...homeData[3].data.data]} />

            <LetgetcarsTrustedSection carsData={[...homeData[4].data.data]} />

            <NewArrivalsSection carsData={[...homeData[5].data.data]} />

            <LetGetCarFeaturesSection />

            <PresenceLocationsSection />

            <HomeTestimonailsSection />

            <LetGetCarExclusiveSection />

            <HomeFaqSection />
            {/* Home Filter */}
          </div>
        )
      )}
    </>
  );
};

export default HomeWrapper;
