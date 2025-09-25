"use client";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type StatCardProps = {
  title: string;
  weeklyValue: number;
  monthlyValue: number;
  isLoading?: boolean;
};

export function StatCard({
  title,
  weeklyValue,
  monthlyValue,
  isLoading = false,
}: StatCardProps) {
  const [view, setView] = useState<"weekly" | "monthly">("weekly");

  const value = view === "weekly" ? weeklyValue : monthlyValue;

  return (
    <div className="border flex flex-col rounded-md justify-between border-[#433374] w-full h-[180px] p-2 shadow-sm bg-white">
      <p className="text-[#2D224D] text-center text-sm font-semibold font-poppins">
        {title}
      </p>

      {isLoading ? (
        <Skeleton className="h-12 w-24 mx-auto rounded-sm" />
      ) : (
        <p className="text-[#2D224D] font-bold text-4xl text-center font-poppins">
          {value} {view === "weekly" ? "/week" : "/month"}
        </p>
      )}

      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => setView("weekly")}
          disabled={isLoading}
          className={`text-sm cursor-pointer font-inter w-full p-2.5 rounded-sm font-medium transition ${
            view === "weekly"
              ? "bg-[#2D224D] text-white"
              : "bg-white border border-[#2D224D] text-[#2D224D]"
          } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Weekly
        </button>
        <button
          onClick={() => setView("monthly")}
          disabled={isLoading}
          className={`text-sm cursor-pointer font-inter w-full p-2.5 rounded-sm font-medium transition ${
            view === "monthly"
              ? "bg-[#2D224D] text-white"
              : "bg-white border border-[#2D224D] text-[#2D224D]"
          } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
