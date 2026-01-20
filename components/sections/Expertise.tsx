"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, Network, PenTool,
  Laptop, MapPin, 
  ArrowRight, CheckCircle2
} from 'lucide-react';
import Button from '../ui/Button'; // Reusing your standardized Button component

const Expertise = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'academy'>('services');

  // --- 1. DATA: Service Categories Summary ---
  const serviceCategories = [
    {
      id: "engineering",
      title: "Software & AI Solutions",
      description: "Custom digital tools to automate and grow your business.",
      icon: <Code2 className="w-8 h-8" />,
      subServices: ["Web Applications", "Mobile App Development", "Chatbots & Automation", "Data Science"]
    },
    {
      id: "infrastructure",
      title: "On-Site IT Support",
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
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            We Build & We Teach
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Expert technical solutions delivered to your doorstep or remotely. 
            From coding and design to hardware repair, we've got you covered.
          </p>

          {/* Custom Toggle Switch */}
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full relative shadow-inner">
            {/* Sliding Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full bg-white dark:bg-slate-700 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeTab === 'services' ? 'left-1.5 w-[140px]' : 'left-[148px] w-[140px]'
              }`}
            ></div>
            
            <button
              onClick={() => setActiveTab('services')}
              className={`relative z-10 w-[140px] py-2.5 text-sm font-bold rounded-full transition-colors duration-300 ${
                activeTab === 'services' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`relative z-10 w-[140px] py-2.5 text-sm font-bold rounded-full transition-colors duration-300 ${
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
            <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
              {serviceCategories.map((category) => (
                <div key={category.id} className="group flex flex-col p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-700 mb-4"></div>
                    <ul className="space-y-3 mb-6">
                      {category.subServices.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline decoration-2 underline-offset-4 transition-all"
                    >
                      View All Services <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* --- ACADEMY VIEW (Summary: How We Teach) --- */}
          {activeTab === 'academy' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How We Teach</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                   We offer two flexible learning modes designed to fit your schedule and learning style.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Online Option */}
                <div className="group p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/50 relative overflow-hidden flex flex-col hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                    <Laptop size={140} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Laptop size={24} /> 
                    </div>
                    Remote Learning
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow relative z-10">
                    Ideal for busy students or professionals. Join live mentorship sessions via Google Meet or Zoom. 
                    We provide screen recordings of every session, digital resources, and code reviews online.
                  </p>
                  
                  <ul className="space-y-3 mb-8 relative z-10">
                     <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"/>
                       Learn from the comfort of your home
                     </li>
                     <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"/>
                       Flexible evening & weekend slots
                     </li>
                     <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"/>
                       Budget-friendly option
                     </li>
                  </ul>
                  
                  <div className="mt-auto relative z-10">
                    <Link href="/academy" className="block w-full">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none border-transparent">
                            Explore Online Courses
                        </Button>
                    </Link>
                  </div>
                </div>

                {/* Physical Option */}
                <div className="group p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/50 relative overflow-hidden flex flex-col hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                    <MapPin size={140} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-orange-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg text-orange-600 dark:text-orange-400">
                        <MapPin size={24} /> 
                    </div>
                    Private One-on-One
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow relative z-10">
                    Premium personalized training where we come to you. Perfect for beginners who need hands-on guidance 
                    or parents who want a dedicated tutor for their kids at home.
                  </p>
                  
                  <ul className="space-y-3 mb-8 relative z-10">
                     <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"/>
                       We come to your location
                     </li>
                     <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"/>
                       100% focused attention
                     </li>
                     <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"/>
                       Hands-on hardware & typing help
                     </li>
                  </ul>
                  
                  <div className="mt-auto relative z-10">
                    <Link href="/academy" className="block w-full">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200 dark:shadow-none border-transparent">
                            Explore Private Tutoring
                        </Button>
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

export default Expertise;