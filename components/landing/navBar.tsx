"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import pikaLogo from "@/public/images/pika-logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed font-poppins top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-lg"
          : "bg-white/90 backdrop-blur-lg border-b border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] px-6">
        <div className="flex items-center gap-2 font-medium text-gray-900 text-xl">
          <Image src={pikaLogo} alt="Pika Logistics" width={55} height={55} />
          {/* <span>Pika</span> */}
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-8 absolute lg:static top-[70px] left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          {[
            "Home",
            "Solutions",
            "Products",
            "Results",
            "Pricing",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative  text-gray-700 hover:text-primary px-6 lg:px-0 py-3 lg:py-0"
            >
              {item}
              <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#demo"
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Watch Demo
          </a>
          <a
            href="#trial"
            className="px-4 py-2 text-sm font-medium text-white bg-main rounded-md hover:bg-main/90 transition"
          >
            Start Free Trial
          </a>
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

export default NavBar;
