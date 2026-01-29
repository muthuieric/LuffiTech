"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { CheckCircle, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

// --- Assets: Base64 Noise Texture (Zero Network Request) ---
// This ensures the grainy texture loads instantly and never breaks.
const NOISE_PATTERN = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E`;

// --- Memoized Sub-Components ---

const TrustBadge = memo(({ text }: { text: string }) => (
  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
    <CheckCircle size={16} className="text-green-400 shrink-0" />
    <span className="text-slate-300 text-sm font-medium whitespace-nowrap">{text}</span>
  </div>
));
TrustBadge.displayName = "TrustBadge";

const ActionButton = memo(({ href, icon: Icon, label, variant = "primary" }: any) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link href={href} className="group relative block w-full sm:w-auto">
      {/* Glow Effect for Primary Button */}
      {isPrimary && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
      )}
      
      <button className={`
        relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 active:scale-95
        ${isPrimary 
          ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-900/20' 
          : 'bg-white text-slate-900 hover:bg-slate-50 shadow-xl'}
      `}>
        {Icon && <Icon size={20} className={isPrimary ? "text-indigo-200" : "text-indigo-600"} />}
        {label}
        {isPrimary && <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
      </button>
    </Link>
  );
});
ActionButton.displayName = "ActionButton";

// --- Main CTA Component ---

const CTA = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 isolate">
      
      {/* 1. Background Layers (Optimized for GPU) */}
      <div className="absolute inset-0 -z-10">
         {/* Noise Overlay */}
         <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url("${NOISE_PATTERN}")` }}
         />
         
         {/* Gradient Blobs */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse transform-gpu" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 transform-gpu" />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* 2. Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
          One Partner. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient">
            Infinite Possibilities.
          </span>
        </h2>
        
        {/* 3. Subtext */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between talent and technology. Whether you need a custom system built for your business or want to master code yourself, <strong className="text-white">Luffi Tech</strong> is your home.
        </p>
        
        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <ActionButton 
            href="/contact" 
            label="Hire Us for a Project" 
            icon={Briefcase} 
            variant="primary" 
          />
          <ActionButton 
            href="/academy" 
            label="Join the Academy" 
            icon={GraduationCap} 
            variant="secondary" 
          />
        </div>

        {/* 5. Trust Indicators */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-4">
           <TrustBadge text="Free Consultations" />
           <TrustBadge text="100% Satisfaction Guarantee" />
           <TrustBadge text="Global Reach" />
        </div>

      </div>
    </section>
  );
};

export default memo(CTA);