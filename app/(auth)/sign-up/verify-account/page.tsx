"use client";
import React from "react";
import AuthScreen from "@/components/auth/authScrnComp";
import loginImg from "@/public/images/auth/loginImg.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useSignUp } from "@/hooks/sign-up/useSignUp";
import { useSignUpStore } from "@/store/signupCredentials";
import { RiLoader3Fill } from "react-icons/ri";
import { normalizePhone } from "@/utils/normalizePhone";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  emailOtp: z.string().min(1, "Input email OTP"),
  phoneOtp: z.string().min(1, "Input phone OTP"),
});

const VerifyAccount = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      emailOtp: "",
      phoneOtp: "",
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const emailOtp = watch("emailOtp") || "";
  const phoneOtp = watch("phoneOtp") || "";

  const { verifyOtpMutation, handleSendEmailOtps, handleSendPhoneOtps } =
    useSignUp();
  const { data } = useSignUpStore();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    verifyOtpMutation.mutate({
      ...values,
      email: data?.email,
      phone: data?.phone,
      fullName: data?.fullName,
      password: data?.password,
    });
  };

  return (
    <AuthScreen titleText="Verify your account" loginImg={loginImg}>
      <p className="font-inter font-medium text-[#171415] text-sm">
        Input Email/Phone number to verify both
      </p>

      <Form {...form}>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="emailOtp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Email OTP
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        emailOtp ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="Enter code sent to your email address"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        emailOtp ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                    <p
                      onClick={() =>
                        handleSendEmailOtps.mutate({
                          email: data.email!,
                        })
                      }
                      className="font-poppins flex items-center gap-1 text-xs pt-1 cursor-pointer text-main"
                    >
                      Resend Email Otp{" "}
                      {handleSendEmailOtps.isPending ? (
                        <Loader2 size={12} className="animate-spin text-main" />
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phoneOtp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Phone number OTP
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        phoneOtp ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="Enter code sent to your phone number"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        phoneOtp ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                    <p
                      onClick={() =>
                        handleSendPhoneOtps.mutate({
                          phone: normalizePhone(data.phone!),
                        })
                      }
                      className="font-poppins flex items-center gap-1 text-xs pt-1 cursor-pointer text-main"
                    >
                      Resend Phone Otp{" "}
                      {handleSendPhoneOtps.isPending ? (
                        <Loader2 size={12} className="animate-spin text-main" />
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            disabled={!emailOtp || !phoneOtp || verifyOtpMutation.isPending}
            className={`${
              emailOtp && phoneOtp && !verifyOtpMutation.isPending
                ? "bg-main"
                : "bg-inactive pointer-events-none"
            } w-full text-white py-2 flex items-center justify-center cursor-pointer font-inter font-semibold mt-5 text-sm rounded-2xl`}
          >
            {verifyOtpMutation.isPending ? (
              <RiLoader3Fill className="animate-spin" size={20} />
            ) : (
              "Create Account"
            )}
          </button>
        </form>
      </Form>
    </AuthScreen>
  );
};

export default VerifyAccount;
