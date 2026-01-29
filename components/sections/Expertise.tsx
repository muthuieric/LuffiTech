"use client";

import React, { useState, memo } from 'react';
import Link from 'next/link';
import { 
  Code2, Bot, Palette, ShieldCheck,
  Laptop, MapPin, ArrowRight, CheckCircle2, Sparkles, Zap
} from 'lucide-react';

// --- Static Data (Moved outside to prevent re-renders) ---

const SERVICE_CATEGORIES = [
  {
    id: "engineering",
    title: "Software Engineering",
    description: "Enterprise applications built for scale. Payment systems, user platforms, and secure data architectures.",
    icon: Code2,
    subServices: ["Web & Mobile Apps", "M-Pesa Integrations", "Cloud & DevOps", "SaaS Platforms"],
    theme: "indigo",
    bg: "bg-indigo-50 dark:bg-indigo-900/10",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "group-hover:border-indigo-200 dark:group-hover:border-indigo-800"
  },
  {
    id: "ai-data",
    title: "AI & Intelligence",
    description: "Future-proof businesses with custom AI agents, automation workflows, and actionable insights.",
    icon: Bot,
    subServices: ["AI Agents & Chatbots", "Data Analytics & BI", "RAG Automation", "Vibe Coding"],
    theme: "purple",
    bg: "bg-purple-50 dark:bg-purple-900/10",
    text: "text-purple-600 dark:text-purple-400",
    border: "group-hover:border-purple-200 dark:group-hover:border-purple-800"
  },
  {
    id: "it-support",
    title: "IT Support & Security",
    description: "Proactive technical support, managed server infrastructure, and rigorous cybersecurity protocols.",
    icon: ShieldCheck,
    subServices: ["Managed IT Support", "Penetration Testing", "Server Admin", "Network Security"],
    theme: "emerald",
    bg: "bg-emerald-50 dark:bg-emerald-900/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "group-hover:border-emerald-200 dark:group-hover:border-emerald-800"
  },
  {
    id: "design",
    title: "Design & Growth",
    description: "Captivate audiences with world-class design identity and data-driven marketing strategies.",
    icon: Palette,
    subServices: ["UI/UX Design", "Brand Identity", "Digital Marketing", "Content Strategy"],
    theme: "rose",
    bg: "bg-rose-50 dark:bg-rose-900/10",
    text: "text-rose-600 dark:text-rose-400",
    border: "group-hover:border-rose-200 dark:group-hover:border-rose-800"
  }
];

// --- Memoized Sub-Components ---

const ServiceCard = memo(({ category }: { category: typeof SERVICE_CATEGORIES[0] }) => (
  <div className={`group flex flex-col p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300 h-full ${category.border}`}>
    {/* Icon Header */}
    <div className={`w-14 h-14 ${category.bg} rounded-2xl flex items-center justify-center ${category.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <category.icon className="w-6 h-6" />
    </div>
    
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
      {category.title}
    </h3>
    
    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow text-sm font-medium">
      {category.description}
    </p>
    
    <div className="mt-auto">
      <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-4"></div>
      <ul className="space-y-3 mb-6">
        {category.subServices.map((service, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
            <CheckCircle2 className={`w-3.5 h-3.5 ${category.text} opacity-70 shrink-0 mt-0.5`} />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      <Link 
        href="/services" 
        className={`inline-flex items-center ${category.text} font-bold text-xs uppercase tracking-wider hover:opacity-80 transition-all`}
      >
        View Solutions <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
));
ServiceCard.displayName = "ServiceCard";

// --- Main Expertise Component ---

const Expertise = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'academy'>('services');

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 scroll-mt-20" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">
             <Sparkles size={12} /> Our Core Pillars
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            We Build & We Teach
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Your end-to-end technology partner. We build complex <b>Software Systems</b> for businesses and train the next generation of <b>Engineers</b>.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-white dark:bg-slate-900 p-2 rounded-full relative shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 select-none">
            {/* Sliding Background */}
            <div 
              className={`absolute top-2 bottom-2 rounded-full bg-slate-900 dark:bg-indigo-600 shadow-md transition-all duration-300 ease-out w-[160px] transform ${
                activeTab === 'services' ? 'translate-x-0' : 'translate-x-[164px]'
              }`}
            ></div>
            
            <button
              onClick={() => setActiveTab('services')}
              className={`relative z-10 w-[160px] py-3 text-sm font-bold rounded-full transition-colors duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'services' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Zap size={16} /> For Clients
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`relative z-10 w-[160px] py-3 text-sm font-bold rounded-full transition-colors duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'academy' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Laptop size={16} /> For Students
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          
          {/* --- SERVICES VIEW --- */}
          {activeTab === 'services' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-forwards">
              {SERVICE_CATEGORIES.map((category) => (
                <ServiceCard key={category.id} category={category} />
              ))}
            </div>
          )}

          {/* --- ACADEMY VIEW --- */}
          {activeTab === 'academy' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-forwards">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Flexible Learning Modes</h3>
                <p className="text-slate-500 dark:text-slate-400">Choose how you want to learn.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Online Option */}
                <div className="group p-8 rounded-[2.5rem] bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <div className="absolute -top-10 -right-10 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500 rotate-12">
                    <Laptop size={200} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-50 dark:border-indigo-800">
                        <Laptop size={28} /> 
                    </div>
                    <h3 className="text-2xl font-black text-indigo-950 dark:text-white tracking-tight">
                      Remote Learning
                    </h3>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-400 mb-8 leading-relaxed flex-grow relative z-10 font-medium">
                    Ideal for busy students or professionals. Join live mentorship sessions via Google Meet. 
                    Includes <b>screen recordings</b>, digital resources, and code reviews.
                  </p>
                  
                  <ul className="space-y-3 mb-8 relative z-10">
                     {[
                       "Learn from the comfort of your home",
                       "Flexible evening & weekend slots",
                       "Budget-friendly pricing"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"/>
                         {item}
                       </li>
                     ))}
                  </ul>
                  
                  <div className="mt-auto relative z-10">
                    <Link href="/academy" className="block w-full">
                        <button className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold transition-all active:scale-95 bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/20 dark:shadow-none border-transparent text-sm uppercase tracking-widest">
                            Explore Courses
                        </button>
                    </Link>
                  </div>
                </div>

                {/* Physical Option */}
                <div className="group p-8 rounded-[2.5rem] bg-orange-50 dark:bg-slate-900 border border-orange-100 dark:border-orange-900/30 relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <div className="absolute -top-10 -right-10 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500 rotate-12">
                    <MapPin size={200} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white dark:bg-orange-900/20 rounded-xl text-orange-600 dark:text-orange-400 shadow-sm border border-orange-50 dark:border-orange-800">
                        <MapPin size={28} /> 
                    </div>
                    <h3 className="text-2xl font-black text-orange-950 dark:text-white tracking-tight">
                      Private One-on-One
                    </h3>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-400 mb-8 leading-relaxed flex-grow relative z-10 font-medium">
                    Premium personalized training where we come to you. Perfect for beginners who need <b>hands-on guidance</b>, 
                    or parents who want a dedicated tutor for their kids.
                  </p>
                  
                  <ul className="space-y-3 mb-8 relative z-10">
                     {[
                       "We come to your location",
                       "100% focused attention",
                       "Physical hardware & typing training"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                         {item}
                       </li>
                     ))}
                  </ul>
                  
                  <div className="mt-auto relative z-10">
                    <Link href="/academy" className="block w-full">
                        <button className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold transition-all active:scale-95 bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/20 dark:shadow-none border-transparent text-sm uppercase tracking-widest">
                            Explore Courses
                        </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Expertise);