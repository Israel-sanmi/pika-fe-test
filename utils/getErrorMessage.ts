import axios, { AxiosError } from "axios";

export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const apiMessage = error.response?.data?.message;

    switch (status) {
      case 400:
        return apiMessage || "Invalid request. Please check your input.";
      case 401:
        return apiMessage || "Unauthorized. Please log in again.";
      case 403:
        return apiMessage || "Forbidden. You don’t have permission.";
      case 404:
        return apiMessage || "Not found. Please try again.";
      case 409:
        return apiMessage || "Account already exists.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return apiMessage || error.message || "Unexpected error occurred.";
    }
  }
  
  if (error instanceof Error) {
    return error.message;
  }

  return "An unknown error occurred.";
};
