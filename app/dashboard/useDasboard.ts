"use client";

import { createAxiosInstance } from "@/lib/axios";
import { apis } from "@/utils/apis";
import { useQuery } from "@tanstack/react-query";

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

  return { getProfileDetails, getDashDetails };
};
