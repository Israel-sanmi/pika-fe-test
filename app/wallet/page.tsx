"use client";

import React, { useState } from "react";
import SideNav from "@/components/dashboard/sideNav";
import { IoWalletSharp } from "react-icons/io5";
import { WalletChart } from "@/components/wallet/walletChart";
import { WalletPieChart } from "@/components/wallet/walletPieChart";
import { LuPackage } from "react-icons/lu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Wallet = () => {
  const [trend, setTrend] = useState<"weekly" | "monthly">("weekly");
  const [amount, setAmount] = useState("");

  const data = [
    { date: "2025-09-25", value: 10 },
    { date: "2025-09-26", value: 22 },
    { date: "2025-09-27", value: 15 },
    { date: "2025-09-28", value: 30 },
    { date: "2025-09-29", value: 12 },
    { date: "2025-09-30", value: 18 },
    { date: "2025-10-01", value: 25 },
  ];

  const transactions = [
    { title: "Routely API", date: "15 Aug 2025", amount: "-₦ 2000.00" },
    { title: "Food Delivery", date: "16 Aug 2025", amount: "-₦ 4500.00" },
    { title: "Ride Payment", date: "17 Aug 2025", amount: "-₦ 1500.00" },
    { title: "Wallet Top-up", date: "18 Aug 2025", amount: "+₦ 5000.00" },
  ];

  return (
    <SideNav>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div className="col-span-1 lg:col-span-7 space-y-4">
          <div className="bg-white rounded-sm shadow-sm p-4">
            <p className="font-poppins text-xl text-[#2D224D]">
              Inventory sales
            </p>
            <h1 className="font-inter text-3xl mt-2 text-[#918F8F]">₦10,000</h1>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="flex text-[#782D1A] font-poppins cursor-pointer text-sm p-2 items-center gap-1 bg-[#FBD6CC] rounded-sm">
                <IoWalletSharp size={20} />
                Fund Wallet
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-poppins">
                  Fund your Wallet
                </DialogTitle>
                <DialogDescription className="font-inter text-xs">
                  Send funds from your delivery account
                </DialogDescription>
              </DialogHeader>

              <hr className="" />
              <div>
                <p className="font-poppins font-semibold">
                  Amount to be credited
                </p>
                <p className="font-inter text-xs text-[#918F8F]">
                  Amount to be sent to your wallet
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <p className="font-poppins absolute left-1.5 top-1.5 font-medium text-[#6C696A]">
                    NGN
                  </p>
                  <Input
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="font-inter indent-8"
                  />
                  <p className="font-poppins absolute right-1.5 top-1.5 font-medium text-[#6C696A]">
                    ₦
                  </p>
                </div>
                <Button
                  onClick={() => {
                    console.log("Funding with:", amount);
                    setAmount("");
                  }}
                  className="bg-main font-inter hover:bg-main/80 text-white"
                >
                  Confirm
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="rounded-sm border border-[#2D224D] p-2">
            <div className="flex items-center mb-5 justify-between">
              <h2 className="font-poppins text-sm text-[#2D224D]">
                Revenue trend
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTrend("weekly")}
                  className={`rounded-sm p-1.5 cursor-pointer ${
                    trend === "weekly"
                      ? "bg-[#433374] text-white"
                      : "bg-white text-[#433374] border-[#433374] border"
                  } font-inter text-xs`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setTrend("monthly")}
                  className={`rounded-sm p-1.5 cursor-pointer ${
                    trend === "monthly"
                      ? "bg-[#433374] text-white"
                      : "bg-white text-[#433374] border-[#433374] border"
                  } font-inter text-xs`}
                >
                  Monthly
                </button>
              </div>
            </div>
            <WalletChart data={data} />
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 space-y-4">
          <div className="bg-white rounded-sm shadow-sm p-4">
            <p className="font-poppins text-xl text-[#2D224D]">
              Delivery balance
            </p>
            <h1 className="font-inter text-3xl mt-2 text-[#918F8F]">₦0.00</h1>
          </div>

          <div className="bg-white rounded-sm shadow-sm p-4">
            <WalletPieChart />
            <div className="my-5 space-y-3 ">
              {transactions.map((tx, i) => (
                <div
                  key={i}
                  className="rounded-sm gap-1 flex justify-between bg-[#D5D0E6] px-5 py-2"
                >
                  <LuPackage size={40} className="text-white flex-none" />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-inter text-base text-[#2D224D]">
                      {tx.title}
                    </p>
                    <p className="text-xs text-[#2D224D] font-inter">
                      {tx.date}
                    </p>
                  </div>
                  <p className="font-poppins text-base text-[#2D224D] font-semibold">
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SideNav>
  );
};

export default Wallet;
