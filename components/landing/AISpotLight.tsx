"use client";
import React from "react";
import { FaBrain } from "react-icons/fa6";

const AISpotlight: React.FC = () => {
  return (
    <section className="ai-spotlight relative overflow-hidden py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-4">
            Powered by Advanced AI That Actually Works
          </h2>
          <p className="text-lg font-inter text-white/80 max-w-2xl mx-auto">
            Our intelligent algorithms learn from every interaction to optimize
            your entire logistics operation
          </p>
        </div>

        <div className="ai-features grid md:grid-cols-[1fr_2fr] gap-16 items-center">
          <div className="ai-visual flex justify-center items-center">
            <div className="ai-brain-animation relative w-[300px] h-[300px]">
              <div className="brain-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-orange-500 to-orange-300 text-white shadow-[0_0_40px_rgba(241,91,52,0.6)] animate-[aiPulse_2s_ease-in-out_infinite] z-10">
                <i className="fas fa-brain">
                  <FaBrain />
                </i>
              </div>
              <div className="neural-network absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`neuron absolute w-5 h-5 rounded-full bg-white/30 animate-[neuronPulse_3s_ease-in-out_infinite]`}
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      ...(i === 0
                        ? { top: "20%", left: "20%" }
                        : i === 1
                        ? { top: "20%", right: "20%" }
                        : i === 2
                        ? { top: "60%", left: "15%" }
                        : i === 3
                        ? { top: "60%", right: "15%" }
                        : i === 4
                        ? { bottom: "20%", left: "30%" }
                        : { bottom: "20%", right: "30%" }),
                    }}
                  ></div>
                ))}
              </div>
              {/* <div className="data-streams absolute inset-0">
                <div className="stream absolute w-[2px] h-[50px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-[dataFlow_2s_linear_infinite] rotate-[45deg] top-[25%] left-[40%]" />
                <div className="stream absolute w-[2px] h-[50px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-[dataFlow_2s_linear_infinite] -rotate-[30deg] top-[55%] right-[35%]" />
                <div className="stream absolute w-[2px] h-[50px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-[dataFlow_2s_linear_infinite] rotate-[15deg] bottom-[25%] left-[35%]" />
              </div> */}
            </div>
          </div>
          <div className="ai-features-grid grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: "🧠",
                title: "Predictive Route Optimization",
                desc: "AI analyzes traffic patterns, weather, and demand to optimize delivery routes in real-time",
              },
              {
                icon: "📊",
                title: "Smart Demand Forecasting",
                desc: "Machine learning predicts demand patterns to optimize inventory and resource allocation",
              },
              {
                icon: "🔄",
                title: "Automated Workflow Intelligence",
                desc: "Intelligent automation streamlines operations and reduces manual intervention",
              },
              {
                icon: "📍",
                title: "Real-time Decision Making",
                desc: "AI makes instant decisions based on current conditions and historical data",
              },
              {
                icon: "🎯",
                title: "Performance Optimization",
                desc: "Continuous learning algorithms improve efficiency across all logistics touchpoints",
              },
              {
                icon: "🔍",
                title: "Intelligent Pattern Recognition",
                desc: "Advanced algorithms identify trends and anomalies to prevent issues before they occur",
              },
            ].map((f, idx) => (
              <div
                key={idx}
                className="ai-feature p-6 rounded-lg backdrop-blur bg-white/10 border border-white/20 transition-all hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
              >
                <div className="feature-icon text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold font-poppins mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-white/80 font-inter leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-cta text-center mt-16">
          <a
            href="#trial"
            className="btn inline-block font-poppins px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors"
          >
            Experience AI Intelligence
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes aiPulse {
          0%,
          100% {
            box-shadow: 0 0 40px rgba(241, 91, 52, 0.6);
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            box-shadow: 0 0 60px rgba(241, 91, 52, 0.8),
              0 0 80px rgba(59, 130, 246, 0.4);
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
        @keyframes neuronPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        @keyframes dataFlow {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default AISpotlight;
