"use client";
import React from "react";
import {
  FaExclamationTriangle,
  FaClock,
  FaUsersSlash,
  FaChartLine,
} from "react-icons/fa";

const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Nigeria&apos;s Logistics Industry Is Dragging Businesses Down
          </h2>
          <p className="text-lg font-inter text-gray-600">
            Every day, Nigerian businesses lose money, customers, and
            opportunities because of logistics failures that shouldn&apos;t
            exist in 2025
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-main to-main/70 text-white text-3xl">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
              Businesses Lose Revenue Daily
            </h3>
            <p className="text-gray-600 leading-relaxed font-inter">
              Failed deliveries cost Nigerian SMEs an average of ₦180,000
              monthly in lost sales and customer compensation
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-main to-main/70 text-white text-3xl">
              <FaClock />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
              Time Wasted on Manual Tracking
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              Business owners spend 6+ hours daily managing deliveries,
              inventory, and logistics instead of growing their business
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-main to-main/70 text-white text-3xl">
              <FaUsersSlash />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
              Customers Walk Away Forever
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              73% of Nigerian customers never order again after a bad delivery
              experience - killing repeat business and referrals
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-main to-main/70 text-white text-3xl">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-3">
              Growth Gets Stunted
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              Scaling becomes impossible when logistics can&apos;t handle volume
              - limiting expansion to new cities and markets
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center px-10 py-8 rounded-xl border-2 border-main bg-white shadow-lg">
            <span className="text-5xl font-poppins font-extrabold text-main mb-2">
              87%
            </span>
            <span className="text-lg font-inter text-gray-600 max-w-xs">
              of Nigerian business owners say logistics problems keep them awake
              at night
            </span>
          </div>
        </div>

        {/* <div className="text-center">
          <a
            href="#solutions"
            className="inline-block font-inter px-8 py-4 rounded-md bg-main text-white font-medium hover:bg-main/90 transition"
          >
            See How Pika Fixes This
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProblemSection;

