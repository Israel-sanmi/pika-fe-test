"use client";
import React, { useState } from "react";
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
import { BsTelephone } from "react-icons/bs";
import { getLatLngFromAddress } from "@/utils/getLatandLong";
import Cookies from "js-cookie";
import { useDashboard } from "@/app/dashboard/useDasboard";
import { useUser } from "@/hooks/sign-up/useUserData";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// 🔹 Validation schema
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

  const { getTripDetail, createDeliveryRequest, getProfileDetails } =
    useDashboard();
  const { user } = useUser();

  // 🔹 Pickup & destination states
  const [pickupSuggestion, setPickupSuggestion] = useState<string | null>(null);
  const [pickupCoords, setPickupCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [pickupConfirmed, setPickupConfirmed] = useState(false);

  const [destSuggestion, setDestSuggestion] = useState<string | null>(null);
  const [destCoords, setDestCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [destConfirmed, setDestConfirmed] = useState(false);

  // 🔹 Transport modes
  const [transportModes, setTransportModes] = useState<
    { name: string; available: boolean }[]
  >([]);
  const [selectedMode, setSelectedMode] = useState<string>("");

  // 🔹 Product states
  const [products, setProducts] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<number[]>([]);

  const addProduct = (name: string, qty: number) => {
    setProducts((prev) => [...prev, name]);
    setQuantities((prev) => [...prev, qty]);
  };

  const handleTripDetails = () => {
    getTripDetail.mutate(undefined, {
      onSuccess: (data) => {
        const availableModes = Object.entries(data.data.pickupTransportModes)
          .filter(([_, value]: any) => value.available)
          .map(([key]) => ({ name: key, available: true }));

        setTransportModes(availableModes);
      },
      onError: (err) => {
        console.error("Error fetching trip details:", err);
      },
    });
  };

  const pickupCheck = watch("pickup");
  const destinationCheck = watch("destination");
  const receiverNameCheck = watch("receiverName");
  const receiverNumberCheck = watch("receiverNumber");
  const packageCategoryCheck = watch("packageCategory");
  const numberOfItemsCheck = watch("numberOfItems");
  const prodSearchCheck = watch("prodSearch");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!pickupConfirmed || !destConfirmed) {
      toast.error(
        "Please confirm both pickup and destination before submitting."
      );
      return;
    }

    if (pickupCoords && destCoords) {
      createDeliveryRequest.mutate({
        businessName: getProfileDetails.data.name,
        businessEmail: getProfileDetails.data.businessEmail,
        businessPhone: `+${getProfileDetails.data.businessPhone}`,
        pickupCoords,
        destCoords,
        transportMode: selectedMode,
        transport_mode: selectedMode,
        productName: products.join(", "),
        quantity: quantities,
        category: values.packageCategory,
        pickupAddress: pickupSuggestion,
        receiverAddress: destSuggestion,
        receiverName: values.receiverName,
        receiverPhone: values.receiverNumber,
        senderName: getProfileDetails.data.name,
        senderPhone: `+${getProfileDetails.data.businessPhone}`,
        senderEmail: getProfileDetails.data.businessEmail,
        isBusiness: true,
        uid: user?.uid,
        senderToken: null,
        senderUID: user?.uid,
      });
    } else {
      toast.error("Pickup or destination are missing coordinates.");
    }
  };

  return (
    <div className="rounded-lg p-4 bg-white w-full">
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Pickup Address */}
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
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
                        onBlur={async () => {
                          const result = await getLatLngFromAddress(
                            field.value
                          );
                          if (result) {
                            setPickupSuggestion(result.formatted);
                            setPickupCoords(result.coords);
                            setPickupConfirmed(false);
                          }
                        }}
                        className={`font-inter bg-white indent-4 py-2 text-sm ${
                          pickupCheck ? "border-[#161126]" : "border-0"
                        }`}
                      />
                      <MdMyLocation
                        className={`${
                          pickupCheck ? "text-[#161126]" : "text-gray-400"
                        } absolute left-2 top-2`}
                        size={20}
                      />
                    </div>
                  </FormControl>
                  {pickupSuggestion && !pickupConfirmed && (
                    <div className="mt-2 text-xs font-inter text-gray-700 bg-gray-100 p-2 rounded border">
                      <p>Did you mean:</p>
                      <p className="font-medium">{pickupSuggestion}</p>
                      <button
                        type="button"
                        onClick={() => {
                          if (pickupCoords) {
                            Cookies.set(
                              "pickup_coords",
                              JSON.stringify(pickupCoords)
                            );
                            setPickupConfirmed(true);
                            if (destConfirmed && destCoords)
                              handleTripDetails();
                          }
                        }}
                        className="mt-2 px-2 py-1 text-xs bg-main text-white rounded hover:bg-main/90"
                      >
                        Use this location
                      </button>
                    </div>
                  )}
                  {pickupConfirmed && (
                    <p className="text-xs font-inter text-green-600 mt-1">
                      ✅ Pickup confirmed: {pickupSuggestion}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Destination */}
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
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
                        onBlur={async () => {
                          const result = await getLatLngFromAddress(
                            field.value
                          );
                          if (result) {
                            setDestSuggestion(result.formatted);
                            setDestCoords(result.coords);
                            setDestConfirmed(false);
                          }
                        }}
                        className={`font-inter bg-white indent-4 py-2 text-sm ${
                          destinationCheck ? "border-[#161126]" : "border-0"
                        }`}
                      />
                      <LuFlagTriangleRight
                        className={`${
                          destinationCheck ? "text-[#161126]" : "text-gray-400"
                        } absolute left-2 top-2`}
                        size={20}
                      />
                    </div>
                  </FormControl>
                  {destSuggestion && !destConfirmed && (
                    <div className="mt-2 text-xs font-inter text-gray-700 bg-gray-100 p-2 rounded border">
                      <p>Did you mean:</p>
                      <p className="font-medium">{destSuggestion}</p>
                      <button
                        type="button"
                        onClick={() => {
                          if (destCoords) {
                            Cookies.set(
                              "destination_coords",
                              JSON.stringify(destCoords)
                            );
                            setDestConfirmed(true);
                            if (pickupConfirmed && pickupCoords)
                              handleTripDetails();
                          }
                        }}
                        className="mt-2 px-2 py-1 text-xs bg-main text-white rounded hover:bg-main/90"
                      >
                        Use this location
                      </button>
                    </div>
                  )}
                  {destConfirmed && (
                    <p className="text-xs font-inter text-green-600 mt-1">
                      ✅ Destination confirmed: {destSuggestion}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Vehicle Mode */}
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={(value) => setSelectedMode(value)}
                  value={selectedMode}
                  disabled={!transportModes.length}
                >
                  <SelectTrigger className="font-inter w-full bg-white rounded-sm py-2 text-sm disabled:opacity-50">
                    <SelectValue placeholder="Select Transport Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    {transportModes.map((mode) => (
                      <SelectItem
                        className="font-inter"
                        key={mode.name}
                        value={mode.name.toLowerCase()}
                      >
                        {mode.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Receiver Info */}
          <div className="bg-gray-50 p-3 rounded-md shadow-sm space-y-3">
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
                        className="font-inter bg-white indent-4 py-2 text-sm"
                      />
                      <RiUserLine
                        className="absolute left-2 top-2 text-gray-400"
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
                        className="font-inter bg-white indent-4 py-2 text-sm"
                      />
                      <BsTelephone
                        className="absolute left-2 top-2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Package Category */}
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
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
                      <SelectTrigger className="font-inter w-full bg-white py-2 text-sm">
                        <SelectValue placeholder="Package category" />
                      </SelectTrigger>
                      <SelectContent>
                        {packageCategories.map((item) => (
                          <SelectItem key={item} value={item}>
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
          </div>

          {/* Products */}
          <div className="bg-gray-50 p-3 rounded-md shadow-sm space-y-2">
            <p className="font-semibold font-poppins text-sm">Add Products</p>
            <div className="flex gap-2">
              <Input
                placeholder="Product name"
                value={prodSearchCheck}
                onChange={(e) => form.setValue("prodSearch", e.target.value)}
                className="flex-1 font-inter"
              />
              <Input
                placeholder="Qty"
                type="number"
                value={numberOfItemsCheck}
                onChange={(e) => form.setValue("numberOfItems", e.target.value)}
                className="w-20 font-inter"
              />
              <button
                type="button"
                onClick={() => {
                  if (prodSearchCheck && numberOfItemsCheck) {
                    addProduct(prodSearchCheck, Number(numberOfItemsCheck));
                    form.setValue("prodSearch", "");
                    form.setValue("numberOfItems", "");
                  }
                }}
                className="bg-main text-sm font-inter text-white px-3 rounded hover:bg-main/90"
              >
                Add
              </button>
            </div>

            {products.length > 0 && (
              <ul className="list-disc pl-5 text-sm space-y-1">
                {products.map((p, i) => (
                  <li
                    key={i}
                    className="flex font-inter justify-between items-center"
                  >
                    <span>
                      {p}({quantities[i]})
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setProducts((prev) =>
                          prev.filter((_, idx) => idx !== i)
                        );
                        setQuantities((prev) =>
                          prev.filter((_, idx) => idx !== i)
                        );
                      }}
                      className="text-red-500 hover:text-red-700 text-xs"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 font-inter text-sm font-semibold rounded-lg transition 
              ${
                isValid
                  ? "bg-main text-white hover:bg-main/90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {createDeliveryRequest.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Confirm Delivery"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default InstantDelivery;
