"use client";
import Image from "next/image";
import React, { useState } from "react";

const ResultsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Pika transformed our logistics completely. We went from chaotic deliveries to smooth, predictable operations in just 3 months. Our customers love the real-time tracking!",
      img: "/images/testimonial-1.jpg",
      name: "Adebayo Ogundimu",
      role: "CEO, Lagos Fashion Hub",
    },
    {
      quote:
        "The AI routing feature saved us 40% on fuel costs. What impressed me most is how all the products work together seamlessly. It's like having a logistics expert on our team 24/7.",
      img: "/images/testimonial-2.jpg",
      name: "Fatima Abdullahi",
      role: "Operations Manager, Abuja Electronics",
    },
    {
      quote:
        "Before Pika, we were losing customers due to delivery delays. Now we have 99% on-time delivery and our customer satisfaction scores are through the roof!",
      img: "/images/testimonial-3.jpg",
      name: "Chinedu Okeke",
      role: "Founder, Port Harcourt Grocery",
    },
  ];

  const metrics = [
    {
      number: "45%",
      label: "Reduction in Delivery Times",
      desc: "AI-optimized routes and real-time tracking",
    },
    {
      number: "60%",
      label: "Increase in Operational Efficiency",
      desc: "Automated workflows and smart coordination",
    },
    {
      number: "35%",
      label: "Cost Savings for Businesses",
      desc: "Optimized operations and reduced waste",
    },
    {
      number: "₦500M+",
      label: "Transaction Volume Processed",
      desc: "Trusted by businesses across Nigeria",
    },
  ];

  return (
    <section id="results" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-4">
            Real Results. Real Impact. Real Growth.
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            See the measurable difference Pika makes for businesses across
            Nigeria
          </p>
        </div>

        <div className="grid gap-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 rounded-xl text-center shadow-lg border-2 border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-xl hover:border-orange-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-green-500" />
                <div className="text-4xl font-poppins font-extrabold text-orange-500 mb-2">
                  {m.number}
                </div>
                <div className="text-lg font-poppins font-semibold text-gray-900 mb-1">
                  {m.label}
                </div>
                <p className="text-sm font-inter text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative max-w-full  mx-auto overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="min-w-full bg-white p-10 rounded-xl shadow-xl flex flex-col gap-6"
                >
                  <div className="text-center">
                    <p className="text-xl font-inter italic text-gray-700 relative">
                      <span className="text-4xl text-orange-500 absolute -top-4 -left-6">
                        “
                      </span>
                      {t.quote}
                      <span className="text-4xl text-orange-500 absolute -bottom-8 -right-3">
                        ”
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      width={100}
                      height={100}
                      src={t.img}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-500"
                    />
                    <div>
                      <h4 className="text-gray-900 font-poppins font-semibold">{t.name}</h4>
                      <p className="text-gray-600 text-sm font-inter ">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-transform ${
                    activeSlide === idx
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-orange-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
