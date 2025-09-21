"use client";

import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/sign-up/verify-account");
  };

  
  return {
    handleSignUp,
  };
};
