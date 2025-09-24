import { baseUrl } from "@/utils/apis";
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

export function createAxiosInstance(): AxiosInstance {
  const api = axios.create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = Cookies.get("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = Cookies.get("refreshToken");
          if (!refreshToken) throw new Error("No refresh token available");

          const { data } = await axios.post(`${baseUrl}refresh-token`, {
            refreshToken,
          });

          const newAccessToken = data?.tokens?.accessToken;
          const newRefreshToken = data?.tokens?.refreshToken;

          if (!newAccessToken || !newRefreshToken) {
            throw new Error("Invalid refresh response");
          }

          Cookies.set("accessToken", newAccessToken);
          Cookies.set("refreshToken", newRefreshToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshErr) {
          console.error("Token refresh failed:", refreshErr);
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          window.location.href = "/login";
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
