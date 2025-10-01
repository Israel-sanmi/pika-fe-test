"use client";
import { FaAward } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative overflow-hidden text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-20">
      
      <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_70%,rgba(241,91,52,0.15),transparent_50%)] animate-[spin_40s_linear_infinite]" />

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_10px_25px_rgba(251,191,36,0.3)] mb-6">
          <FaAward className="text-white" />
          <span className="text-sm font-medium font-inter">Proven Results</span>
        </div>

        
        <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-4">
          Why Nigerian Businesses Choose Pika
        </h2>
        <p className="text-slate-300 font-inter text-lg">
          Real benefits that impact your bottom line from day one
        </p>

        
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-10">
          <div className="text-center">
            <span className="block font-poppins text-5xl font-bold bg-gradient-to-br from-[#F15B34] to-yellow-400 bg-clip-text text-transparent mb-2">
              500+
            </span>
            <span className="text-slate-300 font-inter font-medium">
              Businesses Served
            </span>
          </div>

          <div className="text-center">
            <span className="block font-poppins text-5xl font-bold bg-gradient-to-br from-[#F15B34] to-yellow-400 bg-clip-text text-transparent mb-2">
              99.9%
            </span>
            <span className="text-slate-300 font-inter font-medium">Uptime</span>
          </div>

          <div className="text-center">
            <span className="block font-poppins text-5xl font-bold bg-gradient-to-br from-[#F15B34] to-yellow-400 bg-clip-text text-transparent mb-2">
              24/7
            </span>
            <span className="text-slate-300 font-inter font-medium">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
