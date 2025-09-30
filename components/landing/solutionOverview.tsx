"use client";
import React, { useEffect } from "react";
import { FaBrain } from "react-icons/fa";
import ProductNodes from "./productNodes";

const SolutionOverview = () => {
  useEffect(() => {
    const productNodes =
      document.querySelectorAll<HTMLElement>(".product-node");
    const brainCore = document.querySelector<HTMLElement>(".brain-core");

    productNodes.forEach((node) => {
      node.addEventListener("mouseenter", () => {
        node.classList.add("hovered");

        if (brainCore) {
          const rect = node.getBoundingClientRect();
          const brainRect = brainCore.getBoundingClientRect();
          const offsetX = rect.left + rect.width / 2 - window.innerWidth / 2;
          const offsetY = rect.top + rect.height / 2 - window.innerHeight / 2;

          brainCore.style.transform = `translate(calc(-50% + ${
            offsetX * 0.2
          }px), calc(-50% + ${offsetY * 0.2}px)) scale(1.1)`;
        }
      });

      node.addEventListener("mouseleave", () => {
        node.classList.remove("hovered");

        if (brainCore) {
          brainCore.style.transform = "translate(-50%, -50%) scale(1)";
        }
      });
    });
  }, []);

  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-poppins md:text-4xl font-bold text-gray-900 mb-4">
            Meet Pika: Your Complete AI-Powered Logistics Command Center
          </h2>
          <p className="text-lg font-inter text-gray-600">
            One ecosystem. Six powerful products. Infinite possibilities.
          </p>
        </div>

        <ProductNodes/>
      </div>

      <style jsx>{`
        .product-node.hovered {
          border-color: #f15b34; 
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default SolutionOverview;
