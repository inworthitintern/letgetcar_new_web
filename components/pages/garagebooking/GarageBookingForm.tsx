"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Heading } from "@/components/UI";
import { TextInput, Select } from "flowbite-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { useRouter } from "next/navigation";
import garageBookingService from "@/services/garageBookingService";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  type: Yup.string()
    .oneOf(["garage booking", "car services", "car modification"])
    .required("Required"),
  service_description: Yup.string().required("Required"),
  booked_date: Yup.date().required("Required"),
  booked_time: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):([0-5][0-9])([APap][Mm])$/,
      "Invalid time format"
    )
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

const HireDriverForm = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      service_description: "",
      booked_date: "",
      booked_time: "",
      address: "",
      city: "",
      state: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Data:", values);

      if (user) {
        // // Replace with your service logic
        const garageBooking =
          await garageBookingService.createGarageBookingEnquiry(values);

        if (garageBooking) {
          toast.success("Service booked successfully.");
          formik.resetForm();
        }
      } else {
        toast("Please log in before booking.");
        router.push("/login");
      }
    },
  });

  return (
    <div className="mx-auto p-5 bg-white shadow-md rounded-lg w-full mt-10">
      <Heading text="Service Booking Form" type="h4" textAlign="left" />
      <hr className="my-4" />
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Row 1 - Name and Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <TextInput
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Service Type
            </label>
            <Select
              name="type"
              id="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            >
              <option value="">Select Service Type</option>
              <option value="garage booking">Garage Booking</option>
              <option value="car services">Car Services</option>
              <option value="car modification">Car Modification</option>
            </Select>
            {formik.touched.type && formik.errors.type ? (
              <div className="text-red-500 text-sm">{formik.errors.type}</div>
            ) : null}
          </div>
        </div>

        {/* Service Description */}
        <div>
          <label
            htmlFor="service_description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Description
          </label>
          <TextInput
            type="text"
            name="service_description"
            id="service_description"
            placeholder="Describe the service"
            value={formik.values.service_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            shadow
          />
          {formik.touched.service_description &&
          formik.errors.service_description ? (
            <div className="text-red-500 text-sm">
              {formik.errors.service_description}
            </div>
          ) : null}
        </div>

        {/* Row 3 - Booked Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <label
              htmlFor="booked_date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Booked Date
            </label>
            <TextInput
              type="date"
              name="booked_date"
              id="booked_date"
              value={formik.values.booked_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.booked_date && formik.errors.booked_date ? (
              <div className="text-red-500 text-sm">
                {formik.errors.booked_date}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="booked_time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Booked Time
            </label>
            <TextInput
              type="text"
              name="booked_time"
              id="booked_time"
              placeholder="(eg: 10:00am)"
              value={formik.values.booked_time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.booked_time && formik.errors.booked_time ? (
              <div className="text-red-500 text-sm">
                {formik.errors.booked_time}
              </div>
            ) : null}
          </div>
        </div>

        {/* Row 4 - Address, City, State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <TextInput
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500 text-sm">
                {formik.errors.address}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              City
            </label>
            <TextInput
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              State
            </label>
            <TextInput
              type="text"
              name="state"
              id="state"
              placeholder="Enter your state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="text-red-500 text-sm">{formik.errors.state}</div>
            ) : null}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <Button
            text="Book Service Now"
            className="w-full"
            htmlType="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default HireDriverForm;
