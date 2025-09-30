"use client";
import React from "react";

const products = [
  {
    product: "business",
    icon: "💼",
    title: "Pika for Business",
    subtitle: "Business Operations Reimagined",
    description:
      "AI-driven business management suite that transforms how retailers, SMEs, and enterprises handle logistics operations",
    features: [
      "Smart inventory management",
      "Automated workflows",
      "Real-time tracking",
      "API integrations",
    ],
    targets: ["Retailers", "SMEs", "E-commerce", "Manufacturers"],
  },
  {
    product: "box2door",
    icon: "📦",
    title: "Box2Door",
    subtitle: "Consumer Connection Revolution",
    description:
      "Seamless consumer platform connecting customers with businesses through intelligent delivery matching",
    features: [
      "Real-time tracking",
      "Business discovery",
      "Instant ordering",
      "Smart notifications",
    ],
    targets: ["Consumers", "Online Shoppers", "Professionals"],
  },
  {
    product: "routely",
    icon: "🛣️",
    title: "Routely",
    subtitle: "Smart Route Intelligence for Every Vehicle",
    description:
      "AI-powered route optimization for bikes, trucks, and vans with earnings maximization algorithms",
    features: [
      "Route optimization",
      "Earnings tracking",
      "Vehicle-specific routing",
      "Performance analytics",
    ],
    targets: ["Bike Riders", "Truck Drivers", "Delivery Pros"],
  },
  {
    product: "warehouse",
    icon: "🏭",
    title: "Pika Warehouse",
    subtitle: "Intelligent Warehouse Orchestration",
    description:
      "AI-driven inventory management and fulfillment optimization for maximum efficiency",
    features: [
      "Smart inventory tracking",
      "Automated routing",
      "Predictive analytics",
      "Full integration",
    ],
    targets: ["3PL Providers", "Distribution", "Fulfillment"],
  },
  {
    product: "fleet",
    icon: "🚛",
    title: "Pika Fleet",
    subtitle: "Fleet Operations Perfected",
    description:
      "Comprehensive fleet management with AI-powered optimization and predictive maintenance",
    features: [
      "Vehicle tracking",
      "Maintenance scheduling",
      "Route planning",
      "Performance optimization",
    ],
    targets: ["Logistics Companies", "Transport Operators", "Corporate Fleets"],
  },
  {
    product: "address",
    icon: "📍",
    title: "Pika Address",
    subtitle: "Localized Addressing & Geocoding System",
    description:
      "Precise address standardization and GPS-based location services for enhanced logistics coordination",
    features: [
      "Accurate address standardization",
      "GPS-based location services",
      "Route optimization support",
      "Geocoding & mapping",
    ],
    targets: ["Logistics Companies", "Delivery Services", "Field Services"],
  },
];

const ProductsShowcase: React.FC = () => {
  return (
    <section className="products-showcase py-24 bg-gray-50" id="products">
      <div className="container mx-auto px-6">
        
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-title text-3xl font-poppins md:text-4xl font-bold text-gray-900 mb-4">
            Six Powerful Products. One Intelligent Ecosystem.
          </h2>
          <p className="section-subtitle text-lg font-inter text-gray-600">
            Each product is designed to solve specific logistics challenges while working seamlessly together
          </p>
        </div>

        
        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((p) => (
            <div
              key={p.product}
              className="product-card relative bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-main"
              data-product={p.product}
            >
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-main to-main-dark scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

              
              <div className="product-header flex items-start gap-4 mb-6">
                <div className="product-icon text-4xl">{p.icon}</div>
                <div className="product-title">
                  <h3 className="text-xl font-semibold text-gray-900 font-poppins">{p.title}</h3>
                  <p className="text-sm text-main font-medium font-inter">{p.subtitle}</p>
                </div>
              </div>

              
              <div className="product-description mb-4">
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{p.description}</p>
              </div>

              
              <div className="product-features mb-4">
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex font-inter items-center gap-2">
                      <span className="text-main">✔</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div className="product-targets flex flex-wrap gap-2 mb-4">
                {p.targets.map((t, i) => (
                  <span
                    key={i}
                    className="target-badge font-inter px-2 py-1 bg-main text-white rounded-md text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              
              <div className="product-cta flex gap-4 items-center">
                <a href="#trial" className="btn btn-outline px-2 py-1 font-inter border border-main text-main rounded-sm text-sm hover:bg-main hover:text-white transition">
                  Try Free
                </a>
                <a href="#demo" className="btn btn-link text-sm text-main underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta text-center">
          <a
            href="#trial"
            className="btn btn-main-lg font-poppins bg-main text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Try All Products Free
          </a>
          <p className="cta-note font-inter text-sm text-gray-500 mt-4">
            30-day free trial • No credit card required • Full access
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;

