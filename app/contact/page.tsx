"use client";

import React, { memo } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Contact from '@/components/sections/Contact'; // Adjust path if needed

// --- Static Data ---
const CONTACT_METHODS = [
  { 
    id: 'whatsapp',
    icon: MessageCircle, 
    title: "WhatsApp", 
    content: "+254 702 104 690",
    action: () => window.open('https://wa.me/254702104690', '_blank'),
    highlight: true,
    badge: "Online"
  },
  { 
    id: 'phone',
    icon: Phone, 
    title: "Call Us", 
    content: "+254 702 104 690",
    action: () => window.location.href = 'tel:+254702104690',
    highlight: false,
    badge: null
  },
  { 
    id: 'email',
    icon: Mail, 
    title: "Email Us", 
    content: "contact.luffitech@gmail.com",
    action: () => window.location.href = 'mailto:contact.luffitech@gmail.com',
    highlight: false,
    badge: null
  }
];

// --- Memoized Info Card ---
const ContactMethodCard = memo(({ item }: { item: typeof CONTACT_METHODS[0] }) => (
  <div 
    onClick={item.action}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && item.action()}
    className={`flex items-center gap-4 group p-4 rounded-2xl border transition-all cursor-pointer select-none
      ${item.highlight 
        ? 'bg-indigo-50 dark:bg-slate-800/50 border-indigo-100 dark:border-slate-700 hover:border-indigo-500 shadow-sm' 
        : 'bg-white dark:bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800'
      }`}
  >
    <div className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-sm 
      ${item.highlight ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
      <item.icon size={24} />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-slate-900 dark:text-white text-base truncate">{item.title}</h4>
      <p className="text-slate-600 dark:text-slate-400 font-medium truncate text-sm sm:text-base">{item.content}</p>
    </div>
    {item.badge && (
      <div className="hidden sm:block text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-300 px-2 py-1 rounded-full animate-pulse">
        {item.badge}
      </div>
    )}
  </div>
));
ContactMethodCard.displayName = "ContactMethodCard";

// --- Main Page Component ---
export default function ContactPage() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] transform-gpu" />
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Information */}
          <div className="space-y-8 animate-in slide-in-from-left-6 duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold">
                <MessageCircle size={16} />
                <span>Let's Build Something</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Get in touch with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Luffi Tech</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Whether you need enterprise software, AI automation, or want to join our coding academy, our team is ready to help you scale.
              </p>
            </div>

            <div className="space-y-3">
              {CONTACT_METHODS.map((item) => (
                <ContactMethodCard key={item.id} item={item} />
              ))}
            </div>
            
            {/* Trust Indicator */}
            <div className="pt-4 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 font-medium">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900"></div>
               </div>
               <p>Trusted by 50+ Businesses in Nairobi</p>
            </div>
          </div>

          {/* Right Column: The Form Component */}
          <div className="relative group animate-in slide-in-from-right-6 duration-700">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Using the component we created above */}
            <Contact/>
          </div>

        </div>
      </div>
    </section>
  );
}