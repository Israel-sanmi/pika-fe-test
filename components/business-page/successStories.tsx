"use client";

import Image from "next/image";
import React from "react";
import { FaShippingFast, FaChartLine } from "react-icons/fa";

const SuccessStories: React.FC = () => {
  return (
    <div
      id="testimonials"
      className="bg-white rounded-3xl p-6 sm:p-16 my-20 relative z-10 shadow-[0_25px_80px_rgba(0,0,0,0.1)]"
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-poppins font-bold text-slate-800 mb-4">
          Real Success Stories from Nigerian Business Owners
        </h3>
        <p className="text-lg font-inter text-slate-500">
          See how Pika transformed businesses like yours
        </p>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 sm:p-12 border-2 border-[#f15b341a] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F15B34] via-amber-400 to-emerald-500 rounded-t-2xl" />

          <div className="flex md:flex-row flex-col justify-between items-start mb-8 relative z-10">
            <div className="flex md:flex-row flex-col items-center gap-4">
              <Image
                width={100}
                height={100}
                src=""
                alt="Adebayo's Electronics"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h4 className="text-xl font-poppins font-semibold text-slate-800 mb-1">
                  Adebayo&apos;s Electronics
                </h4>
                <span className="block font-inter text-sm text-slate-500 mb-2">
                  Consumer Electronics • Lagos
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                  <span className="text-emerald-500 font-inter text-xs sm:text-sm font-semibold">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:text-right text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-poppins font-bold text-emerald-500">
                  +68%
                </span>
                <span className="text-sm font-inter font-semibold text-slate-500">
                  Revenue
                </span>
              </div>
            </div>
          </div>

          <div className="relative font-inter z-10">
            <blockquote className="text-lg italic leading-relaxed text-slate-700 mb-8 relative">
              <span className="text-[#F15B34] text-6xl absolute -left-8 -top-6 font-serif">
                "
              </span>
              Pika transformed my electronics business completely. I used to
              lose customers to delivery delays, but now with 99% on-time
              delivery, my customers are my biggest marketers. Sales increased
              by 68% in just 6 months!
            </blockquote>

            <div className="flex gap-4 sm:gap-8 flex-wrap">
              <div className="flex font-inter items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 text-emerald-600 font-semibold text-sm">
                <FaShippingFast className=" text-sm flex-none sm:text-xl" />
                <span className="text-sm sm:text-xl">From 60% to 99% on-time delivery</span>
              </div>
              <div className="flex font-inter items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 text-emerald-600 font-semibold text-sm">
                <FaChartLine className=" text-sm flex-none sm:text-xl" />
                <span className="text-sm sm:text-xl">68% revenue increase in 6 months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
