"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pikaLogo from "@/public/images/pika-logo.png";

const BusinessNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-lg"
          : "bg-white/90 border-b border-gray-200 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] px-6">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
          <Image
            src={pikaLogo}
            alt="Pika for Business"
            width={50}
            height={50}
          />
          <span className="font-inter text-xs">Pika for Business</span>
        </div>

        <div
          className={`absolute font-poppins lg:static top-[70px] left-0 w-full lg:w-auto flex flex-col lg:flex-row items-center gap-1 lg:gap-8 bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          {[
            { label: "Features", href: "#features" },
            { label: "Benefits", href: "#benefits" },
            { label: "Pricing", href: "#pricing" },
            { label: "Success Stories", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm text-gray-700 hover:text-main font-normal py-3 lg:py-0 group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0.5 w-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/business-profile/login"
            className="px-4 font-inter py-2 text-xs font-medium text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-100 transition"
          >
            Log In
          </Link>
          <Link
            href="/business-profile/signup"
            className="px-4 py-2 text-xs font-medium font-inter text-white bg-main rounded-sm hover:bg-main/90 transition"
          >
            Sign up
          </Link>
        </div>

        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-gray-700 transition-all ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-gray-700 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-gray-700 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNav;
