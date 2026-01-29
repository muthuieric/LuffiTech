"use client";

import React, { memo } from 'react';
import Link from 'next/link'; // Optimized for Next.js navigation
import { 
  Target, Lightbulb, Users, Globe, 
  Heart, Shield, Zap, ArrowRight, 
  Smile, CheckCircle2 
} from 'lucide-react';

// --- Static Data (Moved outside to prevent re-renders) ---

const VALUES = [
  {
    icon: Shield,
    title: "Integrity First",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    description: "We believe in transparent pricing and honest advice. We will never sell you a solution you don't need."
  },
  {
    icon: Zap,
    title: "Results Over Jargon",
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    description: "We skip the complex tech-speak and focus on deliverables. We build systems that work reliably and efficiently."
  },
  {
    icon: Users,
    title: "Partnership, Not Service",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    description: "We are in it for the long haul. Your growth is our growth, and we support you long after the project is deployed."
  }
];

const PHILOSOPHY_POINTS = [
  "Global Standards, Accessible Pricing",
  "No Hidden Corporate Fees",
  "Tailored for Real Impact"
];

// --- Memoized Sub-Components ---

const Button = memo(({ children, className = "", variant = "primary", ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl font-bold transition-all active:scale-95 duration-200";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30",
    outline: "border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";

const ValueCard = memo(({ icon: Icon, title, description, color }: any) => (
  <div className="flex flex-col h-full p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 group transform-gpu">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h4>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-grow">
      {description}
    </p>
  </div>
));
ValueCard.displayName = "ValueCard";

// --- Main Component ---

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 dark:from-indigo-900/10 to-transparent -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800">
              <Heart size={14} className="text-rose-500 animate-pulse" /> The Luffi Tech Philosophy
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Where Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Meets Humanity</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-light">
               We don't just write code; we improve lives. <br className="hidden md:block" />
               Our goal is to make world-class digital tools and education <strong className="text-slate-900 dark:text-white font-semibold">accessible and affordable</strong> for everyone.
            </p>
        </div>
      </section>

      {/* 2. THE HUMAN ELEMENT */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image/Card Area */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-2"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                   Elite Tech. <span className="text-indigo-600">Human Prices.</span>
                 </h3>
                 <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                   <p>
                     Technology is the great equalizer, but only if people can afford it. We operate on a <strong>lean, borderless model</strong> that cuts overhead costs—savings we pass directly to you.
                   </p>
                   <p>
                     Whether you are a startup founder in need of a robust app or a student wanting to learn Python, we ensure cost is never a barrier to your growth.
                   </p>
                   <div className="flex flex-col gap-3 mt-4">
                      {PHILOSOPHY_POINTS.map((point) => (
                        <div key={point} className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-200">
                          <CheckCircle2 className="text-green-500 shrink-0" size={20} /> {point}
                        </div>
                      ))}
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Right Content Area */}
            <div className="space-y-12">
               <div className="group">
                 <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                   <Smile size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Improving Lives Through Tech</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   We measure success not just by revenue, but by the businesses we help automate and the careers we help launch. Every line of code serves a human purpose.
                 </p>
               </div>
               
               <div className="group">
                 <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                   <Globe size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">A Global Mindset</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   Our digital solutions are built for the world. We bridge the gap between complex enterprise technology and everyday users, regardless of their location.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-10 rounded-[2.5rem] bg-indigo-600 text-white relative overflow-hidden group transform-gpu transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Target size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">Our Mission</h3>
              <h2 className="text-3xl font-black mb-6 leading-tight">
                To democratize access to premium technology and digital education.
              </h2>
              <p className="text-indigo-100 text-lg leading-relaxed">
                We exist to ensure that innovation is a right, not a privilege. We provide the tools, support, and knowledge needed for anyone to thrive in the digital economy.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-10 rounded-[2.5rem] bg-slate-900 dark:bg-slate-800 text-white relative overflow-hidden group border border-slate-800 dark:border-slate-700 transform-gpu transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <Lightbulb size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">Our Vision</h3>
              <h2 className="text-3xl font-black mb-6 leading-tight">
                A world where digital barriers simply do not exist.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We envision a future where every business has the software it needs to grow, and every individual has the skills to build the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Values) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Why Choose Us?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We define ourselves by the value we create for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((val) => (
              <ValueCard 
                key={val.title}
                icon={val.icon}
                title={val.title}
                color={val.color}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="pb-20 px-4 pt-10">
        <div className="max-w-5xl mx-auto bg-slate-900 dark:bg-indigo-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Let's Build Something Meaningful
              </h2>
              <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">
                Whether you need affordable software for your business or mentorship to start your career, Luffi Tech is here for you.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/contact" className="w-full sm:w-auto">
                   <Button className="!bg-white !text-indigo-900 hover:!bg-indigo-50 w-full sm:min-w-[180px]">
                     Start a Project
                   </Button>
                 </Link>
                 <Link href="/academy" className="w-full sm:w-auto">
                   <Button variant="outline" className="!text-white hover:!bg-white/10 !border-white/20 w-full sm:min-w-[180px]">
                     Join Academy <ArrowRight size={18} />
                   </Button>
                 </Link>
              </div>
            </div>
        </div>
      </section>

    </main>
  );
}