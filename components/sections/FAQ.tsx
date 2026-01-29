"use client";

import React, { useState, useCallback, memo } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

// --- Static Data (Moved outside to prevent re-creation on render) ---

const FAQ_DATA = [
  {
    question: "Can you automate my business processes with AI?",
    answer: "Absolutely. We specialize in building custom AI Agents and automation workflows (using tools like n8n and LLMs) that handle repetitive tasks, customer support, and data entry, allowing you to focus on growth."
  },
  {
    question: "Do you build custom M-Pesa integration systems?",
    answer: "Yes, we are experts in the Daraja API. We build custom payment systems for restaurants, shops, and e-commerce sites that automate payment confirmation, receipt generation, and balance reconciliation."
  },
  {
    question: "Do you build management systems for Schools or SACCOs?",
    answer: "Yes, we develop comprehensive Management Information Systems (MIS) and ERPs tailored for schools, SACCOs, and hospitals. These include features for member/student tracking, financial reporting, and automated billing."
  },
  {
    question: "Can you build apps that work on basic phones (USSD)?",
    answer: "Definitely. We develop USSD and SMS-based applications that allow you to reach customers who may not have smartphones or stable internet, ensuring your service is accessible to the widest possible audience."
  },
  {
    question: "Do you offer support after the project is finished?",
    answer: "Yes, we believe in long-term partnerships. We provide tailored maintenance packages to ensure your software remains secure, updated, and performs optimally long after deployment."
  }
];

// Pre-calculate JSON-LD to avoid runtime calculation
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// --- Memoized Child Component ---

interface FAQItemProps {
  item: typeof FAQ_DATA[0];
  isOpen: boolean;
  index: number;
  onToggle: (index: number) => void;
}

const FAQItem = memo(({ item, isOpen, index, onToggle }: FAQItemProps) => {
  const labelId = `accordion-label-${index}`;
  const contentId = `accordion-content-${index}`;

  return (
    <div 
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen 
          ? 'bg-white dark:bg-slate-800 shadow-lg border-indigo-100 dark:border-indigo-900/50' 
          : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800'
        }`}
    >
      <button 
        id={labelId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={() => onToggle(index)}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500/20 rounded-2xl"
      >
        <span className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`}>
          {item.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      
      {/* CSS Grid Animation Trick: Animate from 0fr to 1fr */}
      <div 
        id={contentId}
        role="region"
        aria-labelledby={labelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden min-h-0">
          <p className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base border-t border-slate-100 dark:border-slate-700/50 pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
});
FAQItem.displayName = "FAQItem";

// --- Main Component ---

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // useCallback ensures this function reference doesn't change on re-renders
  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
         <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
         <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800">
            <HelpCircle size={14} /> Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Answers to common questions about our services and solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <FAQItem 
              key={idx} 
              index={idx}
              item={item}
              isOpen={openIndex === idx} 
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);