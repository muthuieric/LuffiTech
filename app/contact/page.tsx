"use client";

import React from 'react';
import { HelpCircle, Clock, CheckCircle2 } from 'lucide-react';
import Contact from '../../components/sections/Contact';

export default function ContactPage() {
  
  const faqs = [
    {
      question: "Where is your office located?",
      answer: "Luffi Tech operates as a mobile-first agency. To keep costs low and convenience high, we don't have a public walk-in shop. Our technicians come directly to your home or office in Nairobi, or we connect remotely for software tasks."
    },
    {
      question: "Do you charge for consultations?",
      answer: "Initial consultations via WhatsApp or Phone are 100% free. If a physical site visit or hardware diagnostic is required, a small transport/diagnostic fee may apply, which is waived if you proceed with the service."
    },
    {
      question: "Do Academy students get certificates?",
      answer: "Yes! Upon successfully completing the 'Tech Mastery Bootcamp' and finishing your capstone project, you receive a verifiable Certificate of Completion and a reference letter for your CV."
    },
    {
      question: "How long does a website take to build?",
      answer: "A standard business website typically takes 5-10 working days. More complex custom web applications or mobile apps can take 3-6 weeks depending on the features required."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
      
      {/* 1. Main Contact Section (Reused) */}
      <Contact />

      {/* 2. FAQ Section - Added to reduce repetitive inquiries */}
      <div className="bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
              <HelpCircle size={16} />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* 3. Operational Hours Banner */}
          <div className="mt-16 p-8 bg-indigo-900 rounded-3xl text-center relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <Clock size={120} className="text-white" />
             </div>
             
             <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Working Hours</h3>
                <div className="flex flex-wrap justify-center gap-6 text-indigo-200 text-sm">
                   <span className="flex items-center gap-2">
                     <CheckCircle2 size={16} className="text-green-400"/> Mon - Fri: 8:00 AM - 6:00 PM
                   </span>
                   <span className="flex items-center gap-2">
                     <CheckCircle2 size={16} className="text-green-400"/> Saturday: 9:00 AM - 3:00 PM
                   </span>
                   <span className="flex items-center gap-2">
                     <CheckCircle2 size={16} className="text-red-400"/> Sunday: Closed
                   </span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}