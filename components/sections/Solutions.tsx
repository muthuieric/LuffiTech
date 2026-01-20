"use client";

import React from 'react';
import { Building2, GraduationCap, ShoppingBag, Stethoscope, ArrowRight, Layers, Puzzle, CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';

// Reusable Section Component for cleaner code
const SolutionSection = ({ id, title, description, features, icon: Icon, colorClass, iconColor, reversed }: any) => {
  
  const handleInquiry = () => {
    const message = encodeURIComponent(`Hello Luffi Tech, I am interested in your ${title} solution.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <div id={id} className={`grid md:grid-cols-2 gap-12 items-center scroll-mt-32 ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Visual Side */}
      <div className={`relative group ${reversed ? 'md:order-2' : ''}`}>
        <div className={`absolute inset-0 ${colorClass} rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-50`}></div>
        <div className={`relative ${colorClass.replace('opacity-50', '')} bg-opacity-20 backdrop-blur-sm rounded-[3rem] p-12 h-80 flex items-center justify-center border border-white/20 dark:border-white/5 shadow-xl`}>
           <Icon size={120} className={`${iconColor} drop-shadow-lg group-hover:scale-110 transition-transform duration-500`} />
        </div>
      </div>

      {/* Content Side */}
      <div className={reversed ? 'md:order-1' : ''}>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 ${colorClass} bg-opacity-20`}>
           <Layers size={14} className={iconColor} />
           <span className={`text-xs font-bold uppercase tracking-wider ${iconColor}`}>Industry Package</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-4 mb-8">
          {features.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
              <CheckCircle2 size={20} className={`mt-0.5 shrink-0 ${iconColor}`} />
              {item}
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={handleInquiry}
          className="shadow-lg hover:shadow-xl transition-shadow"
          icon={ArrowRight}
        >
          Request Proposal
        </Button>
      </div>
    </div>
  );
};

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header / Explanation */}
      <div className="text-center mb-24 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
          <Puzzle size={16} />
          <span>Services vs. Solutions</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">
          Industry-Specific Solutions
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-slate-700 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">What's the difference?</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center text-left">
               <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    <span className="block font-bold text-indigo-600 dark:text-indigo-400 mb-1">"Services" are the tools</span> 
                    Like hiring a carpenter. You tell us to write code, design a logo, or fix a laptop.
                  </p>
               </div>
               <ArrowRight className="hidden md:block text-slate-300" />
               <div className="flex-1 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    <span className="block font-bold text-indigo-600 dark:text-indigo-400 mb-1">"Solutions" are the finished house</span> 
                    Complete, ready-made packages (Software + Hardware + Training) designed for your specific industry.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions List */}
      <div className="space-y-32">
        
        <SolutionSection 
          id="gov"
          title="E-Government Portals"
          description="We build secure digital gateways that allow citizens to access government services online. From license renewals to tax filing, we reduce queues and increase transparency."
          features={["Biometric Data Integration", "Secure Payment Processing (M-Pesa/Bank)", "Audit Trails & Compliance Reporting"]}
          icon={Building2}
          colorClass="bg-indigo-100 dark:bg-indigo-900/20"
          iconColor="text-indigo-600 dark:text-indigo-400"
          reversed={false}
        />

        <SolutionSection 
          id="edu"
          title="Education Management Systems"
          description="Comprehensive platforms for schools and universities. Manage admissions, grades, e-learning content, and fee payments in one unified dashboard."
          features={["Student & Parent Portals", "Online Exam & Grading Modules", "Fee Collection & Receipting"]}
          icon={GraduationCap}
          colorClass="bg-green-100 dark:bg-green-900/20"
          iconColor="text-green-600 dark:text-green-400"
          reversed={true}
        />

        <SolutionSection 
          id="retail"
          title="Retail & E-Commerce"
          description="Turn your local shop into a global brand. We provide inventory systems connected to online storefronts with automated local payment integrations."
          features={["Real-time Stock Management", "WhatsApp Order Bots", "Customer Loyalty Programs"]}
          icon={ShoppingBag}
          colorClass="bg-orange-100 dark:bg-orange-900/20"
          iconColor="text-orange-600 dark:text-orange-400"
          reversed={false}
        />

        <SolutionSection 
          id="health"
          title="Telemedicine & Clinics"
          description="Modernize your healthcare practice. We build systems for patient booking, digital records, and remote consultations."
          features={["Patient Electronic Records (EMR)", "Appointment Scheduling", "Tele-consultation Video Integration"]}
          icon={Stethoscope}
          colorClass="bg-cyan-100 dark:bg-cyan-900/20"
          iconColor="text-cyan-600 dark:text-cyan-400"
          reversed={true}
        />

      </div>
    </div>
  );
}