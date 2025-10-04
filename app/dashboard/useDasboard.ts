"use client";

import { createAxiosInstance } from "@/lib/axios";
import { apis } from "@/utils/apis";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { toast } from "sonner";

export const useDashboard = () => {
  const api = createAxiosInstance();

  const getProfileDetails = useQuery({
    queryKey: ["getProfileDetails"],
    queryFn: async () => {
      const { data } = await api.get(apis.users.getProfile);
      return data.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const getDashDetails = useQuery({
    queryKey: ["getDashDetails"],
    queryFn: async () => {
      const { data } = await api.get(apis.general.dashboard);
      return data.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  // const getLongAndLat = useQuery({
  //   queryKey: ["getLatAndLong"],
  //   queryFn: async ()=>{

  //   },
  //   retry: 1
  // })

  const getTripDetail = useMutation({
    mutationKey: ["getTripDetails"],
    mutationFn: async () => {
      try {
        const pickup = Cookies.get("pickup_coords");
        const destination = Cookies.get("destination_coords");

        if (!pickup || !destination) {
          throw new Error(
            "Pickup or destination coordinates not found in cookies"
          );
        }

        const { lat: pickupLat, lng: pickupLng } = JSON.parse(pickup);
        const { lat: dropOffLat, lng: dropOffLng } = JSON.parse(destination);
        // const res = await api.post(`${apis.delivery.trip}`, {
        //   pickupLat,
        //   pickupLng,
        //   dropOffLat,
        //   dropOffLng,
        // });
        const res = await api.post(`${apis.delivery.trip}`, {
          pickupLat: 6.421161894827857,
          pickupLng: 3.493614760705535,
          dropOffLat: 6.574769540073209,
          dropOffLng: 3.562616483353971,
        });

        return res.data;
      } catch (err: any) {
        console.log(err);
      }
    },
  });

  const createDeliveryRequest = useMutation({
    mutationKey: ["createDeliveryRequest"],
    mutationFn: async (payload: {
      businessName: string;
      businessEmail: string;
      businessPhone: string;
      pickupCoords: { lat: number; lng: number };
      destCoords: { lat: number; lng: number };
      transportMode: string;
      productName: any;
      quantity: number[];
      category: string;
      pickupAddress: any;
      receiverAddress: any;
      receiverName: string;
      receiverPhone: string;
      receiverToken?: string | null;
      senderName: string;
      senderEmail: string;
      senderPhone: string;
      senderToken?: string | null;
      uid?: string;
      senderUID?: string;
      isBusiness: boolean;
      transport_mode: string;
    }) => {
      const res = await api.post(`${apis.delivery.create}`, {
        businessName: payload.businessName,
        businessEmail: payload.businessEmail,
        businessPhone: payload.businessPhone,
        pickupLocation: {
          latitude: payload.pickupCoords.lat,
          longitude: payload.pickupCoords.lng,
        },
        destinationLocation: {
          latitude: payload.destCoords.lat,
          longitude: payload.destCoords.lng,
        },
        transportMode: payload.transportMode,
        productName: payload.productName,
        quantity: payload.quantity,
        category: payload.category,
        pickupAddress: payload.pickupAddress,
        receiverAddress: payload.receiverAddress,
        receiverName: payload.receiverName,
        receiverPhone: payload.receiverPhone,
        receiverToken: payload.receiverToken,
        senderName: payload.senderName,
        senderEmail: payload.senderEmail,
        senderPhone: payload.senderPhone,
        senderToken: payload.senderToken,
        uid: payload.uid,
        senderUID: payload.senderUID,
        isBusiness: payload.isBusiness,
        transport_mode: payload.transport_mode,
      });

      return res.data;
    },
    onSuccess: () => {
      toast.success("Delivery created successfully!");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    getProfileDetails,
    getDashDetails,
    getTripDetail,
    createDeliveryRequest,
  };
};
