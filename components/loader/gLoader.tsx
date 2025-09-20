"use client";

import { useNProgress } from "@tanem/react-nprogress";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import pikaLogo from "@/public/images/pika-logo.png";

function Loader({ progress, isFinished }: any) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center gap-6 bg-white transition-opacity duration-500 ${
        isFinished ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <Image
        src={pikaLogo}
        alt="pika-logo"
        className="h-10 w-auto animate-pulse"
        priority
      />

      {/* Progress bar */}
      <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ transform: `translateX(${(-1 + progress) * 100}%)` }}
          className="h-full bg-[#E96A48] transition-transform duration-300"
        />
      </div>
    </div>
  );
}

function Progress({ isAnimating }: { isAnimating: boolean }) {
  const { isFinished, progress } = useNProgress({ isAnimating });

  return <Loader progress={progress} isFinished={isFinished} />;
}

export default function RouteProgress() {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <Progress isAnimating={isAnimating} />;
}
