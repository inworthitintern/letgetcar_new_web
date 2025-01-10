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
  CarMartSection,
} from ".";
import LargeSearchBlock from "@/components/common/LargeSearchBlock";
import { getHomePageData } from "@/GlobalRedux/Features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import {
  BannerImage,
  LoadingSpinner,
  Section,
  Container,
} from "@/components/common";
import { useRouter } from "next/navigation";
import {
  rentCarLimousineImage,
  slide1Image,
  slideTwoImage,
  slide3Image,
} from "@/constants/images";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";

const HomeWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { homeData, loading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getHomePageData({}));
  }, []);

  const { banners } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(getBanners({ type: "buycar" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  const CartMart = [
    {
      image:
        "https://res.cloudinary.com/dntrefeat/image/upload/v1735361242/hiygnfs97wudxrnpvqzq.jpg",
      title: "Engine Oil",
    },
    {
      image:
        "https://res.cloudinary.com/dntrefeat/image/upload/v1735361310/acpddoz2xc4zr0la7ck6.jpg",
      title: "Carburator",
    },
    {
      image:
        "https://res.cloudinary.com/dntrefeat/image/upload/v1735361421/malpvehun88iepjtj4ek.jpg",
      title: "Air Filters",
    },
    {
      image:
        "https://res.cloudinary.com/dntrefeat/image/upload/v1735361506/mq6y6iihy90mh0wtzdha.jpg",
      title: "Clutch Disc",
    },
  ];
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
                  image={slide1Image}
                  headingFirst="FIND YOUR"
                  headingLast="CAR NOW"
                  paragraph="Discover the perfect vehicle for you with just a few clicks. Whether you're looking for a brand-new model or a reliable used car, our extensive selection and easy-to-use platform make finding your ideal ride quick and effortless. Start your journey with us today!"
                  btnText="Explore More"
                  btnOnClick={() => router.push("/buycarslist")}
                />

                <HeroSliderSection
                  image={slideTwoImage}
                  headingFirst="RENT OUT YOUR DESIRED"
                  headingLast="CAR NOW"
                  paragraph="Select from a wide range of vehicles and limousines to suit your needs and preferences. Whether for a special event or everyday use, we offer flexible rental options to ensure you get the perfect ride."
                  btnText="Explore Rent Car"
                  ctnRedirect="/rentcar-limousine"
                  btnOnClick={() => router.push("/rentcar-limousine")}
                />
                <HeroSliderSection
                  image={slide3Image}
                  headingFirst="DOWNLOAD OUR APP FOR "
                  headingLast="MORE DISCOUNTS"
                  paragraph="Unlock special offers and additional savings by downloading our app. Stay updated with the latest deals, manage your bookings effortlessly, and enjoy a seamless experience right at your fingertips."
                  btnText="Download the App Now"
                  ctnRedirect="/rentcar-limousine"
                  // btnOnClick={() => router.push("/buycarslist")}
                />
              </Carousel>
            </div>

            <LargeSearchBlock />
            <Section>
              <CarMartSection categories={CartMart} />
            </Section>

            <ExploreCarFilterSection
              brands={homeData[0].data}
              bodyTypes={homeData[1].data}
              categories={homeData[2].data}
            />
            {topBanner?.length > 0 && (
              <>
                {topBanner?.map((cur) => (
                  <Section key={cur.id}>
                    <Container>
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                      >
                        {cur?.images?.map((img: string) => (
                          <BannerImage img={img} />
                        ))}
                      </div>
                    </Container>
                  </Section>
                ))}
              </>
            )}

            <LetgetCarExploreSection />

            {/* <RecentlyViewedSection /> */}

            <RecommentedCarsSection carsData={[...homeData[3].data.data]} />
            {middleBanner?.length > 0 && (
              <>
                {middleBanner?.map((cur) => (
                  <Section key={cur.id}>
                    <Container>
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                      >
                        {cur?.images?.map((img: string) => (
                          <BannerImage img={img} />
                        ))}
                      </div>
                    </Container>
                  </Section>
                ))}
              </>
            )}

            <LetgetcarsTrustedSection carsData={[...homeData[4].data.data]} />

            <NewArrivalsSection carsData={[...homeData[5].data.data]} />

            <LetGetCarFeaturesSection />

            <PresenceLocationsSection />

            <HomeTestimonailsSection />

            {/* <LetGetCarExclusiveSection /> */}

            {bottomBanner?.length > 0 && (
              <>
                {bottomBanner?.map((cur) => (
                  <Section key={cur.id}>
                    <Container>
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                      >
                        {cur?.images?.map((img: string) => (
                          <BannerImage img={img} />
                        ))}
                      </div>
                    </Container>
                  </Section>
                ))}
              </>
            )}

            <HomeFaqSection />
            {/* Home Filter */}
          </div>
        )
      )}
    </>
  );
};

export default HomeWrapper;
