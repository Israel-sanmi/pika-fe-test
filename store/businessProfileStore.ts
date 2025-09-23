import { create } from "zustand";

interface BusinessData {
  businessName?: string;
  businessAddress?: string;
  phone?: string;
  website?: string;

  businessDoc?: FileList;
  KYC?: FileList;
  //   BVN?: FileList;
  documentType?: string[];

  about?: string;
  businessType?: string;
  esthablishedYear?: string;

  //   services?: string;
  businessLogo?: FileList;
  businessEmail?: string;
  businessPhone?: string;
  
}

interface BusinessStore {
  data: BusinessData;
  updateData: (values: Partial<BusinessData>) => void;
  resetData: () => void;
}

export const useBusinessStore = create<BusinessStore>((set) => ({
  data: {},
  updateData: (values) =>
    set((state) => ({
      data: { ...state.data, ...values },
    })),
  resetData: () => set({ data: {} }),
}));
