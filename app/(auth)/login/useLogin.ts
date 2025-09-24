"use client";
import { apis } from "@/utils/apis";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: { email: string; password: string }) => {
      const res = await axios.post(`${apis.auth.login}`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Signin successful:", data);
      toast.success(`Welcome: ${data.data.user.fullName}`);

      // saved Cookies
      Cookies.set("accessToken", data.data.tokens.accessToken, { secure: true });
      Cookies.set("refreshToken", data.data.tokens.refreshToken, { secure: true });
      Cookies.set("userID", data.data.tokens.uid);

      router.push("/dashboard")
    },
    onError: (error: any) => {
      console.error("Signin failed:", error.response?.data || error.message);
      toast.error(`${error.response?.data.message || error.message}`);
    },
  });

  const handleSignIn = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    loginMutation.mutate({ email, password });
  };

  const sendResetEmail = useMutation({
    mutationKey: ["sendResetEmail"],
    mutationFn: async (payload: { email: string }) => {
      const res = await axios.post(`${apis.auth.forgotPassword}`, payload);
      Cookies.set("email", payload.email);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Password Reset:", data);
      toast.success(`Password Reset successful: ${data.message}`);
      router.push("/login/forgot-password/password-reset");
    },
    onError: (error: any) => {
      console.error(
        "Password Reset Error",
        error.response?.data || error.message
      );
      toast.error(`${error.response?.data.message || error.message}`);
    },
  });

  const handleSendResetEmail = ({ email }: { email: string }) => {
    sendResetEmail.mutate({ email });
  };

  const sendResetPassword = useMutation({
    mutationKey: ["sendResetPassword"],
    mutationFn: async (payload: { newPassword: string; otp: string }) => {
      const email = Cookies.get("email");
      const res = await axios.post(apis.auth.resetPassword, {
        email,
        otp: payload.otp,
        newPassword: payload.newPassword,
      });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(`Password changed successfully 🎉`);
      router.replace("/login");
      Cookies.remove("email");
    },
    onError: (error: any) => {
      console.error(
        "Password Change error:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data.message || error.message);
    },
  });

  const handleSendResetPassword = ({
    newPassword,
    otp,
  }: {
    newPassword: string;
    otp: string;
  }) => {
    sendResetPassword.mutate({ newPassword, otp });
  };

  return {
    handleSignIn,
    loginMutation,

    handleSendResetEmail,
    sendResetEmail,

    sendResetPassword,
    handleSendResetPassword,
  };
};
