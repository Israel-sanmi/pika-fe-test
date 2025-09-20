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

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/\S+@\S+\.\S+/, "Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits" }),
  fullname: z.string().min(1, "Full name is required"),
});

const BusinessForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      fullname: "",
    },
  });

  const router = useRouter();

  const fullnameCheck =
    !form.formState.errors.fullname && form.getValues("fullname") !== "";
  const emailCheck =
    !form.formState.errors.email && form.getValues("email") !== "";
  const phoneCheck =
    !form.formState.errors.phone && form.getValues("phone") !== "";
  const passwordCheck =
    !form.formState.errors.password && form.getValues("password") !== "";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
      <Form {...form}>
        <form
          className="space-y-2"
          // onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Full name
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        fullnameCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="John Doe"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        fullnameCheck ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
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
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Phone number
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute top-2 pt-[1px] left-2">
                      <p className="text-[#6C696A] font-inter font-normal text-sm">
                        NG +234
                      </p>
                    </div>
                    <Input
                      className={`font-inter font-normal indent-14 rounded-sm py-3 text-sm border-[0.4px] ${
                        phoneCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A] text-sm`}
                      // placeholder="John Doe"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        phoneCheck ? "text-main" : "text-[#B5B4B4]"
                      } absolute right-2 top-2`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
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
                        passwordCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="Enter your password"
                      type={showPassword ? "password" : "text"}
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
                          passwordCheck ? "text-main" : "text-[#B5B4B4]"
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
            className={`${
              emailCheck && passwordCheck && fullnameCheck && phoneCheck
                ? "bg-main"
                : "bg-inactive"
            } w-full text-white py-2 cursor-pointer font-inter font-semibold rounded-2xl`}
          >
            Log in
          </button>

          <div className="font-poppins text-center text-sm ">
            Already have an account?{" "}
            <span
              className="text-main cursor-pointer"
              onClick={() => router.push("/login")}
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
