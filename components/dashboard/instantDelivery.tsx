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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MdMyLocation } from "react-icons/md";
import { LuFlagTriangleRight } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import { BsTelephone, BsPlusSquareFill } from "react-icons/bs";

const formSchema = z.object({
  pickup: z.string().min(1, "Enter pickup location"),
  destination: z.string().min(1, "Enter delivery destination"),
  receiverName: z.string().min(1, "Enter receiver name"),
  receiverNumber: z
    .string()
    .min(1, "Enter receiver number")
    .regex(/^[0-9]{10,15}$/, "Enter a valid phone number"),
  packageCategory: z.string().min(1, "Select package category"),
  numberOfItems: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), {
      message: "Must be a number",
    }),
  prodSearch: z.string().optional(),
});

const packageCategories = [
  "Documents",
  "Electronics",
  "Clothing",
  "Food & Beverages",
  "Fragile Items",
  "Others",
];

const InstantDelivery = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      pickup: "",
      destination: "",
      receiverName: "",
      receiverNumber: "",
      packageCategory: "",
      numberOfItems: "",
      prodSearch: "",
    },
  });

  const {
    control,
    watch,
    formState: { isValid },
  } = form;

  const pickupCheck = watch("pickup");
  const destinationCheck = watch("destination");
  const receiverNameCheck = watch("receiverName");
  const receiverNumberCheck = watch("receiverNumber");
  const packageCategoryCheck = watch("packageCategory");
  const numberOfItemsCheck = watch("numberOfItems");
  const prodSearchCheck = watch("prodSearch");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="rounded-sm p-2 bg-white w-full h-screen overflow-y-auto scrollbar-hide">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="pickup"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Your pickup location"
                      className={`font-inter bg-[#FAFAFA] indent-8 font-normal rounded-sm py-2 text-sm ${
                        pickupCheck ? "border-[#161126]" : "border-0"
                      } placeholder:text-[#6C696A]`}
                    />
                    <MdMyLocation
                      className={`${
                        pickupCheck ? "text-[#161126]" : "text-[#918F8F]"
                      } absolute left-2 top-2`}
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Destination"
                      className={`font-inter bg-[#FAFAFA] indent-8 font-normal rounded-sm py-2 text-sm ${
                        destinationCheck ? "border-[#161126]" : "border-0"
                      } placeholder:text-[#6C696A]`}
                    />
                    <LuFlagTriangleRight
                      className={`${
                        destinationCheck ? "text-[#161126]" : "text-[#918F8F]"
                      } absolute left-2 top-2`}
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="receiverName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Receiver's name"
                      className={`font-inter bg-[#FAFAFA] indent-8 font-normal rounded-sm py-2 text-sm ${
                        receiverNameCheck ? "border-[#161126]" : "border-0"
                      } placeholder:text-[#6C696A]`}
                    />
                    <RiUserLine
                      className={`${
                        receiverNameCheck ? "text-[#161126]" : "text-[#918F8F]"
                      } absolute left-2 top-2`}
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="receiverNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Receiver's number"
                      className={`font-inter bg-[#FAFAFA] indent-8 font-normal rounded-sm py-2 text-sm ${
                        receiverNumberCheck ? "border-[#161126]" : "border-0"
                      } placeholder:text-[#6C696A]`}
                    />
                    <BsTelephone
                      className={`${
                        receiverNumberCheck
                          ? "text-[#161126]"
                          : "text-[#918F8F]"
                      } absolute left-2 top-2`}
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={control}
              name="packageCategory"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className={`font-inter w-full bg-[#FAFAFA] rounded-sm py-2 text-sm ${
                          packageCategoryCheck ? "border-[#161126]" : "border-0"
                        }`}
                      >
                        <SelectValue placeholder="Package category" />
                      </SelectTrigger>
                      <SelectContent>
                        {packageCategories.map((item) => (
                          <SelectItem className="font-inter" key={item} value={item}>
                            {item}
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
              name="numberOfItems"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="No. of items"
                      className={`font-inter w-full bg-[#FAFAFA] rounded-sm py-2 text-sm ${
                        numberOfItemsCheck ? "border-[#161126]" : "border-0"
                      } placeholder:text-[#6C696A]`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="prodSearch"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Search product"
                      className={`font-inter bg-[#FAFAFA] rounded-sm py-2 text-sm ${
                        prodSearchCheck ? "border-[#161126]" : "border-0"
                      } placeholder:text-[#6C696A]`}
                    />
                    <BsPlusSquareFill
                      className={`${
                        prodSearchCheck ? "text-[#161126]" : "text-[#918F8F]"
                      } absolute right-2 top-2 cursor-pointer`}
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <div className="w-full rounded-sm min-h-[232px] bg-[#FAFAFA]" />

        
          <button
            type="submit"
            disabled={!isValid}
            className={`${
              isValid ? "bg-main" : "bg-inactive pointer-events-none"
            } w-full text-white py-2 text-sm flex justify-center items-center font-inter font-semibold rounded-2xl`}
          >
            Confirm
          </button>
        </form>
      </Form>
    </div>
  );
};

export default InstantDelivery;
