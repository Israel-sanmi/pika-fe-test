"use client";
import React from "react";

import loginImg from "@/public/images/auth/loginImg.png";
import AuthScreen from "@/components/auth/authScrnComp";

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
import { useLogin } from "../useLogin";
import { RiLoader3Fill } from "react-icons/ri";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/\S+@\S+\.\S+/, "Invalid email address"),
});

const ForgorPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const emailVal = watch("email") || "";
  const checkEmail = emailVal !== "" && !errors.email;

  const { handleSendResetEmail, sendResetEmail } = useLogin();

  return (
    <AuthScreen titleText={"Forgot Password?"} loginImg={loginImg}>
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleSendResetEmail)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Email Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        checkEmail ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="example@gmail.com"
                      type="email"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        checkEmail ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            disabled={!isValid || sendResetEmail.isPending}
            className={`${
              isValid ? "bg-main" : "bg-inactive"
            } w-full text-white text-sm py-2 flex items-center justify-center cursor-pointer font-inter font-semibold rounded-2xl`}
          >
            {sendResetEmail.isPending ? (
              <RiLoader3Fill className="animate-spin" size={20} />
            ) : (
              "Continue"
            )}
          </button>
        </form>
      </Form>
    </AuthScreen>
  );
};

export default ForgorPassword;
