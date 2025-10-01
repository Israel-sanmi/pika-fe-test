// components/FeaturesSection.tsx
"use client";
import React, { JSX } from "react";
import {
  FaStar,
  FaChartLine,
  FaBoxes,
  FaRoute,
  FaWarehouse,
  FaTruck,
  FaChartBar,
  FaUsers,
  FaBell,
  FaSyncAlt,
  FaHandshake,
  FaFileInvoice,
  FaBrain,
  FaChartLine as FaChartLine2,
  FaEye,
  FaThumbsUp,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const coreFeatures = [
  {
    id: "inventory",
    number: "01",
    variant: "primary",
    icon: <FaBoxes />,
    title: "Smart Inventory Management",
    desc: "Never run out of stock. Track products, get low-stock alerts, and auto-reorder with AI predictions.",
    previewBars: [
      { label: "Stock Level: 85%", width: "85%" },
      { label: "Reorder Alert", width: "65%" },
      { label: "Sales Trend: ↗", width: "90%" },
    ],
    highlights: [
      { icon: <FaChartLine />, label: "AI Stock Predictions" },
      { icon: <FaBell />, label: "Smart Alerts" },
      { icon: <FaSyncAlt />, label: "Auto Reordering" },
    ],
    benefits: [
      "Real-time stock tracking",
      "Automated reorder alerts",
      "Product performance analytics",
      "Multi-location inventory",
    ],
  },
  {
    id: "customer",
    number: "02",
    variant: "secondary",
    icon: <FaUsers />,
    title: "Customer Management",
    desc: "Build lasting relationships—track orders, preferences, and communications to increase loyalty.",
    previewCustomer: {
      name: "Adebayo Johnson",
      orders: "23 orders • ₦450,000",
      status: "Active",
    },
    highlights: [
      { icon: <FaThumbsUp />, label: "Loyalty Tracking" },
      { icon: <FaChartLine2 />, label: "Order History" },
      { icon: <FaSyncAlt />, label: "Communication Log" },
    ],
    benefits: [
      "Customer profiles & history",
      "Order tracking",
      "Communication logs",
      "Loyalty program integration",
    ],
  },
  {
    id: "delivery",
    number: "03",
    variant: "accent",
    icon: <FaRoute />,
    title: "Real-time Delivery Monitoring",
    desc: "Track every delivery from pickup to drop-off. Keep customers informed and handle issues early.",
    previewTrack: [
      { step: "📦 Packed", state: "completed" },
      { step: "🚚 In Transit", state: "active" },
      { step: "📍 Delivered", state: "" },
    ],
    highlights: [
      { icon: <FaRoute />, label: "Live Tracking" },
      { icon: <FaBell />, label: "Auto Notifications" },
      { icon: <FaChartLine />, label: "Performance Metrics" },
    ],
    benefits: [
      "Live delivery tracking",
      "Customer notifications",
      "Delivery performance metrics",
      "Issue management",
    ],
  },
];

const additionalFeatures = [
  {
    key: "vendor",
    icon: <FaHandshake />,
    badge: "Essential",
    title: "Vendor Management",
    desc: "Manage suppliers — orders, payments, performance — and build stronger partnerships.",
    meta: "+40% Supplier Efficiency",
  },
  {
    key: "invoice",
    icon: <FaFileInvoice />,
    badge: "Popular",
    title: "Invoice Management",
    desc: "Create invoices in seconds. Track payments, send reminders, and manage cash flow.",
    meta: "₦180K Monthly Savings",
  },
  {
    key: "ai",
    icon: <FaBrain />,
    badge: "AI Powered",
    title: "AI Optimization",
    desc: "Route planning, demand forecasting and price optimization — AI runs 24/7 for you.",
    meta: "AI Never Sleeps",
  },
  {
    key: "analytics",
    icon: <FaChartBar />,
    badge: "Insights",
    title: "Product Analytics & Insights",
    desc: "Get product-level performance, customer behavior and margin insights to drive decisions.",
    meta: "Data-Driven Decisions",
  },
  {
    key: "visibility",
    icon: <FaEye />,
    badge: "Growth",
    title: "Business Visibility",
    desc: "Get discovered by local customers — smart matching & location-based marketing.",
    meta: "+60% New Customers",
  },
  {
    key: "recommendations",
    icon: <FaThumbsUp />,
    badge: "Viral",
    title: "Business Recommendations",
    desc: "Automated referral & review flows that turn customers into advocates and drive growth.",
    meta: "Word-of-Mouth Growth",
  },
];

const integrationNodes = [
  { key: "inventory", label: "📦", pos: "top-[18%] left-[12%]" },
  { key: "customer", label: "👥", pos: "top-[18%] right-[12%]" },
//   { key: "delivery", label: "🚚", pos: "top-[62%] right-[12%]" },
  { key: "vendor", label: "🤝", pos: "bottom-[18%] right-[12%]" },
//   { key: "invoice", label: "📄", pos: "bottom-[18%] left-[12%]" },
  { key: "analytics", label: "📊", pos: "top-[62%] left-[12%]" },
];

export default function FeaturesSection(): JSX.Element {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-20"
    >
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-80 animate-[spin_60s_linear_infinite] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(241,91,52,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center font-inter gap-3 bg-gradient-to-br from-[#F15B34] to-[#ff7849] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg mb-6">
            <FaStar />
            <span>Complete Business Suite</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-800">
            Everything Your Business Needs in One Place
          </h2>

          <p className="mt-4 font-inter text-slate-600 max-w-3xl mx-auto">
            Nine powerful features that work together to transform how you run
            your business
          </p>

          <div className="flex flex-wrap justify-center gap-12 mt-10">
            <div className="text-center">
              <span className="block font-poppins text-4xl font-bold bg-gradient-to-br from-[#F15B34] to-[#ff7849] text-transparent bg-clip-text">
                9
              </span>
              <span className="text-slate-500 font-inter text-sm font-medium">
                Powerful Features
              </span>
            </div>
            <div className="text-center">
              <span className="block font-poppins text-4xl font-bold bg-gradient-to-br from-[#F15B34] to-[#ff7849] text-transparent bg-clip-text">
                1
              </span>
              <span className="text-slate-500 font-inter text-sm font-medium">
                Unified Platform
              </span>
            </div>
            <div className="text-center">
              <span className="block font-poppins text-4xl font-bold bg-gradient-to-br from-[#F15B34] to-[#ff7849] text-transparent bg-clip-text">
                24/7
              </span>
              <span className="text-slate-500 font-inter text-sm font-medium">
                AI Optimization
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-16">
          {coreFeatures.map((f) => {
            const leftBorder =
              f.variant === "primary"
                ? "border-l-4 border-[#F15B34]"
                : f.variant === "secondary"
                ? "border-l-4 border-[#10b981]"
                : "border-l-4 border-[#3b82f6]";

            return (
              <div
                key={f.id}
                className={`relative bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#F1F5F9] transition-transform hover:-translate-y-2 ${leftBorder}`}
              >
                <div
                  className="absolute font-poppins -top-5 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  style={{
                    background:
                      f.variant === "primary"
                        ? "linear-gradient(135deg,#F15B34,#ff7849)"
                        : f.variant === "secondary"
                        ? "linear-gradient(135deg,#10b981,#34d399)"
                        : "linear-gradient(135deg,#3b82f6,#60a5fa)",
                  }}
                >
                  {f.number}
                </div>

                <div className="flex-1 flex gap-6 items-start">
                  <div className="relative">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center text-3xl text-white shadow-lg"
                      style={{
                        background:
                          f.variant === "primary"
                            ? "linear-gradient(135deg,#F15B34,#ff7849)"
                            : f.variant === "secondary"
                            ? "linear-gradient(135deg,#10b981,#34d399)"
                            : "linear-gradient(135deg,#3b82f6,#60a5fa)",
                      }}
                    >
                      {f.icon}
                    </div>
                    <div
                      className="absolute -inset-5 rounded-full opacity-30 filter blur-2xl animate-pulse"
                      style={{
                        background:
                          f.variant === "primary"
                            ? "linear-gradient(135deg,#F15B34,#ff7849)"
                            : f.variant === "secondary"
                            ? "linear-gradient(135deg,#10b981,#34d399)"
                            : "linear-gradient(135deg,#3b82f6,#60a5fa)",
                        zIndex: -1,
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    {f.previewBars && (
                      <div className="space-y-3 max-w-[360px]">
                        {f.previewBars.map((bar, i) => (
                          <div
                            key={i}
                            className="relative bg-slate-100 rounded-lg h-10 overflow-hidden"
                          >
                            <div
                              className="absolute inset-0 rounded-lg"
                              style={{
                                width: bar.width,
                                background:
                                  "linear-gradient(90deg,#F15B34,#ff7849)",
                                transition: "width .6s ease",
                              }}
                            />
                            <span className="relative font-inter z-10 pl-4 text-sm font-semibold text-white">
                              {bar.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {f.previewCustomer && (
                      <div className="max-w-md bg-white rounded-lg p-4 shadow-sm border border-[#E6EEF6]">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#34d399] flex items-center justify-center text-white text-lg">
                            👤
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold font-poppins text-slate-800">
                              {f.previewCustomer.name}
                            </div>
                            <div className="text-sm font-inter text-slate-500">
                              {f.previewCustomer.orders}
                            </div>
                          </div>
                          <div className="text-xs px-3 font-inter py-1 rounded-full bg-green-50 text-green-700 font-semibold">
                            {f.previewCustomer.status}
                          </div>
                        </div>
                      </div>
                    )}

                    {f.previewTrack && (
                      <div className="space-y-3 max-w-md">
                        {f.previewTrack.map((t, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-lg font-semibold ${
                              t.state === "completed"
                                ? "bg-green-50 text-green-700"
                                : t.state === "active"
                                ? "bg-blue-50 text-blue-700 animate-pulse"
                                : "bg-slate-50 text-slate-600"
                            }`}
                          >
                            {t.step}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-poppins font-semibold text-slate-800 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-slate-600 font-inter text-sm mb-4">{f.desc}</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {f.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#fff4f1] text-[#F15B34] font-semibold text-sm"
                      >
                        <span className="text-xs">{h.icon}</span>
                        <span className="font-inter text-xs">{h.label}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 font-inter text-sm border-t pt-4">
                    {f.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        <span className="text-slate-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {additionalFeatures.map((a) => (
            <div
              key={a.key}
              className="relative bg-white rounded-xl shadow-md overflow-hidden border border-[#F1F5F9] transition-transform hover:-translate-y-2"
            >
              <div className="h-1 bg-gradient-to-r from-[#F15B34] to-[#ff7849]" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 flex-none rounded-full flex items-center justify-center text-white"
                      style={{
                        background: "linear-gradient(135deg,#8b5cf6,#a78bfa)",
                      }}
                    >
                      {a.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold font-poppins text-slate-800">
                        {a.title}
                      </h4>
                      <p className="text-sm font-inter text-slate-500">{a.desc}</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs px-3 font-poppins py-1 rounded-md bg-[#FFF7F3] text-[#F15B34] font-semibold">
                      {a.badge}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-[#E6EEF6]">
                <span className="text-xs font-inter font-semibold text-[#F15B34]">
                  {a.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="features-integration bg-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] mb-12 relative overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-slate-800">
              All Features Work Together Seamlessly
            </h3>
            <p className="text-slate-500 font-inter mt-2">
              Watch how your business data flows through our integrated system
            </p>
          </div>

          <div className="relative h-[420px]">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex flex-col items-center justify-center text-white z-20 shadow-xl"
              style={{
                background: "linear-gradient(135deg,#F15B34,#ff7849)",
                animation: "spin 20s linear infinite",
              }}
            >
              <div className="text-2xl">
                <FaChartLine2 />
              </div>
              <div className="text-xs font-semibold mt-1 font-poppins">Pika Business</div>
            </div>

            {/* <style>{`@keyframes spin{ from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }`}</style> */}

            <div className="absolute top-1/4 left-1/2 w-[30%] h-[2px] bg-gradient-to-r from-[#F15B34] to-transparent rotate-6 origin-left opacity-60" />
            <div className="absolute top-1/4 right-1/2 w-[30%] h-[2px] bg-gradient-to-l from-[#F15B34] to-transparent -rotate-6 origin-right opacity-60" />
            <div className="absolute bottom-1/4 left-1/2 w-[30%] h-[2px] bg-gradient-to-r from-[#F15B34] to-transparent -rotate-6 origin-left opacity-60" />
            <div className="absolute bottom-1/4 right-1/2 w-[30%] h-[2px] bg-gradient-to-l from-[#F15B34] to-transparent rotate-6 origin-right opacity-60" />

            {integrationNodes.map((n) => (
              <div
                key={n.key}
                className={`absolute ${n.pos} w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl shadow-md`}
                style={{ transform: "translate(-50%,-50%)" }}
              >
                <span>{n.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F15B34] to-[#ff7849] rounded-2xl shadow-xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-6 font-inter max-w-xl mx-auto text-white/90">
            Join 500+ Nigerian businesses already using all these features
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#signup"
              className="inline-flex font-inter items-center gap-3 px-6 py-3 bg-white text-[#F15B34] font-semibold rounded-full shadow hover:scale-105 transition"
            >
              <FaRocket /> Start Free - Access All Features
            </a>
            <div className="text-sm font-inter text-white/90 flex gap-4 flex-wrap justify-center">
              <span className="inline-flex items-center gap-2">
                <FaCheckCircle /> No setup fees
              </span>
              <span className="inline-flex items-center gap-2">
                <FaCheckCircle /> No hidden charges
              </span>
              <span className="inline-flex items-center gap-2">
                <FaCheckCircle /> Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
