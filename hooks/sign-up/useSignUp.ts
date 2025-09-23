"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";

import { apis } from "@/utils/apis";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { normalizePhone } from "@/utils/normalizePhone";
import { useBusinessStore } from "@/store/businessProfileStore";
import { useSignUpStore } from "@/store/signupCredentials";
import { useGeolocation } from "./geoLocation";

import { useState } from "react";

interface SignupI {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export const useSignUp = () => {
  const router = useRouter();
  const { updateData, resetData } = useBusinessStore();
  const { updateSignUp } = useSignUpStore();
  const { latitude, longitude } = useGeolocation();

  const [isSendingOtp, setIsSendingOtp] = useState(false);

  const handleSendEmailOtps = useMutation({
    mutationKey: ["emailOtp"],
    mutationFn: async ({ email }: { email: string }) => {
      const res = await axios.post(apis.auth.emailOtp, { email });
      return res.data;
    },
    onSuccess: () => toast.success("OTP sent to email"),
    onError: (err: any) =>
      toast.error(`Email OTP failed: ${getErrorMessage(err)}`),
  });

  const handleSendPhoneOtps = useMutation({
    mutationKey: ["smsOtp"],
    mutationFn: async ({ phone }: { phone: string }) => {
      const res = await axios.post(apis.auth.smsOtp, {
        phone: normalizePhone(phone),
      });
      return res.data;
    },
    onSuccess: (data) => {
      Cookies.set("pinId", data?.data?.pinId);
      toast.success("OTP sent to phone");
    },
    onError: (err: any) =>
      toast.error(`SMS OTP failed: ${getErrorMessage(err)}`),
  });

  const handleSignUp = async ({
    email,
    password,
    fullName,
    phone,
  }: SignupI) => {
    setIsSendingOtp(true);

    try {
      updateSignUp({ email, password, fullName, phone, userType: "business" });

      await Promise.all([
        handleSendEmailOtps.mutateAsync({ email }),
        handleSendPhoneOtps.mutateAsync({ phone: normalizePhone(phone) }),
      ]);

      toast.success("OTPs sent to email and phone");
      router.push("/sign-up/verify-account");
    } catch (err: any) {
      toast.error(`Failed to send OTPs: ${getErrorMessage(err)}`);
    } finally {
      setIsSendingOtp(false);
    }
  };

  const verifyOtpMutation = useMutation({
    mutationKey: ["verifyOtp"],
    mutationFn: async ({
      email,
      phone,
      emailOtp,
      phoneOtp,
      password,
      fullName,
    }: any) => {
      await axios.post(apis.auth.verifyEmailOtp, { email, otp: emailOtp });
      await axios.post(apis.auth.verifySmsOtp, {
        pinId: Cookies.get("pinId"),
        pin: phoneOtp,
      });

      const res = await axios.post(apis.auth.register, {
        email,
        password,
        fullName,
        phone: normalizePhone(phone),
        userType: "business",
      });

      return res.data;
    },
    onSuccess: () => {
      toast.success("Account created successfully 🎉");
      router.push("/sign-up/verify-account/success");
    },
    onError: (err: any) => {
      toast.error(`Verification/Signup failed: ${getErrorMessage(err)}`);
    },
  });

  const businessProfileSetup = useMutation({
    mutationKey: ["businessProfileSetup"],
    mutationFn: async (values: any) => {
      const res = await axios.post(apis.auth.businessProfile, {
        fullName: values.businessName,
        address: values.businessAddress,
        filename: values.businessLogo,
        latitude,
        longitude,
        website: values.website,
        about: values.about,
        businessType: values.businessType,
        esthablishedYear: values.esthablishedYear,
        businessEmail: values.businessEmail,
        businessPhone: values.businessPhone,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Business profile setup successful ✅");
      router.push("/business-profile/success");
      resetData();
    },
    onError: (err: any) =>
      toast.error(`Business profile setup failed: ${getErrorMessage(err)}`),
  });

  return {
    handleSignUp,
    handleSendEmailOtps,
    handleSendPhoneOtps,
    verifyOtpMutation,
    businessProfileSetup,
    isSendingOtp,
  };
};
