"use client";

import React from 'react';
import { ArrowRight, ChevronRight, Laptop, MapPin, Zap } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" aria-labelledby="hero-heading">
    {/* Dynamic Background */}
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 dark:bg-indigo-500/10 rounded-[100%] blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/20 dark:bg-purple-400/10 rounded-[100%] blur-3xl opacity-30 dark:opacity-20" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      {/* Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
          Mobile-First: We Come to You
        </span>
      </div>
      
      <h1 id="hero-heading" className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
        Expert Tech Support & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x bg-300%">
          Future-Proof Skills
        </span>
      </h1>
      
      <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
        We are Nairobi's premier <strong>mobile-first</strong> tech agency. 
        We provide <strong>doorstep computer repairs</strong>, build custom <strong>software solutions</strong>, and mentor the next generation of tech leaders through our <strong>Academy</strong>.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button 
          className="w-full sm:w-auto h-14 px-8 text-lg shadow-indigo-500/25" 
          icon={ArrowRight}
          onClick={() => window.location.href = '/services'}
        >
          Fix My Device / Build App
        </Button>
        <Button 
          variant="secondary" 
          className="w-full sm:w-auto h-14 px-8 text-lg"
          onClick={() => window.location.href = '/academy'}
        >
          Join Academy
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <MapPin size={18} /> Nairobi-Wide Service
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Laptop size={18} /> Remote & On-Site
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Zap size={18} /> Fast Turnaround
        </div>
      </div>
    </div>
  </section>
);

export default Hero;