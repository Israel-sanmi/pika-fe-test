"use client";
import React from "react";
import {
  FaArrowUp,
  FaClock,
  FaStopwatch,
  FaChartLine,
  FaSmileBeam,
  FaStar,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";

import { TbCurrencyNaira } from "react-icons/tb";

const ResultsDashboard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 sm:p-12 my-20 relative z-10 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-poppins font-bold text-slate-800 mb-4">
          The Numbers That Matter to Your Business
        </h3>
        <p className="text-lg font-inter text-slate-500">
          Real metrics from Nigerian businesses using Pika
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-6 sm:p-12 flex md:flex-row flex-col  items-center gap-12 shadow-xl border border-orange-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-3xl">
                <TbCurrencyNaira />
                <div className="absolute -inset-2 rounded-full bg-emerald-500 opacity-40 animate-ping"></div>
              </div>
              <div className="flex items-end gap-1 h-10">
                {[60, 80, 100, 75, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-t bg-gradient-to-b from-emerald-500 to-emerald-700 animate-[grow_2s_ease-out]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-4xl text-center md:text-left font-poppins font-bold text-slate-800 mb-2">
                ₦180,000
              </div>
              <div className="text-lg text-center md:text-left font-inter font-semibold text-slate-500 mb-4">
                Average Monthly Savings
              </div>
              <div className="flex justify-center md:justify-normal font-poppins items-center gap-2 text-emerald-600 font-semibold mb-4">
                <FaArrowUp /> <span>+42% this quarter</span>
              </div>
              <p className="text-slate-500 text-center md:text-left font-inter leading-relaxed">
                Reduced operational costs through automation and AI optimization
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-12 flex md:flex-row flex-col  items-center gap-12 shadow-xl border border-orange-100 relative overflow-hidden">
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-800 text-white text-3xl">
                <FaClock />
                <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-spin-slow"></div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-red-500 font-poppins font-bold line-through">
                    12h
                  </span>
                  <FaArrowUp />
                  <span className="text-emerald-500 font-inter font-bold">
                    6h
                  </span>
                </div>
                <span className="text-slate-500 font-inter font-semibold">
                  Daily Operations
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-4xl text-center md:text-left font-poppins font-bold text-slate-800 mb-2">
                6 Hours
              </div>
              <div className="text-lg text-center md:text-left font-inter font-semibold text-slate-500 mb-4">
                Daily Time Savings
              </div>
              <div className="flex justify-center md:justify-normal items-center gap-2 font-inter text-emerald-600 font-semibold mb-4">
                <FaStopwatch /> <span>50% faster operations</span>
              </div>
              <p className="text-slate-500 text-center md:text-left font-inter leading-relaxed">
                More time to focus on customer relationships and business growth
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-8 flex items-center gap-6 shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-orange-400 text-white text-2xl">
              <FaChartLine />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                45%
              </div>
              <div className="text-xs font-semibold text-slate-500 font-inter">
                Revenue Increase
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded mt-1 relative">
                <div className="absolute -right-1 -top-1 border-l-4  border-t-4 border-emerald-600"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 flex items-center gap-6 shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white text-2xl">
              <FaSmileBeam />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                92%
              </div>
              <div className="text-xs font-semibold text-slate-500 font-inter">
                Customer Satisfaction
              </div>
              <div className="text-yellow-400 text-sm flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 flex items-center gap-6 shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white text-2xl">
              <FaTachometerAlt />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                3x
              </div>
              <div className="text-xs font-semibold text-slate-500 font-inter">
                Faster Processing
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded mt-1"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 flex items-center gap-6 shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-white text-2xl">
              <FaUsers />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                89%
              </div>
              <div className="text-xs font-semibold text-slate-500 font-inter">
                Customer Retention
              </div>
              <div className="w-10 h-10 border-4 border-slate-200 rounded-full border-t-cyan-500 border-r-cyan-500 border-b-cyan-500 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
