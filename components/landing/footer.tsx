"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import pikaLogo from "@/public/images/pika-logo.png";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-12">
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Image
                width={55}
                height={55}
                src={pikaLogo}
                alt="Pika Logistics"
              />
            </div>
            <p className="text-gray-400 font-inter leading-relaxed">
              Intelligent Logistics. Seamless Operations. Unprecedented Growth.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition transform hover:-translate-y-1"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition transform hover:-translate-y-1"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition transform hover:-translate-y-1"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition transform hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-white font-poppins mb-4 font-semibold">
                Products
              </h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a
                    onClick={() => router.push("/business-profile")}
                    className="text-gray-400 cursor-pointer hover:text-white"
                  >
                    Pika for Business
                  </a>
                </li>
                <li>
                  <a
                    href="#box2door"
                    className="text-gray-400 hover:text-white"
                  >
                    Box2Door
                  </a>
                </li>
                <li>
                  <a href="#routely" className="text-gray-400 hover:text-white">
                    Routely
                  </a>
                </li>
                <li>
                  <a
                    href="#warehouse"
                    className="text-gray-400 hover:text-white"
                  >
                    Pika Warehouse
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="text-gray-400 hover:text-white">
                    Pika Fleet
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-poppins font-semibold">
                Solutions
              </h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a
                    href="#retailers"
                    className="text-gray-400 hover:text-white"
                  >
                    For Retailers
                  </a>
                </li>
                <li>
                  <a href="#smes" className="text-gray-400 hover:text-white">
                    For SMEs
                  </a>
                </li>
                <li>
                  <a
                    href="#enterprises"
                    className="text-gray-400 hover:text-white"
                  >
                    For Enterprises
                  </a>
                </li>
                <li>
                  <a href="#drivers" className="text-gray-400 hover:text-white">
                    For Drivers
                  </a>
                </li>
                <li>
                  <a
                    href="#consumers"
                    className="text-gray-400 hover:text-white"
                  >
                    For Consumers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-poppins font-semibold">
                Company
              </h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#news" className="text-gray-400 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#investors"
                    className="text-gray-400 hover:text-white"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-poppins mb-4 font-semibold">
                Support
              </h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a href="#help" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#documentation"
                    className="text-gray-400 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-gray-400 hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#status" className="text-gray-400 hover:text-white">
                    System Status
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="text-gray-400 hover:text-white"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-inter text-gray-500">
            &copy; 2025 Pika Logistics. All rights reserved.
          </p>
          <div className="flex font-inter gap-6 text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-500 hover:text-gray-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
