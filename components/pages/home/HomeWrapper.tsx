"use client";

import {
  Button,
  Carousel,
  FileInput,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
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
  CtnSection,
  AppDownloadSection,
} from "@/components/common";
import { useRouter } from "next/navigation";
import {
  rentCarLimousineImage,
  slide1Image,
  slideTwoImage,
  slide3Image,
  franchiseBannerImage,
} from "@/constants/images";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";
import Image from "next/image";

const HomeWrapper: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

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

            <ExploreCarFilterSection
              brands={homeData[0].data}
              bodyTypes={homeData[1].data}
              categories={homeData[2].data}
            />

            <Section>
              <CarMartSection categories={CartMart} />
            </Section>
            {topBanner?.length > 0 && (
              <>
                {topBanner?.map((cur, i) => (
                  <Container key={i}>
                    <div
                      className={`grid grid-cols-1 gap-6 lg:grid-cols-${cur?.images?.length}`}
                    >
                      {cur?.images?.map((img: string) => (
                        <BannerImage img={img} />
                      ))}
                    </div>
                  </Container>
                ))}
              </>
            )}

            <LetgetCarExploreSection />

            {topBanner?.length > 0 && topBanner[0]?.images?.length > 0 && (
              <Section key={topBanner[0].id}>
                <Container>
                  <div className="grid grid-cols-1 lg:grid-cols-1">
                    <BannerImage img={topBanner[0].images[0]} />
                  </div>
                </Container>
              </Section>
            )}

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

            {topBanner?.length > 0 && (
              <>
                {topBanner?.map((cur) => (
                  <Section key={cur.id}>
                    <Container>
                      <div
                        className={`grid gap-6 grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
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

            <LetGetCarFeaturesSection />

            <PresenceLocationsSection />

            <HomeTestimonailsSection />

            {/* <LetGetCarExclusiveSection /> */}

            {bottomBanner?.length > 0 && (
              <>
                {bottomBanner?.map((cur) => (
                  <Container>
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-${cur?.images?.length}`}
                    >
                      {cur?.images?.map((img: string) => (
                        <BannerImage img={img} />
                      ))}
                    </div>
                  </Container>
                ))}
              </>
            )}

            <HomeFaqSection />
            {/* Home Filter */}

            <Image
              src={franchiseBannerImage}
              alt="banner"
              height={250}
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            />

            {topBanner?.length > 0 && topBanner[0]?.images?.length > 0 && (
              <Section key={topBanner[0].id}>
                <Container>
                  <div className="grid grid-cols-1 lg:grid-cols-1">
                    <BannerImage img={topBanner[0].images[0]} />
                  </div>
                </Container>
              </Section>
            )}

            <Section bgType="primary">
              <Container>
                <AppDownloadSection />
              </Container>
            </Section>
          </div>
        )
      )}

      <Modal
        show={openModal}
        size="lg"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <h3 className="text-xl font-semibold mb-4">Franchise Enquiry</h3>
          <form
            className="space-y-4"
            onSubmit={() =>
              alert("Your application submission is done. will contact you")
            }
          >
            <div>
              <Label htmlFor="name" value="Full Name" />
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                required
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Phone Number" />
              <TextInput
                id="phone"
                type="tel"
                placeholder="+1234567890"
                required
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="company" value="Company Representation" />
              <TextInput
                id="company"
                type="text"
                placeholder="Company Name"
                // value={company}
                // onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="designation" value="Designation" />
              <TextInput
                id="designation"
                type="text"
                placeholder="Manager, CEO, etc."
                // value={designation}
                // onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="bodyComment" value="Comment" />
              <Textarea
                id="bodyComment"
                placeholder="Write your message..."
                rows={3}
                // value={bodyComment}
                // onChange={(e) => setBodyComment(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="documents" value="Upload Documents" />
              <FileInput
                id="documents"
                // onChange={(e) => setDocument(e.target.files?.[0] ?? null)}
              />
            </div>
            <div className="w-full pt-4">
              <Button type="submit" className="w-full bg-primary">
                Submit Enquiry
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomeWrapper;
