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
import { useBusinessStore } from "@/store/businessProfileStore";
import OperatingHoursSelector from "./openingHourSelector";

const formSchema = z.object({
  services: z.string().min(1, "Add services offered"),
  about: z.string().min(1, "Input business description"),
  esthablishedYear: z.string().min(4, "Select the start year"),
  operatingHours: z
    .record(
      z.string(),
      z.object({
        open: z.string().min(1),
        close: z.string().min(1),
        selected: z.literal(true),
      })
    )
    .refine((val) => Object.keys(val).length > 0, {
      message: "Select at least one day",
    }),
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
  const updateData = useBusinessStore((state) => state.updateData);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) =>
    String(currentYear - i)
  );

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateData(values);
    setSteps(3);
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4 h-[70vh] scrollbar-hide overflow-y-scroll"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter text-sm text-[#110F10]">
                Services Offered<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Add services (comma separated)"
                    className={`font-inter rounded-sm py-3 text-sm border-[0.4px] ${
                      errors.services
                        ? "border-red-500"
                        : field.value
                        ? "border-main"
                        : "border-[#6C696A]"
                    } placeholder:text-[#6C696A]`}
                  />
                  <IoCheckmarkCircle
                    size={20}
                    className={`absolute right-2 top-2 ${
                      field.value && !errors.services
                        ? "text-main"
                        : "text-[#B5B4B4]"
                    }`}
                  />
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
              <FormLabel className="font-inter text-sm text-[#110F10]">
                Business Description<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    {...field}
                    placeholder="Enter business description"
                    className={`font-inter rounded-sm py-3 text-sm border-[0.4px] ${
                      errors.about
                        ? "border-red-500"
                        : field.value
                        ? "border-main"
                        : "border-[#6C696A]"
                    } placeholder:text-[#6C696A]`}
                  />
                  <IoCheckmarkCircle
                    size={20}
                    className={`absolute right-2 top-2 ${
                      field.value && !errors.about
                        ? "text-main"
                        : "text-[#B5B4B4]"
                    }`}
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
              <FormLabel className="font-inter text-sm text-[#110F10]">
                Select a start year<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`font-inter w-full rounded-sm py-3 text-sm border-[0.4px] ${
                      errors.esthablishedYear
                        ? "border-red-500"
                        : field.value
                        ? "border-main"
                        : "border-[#6C696A]"
                    }`}
                  >
                    <SelectValue placeholder="Choose year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
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

        <FormField
          control={control}
          name="operatingHours"
          render={() => (
            <FormItem>
              <FormLabel className="font-inter text-sm">
                Business Hours<span className="text-main">*</span>
              </FormLabel>
              <FormControl>
                <OperatingHoursSelector
                  onChange={(val: any) =>
                    form.setValue("operatingHours", val, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={!isValid}
          className={`${
            isValid ? "bg-main" : "bg-inactive pointer-events-none"
          } w-full text-white py-2 mt-5 text-sm cursor-pointer font-inter font-semibold rounded-2xl`}
        >
          Continue
        </button>
      </form>
    </Form>
  );
};

export default StepTwo;
