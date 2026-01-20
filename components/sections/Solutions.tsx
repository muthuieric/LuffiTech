"use client";

import React from 'react';
import { Building2, GraduationCap, ShoppingBag, Stethoscope, ArrowRight, Layers, Puzzle } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header / Explanation */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
          <Puzzle size={16} />
          <span>Services vs. Solutions</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Industry-Specific Solutions
        </h1>
        <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <span className="font-bold text-indigo-600 dark:text-indigo-400">Think of "Services" as the tools</span> (coding, hosting, design). 
            <br />
            <span className="font-bold text-indigo-600 dark:text-indigo-400">"Solutions" are the finished houses</span> built with those tools. 
            We combine our technical services into complete, ready-to-deploy packages tailored for your specific industry.
          </p>
        </div>
      </div>

      {/* Solutions List */}
      <div className="space-y-24">
        
        {/* Solution 1: E-Gov */}
        <div id="gov" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32">
          <div className="bg-indigo-100 dark:bg-indigo-900/20 rounded-3xl p-8 h-80 flex items-center justify-center">
             <Building2 size={120} className="text-indigo-600 dark:text-indigo-400 opacity-80" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">E-Government Portals</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
              We build secure digital gateways that allow citizens to access government services online. From license renewals to tax filing, we reduce queues and increase transparency.
            </p>
            <ul className="space-y-3 mb-8">
              {["Biometric Integration", "Secure Payment Processing", "Audit Trails & Reporting"].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Layers size={16} className="text-indigo-500" /> {item}
                </li>
              ))}
            </ul>
            <Button>Digitize Your Agency</Button>
          </div>
        </div>

        {/* Solution 2: Education */}
        <div id="edu" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32 md:flex-row-reverse">
          <div className="order-1 md:order-2 bg-green-100 dark:bg-green-900/20 rounded-3xl p-8 h-80 flex items-center justify-center">
             <GraduationCap size={120} className="text-green-600 dark:text-green-400 opacity-80" />
          </div>
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Education Management Systems</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
              Comprehensive platforms for schools and universities. Manage admissions, grades, e-learning content, and fee payments in one unified dashboard.
            </p>
            <ul className="space-y-3 mb-8">
              {["Student Portals", "Online Exam Modules", "Parent/Guardian Apps"].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Layers size={16} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
            <Button className="bg-green-600 hover:bg-green-700">Explore EdTech</Button>
          </div>
        </div>

        {/* Solution 3: Retail */}
        <div id="retail" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32">
          <div className="bg-orange-100 dark:bg-orange-900/20 rounded-3xl p-8 h-80 flex items-center justify-center">
             <ShoppingBag size={120} className="text-orange-600 dark:text-orange-400 opacity-80" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Retail & E-Commerce</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
              Turn your local shop into a global brand. We provide inventory systems connected to online storefronts with local payment integrations like M-Pesa.
            </p>
            <ul className="space-y-3 mb-8">
              {["Real-time Stock Management", "WhatsApp Order Integration", "Loyalty Programs"].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Layers size={16} className="text-orange-500" /> {item}
                </li>
              ))}
            </ul>
            <Button className="bg-orange-600 hover:bg-orange-700">Launch Store</Button>
          </div>
        </div>

      </div>
    </div>
  );
}