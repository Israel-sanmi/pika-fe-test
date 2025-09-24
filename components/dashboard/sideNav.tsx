"use client";
import React, { useState } from "react";
import Image from "next/image";
import pikaLogo from "@/public/images/pika-logo.png";

import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaWallet, FaUsersCog } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi2";
import { IoLogOutSharp, IoCheckmarkCircle } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { useDashboard } from "@/app/dashboard/useDasboard";
import { FiMenu } from "react-icons/fi";
import { Skeleton } from "../ui/skeleton";
import { IoCloseSharp } from "react-icons/io5";
import MobileNav from "./mobileNav";

const SideNav = ({ children }: React.PropsWithChildren) => {
  const navLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      navLogo: TbLayoutDashboardFilled,
    },
    {
      name: "Wallet",
      link: "/wallet",
      navLogo: FaWallet,
    },
    {
      name: "Inventory",
      link: "/inventory",
      navLogo: MdInventory,
    },
    {
      name: "Customer Management",
      link: "/customer-management",
      navLogo: FaUsersCog,
    },
    {
      name: "Ecommerce",
      link: "/ecommerce",
      navLogo: HiShoppingCart,
    },
  ];

  const pathName = usePathname();
  const router = useRouter();

  const { getProfileDetails } = useDashboard();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    router.push("/login");
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex">
      <div className="bg-[#FFFFFF] z-10 w-[300px] scrollbar-hide p-1 sm:p-3 hidden md:flex flex-col justify-between h-screen overflow-y-scroll">
        <div className="flex flex-col gap-5">
          <Image
            alt="pika-logo"
            src={pikaLogo}
            className="w-[80px] sm:mx-0 mx-auto"
          />
          <div>
            {navLinks.map((nav) => {
              const isActive = pathName.startsWith(nav.link);
              return (
                <Link
                  key={nav.link}
                  href={nav.link}
                  className={`flex items-center gap-0.5 sm:gap-1.5 ${
                    isActive ? "text-white bg-main" : "text-[#918F8F]"
                  } font-poppins font-medium hover:bg-main hover:text-white p-2 transition-colors ease-in-out text-xs sm:text-sm rounded-xs my-3`}
                >
                  <nav.navLogo className="flex-none" /> {nav.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="font-poppins">
            {getProfileDetails.isPending ? (
              <div className="flex sm:flex-row flex-col items-center space-x-1">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[220px]" />
                </div>
              </div>
            ) : (
              <div className="flex sm:flex-row flex-col items-center space-x-1">
                {getProfileDetails?.data?.image_url ? (
                  <Image
                    src={getProfileDetails?.data?.image_url}
                    alt={getProfileDetails.data.image_url!}
                    width={100}
                    height={100}
                    className="h-8 w-8 rounded-full object-contain"
                  />
                ) : (
                  <Skeleton className="h-8 flex-none w-8 rounded-full" />
                )}
                <div>
                  <p className="font-poppins text-sm flex items-center gap-1">
                    {getProfileDetails?.data?.fullName}{" "}
                    {getProfileDetails?.data?.isVerified ? (
                      <IoCheckmarkCircle className="text-green-600 text-xs sm:text-sm" />
                    ) : (
                      ""
                    )}
                  </p>
                  <p className="font-poppins text-[10px] sm:text-xs text-main">
                    {getProfileDetails?.data?.email}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={handleLogout}
            className="flex items-center gap-0.5 sm:gap-1.5 text-[#918F8F] font-poppins font-medium cursor-pointer hover:bg-main hover:text-white p-2 text-sm transition-colors ease-in-out rounded-xs my-3"
          >
            <IoLogOutSharp /> Log out
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpenModal((prev) => !prev)}
        className="md:hidden z-[99] bg-main flex justify-center items-center rounded-full w-6 h-6 cursor-pointer absolute top-3 left-3"
      >
        {openModal ? (
          <IoCloseSharp className="text-white" />
        ) : (
          <FiMenu className="text-white" />
        )}
      </div>
      {openModal && (
        <MobileNav
          navLinks={navLinks}
          getProfileDetails={getProfileDetails}
          handleLogout={handleLogout}
        />
      )}
      <div className="bg-[#FAFAFA] h-screen overflow-y-scroll scrollbar-hide w-full p-2">
        {children}
      </div>
    </div>
  );
};

export default SideNav;
