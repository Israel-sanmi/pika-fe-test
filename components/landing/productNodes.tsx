"use client";

import { FaBrain } from "react-icons/fa";

export default function ProductNodes() {
  const nodes = [
    {
      product: "business",
      label: "Pika for Business",
      icon: "💼",
      pos: "top-4 left-4",
    },
    {
      product: "box2door",
      label: "Box2Door",
      icon: "📦",
      pos: "top-4 right-4",
    },
    {
      product: "routely",
      label: "Routely",
      icon: "🛣️",
      pos: "bottom-4 left-4",
    },
    {
      product: "warehouse",
      label: "Pika Warehouse",
      icon: "🏭",
      pos: "bottom-4 right-4",
    },
    {
      product: "fleet",
      label: "Pika Fleet",
      icon: "🚚",
      pos: "top-1/2 right-[-16px] -translate-y-1/2",
    },
    {
      product: "insights",
      label: "Pika Insights",
      icon: "📊",
      pos: "top-1/2 left-[-16px] -translate-y-1/2",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 sm:p-16 min-h-[400px] sm:min-h-[500px]">
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300">
        <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-main to-blue-500 text-white flex flex-col items-center justify-center font-bold shadow-[0_0_40px_rgba(241,91,52,0.4)] animate-pulse">
          <FaBrain className="text-xl sm:text-2xl lg:text-3xl mb-1" />
          <span className="text-xs sm:text-sm font-inter">AI Engine</span>
        </div>
      </div>

      <div className="relative w-full h-[400px] sm:h-[500px]">
        {nodes.map((node) => (
          <div
            key={node.product}
            className={`product-node absolute ${node.pos} w-28 h-20 sm:w-32 sm:h-24 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center shadow-md transition-all duration-300 cursor-pointer hover:border-main`}
            data-product={node.product}
          >
            <div className="text-lg sm:text-2xl mb-1">{node.icon}</div>
            <div className="text-xs sm:text-sm font-inter font-medium text-gray-700 text-center">
              {node.label}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .product-node.hovered {
          border-color: #f15b34;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
