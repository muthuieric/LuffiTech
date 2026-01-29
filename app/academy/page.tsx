"use client";

import React from 'react';
import { Laptop, MapPin, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Academy from '../../components/sections/Academy';

// Helper for WhatsApp link
const handleWhatsAppInquiry = (mode: string) => {
  const message = encodeURIComponent(`Hello Luffi Tech, I am interested in the ${mode} learning option.`);
  window.open(`https://wa.me/254702104690?text=${message}`, '_blank');
};

export default function AcademyPage() {
  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-950 min-h-screen">
      
      {/* 1. ACADEMY HERO */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 dark:from-indigo-900/20 to-transparent -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Learn to Build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Future.</span>
           </h1>
           <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
             
             <br/>
             We don't just teach you syntax; we teach you how to build real software. 
             From <b>writing your first line of code</b> to <b>deploying enterprise apps</b>.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('bootcamp')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-xl shadow-indigo-600/20 hover:scale-105 transition-transform"
              >
                Browse Courses
              </button>
              <button 
                onClick={() => document.getElementById('modes')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                How It Works
              </button>
           </div>
        </div>
      </div>

      {/* 2. MAIN COURSE LISTINGS */}
      <Academy />
      
      {/* 3. LEARNING MODES (How We Teach) */}
      <div id="modes" className="py-24 border-t border-slate-200 dark:border-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Choose Your Classroom</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We offer two flexible learning modes designed to fit your schedule and learning style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* ONLINE OPTION */}
            <div className="group p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform-gpu hover:-translate-y-1">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Laptop size={32} />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  Remote Learning
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                   
                   <br/>
                   Ideal for busy students or professionals. Join live mentorship sessions via Google Meet. 
                   Includes screen recordings, digital resources, and code reviews.
                </p>

                <ul className="space-y-4 mb-10">
                   {["Learn from comfort of home", "Evening & Weekend slots", "Budget-friendly option", "Recorded Sessions"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                       <CheckCircle2 size={18} className="text-indigo-500" />
                       {item}
                     </li>
                   ))}
                </ul>

                <button 
                  onClick={() => handleWhatsAppInquiry('Remote Learning')}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-indigo-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Book Online Session <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* PHYSICAL OPTION */}
            <div className="group p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform-gpu hover:-translate-y-1">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <MapPin size={32} />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  Private One-on-One
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                  
                  <br/>
                  Premium personalized training where we come to you. Perfect for beginners who need hands-on guidance, 
                  or parents who want a dedicated tutor for their kids.
                </p>

                <ul className="space-y-4 mb-10">
                   {["We come to your location", "100% focused attention", "Hands-on hardware help", "Customized Pace"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                       <CheckCircle2 size={18} className="text-orange-500" />
                       {item}
                     </li>
                   ))}
                </ul>

                <button 
                   onClick={() => handleWhatsAppInquiry('One-on-One')}
                   className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 rounded-xl font-bold uppercase tracking-widest shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Request Home Tutor <Zap size={16} />
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}