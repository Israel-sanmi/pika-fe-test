"use client";
import React from "react";

import pikaLogo from "@/public/images/pika-logo.png";
import pricingBg from "@/public/images/auth/pricingBG.png";
import { FaCircleCheck } from "react-icons/fa6";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const PricingPage = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      style={{
        backgroundImage: `url(${pricingBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "100% auto",
      }}
      className="bg-[#FADEEF61] w-full min-h-screen relative overflow-hidden"
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="flex items-center justify-between px-5 sm:px-10 py-10 sm:py-5"
        onClick={() => router.push("/")}
      >
        <Image
          priority
          src={pikaLogo}
          alt="pika-logo"
          className="w-[84px] h-[29px]"
        />
      </motion.nav>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className=" sm:px-0 px-3"
      >
        <h1 className="sm:text-3xl text-2xl font-poppins text-main text-center font-semibold ">
          Simplify Delivery. Streamline Inventory. Grow Your Business
        </h1>
        <p className="text-[#050505] text-sm sm:text-base font-inter py-3 text-center">
          One powerful platform to connect, manage, and deliver
        </p>
      </motion.div>

      <div className="px-5 flex md:flex-row flex-col md:gap-0 gap-2 items-center sm:px-10 my-10">
        <div className="border border-[#6C696A] flex flex-col gap-5 w-full bg-[#fadeefb5] p-5 rounded-[20px] md:rounded-none md:rounded-tl-[20px] md:rounded-bl-[20px] ">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-poppins font-medium text-xl text-[#110F10]">
              Free
            </h4>
            <p className="text-[#918F8F] text-sm font-inter font-medium ">
              Start small. Deliver smart
            </p>
            <h2 className="font-inter font-light text-sm text-[#918F8F]">
              <span className="font-medium text-xl text-[#110F10]">₦0</span>
              /month
            </h2>

            <div className="flex flex-col gap-1.5">
              {[
                "20 product Inventory",
                "20 Customers",
                "20 Customers connect",
              ].map((text, index) => {
                return (
                  <p
                    key={index}
                    className="flex items-center gap-1 font-poppins font-light text-sm text-[#231F20]"
                  >
                    <FaCircleCheck size={20} className="text-black" /> {text}
                  </p>
                );
              })}
            </div>
          </div>
          <button className="bg-black text-white flex-none hover:bg-[#fadeefb5] hover:text-black hover:border hover:border-black rounded-[16px] p-3.5 font-poppins cursor-pointer">
            Get started for free
          </button>
        </div>
        <div className="border border-black flex flex-col gap-5 w-full rounded-[20px] bg-black text-white p-5">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-poppins font-medium text-xl text-white">
              Enterprise
            </h4>
            <p className="text-[#B5B4B4] text-sm font-inter font-medium ">
              Scale without limits
            </p>
            <h2 className="font-inter font-light text-sm text-white">
              <span className="font-medium text-xl text-[#B5B4B4]">₦5000</span>
              /month
            </h2>

            <div className="flex flex-col gap-1.5">
              {[
                "Unlimited product Inventory",
                "Real-time package monitoring ",
                "API Access",
                "E-commerce store",
                "Custom url integration",
                "Unlimited vendor connection",
                "Unlimited customer connection",
              ].map((text, index) => {
                return (
                  <p
                    key={index}
                    className="flex items-center gap-1 font-poppins font-light text-sm text-[#B5B4B4]"
                  >
                    <FaCircleCheck size={20} className="text-white" /> {text}
                  </p>
                );
              })}
            </div>
          </div>
          <button className="bg-white text-black flex-none rounded-[16px] p-3.5 font-poppins cursor-not-allowed">
            Coming soon
          </button>
        </div>
        <div className="border border-[#6C696A] flex flex-col gap-5 w-full bg-[#fadeefb5] p-5 rounded-[20px] md:rounded-none md:rounded-tr-[20px] md:rounded-br-[20px]">
          <div className="flex flex-col gap-1.5">
            <h4 className="font-poppins font-medium text-xl text-[#110F10]">
              Retail
            </h4>
            <p className="text-[#918F8F] text-sm font-inter font-medium ">
              Start small. Deliver smart
            </p>
            <h2 className="font-inter font-light text-sm text-[#918F8F]">
              <span className="font-medium text-xl text-[#110F10]">₦5000</span>
              /month
            </h2>

            <div className="flex flex-col gap-1.5">
              {[
                "Unlimited Inventory",
                "Real-time monitoring",
                "Unlimited Connection",
                "Delivery Priority",
              ].map((text, index) => {
                return (
                  <p
                    key={index}
                    className="flex items-center gap-1 font-poppins font-light text-sm text-[#231F20]"
                  >
                    <FaCircleCheck size={20} className="text-black" /> {text}
                  </p>
                );
              })}
            </div>
          </div>
          <button className="bg-black text-white flex-none hover:bg-[#fadeefb5] hover:text-black hover:border hover:border-black rounded-[16px] p-3.5 font-poppins cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingPage;
