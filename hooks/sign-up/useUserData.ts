"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

type User = {
  uid: string;
  email: string;
  fullName: string;
  phone: string;
  userType: string;
  imageUrl?: string;
  accountType?: string;
  profileComplete?: boolean;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("❌ Failed to parse user from cookies:", error);
        setUser(null);
      }
    }
  }, []);

  const updateUser = (newUser: User) => {
    Cookies.set("user", JSON.stringify(newUser), { secure: true });
    setUser(newUser);
  };

  const clearUser = () => {
    Cookies.remove("user");
    setUser(null);
  };

  return { user, updateUser, clearUser };
}
