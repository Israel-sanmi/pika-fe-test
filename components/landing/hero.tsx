"use client";
import React from "react";
import { FaRocket, FaPlay } from "react-icons/fa";

const HeroScrn = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[70px] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-blue-500/5 to-white/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl text-center md:text-left font-poppins md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Transforming Logistics with{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Intelligence
              </span>
            </h1>
            <p className="md:text-xl text-center md:text-left text-base font-inter text-gray-600 mb-10 leading-relaxed">
              From fragmented chaos to seamless operations. Pika's comprehensive
              ecosystem connects every piece of Nigeria's logistics puzzle
              through advanced AI and automation.
            </p>

            <div className="flex flex-col md:flex-row font-inter flex-wrap gap-4 mb-12">
              <a
                href="#products"
                className="flex items-center capitalize justify-center gap-2 px-6 py-3 rounded-md bg-main text-white font-medium hover:bg-main/90 transition"
              >
                <FaRocket />
                explore our solutions
              </a>
              {/* <a
                href="#demo"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                <FaPlay /> Watch Demo
              </a> */}
            </div>

            <div className="flex flex-col md:flex-row font-inter flex-wrap gap-12">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-main">600+</span>
                <span className="text-xs text-gray-500">Early Adopters</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-main">200+</span>
                <span className="text-xs text-gray-500">
                  Logistics Partners
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🧠</span>
                <span className="text-xs text-gray-500 text-center">
                  AI-Powered Optimization
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row font-inter justify-center items-center">
            <div className="w-full max-w-md">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-6 rounded-xl bg-white shadow-lg">
                  <h3 className=" text-base sm:text-lg font-semibold mb-6">
                    Before Pika
                  </h3>
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)] mx-auto" />
                      <div className="w-10 h-10 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.3)] mx-auto" />
                      <div className="w-10 h-10 rounded-full bg-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)] mx-auto" />
                      <div className="w-10 h-10 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.3)] mx-auto" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Fragmented & Chaotic
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white shadow-lg">
                  <h3 className=" text-base sm:text-lg font-semibold mb-6">
                    After Pika
                  </h3>
                  <div className="relative flex justify-center items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_30px_rgba(241,91,52,0.4)] animate-pulse">
                      AI
                    </div>
                    <div className="absolute w-28 h-28">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse" />
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm pt-4">
                    Connected & Optimized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScrn;
