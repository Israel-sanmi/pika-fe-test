"use client";
import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoServer } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Image from "next/image";

const logos = [
  { src: "/images/logo-jumia.svg", alt: "Jumia Nigeria" },
  { src: "/images/logo-konga.svg", alt: "Konga" },
  { src: "/images/logo-interswitch.svg", alt: "Interswitch" },
  { src: "/images/logo-flutterwave.svg", alt: "Flutterwave" },
  { src: "/images/logo-andela.svg", alt: "Andela" },
  { src: "/images/logo-paystack.svg", alt: "Paystack" },
];

const advisors = [
  {
    name: "Dr. Omobola Johnson",
    img: "/images/advisor-1.jpg",
    role: "Former Minister of ICT, Nigeria",
    title: "Tech Policy Expert",
  },
  {
    name: "Jason Njoku",
    img: "/images/advisor-2.jpg",
    role: "CEO, iROKO Partners",
    title: "Serial Entrepreneur",
  },
  {
    name: "Kola Aina",
    img: "/images/advisor-3.jpg",
    role: "Founder, Ventures Platform",
    title: "Venture Capital Expert",
  },
];

const securityBadges = [
  { icon: IoServer, text: "99.9% Uptime" },
  { icon: FaLock, text: "GDPR Compliant" },
];

const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-white">
      <div className="container mx-auto px-6 space-y-24">
        <div className="text-center">
          <h3 className="text-2xl font-poppins md:text-3xl font-bold text-gray-900 mb-12">
            Trusted by Leading Nigerian Businesses
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition"
              >
                <Image
                  width={100}
                  height={100}
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[120px] max-h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-poppins md:text-3xl font-bold text-center text-gray-900 mb-12">
            Advisory Board
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  width={100}
                  height={100}
                  src={advisor.img}
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-orange-500"
                />
                <div>
                  <h4 className="text-lg font-poppins font-semibold text-gray-900 mb-1">
                    {advisor.name}
                  </h4>
                  <p className="text-gray-600 font-inter text-sm mb-1">{advisor.role}</p>
                  <p className="text-gray-600 font-inter text-sm">{advisor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {securityBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex font-inter items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg text-gray-700 font-medium"
            >
              <badge.icon className="w-5 h-5 text-green-500" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
