"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Laptop, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" aria-labelledby="hero-heading">
    
    {/* 1. Dynamic Background with Pulse Effect */}
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 dark:bg-indigo-500/10 rounded-[100%] blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen animate-pulse duration-3000" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/20 dark:bg-purple-400/10 rounded-[100%] blur-3xl opacity-30 dark:opacity-20" />
      {/* Noise Texture for premium feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      
      {/* 2. Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
          Mobile-First: We Come to You
        </span>
      </div>
      
      {/* 3. Main Heading */}
      <h1 
        id="hero-heading" 
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"
      >
        Expert Tech Support & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x bg-300%">
          Future-Proof Skills
        </span>
      </h1>
      
      <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <strong>Luffi Tech</strong> is Nairobi's premier mobile-first tech agency. 
        We provide doorstep <strong>computer repairs</strong>, build custom <strong>software solutions</strong>, and mentor the next generation of talent through our <strong>Academy</strong>.
      </p>
      
      {/* 4. Action Buttons (Using Next/Link for speed) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
        <Link href="/services">
          <Button 
            className="w-full sm:w-auto h-14 px-8 text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40" 
            icon={ArrowRight}
          >
            Explore Services
          </Button>
        </Link>
        
        <Link href="/academy">
          <Button 
            variant="secondary" 
            className="w-full sm:w-auto h-14 px-8 text-lg border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Join the Academy
          </Button>
        </Link>
      </div>

      {/* 5. Trust Indicators */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap justify-center gap-6 md:gap-12 opacity-0 animate-in fade-in duration-1000 delay-500 fill-mode-forwards">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
          <MapPin size={18} className="text-indigo-500" /> Nairobi-Wide Service
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
          <Laptop size={18} className="text-indigo-500" /> Remote & On-Site
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
          <CheckCircle2 size={18} className="text-indigo-500" /> Certified Experts
        </div>
      </div>

    </div>
  </section>
);

export default Hero;