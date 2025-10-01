"use client";
import React from "react";

import { FaRocket } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { PiTrayArrowDownFill } from "react-icons/pi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const FinalCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-main to-blue-900 text-white text-center"
    >
      
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:30px_30px] animate-[patternMove_20s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="space-y-10">
      
          <div className="space-y-6">
            <h2 className="text-3xl font-poppins md:text-4xl font-bold">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-lg font-inter md:text-xl max-w-2xl mx-auto text-white/90">
              Join hundreds of forward-thinking businesses already using Pika's
              AI-powered ecosystem
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href="#trial"
              className="inline-flex text-sm font-inter items-center gap-2 px-4 py-3 rounded-sm bg-white text-orange-600 font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaRocket className="w-5 h-5" />
              Join us today
            </a>
            {/* <div className="flex font-inter flex-wrap justify-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
              >
                <FaCalendar className="w-5 h-5" />
                Schedule a Demo
              </a>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
              >
                <PiTrayArrowDownFill className="w-5 h-5" />
                Download Case Study
              </a>
            </div> */}
          </div>

          {/* <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md">
              <IoShieldCheckmarkSharp className="w-5 h-5 text-green-400" />
              <span className="font-medium font-poppins text-sm">30-day money-back guarantee</span>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes patternMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
