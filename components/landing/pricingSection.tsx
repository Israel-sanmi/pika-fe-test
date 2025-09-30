"use client";
import React from "react";

const plans = [
  {
    name: "Starter",
    price: "₦5,000",
    period: "/month",
    description: "Perfect for small retailers",
    features: [
      "Basic AI optimization",
      "Up to 100 orders/month",
      "2 product integrations",
      "Standard support",
    ],
    cta: { text: "Start Free Trial", href: "#trial", variant: "outline" },
  },
  {
    name: "Professional",
    price: "₦40,000",
    period: "/month",
    description: "Growing SMEs",
    features: [
      "Advanced AI optimization",
      "Up to 1,000 orders/month",
      "All 6 products included",
      "Priority support",
      "Custom integrations",
    ],
    cta: { text: "Start Free Trial", href: "#trial", variant: "primary" },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    description: "Large operations",
    features: [
      "Full AI suite",
      "Unlimited orders",
      "White-label options",
      "Dedicated support",
      "Custom development",
    ],
    cta: { text: "Contact Sales", href: "#contact", variant: "outline" },
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-4">
            Flexible Plans for Every Business Size
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Start small and scale as you grow. All plans include AI optimization
            and cross-product integration
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white border-2 rounded-2xl p-8 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-orange-500 scale-105"
                  : "border-gray-200 hover:border-orange-500"
              }`}
            >
              {plan.featured && (
                <div className="absolute font-poppins -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-md text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  {plan.price.startsWith("₦") ? (
                    <>
                      <span className="text-lg font-inter text-gray-600">₦</span>
                      <span className="text-4xl font-poppins font-extrabold text-orange-500">
                        {plan.price.replace("₦", "").replace("/month", "")}
                      </span>
                      {plan.period && (
                        <span className="text-lg font-inter text-gray-600">
                          {plan.period}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-xl font-inter font-bold text-orange-500">
                      {plan.price}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="text-left mb-8 space-y-3">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex font-inter items-center gap-2 text-gray-700">
                    <span className="text-main ">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={`inline-block px-6 py-3 font-poppins rounded-lg font-semibold transition ${
                  plan.cta.variant === "primary"
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                }`}
              >
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
{/* 
        <div className="text-center">
          <p className="text-gray-600 font-inter mb-4">
            All plans include AI optimization and cross-product integration
          </p>
          <a
            href="#pricing-details"
            className="text-orange-500 font-inter font-medium hover:underline"
          >
            View Detailed Pricing
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;

