"use client";

import React, { useState, useMemo, useCallback, memo } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight, ShieldCheck, Clock, FileCode, CheckCircle2 } from 'lucide-react';

// --- Comprehensive Categorized FAQ Data ---

const CATEGORIES = [
  "All",
  "Process & Pricing",
  "Engineering & Payments",
  "AI & Automation",
  "Academy & Training"
] as const;

type CategoryType = typeof CATEGORIES[number];

interface FAQItemData {
  category: CategoryType;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItemData[] = [
  {
    category: "Process & Pricing",
    question: "Do I own 100% of the source code and Intellectual Property?",
    answer: "Yes, completely. Once the project is delivered and settled, all source code, repository rights, database schemas, and intellectual property belong entirely to you. We do not lock you into closed proprietary systems, and we provide clean documentation so any engineer can maintain it."
  },
  {
    category: "Process & Pricing",
    question: "How do your pricing models and milestone payments work?",
    answer: "We believe in honest, transparent pricing with zero surprise fees. Projects are billed on clearly defined milestones (typically a kickoff deposit, mid-way review of working software, and final deployment milestone). You always see real deliverables before moving to the next phase."
  },
  {
    category: "Process & Pricing",
    question: "How long does a typical custom software build take?",
    answer: "A focused web application, business platform, or M-Pesa payment portal typically takes 3 to 6 weeks. Larger enterprise architectures or multi-platform mobile apps generally take 6 to 10 weeks. We establish a firm delivery schedule before starting work."
  },
  {
    category: "Engineering & Payments",
    question: "How does your custom M-Pesa (Daraja API) integration work?",
    answer: "We connect directly to Safaricom Daraja API for automated STK Push prompts, C2B paybill/till confirmation callbacks, and B2C automated payouts. Transactions reconcile instantly into your database or accounting sheet, eliminating manual receipt checks."
  },
  {
    category: "Engineering & Payments",
    question: "Can you build applications that work on basic feature phones (USSD)?",
    answer: "Yes. We engineer offline-capable USSD and automated SMS applications through telecom gateways. This enables users across Kenya and East Africa to interact with your services, register accounts, and authorize transactions even without smartphones or internet access."
  },
  {
    category: "Engineering & Payments",
    question: "What technical stacks do you use for software development?",
    answer: "We use modern, battle-tested technologies suited for long-term scalability: Next.js, React, and Tailwind for responsive frontends; Python (Django / FastAPI) and Node.js for high-performance backends; and PostgreSQL or MongoDB for robust databases."
  },
  {
    category: "AI & Automation",
    question: "How can practical AI and workflow automation help my business?",
    answer: "Rather than AI hype, we implement practical efficiency tools: automated customer inquiry bots on WhatsApp, document extraction from PDF invoices, automated data entry between software tools (using n8n/Python), and business intelligence dashboards that give you real-time visibility."
  },
  {
    category: "AI & Automation",
    question: "Is our proprietary business data secure with your AI integrations?",
    answer: "Strictly confidential and secure. We implement private API configurations and isolated database vectors where your data is never used to train public models. Non-disclosure agreements (NDAs) are standard practice for all client engagements."
  },
  {
    category: "Academy & Training",
    question: "How does the Practical Tech for Kids (Ages 7-18) program work?",
    answer: "We offer both in-person home tutoring across Nairobi and live interactive online sessions. A patient, vetted mentor guides students through Scratch visual programming, Python fundamentals, logic puzzles, and building real games."
  },
  {
    category: "Academy & Training",
    question: "Do you offer post-launch support and system maintenance?",
    answer: "Yes. We view our clients as long-term partners. We provide monthly maintenance retainers covering security patches, cloud server monitoring, database backups, and feature enhancements as your business scales."
  }
];

// Pre-calculate JSON-LD for search engine crawling
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

// --- Memoized Child Accordion Item ---

interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  index: number;
  onToggle: (index: number) => void;
}

const FAQItem = memo(({ item, isOpen, index, onToggle }: FAQItemProps) => {
  const labelId = `accordion-label-${index}`;
  const contentId = `accordion-content-${index}`;

  return (
    <div 
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ease-out
        ${isOpen 
          ? 'bg-white dark:bg-slate-800/90 shadow-md border-indigo-200 dark:border-indigo-900/60 ring-1 ring-indigo-500/10' 
          : 'bg-white dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
        }`}
    >
      <button 
        id={labelId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={() => onToggle(index)}
        className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
      >
        <div className="pr-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
            {item.category}
          </span>
          <span className={`text-base sm:text-lg font-bold transition-colors duration-200 ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`}>
            {item.question}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'bg-indigo-600 text-white rotate-180 shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 group-hover:text-indigo-600'}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      
      {/* Smooth CSS Grid Height Transition */}
      <div 
        id={contentId}
        role="region"
        aria-labelledby={labelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden min-h-0">
          <p className="px-6 sm:px-7 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-100 dark:border-slate-700/50 pt-4 font-normal">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
});
FAQItem.displayName = "FAQItem";

// --- Main FAQ Component ---

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return FAQ_DATA;
    return FAQ_DATA.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    setOpenIndex(0); // Open first item in selected category
  };

  return (
    <section className="py-4 lg:py-4 bg-[#F8FAFC] dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden" id="faq">
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-4">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            Direct, straightforward details on our software engineering standards, source code ownership, M-Pesa setups, and mentorship.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer border
                ${selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-14">
          {filteredItems.map((item, idx) => (
            <FAQItem 
              key={item.question} 
              index={idx}
              item={item}
              isOpen={openIndex === idx} 
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Reassuring Trust & Direct Question Callout Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Have a specific question about your project?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
              Talk directly with our development team—no sales scripts, just honest technical advice.
            </p>
          </div>
          <button
            onClick={() => window.open('https://wa.me/254702104690?text=Hello Luffi Tech, I have a question regarding a project.', '_blank')}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Whatsapp us</span> <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default memo(FAQ);