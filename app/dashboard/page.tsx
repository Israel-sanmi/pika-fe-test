"use client";
import { DashChart } from "@/components/dashboard/dashChart";
import DeliveryHistory from "@/components/dashboard/deliveryHistory";
import InstantDelivery from "@/components/dashboard/instantDelivery";
import ScheduleDelivery from "@/components/dashboard/scheduleDelivery";
import SideNav from "@/components/dashboard/sideNav";
import TrackDelivery from "@/components/dashboard/trackDelivery";
import { useUser } from "@/hooks/sign-up/useUserData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { useDashboard } from "./useDasboard";
import { StatCard } from "@/components/dashboard/statsCard";
import { transformTrends } from "@/utils/dateTransform";
import { Loader2 } from "lucide-react";

type ScreenType = "instant" | "schedule" | "track" | "delivery";

const Dashboard = () => {
  const [type, setType] = useState<"delivery" | "transactions">("delivery");
  const [screenType, setScreenType] = useState<ScreenType>("instant");

  const { user } = useUser();
  const { getDashDetails } = useDashboard();
  const router = useRouter();

  const cardTypes: { title: string; para: string; showPage: ScreenType }[] = [
    {
      title: "Instant Delivery",
      para: "Send packages from inventory",
      showPage: "instant",
    },
    {
      title: "Schedule delivery",
      para: "Set a time to send packages",
      showPage: "schedule",
    },
    {
      title: "Track delivery",
      para: "Monitor your package in real-time",
      showPage: "track",
    },
    {
      title: "Delivery history",
      para: "Check for your history",
      showPage: "delivery",
    },
  ];

  return (
    <SideNav>
      {user?.profileComplete === false && (
        <div className="flex items-center justify-between border border-main p-1 rounded-sm mb-3">
          <p className="font-poppins font-medium text-main text-xs">
            Your business profile is incomplete!
          </p>
          <button
            onClick={() => router.push("/business-profile")}
            className="p-1.5 text-white font-inter text-xs bg-main border border-main rounded-sm cursor-pointer"
          >
            Complete now
          </button>
        </div>
      )}
      <div className="flex lg:flex-row flex-col gap-2">
        <div className="gap-2 w-full flex flex-col ">
          <div className="flex md:flex-row flex-col items-center gap-2">
            <StatCard
              title="Number of deliveries"
              weeklyValue={getDashDetails?.data?.weeklyDeliveries ?? 0}
              monthlyValue={getDashDetails?.data?.monthlyDeliveries ?? 0}
              isLoading={getDashDetails?.isPending}
            />

            <StatCard
              title="Number of subscriptions"
              weeklyValue={getDashDetails?.data?.weeklySubscriptions ?? 0}
              monthlyValue={getDashDetails?.data?.monthlySubscriptions ?? 0}
              isLoading={getDashDetails?.isPending}
            />
          </div>

          <div className="rounded-sm p-1 border border-[#433374] ">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center justify-between font-poppins w-1/2 rounded-sm border border-[#2D224D] p-0.5 text-sm *:mx-auto *:py-2 *:cursor-pointer">
                <p
                  onClick={() => setType("delivery")}
                  className={`${
                    type === "delivery"
                      ? "bg-[#2D224D] text-white"
                      : "text-[#2D224D] bg-white"
                  }  w-full flex justify-center items-center rounded-sm`}
                >
                  Delivery
                </p>
                <p
                  onClick={() => setType("transactions")}
                  className={`${
                    type === "transactions"
                      ? "bg-[#2D224D] text-white"
                      : "text-[#2D224D] bg-white"
                  }  w-full flex justify-center items-center rounded-sm`}
                >
                  Transactions
                </p>
              </div>
              {/* <div className="flex items-center gap-2">
                <button className="text-sm font-inter bg-[#2D224D] w-full px-3 py-2 cursor-pointer font-medium text-white rounded-sm ">
                  Weekly
                </button>
                <button className="text-sm font-inter bg-white border border-[#2D224D] w-full px-3 py-2 cursor-pointer font-medium text-[#2D224D] rounded-sm ">
                  Monthly
                </button>
              </div> */}
            </div>
            <div className="mt-5">
              {getDashDetails?.isPending ? (
                <div className="w-full flex my-5 justify-center items-center ">
                  <Loader2 size={20} className="text-main animate-spin" />
                </div>
              ) : (
                <DashChart
                  data={
                    type === "delivery"
                      ? transformTrends(
                          getDashDetails?.data?.deliveryTrends ?? {}
                        )
                      : transformTrends(
                          getDashDetails?.data?.transactionTrends ?? {}
                        )
                  }
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {cardTypes.map((card, index) => {
              return (
                <div
                  onClick={() => setScreenType(card.showPage as ScreenType)}
                  key={index}
                  className={` ${
                    card.showPage === screenType
                      ? "bg-main text-white"
                      : "text-main bg-white border border-main"
                  }   rounded-sm p-3 cursor-pointer`}
                >
                  <div className="flex justify-end">
                    <BsArrowUpRightCircle size={64} />
                  </div>
                  <h1 className="text-2xl font-medium font-poppins">
                    {card.title}
                  </h1>
                  <p className="font-medium text-sm font-inter">{card.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        {screenType === "instant" && <InstantDelivery />}
        {screenType === "schedule" && <ScheduleDelivery />}
        {screenType === "track" && <TrackDelivery />}
        {screenType === "delivery" && <DeliveryHistory />}
      </div>
    </SideNav>
  );
};

export default Dashboard;
