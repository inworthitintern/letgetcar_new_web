"use client";

import { Button } from "@/components/UI";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import {
  getProfileDetails,
  updateProfileDetails,
} from "@/GlobalRedux/Features/auth/authSlice";
import { TextInput } from "flowbite-react";
import { RootState } from "@/GlobalRedux/store";
import { useRouter } from "next/navigation";

const AuthDetailsForm = ({ redirect = true }) => {
  const [submitted, setSubmitted] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      phone_number: "",
      email: "",
      name: "",
    },
    onSubmit: (values) => {
      setSubmitted(true);

      if (values.email.length === 0) {
        values.email = `user@${values.phone_number}.com`;
      }

      const sendingData = {
        name: values.name,
        email: values.email,
        password: "123456",
      };

      dispatch(updateProfileDetails({ sendingData, router, redirect }));

      //   dispatch(otpVerification({ email: values.email, name: values.name }));

      // dispatch(phoneNumberLogin(values.phone_number));
    },
    validationSchema: yup.object({
      phone_number: yup.number().required("Phone is required"),
      email: yup.string().email("Email Must Be Email").nullable(),
      name: yup.string().required("Name is required"),
    }),
  });

  useEffect(() => {
    dispatch(getProfileDetails());
  }, []);

  useEffect(() => {
    console.log(user);

    if (user?.id) {
      const emailExists = user.email !== `user@${user.phone_number}.com`;

      formik.setFieldValue("phone_number", user.phone_number);
      formik.setFieldValue("email", emailExists ? user.email : "");
      formik.setFieldValue("name", user.name);
    }
  }, [user]);

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="phone_number"
          className="block text-sm font-medium text-gray-700"
        >
          Your Mobile Number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <TextInput
            disabled
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Enter Your Phone Number"
            shadow
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone_number && (
            <div className="text-danger">{formik.errors.phone_number}</div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Your Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <TextInput
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            shadow
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={false}
          />
          {formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Your Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <TextInput
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            shadow
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={false}
          />
          {formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
      </div>
      <div>
        <Button
          text="Update Personal Details"
          className="w-full"
          htmlType="submit"
        />
      </div>
    </form>
  );
};

export default AuthDetailsForm;
