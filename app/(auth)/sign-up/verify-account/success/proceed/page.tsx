"use client";
import React from "react";

import loginImg from "@/public/images/auth/loginImg.png";

import AuthScreen from "@/components/auth/authScrnComp";
import { useRouter } from "next/navigation";

const ProceedScrn = () => {
  const router = useRouter();
  return (
    <AuthScreen titleText="" loginImg={loginImg}>
      <div>
        <h1 className="font-inter font-semibold text-xl text-center max-w-[278px] mx-auto my-5">
          Proceed to create a{" "}
          <span className="font-bold text-main capitalize">
            business profile
          </span>{" "}
          on Pika
        </h1>

        <div className="flex items-center gap-4 ">
          <button
            onClick={() => router.push("/business-profile")}
            className="bg-main w-full text-white py-2  cursor-pointer font-inter font-semibold mt-5 text-sm rounded-2xl"
          >
            Create Business Profile
          </button>
          <button
            onClick={() => router.push("/business-profile/login")}
            className="bg-white border border-main w-full text-main py-2  cursor-pointer font-inter font-semibold mt-5 text-sm rounded-2xl"
          >
            Log in
          </button>
        </div>
      </div>
    </AuthScreen>
  );
};

export default ProceedScrn;
