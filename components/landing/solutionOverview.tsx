"use client";
import React, { useEffect } from "react";
import { FaBrain } from "react-icons/fa";

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

        <div className="relative max-w-4xl mx-auto p-16 min-h-[500px]">
          <div className="absolute top-1/2 left-1/2 z-10 brain-core transition-transform duration-300">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-main to-blue-500 text-white flex flex-col items-center justify-center font-bold shadow-[0_0_50px_rgba(241,91,52,0.4)] animate-pulse">
              <FaBrain className="text-3xl mb-1" />
              <span className="text-sm font-inter">AI Engine</span>
            </div>
          </div>

          <div className="relative w-full h-[500px]">
            {[
              {
                product: "business",
                label: "Pika for Business",
                icon: "💼",
                pos: "top-5 left-5",
              },
              {
                product: "box2door",
                label: "Box2Door",
                icon: "📦",
                pos: "top-5 right-5",
              },
              {
                product: "routely",
                label: "Routely",
                icon: "🛣️",
                pos: "bottom-5 left-5",
              },
              {
                product: "warehouse",
                label: "Pika Warehouse",
                icon: "🏭",
                pos: "bottom-5 right-5",
              },
              {
                product: "fleet",
                label: "Pika Fleet",
                icon: "🚚",
                pos: "top-1/2 right-[-20px] -translate-y-1/2",
              },
              {
                product: "insights",
                label: "Pika Insights",
                icon: "📊",
                pos: "top-1/2 left-[-20px] -translate-y-1/2",
              },
            ].map((node) => (
              <div
                key={node.product}
                className={`product-node absolute ${node.pos} w-36 h-24 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center shadow-md transition-all duration-300 cursor-pointer`}
                data-product={node.product}
              >
                <div className="text-2xl mb-1">{node.icon}</div>
                <div className="text-sm font-inter font-medium text-gray-700 text-center">
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
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
