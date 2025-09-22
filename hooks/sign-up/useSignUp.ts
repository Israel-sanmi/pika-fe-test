"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apis } from "@/utils/apis";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useBusinessStore } from "@/store/businessProfileStore";
import { useGeolocation } from "./geoLocation";
import { normalizePhone } from "@/utils/normalizePhone";

interface SignupI {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}
export const useSignUp = () => {
  const router = useRouter();
  const { data, updateData, resetData } = useBusinessStore();
  const { latitude, longitude, error } = useGeolocation();

  const signupMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (payload: {
      email: string;
      password: string;
      fullName: string;
      phone: string;
      userType?: "users";
    }) => {
      const res = await axios.post(apis.auth.register, {
        ...payload,
        phone: normalizePhone(payload.phone),
      });

      return res.data;
    },

    onSuccess: (data) => {
      console.log("Signup successful:", data);
      toast.success(`Signup successful:, ${data}`);
      router.push("/sign-up/verify-account");
    },
    onError: (error: any) => {
      const errMsg = getErrorMessage(error);
      console.log(errMsg);
      console.error("Signup failed:", errMsg);
      toast.error(`Signup failed: ${errMsg}`);
    },
  });

  const handleSignUp = ({ email, password, fullName, phone }: SignupI) => {
    signupMutation.mutate({
      email,
      password,
      fullName,
      phone,
    });
  };

  const businessProfileSetup = useMutation({
    mutationKey: ["businessProfileSetup"],
    mutationFn: async (values: any) => {
      updateData(values);
      const res = await axios.post(`${apis.auth.businessProfile}`, {
        fullName: data.businessName,
        // phone: data.
        address: data.businessAddress,
        filename: data.businessLogo,
        latitude,
        longitude,
        website: data.website,
        about: data.about,
        businessType: data.businessType,
        esthablishedYear: data.esthablishedYear,
        businessEmail: data.businessEmail,
        businessPhone: data.businessPhone,
      });
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Business Profile setup success:", data);
      toast.success(`Business Profile setup success:, ${data}`);
      router.push("/business-profile/success");
      resetData();
    },
    onError: (error: any) => {
      const errMsg = getErrorMessage(error);
      console.log(errMsg);
      console.error("Business profile setup failed:", errMsg);
      toast.error(`Business profile setup failed: ${errMsg}`);
    },
  });

  return {
    handleSignUp,
    signupMutation,

    businessProfileSetup,
  };
};
