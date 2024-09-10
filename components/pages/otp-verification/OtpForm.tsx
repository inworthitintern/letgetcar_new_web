"use client";

import { Button, NormalText } from "@/components/UI";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import {
  otpVerification,
  phoneNumberLogin,
} from "@/GlobalRedux/Features/auth/authSlice";
import { TextInput } from "flowbite-react";
import { Spacer } from "@/components/common";
import { useRouter } from "next/navigation";

const OtpForm = ({ phone_number }: { phone_number: string }) => {
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (values) => {
      setSubmitted(true);

      const sendingData = { phone_number, otp: values.otp };

      dispatch(otpVerification({ sendingData, router }));

      // dispatch(phoneNumberLogin(values.phone_number));
    },
    validationSchema: yup.object({
      otp: yup.number().required("OTP is required"),
    }),
  });

  const resentOtpHandler = () => {
    dispatch(phoneNumberLogin({ phone_number, noRedirectEnable: false }));
  };

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="otp"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Your OTP Number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <TextInput
            type="text"
            name="otp"
            id="otp"
            placeholder="Enter Your OTP"
            required
            shadow
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* <input
            className="block w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md leading-5 placeholder-gray-400 focus:outline-none sm:text-sm focus:shadow-none"
            placeholder="Enter OTP"
          /> */}
          {formik.errors.otp && (
            <div className="text-danger">{formik.errors.otp}</div>
          )}
        </div>
      </div>
      <div>
        <Button text="Verify OTP" className="w-full" htmlType="submit" />
      </div>
      <Spacer />
      <NormalText
        text="Resend OTP?"
        fontWeight="semiBold"
        textUnderline
        textAlign="right"
        color="gray"
        cursorEnabled
        hoverColor="primary"
        onClick={resentOtpHandler}
      />
    </form>
  );
};

export default OtpForm;
