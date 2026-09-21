"use client";

import React, { useState, memo } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- Service Quick-Select Categories ---
const SERVICE_PILLS = [
  "Web Application",
  "Mobile App & USSD",
  "M-Pesa Integration",
  "AI & Automation",
  "Tech Academy",
  "Other Inquiry"
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Application",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePillSelect = (serviceName: string) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setStatus('success');
      setFormData({ name: "", email: "", phone: "", service: "Web Application", message: "" });
      
      setTimeout(() => setStatus('idle'), 6000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-slate-200/90 dark:border-slate-800 shadow-xl transition-all duration-300">
      
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Send an Inquiry
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Quick Service Category Selector */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
            What are you looking to build or solve?
          </label>
          <div className="flex flex-wrap gap-2">
            {SERVICE_PILLS.map((pill) => {
              const isSelected = formData.service === pill;
              return (
                <button
                  type="button"
                  key={pill}
                  onClick={() => handlePillSelect(pill)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer border
                    ${isSelected 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/20' 
                      : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>

        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input 
              required 
              type="text" 
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-sm font-normal" 
              placeholder="e.g. Joe Doe" 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input 
              required 
              type="email" 
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-sm font-normal" 
              placeholder="e.g. you@company.com" 
            />
          </div>
        </div>

        {/* Phone / WhatsApp Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center justify-between">
            <span>Phone or WhatsApp Number</span>
            <span className="text-[11px] text-slate-400 font-normal lowercase tracking-normal">optional</span>
          </label>
          <input 
            type="tel" 
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-sm font-normal" 
            placeholder="e.g. +254 700 000 000" 
          />
        </div>

        {/* Message Area */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Tell us about your goals or requirements <span className="text-rose-500">*</span>
          </label>
          <textarea 
            required 
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all resize-none placeholder:text-slate-400 text-sm leading-relaxed font-normal" 
            placeholder="Share your goals, current challenges, target launch timeframe, or questions. Even a high-level overview is plenty."
          ></textarea>
        </div>

        {/* Submit Button with Tactile Physics */}
        <div>
          <button 
            type="submit" 
            disabled={isSubmitting || status === 'success'}
            className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ease-out flex items-center justify-center gap-2.5 shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:hover:translate-y-0 disabled:active:scale-100 disabled:cursor-not-allowed
              ${status === 'success' 
                ? 'bg-emerald-600 text-white shadow-emerald-500/20' 
                : status === 'error'
                ? 'bg-rose-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/35'
              }
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Delivering your inquiry...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle size={18} /> Inquiry Received. We will reach out shortly.
              </>
            ) : status === 'error' ? (
              <>
                <AlertCircle size={18} /> Delivery failed. Please try again or use WhatsApp.
              </>
            ) : (
              <>
                <span>Submit Inquiry</span> <Send size={16} />
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-center text-rose-500 text-sm mt-3 font-medium animate-in fade-in">
              Please email us directly at contact.luffitech@gmail.com or message us on WhatsApp.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default memo(ContactForm);