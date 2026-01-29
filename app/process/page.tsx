"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { 
  Search, Frown, TrendingUp, ArrowRight, 
  Lightbulb, PenTool, Code2, Rocket, 
  ShieldCheck, XCircle, AlertTriangle, 
  Unplug, ShoppingCart
} from 'lucide-react';

// --- Expanded Pain Points: Hitting deeper emotional triggers ---
const PAIN_POINTS = [
  {
    id: "visibility",
    quote: "My products are excellent, but hardly anyone knows they exist.",
    author_feeling: "Frustrated & Invisible",
    icon: Search,
    color: "text-orange-500",
    solution: "We build SEO-optimized platforms and data-driven marketing funnels that put your brand directly in front of the people searching for it."
  },
  {
    id: "manual-work",
    quote: "I'm drowning in spreadsheets and manual data entry.",
    author_feeling: "Overwhelmed & Tired",
    icon: Frown,
    color: "text-rose-500",
    solution: "We automate your workflows. From inventory to payments, we build systems that do the boring work for you, instantly and error-free."
  },
  {
    id: "ghost-traffic",
    quote: "I get plenty of website visitors, but nobody is buying.",
    author_feeling: "Confused by Analytics",
    icon: ShoppingCart,
    color: "text-purple-500",
    solution: "Traffic means nothing without conversion. We redesign your User Experience (UX) to remove friction and guide visitors smoothly to the 'Buy' button."
  },
  {
    id: "tech-silos",
    quote: "My accounting software doesn't talk to my inventory system.",
    author_feeling: "Disorganized",
    icon: Unplug,
    color: "text-blue-500",
    solution: "We specialize in API Integration. We build bridges between your disparate apps (M-Pesa, QuickBooks, Shopify) so data flows automatically."
  },
  {
    id: "security-fear",
    quote: "I'm terrified of losing my customer data to a virus or hack.",
    author_feeling: "Anxious",
    icon: ShieldCheck,
    color: "text-emerald-500",
    solution: "We implement enterprise-grade security protocols, automated backups, and SSL encryption to ensure your business assets are bulletproof."
  },
  {
    id: "outdated",
    quote: "My current website looks like it was built in 2010.",
    author_feeling: "Embarrassed",
    icon: XCircle,
    color: "text-slate-500",
    solution: "We redesign your digital presence with modern, high-performance aesthetics that immediately signal authority and trust to your customers."
  }
];

// --- Enhanced Process Steps: More Technical Depth ---
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We don't just start coding. We sit down with you to understand your business model, your bottlenecks, and your goals. We define exactly what 'success' looks like.",
    icon: Lightbulb,
    color: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
  },
  {
    step: "02",
    title: "Design & Blueprint",
    description: "We create a visual prototype. You'll see exactly how your system or app will look and function before we write a single line of code. No surprises.",
    icon: PenTool,
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
  },
  {
    step: "03",
    title: "Development & Build",
    // Expanded Description
    description: (
      <span className="space-y-2 block">
        <span>
            This is where the magic happens. Our engineers build your solution using <strong>Clean Architecture</strong> principles, ensuring your software is scalable and easy to maintain.
        </span>
        <span className="block mt-2 text-sm opacity-90 pl-3 border-l-2 border-indigo-300 dark:border-indigo-700">
            • <strong>Security-First:</strong> SSL encryption & firewall protection built-in.<br/>
            • <strong>API-Ready:</strong> Built to connect with M-Pesa, Maps, and CRMs.<br/>
            • <strong>Speed Optimized:</strong> Database indexing for lightning-fast queries.
        </span>
      </span>
    ),
    icon: Code2,
    color: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "We rigorously test on all devices (mobile, desktop) to ensure speed and stability. Then, we handle the deployment to the cloud.",
    icon: Rocket,
    color: "bg-sky-100 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400"
  },
  {
    step: "05",
    title: "Training & Growth",
    description: "We don't just hand it over and disappear. We train your team on how to use the system and offer maintenance packages to keep you growing.",
    icon: TrendingUp,
    color: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
  }
];

// --- Memoized Components ---

const PainPointCard = memo(({ item }: { item: typeof PAIN_POINTS[0] }) => (
  <div className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 transform-gpu hover:-translate-y-1 h-full flex flex-col">
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
      <item.icon size={64} />
    </div>
    
    <div className="relative z-10 flex-grow">
       <div className="flex items-center gap-2 mb-4">
          <item.icon size={20} className={item.color} />
          <span className={`text-[10px] font-black uppercase tracking-widest opacity-60 ${item.color}`}>
            Feeling: {item.author_feeling}
          </span>
       </div>

      <div className={`text-xl font-bold italic mb-6 leading-relaxed text-slate-800 dark:text-slate-200`}>
        "{item.quote}"
      </div>
      
      <div className="mt-auto pl-4 border-l-2 border-slate-200 dark:border-slate-700">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">The Luffi Solution</h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
          {item.solution}
        </p>
      </div>
    </div>
  </div>
));
PainPointCard.displayName = "PainPointCard";

const ProcessStepCard = memo(({ step, index }: { step: typeof PROCESS_STEPS[0], index: number }) => (
  <div className="relative flex gap-6 md:gap-10 group">
    {/* Connector Line (Desktop) */}
    {index !== PROCESS_STEPS.length - 1 && (
      <div className="absolute left-6 top-16 bottom-[-32px] w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900 transition-colors" />
    )}

    {/* Step Number & Icon */}
    <div className="shrink-0 relative">
      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg z-10 relative group-hover:scale-110 transition-transform duration-300`}>
        <step.icon size={24} className="md:w-8 md:h-8" />
      </div>
    </div>

    {/* Content */}
    <div className="pb-12 pt-1 md:pt-2">
      <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1 block">
        Phase {step.step}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
        {step.title}
      </h3>
      <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg max-w-2xl">
        {step.description}
      </div>
       
      {/* Visual context for Development Phase.
         We can insert a diagram here to show the complexity of the build process.
      */}
      {step.step === "03" && (
        <div className="mt-6 mb-2 hidden md:block">
           

[Image of software development lifecycle]

           <p className="text-[10px] text-slate-400 mt-2 italic">Our rigorous development lifecycle ensures quality at every stage.</p>
        </div>
      )}
    </div>
  </div>
));
ProcessStepCard.displayName = "ProcessStepCard";

// --- Main Page Component ---

export default function ProcessPage() {
  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-950 min-h-screen transition-colors duration-300 pt-24 pb-24">
      
      {/* 1. HERO: The Hook */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Start Growing.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Great businesses fail every day not because of bad products, but because of <b>bad processes</b> and <b>invisible branding</b>. We fix that.
          </p>
        </div>
      </section>

      {/* 2. THE STRUGGLE: Sound Familiar? */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" />
                <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Sound Familiar?</span>
            </div>
            <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAIN_POINTS.map((item) => (
              <PainPointCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS: The Roadmap */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              The Luffi Blueprint
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our proven 5-step roadmap to transform your business chaos into clarity.
            </p>
          </div>

          <div className="relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessStepCard key={step.step} step={step} index={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA: The Resolution */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to stop wrestling with struggles?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                Get Your Strategy <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}