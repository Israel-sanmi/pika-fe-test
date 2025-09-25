import { create } from "zustand";

interface OperatingHour {
  open: string;
  close: string;
}

interface BusinessData {
  businessName?: string;
  businessAddress?: string;
  phone?: string;
  website?: string;

  businessDoc?: FileList;
  KYC?: FileList;

  documentType?: string[];

  about?: string;
  businessType?: string;
  esthablishedYear?: string;

  businessLogo?: FileList;
  businessEmail?: string;
  businessPhone?: string;

  services?: string;
  operatingHours?: Record<string, OperatingHour>;
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
