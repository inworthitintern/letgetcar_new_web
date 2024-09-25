"use client";

import { Card, Modal } from "flowbite-react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, NormalText } from "@/components/UI";
import rentCarLimousineService from "@/services/rentCarLimousineService";
import { toast } from "react-toastify";
import { Spacer } from "@/components/common";

interface IRentCarBookingForm {
  open: boolean;
  setOpen: (arg: boolean) => void;
  //   rent_car_id: number;
  //   type: "rentcar" | "limousine";
  selectedCar: any;
}

interface FormValues {
  pick_up_date: string;
  return_date: string;
}

const RentCarBookingForm: React.FC<IRentCarBookingForm> = ({
  open,
  setOpen,
  selectedCar,
  //   rent_car_id,
  //   type,
}) => {
  // Formik initialization with Yup validation
  const formik = useFormik<FormValues>({
    initialValues: {
      pick_up_date: "",
      return_date: "",
    },
    validationSchema: Yup.object({
      pick_up_date: Yup.string().required("Pick up date is required"),
      return_date: Yup.string().required("Return date is required"),
    }),
    onSubmit: async (values) => {
      const sendingValues = {
        ...values,
        rent_car_id: selectedCar.id,
        type: selectedCar.type,
      };

      // Handle API call to createRentCarEnquiry with `sendingValues`
      console.log(sendingValues);

      const bookedRentCar = await rentCarLimousineService.createRentCarEnquiry(
        sendingValues
      );

      if (bookedRentCar) {
        toast.success(
          `You've Successfully Booked ${selectedCar.name}. We Will Contact You Soon`
        );
      }

      // Reset the form and close the modal after submission
      formik.resetForm();
      setOpen(false);
    },
  });

  return (
    <Modal show={open} onClose={() => setOpen(false)} size="4xl">
      <Modal.Header>
        {selectedCar.type === "rentcar"
          ? `Book Rent Car - ${selectedCar.name}`
          : selectedCar.type === "limousine"
          ? `Book Limousine - ${selectedCar.name}`
          : `Corperate Rental Car - ${selectedCar.name}`}
      </Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card>
            <NormalText text="Per Day" size="sm" color="gray" />
            <NormalText
              text={"AED " + selectedCar.price_per_day}
              size="md"
              fontWeight="bold"
              color="primary"
            />
          </Card>
          <Card>
            <NormalText text="Per Hour" size="sm" color="gray" />
            <NormalText
              text={"AED " + selectedCar.hourly}
              size="md"
              fontWeight="bold"
              color="primary"
            />
          </Card>
          <Card>
            <NormalText text="Per Month" size="sm" color="gray" />
            <NormalText
              text={"AED " + selectedCar.monthly}
              size="md"
              fontWeight="bold"
              color="primary"
            />
          </Card>
        </div>

        <Spacer spacing="md" />

        {selectedCar.type === "limousine" && (
          <Card className={`features-card bg-primary mb-6`}>
            <NormalText text={"For Every Limousine We will Give Your Driver"} />
            <NormalText
              text={"from 100 aed"}
              size="sm"
              color="success"
              fontWeight="bold"
            />
          </Card>
        )}
        <Spacer spacing="md" />
        <NormalText text="Booking Form" fontWeight="bold" size="lg" />
        <Spacer spacing="sm" />
        <form onSubmit={formik.handleSubmit}>
          {/* Pick Up Date Field */}
          <div className="mb-4">
            <label
              htmlFor="pick_up_date"
              className="block text-sm font-medium text-gray-700"
            >
              Pick Up Date
            </label>
            <input
              id="pick_up_date"
              name="pick_up_date"
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pick_up_date}
            />
            {formik.touched.pick_up_date && formik.errors.pick_up_date ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.pick_up_date}
              </div>
            ) : null}
          </div>

          {/* Return Date Field */}
          <div className="mb-4">
            <label
              htmlFor="return_date"
              className="block text-sm font-medium text-gray-700"
            >
              Return Date
            </label>
            <input
              id="return_date"
              name="return_date"
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.return_date}
            />
            {formik.touched.return_date && formik.errors.return_date ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.return_date}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <Button
              text="Book Now"
              // className="w-full"
              htmlType="submit"
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RentCarBookingForm;
