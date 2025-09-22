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
import { RiLoader3Fill } from "react-icons/ri";
import { useLogin } from "../../useLogin";

const formSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const PasswordReset = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
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

  const passwordVal = watch("password") || "";
  const checkPassword = passwordVal !== "" && !errors.password;

  const [showPassword, setShowPassword] = useState(false);

  const { sendResetPassword, handleSendResetPassword } = useLogin();
  return (
    <AuthScreen titleText={"Reset Password"} loginImg={loginImg}>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSendResetPassword)}
            className="space-y-4"
          >
            <div className="">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="pb-3">
                    <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                      New Password
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
            </div>

            <button
              disabled={!isValid || sendResetPassword.isPending}
              className={`${
                isValid ? "bg-main" : "bg-inactive"
              } w-full text-white text-sm py-2 flex items-center justify-center cursor-pointer font-inter font-semibold rounded-2xl`}
            >
              {sendResetPassword.isPending ? (
                <RiLoader3Fill className="animate-spin" size={20} />
              ) : (
                " Reset Password"
              )}
            </button>
          </form>
        </Form>
      </div>
    </AuthScreen>
  );
};

export default PasswordReset;
