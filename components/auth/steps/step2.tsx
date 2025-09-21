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
import { useRouter } from "next/navigation";
import { MdOutlineFileUpload } from "react-icons/md";

const formSchema = z.object({
  businessDoc: z.custom<FileList>(
    (val) => val instanceof FileList && val.length > 0,
    {
      message: "Upload CAC Document",
    }
  ),
  KYC: z.custom<FileList>((val) => val instanceof FileList && val.length > 0, {
    message: "Upload NIN, International Passport, Utility bill",
  }),
  BVN: z
    .custom<FileList | undefined>(
      (val) => !val || (val instanceof FileList && val.length > 0),
      { message: "Upload BVN Document" }
    )
    .optional(),
});

const StepTwo = ({ setSteps }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      businessDoc: undefined,
      KYC: undefined,
      BVN: undefined,
    },
  });

  const { control, watch } = form;
  const router = useRouter();

  const businessDoc = watch("businessDoc") as FileList | undefined;
  const KYC = watch("KYC") as FileList | undefined;
  const BVN = watch("BVN") as FileList | undefined;

  const FileUpload = ({
    field,
    label,
    placeholder,
    value,
  }: {
    field: any;
    label: string;
    placeholder: string;
    value?: FileList;
  }) => {
    const fileName = value && value.length > 0 ? value[0].name : placeholder;

    return (
      <FormItem>
        <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
          {label}{" "}
          {label !== "BVN Verification" && <span className="text-main">*</span>}
        </FormLabel>
        <FormControl>
          <label
            className={`flex items-center justify-between border-[0.4px] rounded-sm py-2 px-3 cursor-pointer text-sm font-inter transition ${
              value && value.length > 0
                ? "border-main text-black"
                : "border-[#6C696A] text-[#6C696A]"
            }`}
          >
            <span className="truncate">{fileName}</span>
            <MdOutlineFileUpload
              size={20}
              className={`${
                value && value.length > 0 ? "text-main" : "text-[#B5B4B4]"
              }`}
            />
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="hidden"
              onChange={(e) => field.onChange(e.target.files)}
            />
          </label>
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  };

  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          control={control}
          name="businessDoc"
          render={({ field }) => (
            <FileUpload
              field={field}
              label="Business Document"
              placeholder="Upload CAC Document"
              value={businessDoc}
            />
          )}
        />

        <FormField
          control={control}
          name="KYC"
          render={({ field }) => (
            <div>
              <FileUpload
                field={field}
                label="KYC Document"
                placeholder="Upload NIN, International Passport, Utility bill"
                value={KYC}
              />
              <p className="text-xs italic font-poppins pt-1 font-normal text-[#918F8F]">
                NIN, International passport, Utility bill
              </p>
            </div>
          )}
        />

        <FormField
          control={control}
          name="BVN"
          render={({ field }) => (
            <FileUpload
              field={field}
              label="BVN Verification"
              placeholder="Upload BVN Document"
              value={BVN}
            />
          )}
        />

        <button
          disabled={!businessDoc || !KYC}
          onClick={() => setSteps((prev: number) => prev + 1)}
          className={`${
            businessDoc && KYC ? "bg-main" : "bg-inactive pointer-events-none"
          } w-full text-white py-2 mt-5 text-sm cursor-pointer font-inter font-semibold rounded-2xl`}
        >
          Continue
        </button>
      </form>
    </Form>
  );
};

export default StepTwo;
