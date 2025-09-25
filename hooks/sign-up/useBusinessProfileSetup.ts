import { useMutation } from "@tanstack/react-query";
import { useBusinessStore } from "@/store/businessProfileStore";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { toast } from "sonner";
import { useGeolocation } from "./geoLocation";
import { apis } from "@/utils/apis";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { createAxiosInstance } from "@/lib/axios";

// interface BusinessProfilePayload {
//   name?: string;
//   phone?: string;
//   address?: string;
//   filename?: File;
//   longitude?: number;
//   latitude?: number;
//   website?: string;
//   about?: string;
//   businessType?: string;
//   esthablishedYear?: string;
//   businessEmail?: string;
//   businessPhone?: string;
//   services?: string[];
//   businessHours?: string[];
// }

// interface BusinessDocsPayload {
//   businessDoc: FileList;
//   KYC: FileList;
//   documentTypes: string[];
// }

// export const useBusinessProfileSetup = () => {
//   const { data, resetData } = useBusinessStore();
//   const { latitude, longitude } = useGeolocation();
//   const router = useRouter();
//   const axios = createAxiosInstance();

//   const businessProfileSetup = useMutation<BusinessProfilePayload, Error, void>(
//     {
//       mutationKey: ["businessProfileSetup"],
//       mutationFn: async () => {
//         const services = data.services
//           ?.split(",")
//           .map((s) => s.trim())
//           .filter((s) => s.length > 0);

//         const businessHours = Object.entries(data.operatingHours || {}).map(
//           ([day, { open, close }]) => `${capitalize(day)}: ${open} - ${close}`
//         );

//         const formData = new FormData();
//         formData.append("name", data.businessName || "");
//         formData.append("phone", data.phone || "");
//         formData.append("address", data.businessAddress || "");
//         formData.append("longitude", longitude?.toString() || "");
//         formData.append("latitude", latitude?.toString() || "");
//         formData.append("website", data.website || "");
//         formData.append("about", data.about || "");
//         formData.append("businessType", data.businessType || "");
//         formData.append("esthablishedYear", data.esthablishedYear || "");
//         formData.append("businessEmail", data.businessEmail || "");
//         formData.append("businessPhone", data.businessPhone || "");

//         services?.forEach((s) => formData.append("services[]", s));
//         businessHours?.forEach((h) => formData.append("businessHours[]", h));

//         if (data.businessLogo && data.businessLogo[0]) {
//           formData.append("filename", data.businessLogo[0]);
//         }

//         const res = await axios.put(apis.auth.businessProfile, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${Cookies.get("accessToken")}`,
//           },
//         });

//         return res.data;
//       },
//       onSuccess: () => {
//         toast.success("Business profile setup successful ✅");
//         resetData();
//       },
//       onError: (err: any) => toast.error(` ${getErrorMessage(err)}`),
//     }
//   );

//   function capitalize(word: string) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }

//   const businessProfileDocs = useMutation({
//     mutationKey: ["businessProfileDocs"],
//     mutationFn: async (formValues: BusinessDocsPayload) => {
//       const formData = new FormData();

//       if (formValues.documentTypes?.length > 0) {
//         const joined = formValues.documentTypes.join(",");
//         console.log("Appending documentTypes:", joined);
//         formData.append("documentTypes", joined);
//       }

//       if (formValues.KYC?.length > 0) {
//         formData.append("cac", formValues.KYC[0]);
//       }

//       if (formValues.businessDoc?.length > 0) {
//         formData.append("id", formValues.businessDoc[0]);
//       }

//       const res = await axios.post(apis.auth.uploadMultipleDocs, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${Cookies.get("accessToken")}`,
//         },
//       });

//       return res.data;
//     },

//     onSuccess: () => {
//       toast.success("Document uploaded successfully!");
//       router.push("/dashboard");
//     },
//     onError: (err: any) => toast.error(err?.message || "Upload failed"),
//   });

//   return { businessProfileSetup, businessProfileDocs };
// };

export const useBusinessProfileSetup = () => {
  const { data, resetData } = useBusinessStore();
  const { latitude, longitude } = useGeolocation();
  const router = useRouter();
  const axios = createAxiosInstance();

  const submitAll = useMutation({
    mutationKey: ["businessProfileFullSetup"],
    mutationFn: async () => {
      const services = data.services
        ?.split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const businessHours = Object.entries(data.operatingHours || {}).map(
        ([day, { open, close }]) => `${capitalize(day)}: ${open} - ${close}`
      );

      const profileForm = new FormData();
      profileForm.append("name", data.businessName || "");
      profileForm.append("phone", data.phone || "");
      profileForm.append("address", data.businessAddress || "");
      profileForm.append("longitude", longitude?.toString() || "");
      profileForm.append("latitude", latitude?.toString() || "");
      profileForm.append("website", data.website || "");
      profileForm.append("about", data.about || "");
      profileForm.append("businessType", data.businessType || "");
      profileForm.append("esthablishedYear", data.esthablishedYear || "");
      profileForm.append("businessEmail", data.businessEmail || "");
      profileForm.append("businessPhone", data.businessPhone || "");

      services?.forEach((s) => profileForm.append("services[]", s));
      businessHours?.forEach((h) => profileForm.append("businessHours[]", h));

      if (data.businessLogo?.[0]) {
        profileForm.append("filename", data.businessLogo[0]);
      }

      await axios.put(apis.auth.businessProfile, profileForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      const docsForm = new FormData();

      if (data.documentType?.length) {
        docsForm.append("documentTypes", data.documentType.join(","));
      }

      if (data.KYC?.[0]) {
        docsForm.append("cac", data.KYC[0]);
      }

      if (data.businessDoc?.[0]) {
        docsForm.append("id", data.businessDoc[0]);
      }

      await axios.post(apis.auth.uploadMultipleDocs, docsForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });

      return true;
    },
    onSuccess: () => {
      toast.success("Business profile + documents uploaded successfully ✅");
      router.push("/dashboard");
      resetData();
    },
    onError: (err: any) => {
      toast.error(err?.message || "Upload failed");
    },
  });

  function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return { submitAll };
};
