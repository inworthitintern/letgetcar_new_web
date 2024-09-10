"use client";

import {
  Container,
  ItemCard,
  LetGetCarFeatureCard,
  Section,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { HireDriverForm } from "@/components/pages/hireDriver";
import { SellCarFormModal } from "@/components/pages/sellcar";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  hireDriveAboutusImg,
  hiredriverBgImage,
  onlineBookingImage,
  sellcarBgImage,
} from "@/constants/images";
import { RootState } from "@/GlobalRedux/store";
import { Card, List } from "flowbite-react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const SellCarScreen = () => {
  const [openSellCarForm, setOpenSellCarForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const onSellCarBtnHandler = async () => {
    if (user) {
      setOpenSellCarForm(true);
    } else {
      toast.warn("You have Login Before Sell Car Enquiry");
      router.push("/login");
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${sellcarBgImage.src})`,
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          height: "100vh", // You can adjust this as needed (e.g., 100vh for full viewport height)
          width: "100%", // Ensure it takes full width
        }}
      >
        <Container>
          <div className="h-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <div>
              <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white">
                Sell Any Car Online in <span className="text-primary">UAE</span>
              </h1>
              <p className="text-sm md:text-base text-white font-normal  py-6">
                You will get full amount before pick up
              </p>
              <Button
                text={"Sell Your Car Now"}
                type="primary"
                onClick={onSellCarBtnHandler}
                //   onClick={() => {}}
              />
            </div>
          </div>
        </Container>
      </div>

      <Container className="-mt-16">
        <div className="flex justify-center">
          <Card
            title="Start Sell Your Car Now At Best Price!"
            className="w-full md:w-2/3"
          >
            <Heading
              text="Why Wait? Start Sell Your Car at Decent Price"
              type="h4"
              textAlign="left"
            />
            <NormalText
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non laoreet augue. Praesent hendrerit ac urna vulputate lobortis. Vestibulum eu lectus vitae nulla rhoncus egestas. In laoreet velit vitae mi hendrerit lacinia. Aenean ac erat convallis, pellentesque orci nec, convallis mauris. Sed nibh orci, imperdiet vel ante sed, porta dapibus est. Donec purus justo, fringilla."
              color="gray"
            />
            {/* <div className="grid grid-cols-12">
            {["", "", "", "", "", "", "", "", "", "", ""].map((_, i) => {
              return (
                <ItemCard
                  image="https://res.cloudinary.com/dntrefeat/image/upload/v1722660362/zjo0tbqs4eefy5tw2fda.jpg"
                  name="BMW"
                  key={i}
                />
              );
            })}
            <ItemCard name="All" bg="primary" />
          </div> */}
            <Button
              text="Get best price"
              type="primary"
              onClick={onSellCarBtnHandler}
            />
          </Card>
        </div>
      </Container>

      <SellCarFormModal setOpen={setOpenSellCarForm} open={openSellCarForm} />

      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <img src={hireDriveAboutusImg.src} alt="hire Driver" />
            <div>
              <Heading
                text="Hire a Safe driver Dubai Most Trusted Private Driver Service in UAE"
                type="h4"
                textAlign="left"
              />
              <Spacer spacing="sm" />
              <NormalText
                size="sm"
                color="gray"
                text="Are you not in a position to drive your car? Hiring a safe driver Dubai is the best thing to do if you are in Dubai and Awesome Drive is the best safe Driver Company. Awesome Drive welcomes you to a chauffeur-driven service. It is a driver company operating in Dubai."
              />
              <NormalText
                size="sm"
                color="gray"
                text="When you are in search of hiring a  driver in Dubai then awesome drive is your one stop solution. We have a lot of experience that provides an innovative and unique chauffeur service to the people in the UAE public. When you are looking for a safe driver who is reliable and can take you to your loved ones and with comfort, we have the best private drivers you will find anywhere in Dubai. We are specialists when it comes to offering safe driver services. We will not let you down in your hunt for the best driver service in Dubai."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            text="Benefits of Hiring Monthly Driver From Awesome Drive"
            type="h4"
            textAlign="left"
          />
          <Spacer spacing="sm" />
          <List>
            <List.Item>
              At least 10 characters (and up to 100 characters)
            </List.Item>
            <List.Item>At least one lowercase character</List.Item>
            <List.Item>
              Inclusion of at least one special character, e.g., ! @ # ?
            </List.Item>
          </List>
        </Container>
      </Section>

      <Section bgType="primary">
        <Container>
          <Heading text="SELL YOU CARS NOW" type="h3" textAlign="left" />
          <Spacer spacing="sm" />
          <NormalText
            size="sm"
            color="gray"
            text="When you are in search of hiring a  driver in Dubai then awesome drive is your one stop solution. We have a lot of experience that provides an innovative and unique chauffeur service to the people in the UAE public. When you are looking for a safe driver who is reliable and can take you to your loved ones and with comfort, we have the best private drivers you will find anywhere in Dubai. We are specialists when it comes to offering safe driver services. We will not let you down in your hunt for the best driver service in Dubai."
          />
          <Spacer spacing="sm" />
          <Button
            text={"SELL YOUR CAR NOW"}
            type="dark"
            onClick={onSellCarBtnHandler}
            //   onClick={() => {}}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <TestimonialsSection />
        </Container>
      </Section>
    </div>
  );
};

export default SellCarScreen;
