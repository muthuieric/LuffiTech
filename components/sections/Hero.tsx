"use client";

import React, { memo } from 'react';
import Link from 'next/link'; // Native Next.js Link for performance
import { ArrowRight, Laptop, Globe, CheckCircle2, Heart } from 'lucide-react';

// --- Assets: Base64 Noise Texture (Zero Network Request) ---
// Loads instantly, no external server dependency.
const NOISE_PATTERN = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E`;

// --- Memoized Sub-Components ---

const HeroButton = memo(({ href, children, variant = "primary", icon: Icon }: any) => {
  const baseClasses = "group relative inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-all active:scale-95 duration-200 h-12 px-6 text-base w-full sm:w-auto";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40",
    secondary: "bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 backdrop-blur-md"
  };

  return (
    <Link href={href} className="w-full sm:w-auto">
      <button className={`${baseClasses} ${variants[variant as keyof typeof variants]}`}>
        {children}
        {Icon && <Icon size={18} className="transition-transform group-hover:translate-x-1" />}
      </button>
    </Link>
  );
});
HeroButton.displayName = "HeroButton";

const TrustBadge = memo(({ icon: Icon, text, colorClass }: any) => (
  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-white/5 px-4 py-2 rounded-full border border-white/50 dark:border-white/5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
    <Icon size={14} className={colorClass} /> 
    <span>{text}</span>
  </div>
));
TrustBadge.displayName = "TrustBadge";

// --- Main Hero Component ---

const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300 selection:bg-indigo-500 selection:text-white" 
      aria-labelledby="hero-heading"
    >
      
      {/* 1. Dynamic Background (GPU Accelerated) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradients using translate3d for hardware acceleration */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-indigo-600/10 dark:bg-indigo-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse -translate-x-1/2 transform-gpu" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-[80px] opacity-60 transform-gpu" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[80px] opacity-40 transform-gpu" />
        
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.3] mix-blend-overlay"
          style={{ backgroundImage: `url("${NOISE_PATTERN}")` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* 2. Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-indigo-100 dark:border-indigo-500/30 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
          <Globe size={12} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-900 dark:text-indigo-200">
            Borderless & Global Technology
          </span>
        </div>
        
        {/* 3. Main Heading */}
        <h1 
          id="hero-heading" 
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
        >
          Elite Tech Solutions. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
            Human Prices.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium">
          We bridge the gap between complex enterprise technology and everyday needs. 
          From building <strong className="text-slate-900 dark:text-white">scalable software</strong> to teaching <strong className="text-slate-900 dark:text-white">future-proof skills</strong>.
        </p>
        
        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <HeroButton href="/services" variant="primary" icon={ArrowRight}>
            Build Your Product
          </HeroButton>
          
          <HeroButton href="/academy" variant="secondary" icon={Laptop}>
            Start Learning
          </HeroButton>
        </div>

        {/* 5. Trust Indicators */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-10 flex flex-wrap justify-center gap-4 md:gap-8">
          <TrustBadge 
            icon={Globe} 
            text="Global Reach" 
            colorClass="text-indigo-500" 
          />
          <TrustBadge 
            icon={Heart} 
            text="Inclusive & Affordable" 
            colorClass="text-rose-500" 
          />
          <TrustBadge 
            icon={CheckCircle2} 
            text="Enterprise Quality" 
            colorClass="text-emerald-500" 
          />
        </div>

      </div>
    </section>
  );
};

export default memo(Hero);