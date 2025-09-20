"use client";

import Image from "next/image";
import pikaLogo from "@/public/images/pika-logo.png";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-6 bg-white">
      <Image
        src={pikaLogo}
        alt="pika-logo"
        className="h-10 w-auto animate-pulse"
        priority
      />
      <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-[#E96A48] animate-[loading_1.2s_infinite]" />
      </div>
    </div>
  );
}
