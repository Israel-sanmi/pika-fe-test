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
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  services: z.string().min(1, "Add services offered"),
  about: z.string().min(1, "Input business description"),
  esthablishedYear: z.string().min(4, "Select the start year"),
});

const StepTwo = ({ setSteps }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      services: "",
      about: "",
      esthablishedYear: "",
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
  const aboutCheck = watch("about") || "";
  const esthablishedYearCheck = watch("esthablishedYear") || "";
  

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) =>
    String(currentYear - i)
  );


  const updateData = useBusinessStore((state) => state.updateData);
  const onSubmit = (values: any) => {
    updateData(values);
    setSteps(3);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
          disabled={!aboutCheck || !esthablishedYearCheck || !servicesCheck}
          // onClick={() => setSteps((prev: number) => prev + 1)}
          className={`${
            aboutCheck && esthablishedYearCheck && servicesCheck
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
