"use client";
import React from "react";

import loginImg from "@/public/images/auth/loginImg.png";
import AuthScreen from "@/components/auth/authScrnComp";

import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const VerificationSuccess = () => {
  const router = useRouter();
  return (
    <AuthScreen titleText="" loginImg={loginImg}>
      <div className="flex flex-col items-center gap-4">
        <FaCheckCircle size={96} className="text-[#36CC1E]" />
        <h1 className="font-poppins font-medium text-[#171415] text-xl">
          Business profile created!
        </h1>
        <button
          onClick={() => router.push("/sign-up/verify-account/success/proceed")}
          className="bg-main w-full text-white py-2  cursor-pointer font-inter font-semibold mt-5 text-sm rounded-2xl"
        >
          Select a subscription plan
        </button>
      </div>
    </AuthScreen>
  );
};

export default VerificationSuccess;
