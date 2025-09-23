import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SignUpI {
  email?: string;
  password?: string;
  fullName?: string;
  phone?: string;
  userType?: string;
}

interface SignUpStore {
  data: SignUpI;
  updateSignUp: (values: Partial<SignUpI>) => void;
  resetSignUp: () => void;
}

export const useSignUpStore = create<SignUpStore>()(
  persist(
    (set) => ({
      data: {},
      updateSignUp: (values) =>
        set((state) => ({
          data: { ...state.data, ...values },
        })),
      resetSignUp: () => set({ data: {} }),
    }),
    {
      name: "sign-up-store", // key in sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
