"use client";

import { DateTimeSelector } from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import { CheckOutCloseIcon } from "@/constants/icons";
import { buycarCheckoutImage } from "@/constants/images";
import buyCarServices from "@/services/buycarService";
import { Card, Modal } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IBuyCarCheckout {
  openCarCheckout: boolean;
  setOpenCarCheckout: (arg: boolean) => void;
  carName: string;
  carId: number;
}

const SHOWROOM_ADDRESS =
  "Letgetcar - Jebel Ali Industrial Area, Dubai, CARS24 IRC";

const BuyCarCheckout: React.FC<IBuyCarCheckout> = ({
  openCarCheckout,
  setOpenCarCheckout,
  carName,
  carId,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [addressType, setAddressType] = useState<"showroom" | "home">(
    "showroom"
  );
  const [homeAdress, setHomeAddress] = useState(null);

  const onTestDriveBook = async () => {
    let values = {
      car_id: carId,
      location: addressType === "showroom" ? SHOWROOM_ADDRESS : homeAdress,
      date_string: selectedDate?.date,
      time_string: selectedTime,
    };
    // TODO: HERE STARTS

    if (!values.date_string.length) {
      toast.error("Please select Date");
      return;
    }

    if (!values?.time_string) {
      toast.error("Please select Time");
      return;
    }

    if (!values.location) {
      toast.error("Please select Location");
      return;
    }

    const bookedTestDrive = await buyCarServices.createTestDriveBook(values);

    if (bookedTestDrive) {
      toast.success(
        "Your Test Drive Booking request is in Process... We will contact you soon"
      );
      setOpenCarCheckout(false);
    }
  };

  return (
    <>
      <Modal
        show={openCarCheckout}
        onClose={() => setOpenCarCheckout(false)}
        color="dark"
        size={"xxxl"}
        className="h-screen p-0"
        dismissible
      >
        {/* <Modal.Header>2022 TOYOTA YARIS SE</Modal.Header> */}

        <Modal.Body className="p-0">
          <div className="relative">
            <Image
              src={buycarCheckoutImage}
              alt=""
              className="w-full h-56 object-cover"
            />
            <Heading
              text={carName}
              color="primary"
              type="h3"
              className="absolute top-8 left-8"
            />
            <Heading
              text="Test Drive Car Schedule"
              type="h5"
              className="absolute top-20 left-8 text-white"
            />
            <div
              className="absolute top-4 right-8 cursor-pointer"
              onClick={() => setOpenCarCheckout(false)}
            >
              <CheckOutCloseIcon height={42} width={42} />
            </div>
          </div>

          {/* Address Section */}
          <div className="px-6 py-6">
            <Heading
              type="h5"
              text="Choose Test Drive Location"
              textAlign="left"
            />

            <Card
              className={`features-card mt-4 cursor-pointer ${
                addressType === "showroom" ? "bg-primary" : ""
              }`}
              onClick={() => setAddressType("showroom")}
            >
              <NormalText
                text="Choose Showroom Location"
                fontWeight="bold"
                textAlign="left"
                size="md"
              />
              <NormalText
                text="Cars24 HUB - Jebel Ali Industrial Area, Dubai, CARS24 IRC"
                textAlign="left"
                size="sm"
                color="gray"
              />
            </Card>

            <Card
              className={`features-card my-5  cursor-pointer ${
                addressType === "home" ? "bg-primary" : ""
              }`}
              onClick={() => setAddressType("home")}
            >
              <NormalText
                text="Choose Your Home Location"
                fontWeight="bold"
                textAlign="left"
                size="md"
              />
              <NormalText
                text="Charges Apply 30AED"
                textAlign="left"
                size="sm"
                color="success"
                fontWeight="bold"
              />
              {addressType === "home" && (
                <input
                  type="text"
                  className="w-full p-3 text-lg border border-gray-300 rounded-lg bg-white"
                  placeholder="Enter Your Home Address"
                  onChange={(e) => setHomeAddress(e.target.value)}
                  // value={query}
                  // onChange={handleInputChange}
                />
              )}
            </Card>

            {/* Show room */}

            {/* Home Location */}

            <div className="px-6 mb-2">
              <hr />
            </div>

            <Card className="features-card mt-4 ">
              <Heading
                type="h5"
                text="Select Available Dates"
                textAlign="left"
              />

              <DateTimeSelector
                carId={carId}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                setSelectedDate={setSelectedDate}
                setSelectedTime={setSelectedTime}
              />
            </Card>
          </div>

          <div className="px-6 mb-2 pb-6">
            <Button
              text="Book Test Drive Now"
              // className="w-full"
              htmlType="submit"
              onClick={onTestDriveBook}
              //   onClick={() => setOpenCarCheckout(true)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BuyCarCheckout;
