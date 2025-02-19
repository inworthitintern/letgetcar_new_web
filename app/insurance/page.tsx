"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AboutUsSection,
  BannerImage,
  Container,
  CtnSection,
  FaqSection,
  HowItWorks,
  InsuranceFAQ,
  ItemCard,
  LetGetCarFeatureCard,
  Section,
  SectionPoints,
  Spacer,
  TestimonialsSection,
} from "@/components/common";
import { HireDriverForm } from "@/components/pages/hireDriver";
import { SellCarFormModal } from "@/components/pages/sellcar";
import { Button, Heading, NormalText } from "@/components/UI";
import {
  hireDriverEx,
  onlineBookingImage,
  sellcarBgImage,
  sellcarCashImg,
  sellcarEnterDetailsImg,
  sellcarInspectionImg,
  slide3Image,
} from "@/constants/images";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";
import { RootState } from "@/GlobalRedux/store";
import { Card, List, TextInput, Select } from "flowbite-react";
import { Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const howItWorksContents = [
  {
    img: sellcarEnterDetailsImg,
    title: "Enter car details",
    desc: "Share few vehicle details and we will give you a best price instantly",
  },
  {
    img: sellcarCashImg,
    title: "Car inspection",
    desc: "Our car expert physically verifies your car’s condition and we will give you the final offer",
  },
  {
    img: sellcarInspectionImg,
    title: "Car pick up & payment",
    desc: "We will transfer the amount after RTA check before your car is picked up",
  },
];

const validationSchema = Yup.object({
  birth_date: Yup.date().required("Date of birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
});

const InsuranceCarScreen = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openSellCarForm, setOpenSellCarForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const onSellCarBtnHandler = async () => {
    if (user) {
      setOpenSellCarForm(true);
    } else {
      toast.warn("You have Login Before Sell Car Enquiry");
      router.push("/login");
    }
  };

  const { banners } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(getBanners({ type: "sellcar" }));
  }, []);

  const topBanner = banners?.filter((banner) => banner.priority === 1);
  const middleBanner = banners?.filter((banner) => banner.priority === 2);
  const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const formik = useFormik({
    initialValues: {
      birth_date: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${slide3Image.src})`,
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          height: "100vh", // You can adjust this as needed (e.g., 100vh for full viewport height)
          width: "100%", // Ensure it takes full width
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <Container>
          <div className="h-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
            <div>
              <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white">
                Motor Insurance
                {/* Sell Any Car Online in <span className="text-primary">UAE</span> */}
              </h1>
              <p className="text-sm md:text-base text-white font-normal  py-6">
                We insure your car and assure your convenience
              </p>
              <Button
                text={"Get a quote"}
                type="primary"
                onClick={toggleModal}
                //   onClick={() => {}}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-7xl p-8 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4">
              Get Your Car Insurance Quote
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Car Details */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  What car do you drive?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <TextInput
                    type="text"
                    placeholder="Enter your Make, Model, Trim"
                    shadow
                  />
                  <Select>
                    <option>Model Year</option>
                    <option>2025</option>
                    <option>2024</option>
                  </Select>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tell us about yourself
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <TextInput type="text" placeholder="Your Full Name" shadow />
                  <Select>
                    <option>Nationality</option>
                    <option>UAE</option>
                    <option>Other</option>
                  </Select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                  {/* Date of Birth */}
                  <div>
                    <label
                      htmlFor="birth_date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Enter Your date of birth as per your Emirates ID
                    </label>
                    <TextInput
                      type="date"
                      name="birth_date"
                      id="birth_date"
                      value={formik.values.birth_date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      shadow
                    />
                    {formik.touched.birth_date && formik.errors.birth_date ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.birth_date}
                      </div>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <TextInput
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      shadow
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="flex">
                      <span className="px-4 bg-gray-200 border rounded-l">
                        +971
                      </span>
                      <TextInput
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Your phone number"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="flex-grow rounded-r"
                        shadow
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* <div className="w-full">
                <TextInput type="email" placeholder="Your Email" shadow />
                
              </div> */}

              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <option>Emirate of Registration</option>
                </Select>
                <Select>
                  <option>UAE licence held for</option>
                </Select>
              </div>
              <Button
                text="View quotes"
                type="primary"
                onClick={() => console.log("Motor Executive Quote")}
                className="mt-10"
              />
            </form>
          </div>
        </div>
      )}

      <Section>
        <Container>
          <div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-4xl md:text-5xl">
                Choose the right cover for you
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-56 gap-20 md:mt-24 mt-10">
              {/* Motor Executive */}
              <div className="flex flex-col justify-center items-center h-full w-96">
                <h3 className="text-xl font-bold mt-4 mb-20">
                  Motor Executive
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Document Handling
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Vehicle Inspection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Ambulance Cost
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Third party liability for property damage
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Using Your Car in Oman
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      No Claims Discount
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Driving Another Car
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Emergency Medical Expenses
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Emergency Repairs
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Garage and/or valet Parking
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Basic Cover
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Possessions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Injury
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Third Party Liability for Family/Passengers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg  text-gray-500 dark:text-gray-400">
                      Taxy Fares
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Loss or Damage to Your Vehicle
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Lock Replacement
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Off Road Cover
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Perils of Nature
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      New Vehicle Replacement
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Windscreen Protection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Accident Benefit - Driver
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Accident Benefit - Passenger
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Using Your Car In GCC Countries
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Temporary Rent-A-Car
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      No Claims Discount Protection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Agency Repairs
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Breakdown Recovery
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={toggleModal}
                  text="Get a Quote"
                  type="primary"
                  className="mt-10"
                />
              </div>

              {/* Motor Smart */}
              <div className="flex flex-col items-center h-full w-96">
                <h3 className="text-xl font-bold mt-4 mb-20">Motor Smart</h3>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Document Handling
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Vehicle Inspection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Ambulance Cost
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Third party liability for property damage
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Using Your Car in Oman
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      No Claims Discount
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Driving Another Car
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Emergency Medical Expenses
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Emergency Repairs
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Garage and/or valet Parking
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Basic Cover
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Possessions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Injury
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Third Party Liability for Family/Passengers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Taxy Fares
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Loss or Damage to Your Vehicle
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Lock Replacement
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Off Road Cover
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Perils of Nature
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      New Vehicle Replacement
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Windscreen Protection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Accident Benefit - Passenger
                    </span>
                  </li>
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Using Your Car In GCC Countries</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Temporary Rent-A-Car</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">No Claims Discount Protection</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Agency Repairs</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Breakdown Recovery</span>
          </li> */}
                </ul>
                <Button
                  onClick={toggleModal}
                  text="Get a Quote"
                  type="primary"
                  className="mt-10"
                />
              </div>

              {/* Motor Value */}
              <div className="flex flex-col items-center h-full w-96">
                <h3 className="text-xl font-bold mt-4 mb-20">Motor Value</h3>
                <ul className="space-y-6">
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Document Handling</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Vehicle Inspection</span>
          </li> */}
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Ambulance Cost
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Third party liability for property damage
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Using Your Car in Oman
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      No Claims Discount
                    </span>
                  </li>
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Driving Another Car</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Emergency Medical Expenses</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Emergency Repairs</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Garage and/or valet Parking</span>
          </li> */}
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Basic Cover
                    </span>
                  </li>
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Personal Possessions</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Personal Injury</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Third Party Liability for Family/Passengers</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Taxy Fares</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Loss or Damage to Your Vehicle</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Lock Replacement</span>
          </li> */}
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Off Road Cover
                    </span>
                  </li>
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Perils of Nature</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">New Vehicle Replacement</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Windscreen Protection</span>
          </li> */}
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      Personal Accident Benefit - Passenger
                    </span>
                  </li>
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Using Your Car In GCC Countries</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Temporary Rent-A-Car</span>
          </li> */}
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 61.45 61.45"
                      className="text-orange-500"
                    >
                      <path
                        d="M46.42,45.18l-9.5,5.14-5,2.71..."
                        stroke="#FF6B00"
                        strokeMiterlimit="10"
                        strokeWidth="1.26"
                      ></path>
                    </svg>
                    <span className="ml-3 text-lg text-gray-500 dark:text-gray-400">
                      No Claims Discount
                    </span>
                  </li>
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Agency Repairs</span>
          </li> */}
                  {/* <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 61.45 61.45" className="text-orange-500">
              <path
                d="M46.42,45.18l-9.5,5.14-5,2.71..."
                stroke="#FF6B00"
                strokeMiterlimit="10"
                strokeWidth="1.26"
              ></path>
            </svg>
            <span className="ml-3 text-lg">Breakdown Recovery</span>
          </li> */}
                </ul>
                <Button
                  onClick={toggleModal}
                  text="Get a Quote"
                  type="primary"
                  className="mt-10"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 
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
      </Section> */}

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

      <Container className="mb-9">
        <InsuranceFAQ />
      </Container>
    </div>
  );
};

export default InsuranceCarScreen;
