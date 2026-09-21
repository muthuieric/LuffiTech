"use client";

import React from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin
} from 'lucide-react';
import Contact from '@/components/sections/Contact';
import ScrollReveal from '@/components/ui/ScrollReveal';

// --- Direct Communication Channels ---
interface ContactChannel {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  content: string;
  actionText: string;
  action: () => void;
  highlight: boolean;
  badge?: string | null;
}

const CONTACT_CHANNELS: ContactChannel[] = [
  { 
    id: 'whatsapp',
    icon: MessageCircle, 
    title: "WhatsApp", 
    content: "+254 702 104 690",
    actionText: "Chat on WhatsApp",
    action: () => window.open('https://wa.me/254702104690', '_blank'),
    highlight: true,
  },
  { 
    id: 'phone',
    icon: Phone, 
    title: "Direct Phone Line", 
    subtitle: "24hrs Call",
    content: "+254 702 104 690",
    actionText: "Call Direct",
    action: () => window.location.href = 'tel:+254702104690',
    highlight: false,
    badge: null
  },
  { 
    id: 'email',
    icon: Mail, 
    title: "Email", 
    content: "contact.luffitech@gmail.com",
    actionText: "Send Email",
    action: () => window.location.href = 'mailto:contact.luffitech@gmail.com',
    highlight: false,
    badge: null
  },
  {
    id: 'location',
    icon: MapPin,
    title: "Headquarters",
    content: "Nairobi, Kenya",
    actionText: "Based in Nairobi",
    action: () => {},
    highlight: false,
  }
];

// --- 3-Step Process After Reaching Out ---
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Rapid Technical Review",
    timing: "Within 2 Hours",
    description: "An engineering lead reviews your requirements, checks architectural feasibility, and flags potential optimizations or integrations."
  },
  {
    number: "02",
    title: "Discovery & Alignment Call",
    timing: "30-Min Consultation",
    description: "We discuss key user flows, payment gateways (M-Pesa / cards), infrastructure targets, timelines, and budget expectations."
  },
  {
    number: "03",
    title: "Milestone Proposal & Roadmap",
    timing: "Delivered in 24-48 Hours",
    description: "You receive a clear, milestone-driven development roadmap with transparent pricing, specific deliverables, and no surprise costs."
  }
];

export default function ContactPage() {
  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden text-slate-900 dark:text-white">
      
      {/* Subtle Background Accent Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] right-[8%] w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[120px] transform-gpu" />
        <div className="absolute top-[45%] left-[5%] w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[100px] transform-gpu" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[90px] transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-24">
        
        {/* Main Grid: Headline & Channels (Left) + Form (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hero Section */}
            <ScrollReveal direction="up" delay={50}>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.15] mb-4">
                  Let&apos;s build software that <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">
                    delivers measurable impact.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Whether you need to launch a high-performance web or mobile platform, integrate M-Pesa automated billing, automate core operations, or enroll in our tech academy, our engineering leads in Nairobi are here to guide you.
                </p>
              </div>
            </ScrollReveal>

            {/* Communication Channels */}
            <ScrollReveal direction="up" delay={100}>
              <div className="space-y-3 pt-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">
                  Direct Contact Channels
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {CONTACT_CHANNELS.map((item) => (
                    <div
                      key={item.id}
                      onClick={item.action}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && item.action()}
                      className={`flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all duration-300 ease-out select-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                        item.highlight
                          ? 'bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/80 shadow-sm hover:shadow-md hover:border-indigo-500'
                          : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 transition-transform duration-300 ${
                        item.highlight 
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        <item.icon size={20} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                            {item.title}
                          </h3>
                          {item.badge && (
                            <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.subtitle && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                        <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mt-1 flex items-center gap-1.5">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={120}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.3rem] blur-lg opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none"></div>
                <Contact />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Next Section: What Happens After You Reach Out? */}
        <div className="pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Transparent Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-1 mb-2">
                What happens after you reach out?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                We believe in zero sales friction and complete clarity from your very first message.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.number} direction="up" delay={idx * 100}>
                <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm relative h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-slate-300 dark:text-slate-700 tracking-tight">
                        {step.number}
                      </span>
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/30">
                        {step.timing}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}