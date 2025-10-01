"use client";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import pikaLogo from "@/public/images/pika-logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Image src={pikaLogo} width={100} height={100} alt="Pika for Business" className="w-20 h-auto" />
              <span className="font-poppins text-xs">Pika for Business</span>
            </div>
            <p className="text-gray-400 text-xs font-inter mb-6 leading-relaxed">
              Stop losing customers, gain more instead with our optimized
              business suite.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-full hover:bg-primary hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-full hover:bg-primary hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-full hover:bg-primary hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-full hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-full hover:bg-primary hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:col-span-3">
            <div>
              <h4 className="text-white mb-4 text-lg font-poppins">Features</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Inventory Management
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Customer Management
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Delivery Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    AI Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Business Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4 text-lg font-poppins">Business Types</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#retailers"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Retail Stores
                  </a>
                </li>
                <li>
                  <a
                    href="#ecommerce"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    E-commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#restaurants"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    href="#wholesale"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Wholesale
                  </a>
                </li>
                <li>
                  <a
                    href="#manufacturing"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Manufacturing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4 text-lg font-poppins">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#help"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#setup"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Setup Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#training"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Training Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Contact Support
                  </a>
                </li>
                <li>
                  <a
                    href="#status"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4 text-lg font-poppins">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="../index.html"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    About Pika
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#press"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 text-sm hover:text-white font-inter"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-inter text-sm">
              &copy; 2025 Pika Logistics. All rights reserved.
            </p>
            <div className="flex font-inter gap-6 flex-wrap text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-gray-300">
                Terms of Service
              </a>
              <a href="#security" className="text-gray-500 hover:text-gray-300">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
