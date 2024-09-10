// import { Spacer } from "@/components/common";
// import { OTPForm } from "@/components/pages/otp-verification";
// import { Button, Heading, NormalText } from "@/components/UI";
// import { loginBg } from "@/constants/images";
// import { useSearchParams } from "next/navigation";

// import React from "react";

// const OtpVerification: React.FC = ({ params, searchParams }: any) => {
//   const phone_number = searchParams?.phone_number;
//   // const router = useRouter();

//   // const { stage } = useAppSelector((state) => state.auth);

//   return (
//     <div
//       style={{
//         background: `url(${loginBg.src})`,
//         height: "100vh",
//         width: "100vw",
//         objectFit: "cover",
//         backgroundPosition: "center",
//       }}
//       className="flex items-center justify-center"
//     >
//       <div className="max-w-lg w-full space-y-8 p-6 bg-white rounded-lg shadow-md">
//         <div className="text-center">
//           <Heading text="Enter OTP" type="h2" />
//           <Spacer spacing="xs" />
//         </div>
//         <OTPForm phone_number={phone_number} />
//       </div>
//     </div>
//   );
// };

// export default OtpVerification;
"use client";

import { Spacer } from "@/components/common";
import { OTPForm } from "@/components/pages/otp-verification";
import { Heading } from "@/components/UI";
import { loginBg } from "@/constants/images";
import { useParams } from "next/navigation";

const OtpVerification: React.FC = () => {
  //   const { phone_number } = router.query;
  const { phone_number } = useParams();

  return (
    <div
      style={{
        background: `url(${loginBg.src})`,
        height: "100vh",
        width: "100vw",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center"
    >
      <div className="max-w-lg w-full space-y-8 p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <Heading text="Enter OTP" type="h2" />
          <Spacer spacing="xs" />
        </div>
        <OTPForm phone_number={phone_number as string} />
      </div>
    </div>
  );
};

export default OtpVerification;
