"use client";
import React, { useState } from "react";
import AuthScreen from "@/components/auth/authScrnComp";
import loginImg from "@/public/images/auth/loginImg.png";
import BusinessForm from "@/components/auth/sign-up/businessForm";
import LogisticsForm from "@/components/auth/sign-up/logisticsForm";

const SignUp = () => {
  const [page, setPage] = useState<"business" | "logistics">("business");

  return (
    <AuthScreen titleText={"Join Pika"} loginImg={loginImg}>
      <div className="font-inter text-base flex items-center justify-between">
        <p
          onClick={() => setPage("business")}
          className={`cursor-pointer ${
            page === "business"
              ? "font-semibold pb-0 transition-colors ease-in-out border-b-2 border-b-main"
              : "font-normal"
          }`}
        >
          Business Account
        </p>
        <p
          onClick={() => setPage("logistics")}
          className={`cursor-pointer ${
            page === "logistics"
              ? "font-semibold pb-0 transition-colors ease-in-out border-b-2 border-b-main"
              : "font-normal"
          }`}
        >
          Logistic Account
        </p>
      </div>
      <div>{page === "business" ? <BusinessForm /> : <LogisticsForm />}</div>
    </AuthScreen>
  );
};

export default SignUp;
