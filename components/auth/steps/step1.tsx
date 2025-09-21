"use client";
import React from "react";

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

const formSchema = z.object({
  businessName: z.string().min(1, "Input business name"),
  businessAddress: z.string().min(1, "Input Input business address"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, {
      message: "Phone number must be between 10 and 11 digits",
    })
    .optional(),
});

const StepOne = ({ setSteps }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      businessName: "",
      businessAddress: "",
      phone: "",
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const router = useRouter();

  const phoneVal = watch("phone") || "";
  const phoneNumberCheck = phoneVal !== "" && !errors.phone;

  const businessNameCheck = watch("businessName") || "";
  const businessAddressCheck = watch("businessAddress") || "";

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-4"
          //   onSubmit={form.handleSubmit(handleSignUp)}
        >
          <FormField
            control={control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Business Name<span className="text-main">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        businessNameCheck ? "border-main" : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="John Doe"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        businessNameCheck ? "text-main" : "text-[#B5B4B4]"
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
            name="businessAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Business Address<span className="text-main">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        businessAddressCheck
                          ? "border-main"
                          : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="Enter business address"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`${
                        businessAddressCheck ? "text-main" : "text-[#B5B4B4]"
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
                  Alternate Phone number
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
          <button
            disabled={!isValid}
            onClick={() => setSteps((prev: number) => prev + 1)}
            className={`${
              isValid ? "bg-main" : "bg-inactive pointer-events-none"
            } w-full text-white py-2 mt-5 text-sm cursor-pointer font-inter font-semibold rounded-2xl`}
          >
            Continue
          </button>
        </form>
      </Form>
    </div>
  );
};

export default StepOne;
