"use client";

import { useState } from "react";
import {
  FaExclamationTriangle,
  FaClock,
  FaClipboardList,
  FaUsersSlash,
  FaRocket,
  FaShippingFast,
  FaRobot,
  FaChartLine,
  FaHeart,
  FaTrophy,
  FaMagic,
  FaStar,
} from "react-icons/fa";

import { BiLineChartDown } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";

const TransformationShowcase = () => {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <div className="relative z-10 bg-gray-900 rounded-sm shadow-[0_25px_80px_rgba(0,0,0,0.3)] p-6 sm:p-12 my-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-poppins font-bold text-white mb-4">
          See The Complete Transformation
        </h3>
        <p className="text-white font-inter mb-6">
          Watch how Pika transforms your business operations
        </p>
        <div className="inline-flex font-inter text-sm bg-white rounded-full p-1">
          <button
            onClick={() => setView("before")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              view === "before"
                ? "bg-gradient-to-r from-[#F15B34] to-orange-500 text-white shadow-md"
                : "text-slate-500"
            }`}
          >
            Before Pika
          </button>
          <button
            onClick={() => setView("after")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              view === "after"
                ? "bg-gradient-to-r from-[#F15B34] to-orange-500 text-white shadow-md"
                : "text-slate-500"
            }`}
          >
            After Pika
          </button>
        </div>
      </div>

      <div className="relative ">
        <div
          className={` inset-0 transition-all duration-500 ${
            view === "before"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12 pointer-events-none"
          }`}
        >
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-4xl shadow-[0_15px_40px_rgba(239,68,68,0.4)] animate-pulse mx-auto mb-6">
              <FaExclamationTriangle />
            </div>
            <h4 className="text-2xl font-poppins font-bold text-white mb-2">
              Struggling Business Operations
            </h4>
            <p className="text-white font-inter">
              The daily challenges every Nigerian business owner faces
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <FaClock className="text-red-500" />,
                title: "Delivery Delays",
                desc: "Customers complaining about late deliveries",
                width: "w-[80%]",
                label: "High Impact",
              },
              {
                icon: <FaClipboardList className="text-red-500" />,
                title: "Manual Processes",
                desc: "Hours wasted on paperwork and manual tracking",
                width: "w-[90%]",
                label: "Very High Impact",
              },
              {
                icon: <BiLineChartDown className="text-red-500" />,
                title: "Lost Revenue",
                desc: "Missing sales opportunities daily",
                width: "w-[75%]",
                label: "High Impact",
              },
              {
                icon: <FaUsersSlash className="text-red-500" />,
                title: "Customer Churn",
                desc: "Customers switching to competitors",
                width: "w-[85%]",
                label: "Very High Impact",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-red-100 to-white border-2 border-red-100 rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-14 h-14 flex border border-red-500 items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h5 className="text-lg font-poppins font-semibold text-black mb-2">
                  {item.title}
                </h5>
                <p className="text-slate-500 font-inter mb-4">{item.desc}</p>
                <div className="relative w-full h-2 bg-slate-100 rounded">
                  <div
                    className={`absolute top-0 left-0 h-2 rounded bg-gradient-to-r from-red-500 to-red-700 ${item.width}`}
                  />
                  <span className="absolute text-xs right-0 font-inter -top-6  font-semibold text-slate-500">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-500 ${
            view === "after"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12 pointer-events-none"
          }`}
        >
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-4xl shadow-[0_15px_40px_rgba(16,185,129,0.4)] animate-pulse mx-auto mb-6">
              <FaRocket />
            </div>
            <h4 className="text-2xl font-bold font-poppins text-white mb-2">
              Thriving Business Operations
            </h4>
            <p className="text-slate-500 font-inter">
              Your business after implementing Pika&apos;s complete suite
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <FaShippingFast className="text-green-500" />,
                title: "99% On-Time Delivery",
                desc: "Real-time tracking keeps customers happy",
                badge: { icon: <FaTrophy />, text: "Industry Leading" },
              },
              {
                icon: <FaRobot className="text-green-500" />,
                title: "Automated Everything",
                desc: "AI handles routine tasks automatically",
                badge: { icon: <FaMagic />, text: "AI Powered" },
              },
              {
                icon: <FaChartLine className="text-green-500" />,
                title: "45% Revenue Growth",
                desc: "Better operations drive more sales",
                badge: { icon: <IoMdTrendingUp />, text: "Proven Results" },
              },
              {
                icon: <FaHeart className="text-green-500" />,
                title: "92% Customer Satisfaction",
                desc: "Happy customers become loyal advocates",
                badge: { icon: <FaStar />, text: "Customer Favorite" },
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-emerald-100 to-white border-2 border-emerald-100 rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-14 h-14 flex items-center border border-emerald-500 justify-center rounded-full mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h5 className="text-lg font-poppins font-semibold text-black mb-2">
                  {item.title}
                </h5>
                <p className="text-slate-500 font-inter mb-4">{item.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white bg-gradient-to-r from-emerald-500 to-emerald-700 text-xs font-semibold">
                  {item.badge.icon}
                  <span className="font-inter text-xs">{item.badge.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationShowcase;
