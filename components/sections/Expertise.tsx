"use client";

import React, { useState } from 'react';
// import Link from 'next/link'; // Commented out for preview compatibility
import { 
  // Icons for Service Categories
  Code2, Network, PenTool,
  // Icons for Academy Summary
  Laptop, MapPin, 
  ArrowRight, CheckCircle2
} from 'lucide-react';

// Temporary mock Link component for preview environment
// In your Next.js project, remove this and uncomment the import above
const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={className}>{children}</a>
);

const Expertise = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'academy'>('services');

  // --- 1. DATA: Service Categories Summary ---
  // Summarized from your ServicesPage to keep the Home page clean
  const serviceCategories = [
    {
      id: "engineering",
      title: "Software, Mobile & AI Solutions",
      description: "Custom digital tools to automate and grow your business.",
      icon: <Code2 className="w-8 h-8" />,
      subServices: ["Web Applications", "Mobile App Development", "Chatbots & Automation", "Data Science"]
    },
    {
      id: "infrastructure",
      title: "On-Site IT Support & Hardware",
      description: "We come to you to fix your tech problems.",
      icon: <Network className="w-8 h-8" />,
      subServices: ["On-Site Computer Repair", "Home & Office Networking", "Virtual Digital Bureau"]
    },
    {
      id: "strategy",
      title: "Product Design & Branding",
      description: "World-class design to elevate your brand identity.",
      icon: <PenTool className="w-8 h-8" />,
      subServices: ["UI/UX Product Design", "Graphic Design & Branding", "Cloud Hosting & Domain"]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            We Build & We Teach
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Expert technical solutions delivered to your doorstep or remotely. 
            From coding and design to hardware repair, we've got you covered.
          </p>

          {/* Custom Toggle Switch */}
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full relative">
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full bg-white dark:bg-slate-700 shadow-sm transition-all duration-300 ease-in-out ${
                activeTab === 'services' ? 'left-1.5 w-[140px]' : 'left-[146px] w-[140px]'
              }`}
            ></div>
            <button
              onClick={() => setActiveTab('services')}
              className={`relative z-10 w-[140px] py-2.5 text-sm font-semibold rounded-full transition-colors ${
                activeTab === 'services' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`relative z-10 w-[140px] py-2.5 text-sm font-semibold rounded-full transition-colors ${
                activeTab === 'academy' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              For Students
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          
          {/* --- SERVICES VIEW (Summary Categories) --- */}
          {activeTab === 'services' && (
            <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {serviceCategories.map((category) => (
                <div key={category.id} className="group flex flex-col p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900 transition-all duration-300">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-700 mb-4"></div>
                    <ul className="space-y-2 mb-6">
                      {category.subServices.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/services" 
                      className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* --- ACADEMY VIEW (Summary: How We Teach) --- */}
          {activeTab === 'academy' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How We Teach</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                   We offer two flexible learning modes designed to fit your schedule and learning style.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Online Option */}
                <div className="p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 relative overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Laptop size={140} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-white mb-4 flex items-center gap-2">
                    <Laptop className="text-indigo-600 dark:text-indigo-400" /> Remote Learning
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    Ideal for busy students or professionals. Join live mentorship sessions via Google Meet or Zoom. 
                    We provide screen recordings of every session, digital resources, and code reviews online.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"/>
                       Learn from the comfort of your home
                     </li>
                     <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"/>
                       Flexible evening & weekend slots
                     </li>
                     <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"/>
                       Budget-friendly option
                     </li>
                  </ul>
                  <Link 
                    href="/academy" 
                    className="w-full block text-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
                  >
                    Explore Courses

                  </Link>
                </div>

                {/* Physical Option */}
                <div className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/50 relative overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <MapPin size={140} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-900 dark:text-white mb-4 flex items-center gap-2">
                    <MapPin className="text-orange-600 dark:text-orange-400" /> Private One-on-One
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    Premium personalized training where we come to you. Perfect for beginners who need hands-on guidance 
                    or parents who want a tutor for their kids at home.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                       We come to your location
                     </li>
                     <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                       100% focused attention
                     </li>
                     <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"/>
                       Hands-on hardware & typing help
                     </li>
                  </ul>
                  <Link 
                    href="/academy" 
                    className="w-full block text-center py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-orange-200 dark:shadow-none"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise;