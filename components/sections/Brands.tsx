"use client";

import React from 'react';
import { 
  Layers, Command, Cpu, Globe, 
  ShieldCheck, Zap, Hexagon, Anchor 
} from 'lucide-react';

const Brands = () => {
  // Simulating client logos using Lucide Icons for a professional look
  const brands = [
    { name: "TechFlow", icon: Layers },
    { name: "GlobalSafe", icon: ShieldCheck },
    { name: "Nairobi Ventures", icon: Globe },
    { name: "FastCode", icon: Zap },
    { name: "LogicSystems", icon: Cpu },
    { name: "CoreSpace", icon: Command },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Trusted by innovative local businesses
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center justify-center gap-3 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo Icon Container */}
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                <brand.icon size={24} strokeWidth={2} />
              </div>
              
              {/* Company Name */}
              <span className="font-semibold text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;