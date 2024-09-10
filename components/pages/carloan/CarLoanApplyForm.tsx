"use client";

import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextInput } from "flowbite-react";
import * as Yup from "yup";
import { Button } from "@/components/UI";
import carLoanService from "@/services/carLoanService";
import { toast } from "react-toastify";

// Helper function to upload files to Cloudinary
const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "hawybrcj");
  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dntrefeat/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await response.json();
  return data.secure_url;
};

// File size and type validation function
const fileValidation = (file) => {
  const supportedFormats = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
  ];
  const maxSizeInBytes = 10 * 1024 * 1024; // 10MB

  if (!file) {
    return false;
  }

  if (!supportedFormats.includes(file.type)) {
    return "Unsupported file format. Only JPG, PNG, WEBP, and PDF are allowed.";
  }

  if (file.size > maxSizeInBytes) {
    return "File size exceeds 10MB.";
  }

  return true;
};

// Validation schema with file validation for size and format
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  uae_address: Yup.string().required("Required"),
  uae_reference: Yup.string().required("Required"),
  home_country_address: Yup.string().required("Required"),
  home_country_mobile_no: Yup.string().required("Required"),
  customer_name: Yup.string().required("Required"),
  passport_copy: Yup.mixed().test("fileSizeAndFormat", "Invalid file", (file) =>
    fileValidation(file)
  ),
  emirates_ID: Yup.mixed().test("fileSizeAndFormat", "Invalid file", (file) =>
    fileValidation(file)
  ),
  visa_page: Yup.mixed().test("fileSizeAndFormat", "Invalid file", (file) =>
    fileValidation(file)
  ),
  salary_certificate: Yup.mixed().test(
    "fileSizeAndFormat",
    "Invalid file",
    (file) => fileValidation(file)
  ),
});

interface ICarLoanApplyForm {
  setOpen: (arg: boolean) => void;
  open: boolean;
}

const CarLoanApplyForm: React.FC<ICarLoanApplyForm> = ({ setOpen, open }) => {
  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)} size="xl">
        <Modal.Header>Submit Your Documents</Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              email: "",
              uae_address: "",
              uae_reference: "",
              home_country_address: "",
              home_country_mobile_no: "",
              customer_name: "",
              passport_copy: null,
              emirates_ID: null,
              visa_page: null,
              salary_certificate: null,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setFieldValue }) => {
              setSubmitting(true);

              const [passportUrl, emiratesIdUrl, visaPageUrl, salaryCertUrl] =
                await Promise.all([
                  uploadToCloudinary(values.passport_copy),
                  uploadToCloudinary(values.emirates_ID),
                  uploadToCloudinary(values.visa_page),
                  uploadToCloudinary(values.salary_certificate),
                ]);

              const formData = {
                passport_copy: passportUrl,
                emirates_ID: emiratesIdUrl,
                visa_page: visaPageUrl,
                salary_certificate: salaryCertUrl,
                email: values.email,
                uae_address: values.uae_address,
                uae_reference: values.uae_reference,
                home_country_address: values.home_country_address,
                home_country_mobile_no: values.home_country_mobile_no,
                customer_name: values.customer_name,
                status: "Pending",
              };

              console.log("Form Data: ", formData);

              const createdCarLoanEquiry =
                await carLoanService.createCarLoanEnquiry(formData);

              if (createdCarLoanEquiry) {
                toast.success(
                  "Successfully Submitted Car Loan Form. We Will Contact You Soon"
                );
              }
              // You can send formData to your backend

              setSubmitting(false);
              setOpen(false); // Close the modal after submission
            }}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="email">Email</label>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="uae_address">UAE Address</label>
                  <TextInput
                    id="uae_address"
                    name="uae_address"
                    placeholder="Enter your UAE address"
                    onChange={(e) =>
                      setFieldValue("uae_address", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="uae_address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="uae_reference">UAE Reference</label>
                  <TextInput
                    id="uae_reference"
                    name="uae_reference"
                    placeholder="Enter UAE reference"
                    onChange={(e) =>
                      setFieldValue("uae_reference", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="uae_reference"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="home_country_address">
                    Home Country Address
                  </label>
                  <TextInput
                    id="home_country_address"
                    name="home_country_address"
                    placeholder="Enter home country address"
                    onChange={(e) =>
                      setFieldValue("home_country_address", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="home_country_address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="home_country_mobile_no">
                    Home Country Mobile No
                  </label>
                  <TextInput
                    id="home_country_mobile_no"
                    name="home_country_mobile_no"
                    placeholder="Enter home country mobile no"
                    onChange={(e) =>
                      setFieldValue("home_country_mobile_no", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="home_country_mobile_no"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="customer_name">Customer Name</label>
                  <TextInput
                    id="customer_name"
                    name="customer_name"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setFieldValue("customer_name", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="customer_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="passport_copy">Passport Copy</label>
                  <TextInput
                    id="passport_copy"
                    name="passport_copy"
                    type="file"
                    accept="image/png, image/jpeg, image/webp, application/pdf"
                    onChange={(event) =>
                      setFieldValue(
                        "passport_copy",
                        event.currentTarget.files[0]
                      )
                    }
                  />
                  <ErrorMessage
                    name="passport_copy"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="emirates_ID">Emirates ID</label>
                  <TextInput
                    id="emirates_ID"
                    name="emirates_ID"
                    accept="image/png, image/jpeg, image/webp, application/pdf"
                    type="file"
                    onChange={(event) =>
                      setFieldValue("emirates_ID", event.currentTarget.files[0])
                    }
                  />
                  <ErrorMessage
                    name="emirates_ID"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="visa_page">Visa Page</label>
                  <TextInput
                    id="visa_page"
                    name="visa_page"
                    accept="image/png, image/jpeg, image/webp, application/pdf"
                    type="file"
                    onChange={(event) =>
                      setFieldValue("visa_page", event.currentTarget.files[0])
                    }
                  />
                  <ErrorMessage
                    name="visa_page"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="salary_certificate">Salary Certificate</label>
                  <TextInput
                    id="salary_certificate"
                    name="salary_certificate"
                    accept="image/png, image/jpeg, image/webp, application/pdf"
                    type="file"
                    onChange={(event) =>
                      setFieldValue(
                        "salary_certificate",
                        event.currentTarget.files[0]
                      )
                    }
                  />
                  <ErrorMessage
                    name="salary_certificate"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <Button
                  text={isSubmitting ? "Submitting..." : "Apply For Car Loan"}
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarLoanApplyForm;
