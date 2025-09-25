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
import { useBusinessStore } from "@/store/businessProfileStore";
import { useBusinessProfileSetup } from "@/hooks/sign-up/useBusinessProfileSetup";
import { RiLoader3Fill } from "react-icons/ri";

const formSchema = z
  .object({
    businessDoc: z.custom<FileList>(
      (val) => val instanceof FileList && val.length > 0,
      { message: "Upload CAC Document" }
    ),
    KYC: z.custom<FileList>(
      (val) => val instanceof FileList && val.length > 0,
      { message: "Upload NIN, International Passport, Utility bill, etc" }
    ),
    documentTypes: z
      .array(z.string())
      .min(2, "You must upload both CAC and ID"),
  })
  .refine(
    (data) =>
      data.documentTypes.includes("cac") && data.documentTypes.includes("id"),
    {
      message: "Both CAC and ID are required",
      path: ["documentTypes"],
    }
  );

const StepFour = ({ setSteps }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      businessDoc: undefined,
      KYC: undefined,
      documentTypes: ["cac", "id"],
    },
  });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const router = useRouter();

  const businessDoc = watch("businessDoc") as FileList | undefined;
  const KYC = watch("KYC") as FileList | undefined;
  const documentTypesCheck = watch("documentTypes");

  const updateData = useBusinessStore((state) => state.updateData);

  // const { businessProfileDocs } = useBusinessProfileSetup();
  const { submitAll } = useBusinessProfileSetup();

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
            className={`flex items-center w-full justify-between border-[0.4px] rounded-sm py-2 px-3 cursor-pointer text-sm font-inter transition ${
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
    <div>
      <Form {...form}>
        <form
          className="space-y-2 overflow-y-scroll scrollbar-hide"
          onSubmit={handleSubmit((values) => {
            updateData(values);
            submitAll.mutate();
          })}
        >
          <FormField
            control={control}
            name="documentTypes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                  Select document type(s)<span className="text-main">*</span>
                </FormLabel>
                <FormControl>
                  <div className="flex gap-4">
                    {["cac", "id"].map((doc) => (
                      <label
                        key={doc}
                        className="flex  items-center gap-2 font-poppins text-sm"
                      >
                        <input
                          type="checkbox"
                          className="accent-main"
                          value={doc}
                          checked={field.value?.includes(doc)}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (e.target.checked) {
                              field.onChange([...(field.value || []), value]);
                            } else {
                              field.onChange(
                                field.value?.filter((v: string) => v !== value)
                              );
                            }
                          }}
                        />
                        {doc.toUpperCase()}
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
              <FileUpload
                field={field}
                label="Identity Card"
                placeholder="Upload NIN, International Passport, Utility bill, etc"
                value={KYC}
              />
            )}
          />
          <button
            disabled={!isValid || submitAll.isPending}
            className={`${
              isValid ? "bg-main" : "bg-inactive pointer-events-none"
            } w-full text-white py-2 mt-5 flex items-center justify-center text-sm cursor-pointer font-inter font-semibold rounded-2xl`}
          >
            {submitAll.isPending ? (
              <RiLoader3Fill className="animate-spin" size={20} />
            ) : (
              "Upload Documents"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default StepFour;
