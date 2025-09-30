"use client";
import React from "react";

const steps = [
  {
    icon: "🏪",
    title: "Business Creates Order",
    desc: "Order placed through Pika for Business with smart inventory sync",
  },
  {
    icon: "🏭",
    title: "Warehouse Processes",
    desc: "Pika Warehouse automatically optimizes picking and packing routes",
  },
  {
    icon: "🧠",
    title: "AI Optimizes Route",
    desc: "Routely calculates the most efficient delivery path considering all factors",
  },
  {
    icon: "🚛",
    title: "Driver Delivers",
    desc: "Pika Fleet coordinates with driver while Box2Door keeps customer updated",
  },
  {
    icon: "👤",
    title: "Consumer Receives",
    desc: "Customer gets their order with real-time tracking and notifications",
  },
  {
    icon: "📊",
    title: "Data Flows Back",
    desc: "AI learns from delivery data to optimize future operations",
  },
];

const IntegrationSection: React.FC = () => {
  return (
    <section id="integration" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-4">
            Everything Works Together. Intelligently.
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Watch how your order flows through our integrated ecosystem, with AI
            learning from every step
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center max-w-[250px] h-[300px] justify-center text-center p-6 bg-white rounded-xl shadow-md border-2 border-gray-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-orange-500">
                <div className="text-4xl mb-4 w-20 h-20 flex items-center justify-center rounded-full text-white shadow-lg bg-gradient-to-br from-orange-500 to-orange-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="sm:flex hidden items-center">
                  <div className="w-14 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 relative" />
                  <div className="w-0 h-0 border-l-[10px] border-l-blue-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent -ml-1" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-gradient-to-br from-main to-main-light rounded-2xl p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-white font-poppins text-2xl md:text-3xl font-semibold leading-relaxed mb-4">
              Stop losing customers, gain more instead with our optimized
              business suite that manages your business and sorts your delivery
              needs
            </h3>
            <p className="text-white/90 text-lg font-inter">
              Stop losing customers to delivery problems. Start delighting them
              with world-class delivery experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
