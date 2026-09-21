"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Laptop, 
  Globe, 
  CheckCircle2, 
  Heart,
  ShieldCheck,
  Code2
} from 'lucide-react';

// --- Assets: Base64 Noise Texture (Zero Network Request) ---
const NOISE_PATTERN = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E`;

// --- Memoized Sub-Components ---

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ElementType;
}

const HeroButton = memo(({ href, children, variant = "primary", icon: Icon }: HeroButtonProps) => {
  const baseClasses = "group relative inline-flex items-center justify-center gap-2.5 rounded-2xl font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] h-14 px-8 text-base w-full sm:w-auto cursor-pointer shadow-md";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/40 border border-transparent",
    secondary: "bg-white dark:bg-slate-900/80 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg backdrop-blur-md"
  };

  return (
    <Link href={href} className="w-full sm:w-auto">
      <button className={`${baseClasses} ${variants[variant]}`}>
        <span>{children}</span>
        {Icon && <Icon size={18} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </button>
    </Link>
  );
});
HeroButton.displayName = "HeroButton";

interface TrustBadgeProps {
  icon: React.ElementType;
  text: string;
  colorClass: string;
}

const TrustBadge = memo(({ icon: Icon, text, colorClass }: TrustBadgeProps) => (
  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 px-4 py-2.5 rounded-full border border-slate-200/70 dark:border-slate-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md cursor-default">
    <Icon size={16} className={`${colorClass} shrink-0`} /> 
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
        <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-indigo-600/10 dark:bg-indigo-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse -translate-x-1/2 transform-gpu" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-[80px] opacity-60 transform-gpu" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[80px] opacity-40 transform-gpu" />
        
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25] mix-blend-overlay"
          style={{ backgroundImage: `url("${NOISE_PATTERN}")` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Responsive Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Conversational Copy & Calls-To-Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
        
            {/* Conversational Headline */}
            <h1 
              id="hero-heading" 
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.12]"
            >
              We Build Your Digital Vision. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                Elite Tech. Human Prices.
              </span>
            </h1>
            
            {/* Welcoming Second-Person Subtext */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 leading-relaxed font-normal mx-auto lg:mx-0">
              You bring the ambition and real-world vision. We provide the modern software engineering, AI automation, and hands-on guidance to bring it to life reliably, affordably, and without the corporate runaround.
            </p>
            
            {/* Action Buttons with Tactile Physics */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <HeroButton href="/contact" variant="primary" icon={ArrowRight}>
                Let&apos;s Build Together
              </HeroButton>
              
              <HeroButton href="/academy" variant="secondary" icon={Laptop}>
                Explore the Academy
              </HeroButton>
            </div>



          </div>

          {/* Right Column (5 cols): 3D Glass Emblem Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none group">
              
              {/* Dynamic Glow Behind Image */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-indigo-600/30 via-purple-600/25 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-60 dark:opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none -z-10" />

              {/* Outer Glassmorphic Chassis */}
              <div className="relative rounded-[2rem] sm:rounded-[2.4rem] p-2.5 sm:p-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/80 dark:border-slate-800/90 shadow-2xl shadow-indigo-950/15 dark:shadow-black/60 overflow-hidden transition-all duration-500 hover:-translate-y-1">
                
                {/* Image Container with Exact Aspect Ratio */}
                <div className="relative rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-slate-950 aspect-[4/3] sm:aspect-[720/550]">
                  <Image
                    src="/luffi heroimg.jpeg"
                    alt="Luffi Tech - Modern Software, AI & Web Engineering Studio in Nairobi"
                    width={720}
                    height={550}
                    priority
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Vignette & Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />

                  {/* Frosted Glass Overlay Badge on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3 shadow-lg">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <div className="min-w-0 text-left">
                        <p className="text-xs sm:text-sm font-bold truncate">Luffi Tech </p>
                        <p className="text-[11px] text-slate-300 truncate">Software • AI Automation</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                      Nairobi, Kenya
                    </span>
                  </div>
                </div>

              </div>

           
            </div>
          </div>

        </div>

        {/* Human-Centric Trust Indicators Bar */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 mt-16 sm:mt-24 pt-10 flex flex-wrap justify-center gap-3 sm:gap-6">
          <TrustBadge 
            icon={Heart} 
            text="Real People, Honest Support" 
            colorClass="text-rose-500" 
          />
          <TrustBadge 
            icon={CheckCircle2} 
            text="Fair & Transparent Pricing" 
            colorClass="text-emerald-500" 
          />
          <TrustBadge 
            icon={Globe} 
            text="Local Roots, Global Standards" 
            colorClass="text-indigo-500" 
          />
        </div>

      </div>
    </section>
  );
};

export default memo(Hero);