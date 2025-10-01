"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaEye,
  FaPhone,
  FaUsers,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FinalCTA = () => {
  const router = useRouter();
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-blue-900 text-white py-20 text-center"
    >
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:30px_30px] animate-[patternMove_20s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl font-poppins mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-sm sm:text-lg font-inter md:text-xl text-white/90">
            Join 500+ Nigerian businesses already using Pika to grow their
            customer base and increase profits
          </p>
          <div className="flex font-inter text-sm flex-wrap justify-center gap-2 sm:gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">
              <FaClock />
              <span>Setup in 10 minutes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">
              <FaShieldAlt />
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">
              <FaHeadset />
              <span>Nigerian phone support</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-6">
          <a
            onClick={() => router.push("/business-profile/signup")}
            className="inline-flex cursor-pointer font-inter text-sm items-center gap-2 bg-orange-600 hover:bg-orange-700 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            <FaRocket />
            Start for Free
          </a>

          <div className="flex font-inter text-sm flex-wrap justify-center gap-2 sm:gap-4">
            <a
              href="business-dashboard.html"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
            >
              <FaEye />
              View Live Dashboard
            </a>
            <a
              href="tel:+234-800-PIKA-BIZ"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
            >
              <FaPhone />
              Call: 0800-PIKA-BIZ
            </a>
          </div>
        </div>

        <div className="flex font-inter text-xs flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-2 text-white/90">
            <FaUsers />
            <span>500+ businesses trust us</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FaStar className="text-yellow-400" />
            <span>4.9/5 customer rating</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FaMapMarkerAlt />
            <span>Available across Nigeria</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes patternMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(30px) translateY(30px);
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
