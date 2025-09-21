"use client";

import { useRouter } from "next/navigation";

export const useVerifyAccount = () => {
  const router = useRouter();

  const handleVerifyOtps = () => {
    router.push("/sign-up/verify-account/success");
  };

  return {
    handleVerifyOtps,
  };
};
