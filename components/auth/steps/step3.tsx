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
import { MdOutlineFileUpload } from "react-icons/md";

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const MIN_FILE_SIZE = 1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const formSchema = z.object({
  services: z.string().min(1, "Add services offered"),
  businessLogo: z
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
      message: "Upload business logo",
    })
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Please select an image file",
    })
    .refine(
      (files) =>
        files instanceof FileList &&
        ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      { message: "Only .jpg, .jpeg, .png formats are supported" }
    )
    .refine(
      (files) => files instanceof FileList && files[0]?.size >= MIN_FILE_SIZE,
      { message: "File must be at least 1MB" }
    )
    .refine(
      (files) => files instanceof FileList && files[0]?.size <= MAX_FILE_SIZE,
      { message: "File must not exceed 3MB" }
    ),
});

const StepThree = ({ setSteps }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      businessLogo: undefined,
      services: "",
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const router = useRouter();

  const servicesCheck = watch("services") || "";
  const businessLogoCheck = watch("businessLogo") as FileList | undefined;

  const navStep = () => {
    router.push("/business-profile/success");
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(navStep)}>
          <FormField
            control={control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Services Offered<span className="text-main">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                        servicesCheck && !errors.services
                          ? "border-main"
                          : "border-[#6C696A]"
                      } placeholder:text-[#6C696A]`}
                      placeholder="Add services"
                      type="text"
                      {...field}
                    />
                    <IoCheckmarkCircle
                      size={20}
                      className={`absolute right-2 top-2 ${
                        servicesCheck && !errors.services
                          ? "text-main"
                          : "text-[#B5B4B4]"
                      }`}
                    />
                    <p className="text-xs italic font-poppins pt-1 font-normal text-[#918F8F]">
                      Separate the services with comma
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="businessLogo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Business Logo<span className="text-main">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      id="businessLogo"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      className="hidden"
                      onChange={(e) => field.onChange(e.target.files)}
                    />

                    <label
                      htmlFor="businessLogo"
                      className={`flex items-center justify-between w-full border-[0.4px] rounded-sm py-2 px-3 text-sm cursor-pointer font-inter
                        ${
                          businessLogoCheck && !errors.businessLogo
                            ? "border-main text-main"
                            : "border-[#6C696A] text-[#6C696A]"
                        }`}
                    >
                      <span>
                        {businessLogoCheck && businessLogoCheck.length > 0
                          ? businessLogoCheck[0].name
                          : "Upload business logo"}
                      </span>
                      <MdOutlineFileUpload
                        size={20}
                        className={`${
                          businessLogoCheck && !errors.businessLogo
                            ? "text-main"
                            : "text-[#B5B4B4]"
                        }`}
                      />
                    </label>

                    <p className="text-xs italic font-poppins pt-1 font-normal text-[#918F8F]">
                      1MB - 3MB in size
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            disabled={!isValid}
            // onClick={() => router.push("/business-profile/success")}
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

export default StepThree;
