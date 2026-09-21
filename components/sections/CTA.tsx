"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { CheckCircle, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

// --- Assets: Base64 Noise Texture (Zero Network Request) ---
const NOISE_PATTERN = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E`;

// --- Memoized Sub-Components ---

const TrustBadge = memo(({ text }: { text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default">
    <CheckCircle size={15} className="text-emerald-400 shrink-0" />
    <span className="text-slate-300 text-xs sm:text-sm font-medium whitespace-nowrap">{text}</span>
  </div>
));
TrustBadge.displayName = "TrustBadge";

interface ActionButtonProps {
  href: string;
  icon?: React.ElementType;
  label: string;
  variant?: 'primary' | 'secondary';
}

const ActionButton = memo(({ href, icon: Icon, label, variant = "primary" }: ActionButtonProps) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link href={href} className="group relative block w-full sm:w-auto">
      {/* Glow Effect for Primary Button */}
      {isPrimary && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
      )}
      
      <button className={`
        relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer
        ${isPrimary 
          ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-900/30' 
          : 'bg-white text-slate-900 hover:bg-slate-50 shadow-xl border border-white/20'}
      `}>
        {Icon && <Icon size={20} className={isPrimary ? "text-indigo-200" : "text-indigo-600"} />}
        <span>{label}</span>
        {isPrimary && <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
      </button>
    </Link>
  );
});
ActionButton.displayName = "ActionButton";

// --- Main CTA Component ---

const CTA = () => {
  return (
    <section className="relative mt-32 py-28 lg:py-36 overflow-hidden bg-slate-900 isolate">
      
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.12]">
          Let&apos;s Build Something Meaningful. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient">
            Your Vision. Our Engineering.
          </span>
        </h2>
        
        {/* 3. Conversational Subtext */}
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          We bridge the gap between people and technology. Whether you need custom software built for your business or want to master code yourself, you&apos;re in good hands.
        </p>
        
        {/* 4. Action Buttons with Tactile Physics */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6">
          <ActionButton 
            href="/contact" 
            label="Start Your Project" 
            icon={Briefcase} 
            variant="primary" 
          />
          <ActionButton 
            href="/academy" 
            label="Explore the Academy" 
            icon={GraduationCap} 
            variant="secondary" 
          />
        </div>

      

      </div>
    </section>
  );
};

export default memo(CTA);