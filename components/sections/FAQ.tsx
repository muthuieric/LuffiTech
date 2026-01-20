import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900 dark:text-white pr-8 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {question}
        </span>
        <span className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Do you have a physical shop I can visit?",
      answer: "No, we operate as a mobile-first agency. This means we save on rent costs to keep our prices low for you. For computer repairs or tutorials, our technicians and tutors come directly to your home or office within Nairobi, or we assist you remotely via online tools."
    },
    {
      question: "How do the 'One-on-One' coding classes work?",
      answer: "You book a slot, and one of our expert mentors comes to your location. This allows for 100% personalized attention, which is especially great for children (CBC Tech) or beginners who need help setting up their environment. We also offer online sessions via Zoom/Google Meet."
    },
    {
      question: "Can you fix my computer if I live outside Nairobi?",
      answer: "For hardware repairs (like screen replacement), we primarily serve Nairobi and its environs. However, for software issues (virus removal, installation, optimization), we can help you remotely using secure tools like TeamViewer or Anydesk, no matter where you are."
    },
    {
      question: "Do you build websites for small businesses?",
      answer: "Absolutely! We specialize in affordable, high-performance websites for small businesses. We also help with M-Pesa integration, domain registration, and setting up professional business emails to give your brand a credible look."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
            <HelpCircle size={28} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about our mobile services.</p>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 px-8 hover:shadow-md transition-shadow">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;