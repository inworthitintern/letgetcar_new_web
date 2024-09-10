import { Spacer } from "@/components/common";
import { LoginForm } from "@/components/pages/login";
import { Heading, NormalText } from "@/components/UI";
import { loginBg } from "@/constants/images";
// import { useAppSelector } from "@/hooks/redux";
import authService from "@/services/authService";
// import { useRouter } from "next/navigation"; // ⬅⬅⬅⬅⬅

import React from "react";

const Login: React.FC = () => {
  // const router = useRouter();

  // const { stage } = useAppSelector((state) => state.auth);

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
          <Heading text="Login Now!" type="h2" />
          <Spacer spacing="xs" />
          <NormalText
            text="To Get Discounted Price"
            color="primary"
            type="p"
            size="md"
            textAlign="center"
          />
        </div>
        <LoginForm />

        {/* <OTPForm phone_number={93722033} /> */}
      </div>
    </div>
  );
};

export default Login;
