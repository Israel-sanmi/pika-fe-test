"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { IoCheckmarkCircle, IoLogOutSharp } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

import pikaLogo from "@/public/images/pika-logo.png";

const MobileNav = ({ navLinks, getProfileDetails, handleLogout }: any) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="w-full z-10 animate-in bg-slate-800/40 absolute top-0 left-0">
      <div className="bg-[#FFFFFF] w-1/2 scrollbar-hide p-1 sm:p-3 md:hidden flex flex-col justify-between h-screen overflow-y-scroll">
        <div className="flex flex-col gap-5">
          <Image
            alt="pika-logo"
            src={pikaLogo}
            className="w-[80px] sm:mx-0 mx-auto"
          />
          <div>
            {navLinks.map((nav: any) => {
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
              <div className="flex items-center space-x-1">
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
    </div>
  );
};

export default MobileNav;
