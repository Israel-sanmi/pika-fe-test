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
import { IoCheckmarkCircle } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  businessDoc: z.custom<FileList>(
    (val) => val instanceof FileList && val.length > 0,
    {
      message: "Upload CAC Document",
    }
  ),
  about: z.string().min(1, "Input business description"),
  businessType: z.string().min(1, "Select a business type"),
  esthablishedYear: z.string().min(4, "Select the start year"),

  // KYC: z.custom<FileList>((val) => val instanceof FileList && val.length > 0, {
  //   message: "Upload NIN, International Passport, Utility bill",
  // }),
  // BVN: z
  //   .custom<FileList | undefined>(
  //     (val) => !val || (val instanceof FileList && val.length > 0),
  //     { message: "Upload BVN Document" }
  //   )
  //   .optional(),
});

const StepTwo = ({ setSteps }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      businessDoc: undefined,
      about: "",
      businessType: "",
      esthablishedYear: "",
      // KYC: undefined,
      // BVN: undefined,
    },
  });

  const { control, watch } = form;
  const router = useRouter();

  const businessDoc = watch("businessDoc") as FileList | undefined;
  const aboutCheck = watch("about") || "";
  const esthablishedYearCheck = watch("esthablishedYear") || "";
  // const KYC = watch("KYC") as FileList | undefined;
  // const BVN = watch("BVN") as FileList | undefined;

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) =>
    String(currentYear - i)
  );
  const businessTypeList = ["retail", "wholesale", "hospitality"];

  const updateData = useBusinessStore((state) => state.updateData);
  const onSubmit = (values: any) => {
    updateData(values);
    setSteps(3);
  };

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
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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

        {/* <FormField
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
        /> */}

        <FormField
          control={control}
          name="businessType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                Business Type<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`font-inter font-normal capitalize w-full rounded-sm py-3 text-sm border-[0.4px] ${
                      field.value ? "border-main" : "border-[#6C696A]"
                    }`}
                  >
                    <SelectValue placeholder="Select a business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypeList.map((businessT) => (
                      <SelectItem
                        className="font-inter capitalize"
                        key={businessT}
                        value={businessT}
                      >
                        {businessT}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                Business Description<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    className={`font-inter font-normal rounded-sm py-3 text-sm border-[0.4px] ${
                      aboutCheck ? "border-main" : "border-[#6C696A]"
                    } placeholder:text-[#6C696A]`}
                    placeholder="Enter business description"
                    {...field}
                  />
                  <IoCheckmarkCircle
                    size={20}
                    className={`${
                      aboutCheck ? "text-main" : "text-[#B5B4B4]"
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
          name="esthablishedYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter font-normal text-[#110F10] text-sm">
                Select a start year<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`font-inter font-normal w-full rounded-sm py-3 text-sm border-[0.4px] ${
                      field.value ? "border-main" : "border-[#6C696A]"
                    }`}
                  >
                    <SelectValue placeholder="Choose year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem
                        className="font-inter"
                        key={year}
                        value={year}
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          // disabled={!businessDoc || !KYC}
          disabled={!businessDoc || !aboutCheck || !esthablishedYearCheck}
          // onClick={() => setSteps((prev: number) => prev + 1)}
          className={`${
            businessDoc && aboutCheck && esthablishedYearCheck
              ? "bg-main"
              : "bg-inactive pointer-events-none"
          } w-full text-white py-2 mt-5 text-sm cursor-pointer font-inter font-semibold rounded-2xl`}
        >
          Continue
        </button>
      </form>
    </Form>
  );
};

export default StepTwo;
