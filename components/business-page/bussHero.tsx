"use client";
import React from "react";
import { FaStore, FaRocket, FaEye } from "react-icons/fa";

const BusinessHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[70px]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,theme(colors.gray.200)_1px,transparent_0)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-main/5 via-blue-500/5 to-white/80" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 py-16">
        <div className="max-w-xl">
          <div className="flex items-center justify-center md:justify-normal gap-2 text-main font-medium mb-6">
            <FaStore className="text-lg" />
            <span className="font-inter text-sm">For Nigerian Businesses</span>
          </div>

          <h1 className="text-5xl text-center md:text-left font-poppins md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Stop Losing Customers,{" "}
            <span className="bg-gradient-to-r from-main to-blue-500 bg-clip-text text-transparent">
              Gain More Instead
            </span>
          </h1>

          <p className="text-base text-center md:text-left font-inter text-gray-600 mb-8 leading-relaxed">
            Our optimized business suite manages your business and sorts your
            delivery needs – so you can focus on what matters: growing your
            customer base and increasing profits.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { number: "85%", text: "Customer Retention Increase" },
              { number: "3x", text: "Faster Order Processing" },
              { number: "60%", text: "Time Savings Daily" },
            ].map((stat) => (
              <div key={stat.number} className="flex flex-col">
                <span className="text-2xl font-poppins md:text-3xl font-bold text-main">
                  {stat.number}
                </span>
                <span className="text-xs font-inter text-gray-600">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex md:flex-row flex-col gap-4 mb-10">
            <a
              href="#signup"
              className="flex md:justify-normal justify-center font-inter text-sm items-center gap-2 px-6 py-3 bg-main text-white font-medium rounded-lg shadow hover:bg-main/90 transition"
            >
              <FaRocket /> Start for Free – No Credit Card
            </a>
            <a
              href="business-dashboard.html"
              className="flex md:justify-normal justify-center items-center font-inter text-sm gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              <FaEye /> See Live Dashboard
            </a>
          </div>

          <div>
            <p className="text-gray-500 font-inter text-xs mb-3">
              Trusted by 500+ Nigerian businesses
            </p>
            <div className="flex font-inter text-sm flex-wrap gap-4 text-gray-700">
              <span>🏪 Retailers</span>
              <span>🏭 Manufacturers</span>
              <span>🛒 E-commerce</span>
              <span>🍕 Restaurants</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-poppins font-medium text-gray-600">
                  Pika Business Dashboard
                </span>
                <span className="flex items-center gap-1 text-xs text-red-500 font-semibold">
                  <span className="w-2 h-2 font-inter bg-red-500 rounded-full animate-ping"></span>
                  Live
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-sm font-poppins font-medium text-gray-700 mb-2">
                  Revenue Today
                </h3>
                <p className="text-xl font-poppins font-bold text-gray-900">
                  ₦345,000
                </p>
                <p className="text-sm font-inter text-gray-500">
                  vs ₦292,000 yesterday
                </p>
              </div>

              <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-sm font-poppins font-medium text-gray-700 mb-2">
                  Active Orders
                </h3>
                <p className="text-xl font-bold font-poppins text-gray-900">
                  28
                </p>
                <p className="text-sm font-poppins  text-gray-500">
                  3 pending delivery
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-main h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
