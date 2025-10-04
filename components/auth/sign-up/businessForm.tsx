"use client";
import React, { useState } from "react";
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
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useSignUp } from "@/hooks/sign-up/useSignUp";
import { RiLoader3Fill } from "react-icons/ri";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/\S+@\S+\.\S+/, "Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().regex(/^\d{10,11}$/, {
    message: "Phone number must be between 10 and 11 digits",
  }),
  fullName: z.string().min(1, "Full name is required"),
});

const BusinessForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      fullName: "",
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const router = useRouter();

  const emailVal = watch("email") || "";
  const passwordVal = watch("password") || "";
  const fullNameVal = watch("fullName") || "";
  const phoneVal = watch("phone") || "";

  const fullNameCheck = fullNameVal !== "" && !errors.fullName;
  const checkPassword = passwordVal !== "" && !errors.password;
  const emailCheck = emailVal !== "" && !errors.email;
  const phoneNumberCheck = phoneVal !== "" && !errors.phone;

  const [showPassword, setShowPassword] = useState(false);

  const { handleSignUp, isSendingOtp } = useSignUp();

  return (
    <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(handleSignUp)}>
          <FormField
            control={control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Full name
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        fullNameCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="John Doe"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        fullNameCheck ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Email
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        emailCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="example@gmail.com"
                      type="email"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        emailCheck ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Phone number
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute top-2  left-2">
                      <p className="text-[#6C696A] font-inter font-normal text-sm">
                        NG +234
                      </p>
                    </div>
                    <Input
                      className={`font-inter font-normal indent-14 rounded-sm py-3 text-sm border-[0.4px] ${
                        phoneNumberCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A] text-sm`}
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        phoneNumberCheck ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem className="pb-3">
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        checkPassword ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <div className=" absolute flex items-center gap-2 right-2 top-2">
                      {showPassword ? (
                        <IoMdEye
                          size={20}
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      ) : (
                        <IoMdEyeOff
                          size={20}
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      )}

                      <IoCheckmarkCircle
                        size={20}
                        className={`${
                          checkPassword ? "text-main" : "text-[#B5B4B4]"
                        }`}
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            disabled={!isValid || isSendingOtp}
            className={`${
              isValid ? "bg-main" : "bg-inactive pointer-events-none"
            } w-full text-white py-2 text-sm cursor-pointer flex justify-center items-center font-inter font-semibold rounded-2xl`}
          >
            {isSendingOtp ? (
              <RiLoader3Fill className="animate-spin" size={20} />
            ) : (
              "Next"
            )}
          </button>

          <div className="font-poppins text-center text-sm ">
            Already have an account?{" "}
            <span
              className="text-main cursor-pointer"
              onClick={() => router.push("/business-profile/login")}
            >
              Log In
            </span>{" "}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BusinessForm;
