"use client";

import { Button } from "@/components/UI";
import React, { FormEvent, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useSelector, useDispatch } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { RootState } from "@/GlobalRedux/store";
import { phoneNumberLogin } from "@/GlobalRedux/Features/auth/authSlice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },
    onSubmit: (values) => {
      setSubmitted(true);
      const sendingData = { phone_number: values.phone_number };

      dispatch(phoneNumberLogin({ sendingData, router }));

      // dispatch(phoneNumberLogin(values.phone_number));
    },
    validationSchema: yup.object({
      phone_number: yup.number().required("Phone Number is required"),
    }),
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const phone_number = formData.get("phone_number");

    // const phoneNumberLogin = await authService.loginWithPhoneNumber(
    //   phone_number
    // );

    // const response = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (response.ok) {
    //   router.push("/profile");
    // } else {
    //   // Handle errors
    // }
  }

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      {/* <button className="" type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      {count}
      <button className="" type="button" onClick={() => dispatch(decrement())}>
        -
      </button> */}
      <div>
        <label
          htmlFor="phone_number"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Your Mobile Number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="tel"
            name="phone_number"
            id="phone_number"
            className="block w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md leading-5 placeholder-gray-400 focus:outline-none sm:text-sm focus:shadow-none"
            placeholder="Enter Mobile Number"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">+91</span>
          </div>
          {formik.errors.phone_number && (
            <div className="text-danger">{formik.errors.phone_number}</div>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        By continuing, you agree to letgetcar’s{" "}
        <a
          href="#"
          className="font-medium text-primary-text hover:text-yellow-500"
        >
          Terms of Use
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="font-medium text-primary-text hover:text-yellow-500"
        >
          Privacy Policy
        </a>
        .
      </p>
      <div>
        <Button text="Proceed To Login" className="w-full" htmlType="submit" />
        {/* <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            ></button> */}
      </div>
    </form>
  );
};

export default LoginForm;
