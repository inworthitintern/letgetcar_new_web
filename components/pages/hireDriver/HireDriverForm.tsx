// "use client";

// import { Spacer } from "@/components/common";
// import { Button, Heading } from "@/components/UI";
// import { Select, TextInput } from "flowbite-react";
// import React, { useState } from "react";

// const HireDriverForm = () => {
//   const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });

//   const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setTime({ ...time, [name]: value });
//   };

//   const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setTime({ ...time, period: e.target.value });
//   };

//   return (
//     <div className="mx-auto p-5 bg-white shadow-md rounded-lg">
//       <Heading text="Hire Driver Booking" type="h4" textAlign="left" />
//       <Spacer spacing="sm" />
//       <hr />
//       <Spacer spacing="md" />
//       {/* <h2 className="text-2xl font-bold text-black mb-6 bg-primary p-4 rounded-t-md text-center">
//         Hire Driver Booking Form
//       </h2> */}
//       <form className="space-y-4">
//         {/* Row 1 - Name and Phone Number */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Your Name
//             </label>
//             <TextInput
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Enter your name"
//               required
//               shadow
//               //   value={formik.values.otp}
//               //   onChange={formik.handleChange}
//               //   onBlur={formik.handleBlur}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Phone Number
//             </label>
//             <TextInput
//               type="text"
//               name="phone"
//               id="phone"
//               placeholder="Enter your Phone Number"
//               required
//               shadow
//               //   value={formik.values.otp}
//               //   onChange={formik.handleChange}
//               //   onBlur={formik.handleBlur}
//             />
//           </div>
//         </div>

//         {/* Row 2 - Pickup Date and Custom Time Picker */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//           <div>
//             <label
//               htmlFor="pickup-date"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Pickup Date
//             </label>

//             <TextInput
//               type="date"
//               name="pickup-date"
//               id="pickup-date"
//               placeholder="Enter your Pickup Date"
//               required
//               shadow
//               //   value={formik.values.otp}
//               //   onChange={formik.handleChange}
//               //   onBlur={formik.handleBlur}
//             />
//           </div>

//           {/* Custom Time Picker with AM/PM */}
//           <div>
//             <label
//               htmlFor="pickup-time"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Pick up Time
//             </label>
//             <div className="flex gap-2">
//               <TextInput
//                 type="number"
//                 name="hour"
//                 id="hour"
//                 placeholder="HH"
//                 min="1"
//                 max="12"
//                 required
//                 shadow
//                 onChange={handleTimeChange}
//                 //   value={formik.values.otp}
//                 //   onChange={formik.handleChange}
//                 //   onBlur={formik.handleBlur}
//               />

//               <TextInput
//                 type="number"
//                 name="minute"
//                 id="minute"
//                 placeholder="MM"
//                 min="0"
//                 max="59"
//                 required
//                 value={time.minute}
//                 shadow
//                 onChange={handleTimeChange}
//                 //   value={formik.values.otp}
//                 //   onChange={formik.handleChange}
//                 //   onBlur={formik.handleBlur}
//               />
//               {/* <input
//                 type="number"
//                 name="minute"
//                 placeholder="MM"
//                 min="0"
//                 max="59"
//                 value={time.minute}
//                 onChange={handleTimeChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               /> */}

//               {/* <select
//                 value={time.period}
//                 onChange={handlePeriodChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               >
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </select> */}
//               <Select value={time.period} onChange={handlePeriodChange}>
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </Select>
//             </div>
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="pickup_location"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Pickup Location
//           </label>
//           <TextInput
//             type="text"
//             name="pickup_location"
//             id="pickup_location"
//             placeholder="Pickup Location"
//             required
//             shadow
//             //   value={formik.values.otp}
//             //   onChange={formik.handleChange}
//             //   onBlur={formik.handleBlur}
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="dropoff_location"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Dropoff Location
//           </label>
//           <TextInput
//             type="text"
//             name="dropoff_location"
//             id="dropoff_location"
//             placeholder="Dropoff Location"
//             required
//             shadow
//             //   value={formik.values.otp}
//             //   onChange={formik.handleChange}
//             //   onBlur={formik.handleBlur}
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-6">
//           <Button
//             text="Book Hire Drive Now"
//             className="w-full"
//             htmlType="submit"
//             //   onClick={() => setOpenCarCheckout(true)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default HireDriverForm;

"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Heading } from "@/components/UI";
import { TextInput } from "flowbite-react";
import hiredriverService from "@/services/hiredriverService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  phone_number: Yup.string().required("Required"),
  pickup_date: Yup.date().required("Required"),
  pickup_time: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):([0-5][0-9])([APap][Mm])$/,
      "Invalid time format"
    )
    .required("Required"),
  pickup_location: Yup.string().required("Required"),
  dropoff_location: Yup.string().required("Required"),
});

const HireDriverForm = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
      pickup_date: "",
      pickup_time: "",
      pickup_location: "",
      dropoff_location: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Data:", values);

      if (user) {
        const createdHireDriver =
          await hiredriverService.createHiredriverEnquiry(values);

        if (createdHireDriver) {
          toast.success(
            "You've Succefully Requested for Hiring a Driver. We will contact you soon."
          );
          formik.resetForm();
        }
      } else {
        toast("You have to Login Before Hiring a Driver");
        router.push("/login");
      }
    },
  });

  return (
    <div className="mx-auto p-5 bg-white shadow-md rounded-lg">
      <Heading text="Hire Driver Booking" type="h4" textAlign="left" />
      <hr className="my-4" />
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Row 1 - Name and Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
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
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <TextInput
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="Enter your Phone Number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phone_number}
              </div>
            ) : null}
          </div>
        </div>

        {/* Row 2 - Pickup Date and Time Picker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <label
              htmlFor="pickup_date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pickup Date
            </label>
            <TextInput
              type="date"
              name="pickup_date"
              id="pickup_date"
              value={formik.values.pickup_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.pickup_date && formik.errors.pickup_date ? (
              <div className="text-red-500 text-sm">
                {formik.errors.pickup_date}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="pickup_time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pickup Time
            </label>
            <TextInput
              type="text"
              name="pickup_time"
              id="pickup_time"
              placeholder="(eg: 10:00am)"
              value={formik.values.pickup_time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              shadow
            />
            {formik.touched.pickup_time && formik.errors.pickup_time ? (
              <div className="text-red-500 text-sm">
                {formik.errors.pickup_time}
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="pickup_location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Pickup Location
          </label>
          <TextInput
            type="text"
            name="pickup_location"
            id="pickup_location"
            placeholder="Pickup Location"
            value={formik.values.pickup_location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            shadow
          />
          {formik.touched.pickup_location && formik.errors.pickup_location ? (
            <div className="text-red-500 text-sm">
              {formik.errors.pickup_location}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="dropoff_location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Dropoff Location
          </label>
          <TextInput
            type="text"
            name="dropoff_location"
            id="dropoff_location"
            placeholder="Dropoff Location"
            value={formik.values.dropoff_location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            shadow
          />
          {formik.touched.dropoff_location && formik.errors.dropoff_location ? (
            <div className="text-red-500 text-sm">
              {formik.errors.dropoff_location}
            </div>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <Button
            text="Book Hire Driver Now"
            className="w-full"
            htmlType="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default HireDriverForm;
