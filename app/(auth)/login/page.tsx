"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

import { IoCheckmarkCircle } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

import pikaLogo from "@/public/images/pika-logo.png";
import AuthScreen from "@/components/auth/authScrnComp";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/\S+@\S+\.\S+/, "Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const emailVal = watch("email") || "";
  const passwordVal = watch("password") || "";

  const checkEmail = emailVal !== "" && !errors.email;
  const checkPassword = passwordVal !== "" && !errors.password;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthScreen titleText={"Login to your account"} loginImg={loginImg}>
      <div>
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
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
            <div className="">
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
                            checkPassword ? "border-main" : "border-[#6C696A]"
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
              <p className="text-xs hover:text-main transition-colors ease-in-out font-inter  text-right cursor-pointer font-bold text-[#474445]">
                Forgot Password?
              </p>
            </div>

            <button
              className={`${
                checkEmail && checkPassword ? "bg-main" : "bg-inactive"
              } w-full text-white text-sm py-2 cursor-pointer font-inter font-semibold rounded-2xl`}
            >
              Log in
            </button>
            <div className="font-poppins text-center text-sm ">
              Don't have an account?{" "}
              <span
                className="text-main cursor-pointer"
                onClick={() => router.push("/sign-up")}
              >
                Sign up
              </span>{" "}
            </div>
          </form>
        </Form>
      </div>
    </AuthScreen>
  );
};

export default Login;
