"use client";

import React, { useState, useCallback, memo } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

// --- Static Data (Moved outside to prevent re-creation on render) ---

const SERVICE_GROUPS = [
  {
    label: "Engineering & Mobile",
    options: [
      { value: "web", label: "Web Development & Ecosystems" },
      { value: "mobile", label: "Mobile Apps & USSD Solutions" },
      { value: "payments", label: "M-Pesa & Payment Integrations" },
      { value: "mis", label: "MIS & Management Systems" }
    ]
  },
  {
    label: "AI & Data",
    options: [
      { value: "ai", label: "AI & Smart Automation" },
      { value: "data", label: "Data Analytics & BI" },
      { value: "vibe", label: "Vibe Coding & AI Support" }
    ]
  },
  {
    label: "Design & Growth",
    options: [
      { value: "design", label: "Graphic Design & Branding" },
      { value: "uiux", label: "UI/UX & Product Design" },
      { value: "marketing", label: "Digital Marketing & Growth" }
    ]
  },
  {
    label: "Infrastructure & Academy",
    options: [
      { value: "cloud", label: "Cloud Infrastructure & DevOps" },
      { value: "support", label: "IT Support & Security" },
      { value: "academy", label: "Luffi Tech Academy (Training)" }
    ]
  }
];

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
    title: "Call Us (Fastest)", 
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

// --- Memoized Sub-Components ---

const SubmitButton = memo(({ isLoading, isSuccess, className = "", ...props }: any) => (
  <button 
    className={`flex items-center justify-center gap-2 rounded-xl font-bold transition-all active:scale-95 shadow-lg 
      ${isSuccess 
        ? 'bg-green-600 hover:bg-green-700 text-white cursor-default' 
        : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/25'} 
      ${className}`}
    disabled={isLoading || isSuccess} 
    {...props}
  >
    {isLoading ? (
      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
    ) : isSuccess ? (
      <>
        <CheckCircle size={20} /> Message Sent!
      </>
    ) : (
      <>
        Send Message <Send size={18} />
      </>
    )}
  </button>
));
SubmitButton.displayName = "SubmitButton";

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

// --- Main Component ---

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API Latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('success');
    
    // Reset form status after 5 seconds to allow new submissions
    setTimeout(() => setFormStatus('idle'), 5000);
  }, []);

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* Background Decorator - Optimized with hardware acceleration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] transform-gpu" />
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Context & Methods */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold">
                <MessageCircle size={16} />
                <span>Let's Build Something</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Get in touch with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Luffi Tech</span>
              </h2>
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

          {/* Right Column: High Performance Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      id="name" 
                      name="name"
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      id="email" 
                      name="email"
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-slate-700 dark:text-slate-300">What are you interested in?</label>
                  <div className="relative">
                    <select 
                        id="service" 
                        name="service"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a Service...</option>
                        {SERVICE_GROUPS.map((group) => (
                        <optgroup key={group.label} label={group.label} className="dark:bg-slate-900">
                            {group.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </optgroup>
                        ))}
                        <option value="other">Other Inquiry</option>
                    </select>
                    {/* Custom Arrow for consistency */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    required 
                    id="message" 
                    name="message"
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400" 
                    placeholder="Tell us more about your project or learning goals..."
                  ></textarea>
                </div>

                <SubmitButton 
                  isLoading={formStatus === 'submitting'} 
                  isSuccess={formStatus === 'success'}
                  className="w-full py-4 text-lg"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}