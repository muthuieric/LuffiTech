"use client";

import React, { useState, memo } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- Service Options Data ---
const SERVICE_GROUPS = [
  {
    label: "Engineering & Mobile",
    options: [
      { value: "web", label: "Web Development" },
      { value: "mobile", label: "Mobile Apps (iOS/Android)" },
      { value: "payments", label: "M-Pesa Integrations" },
      { value: "mis", label: "Management Systems (MIS)" }
    ]
  },
  {
    label: "AI & Data",
    options: [
      { value: "ai", label: "AI Agents & Automation" },
      { value: "data", label: "Data Analytics & BI" },
      { value: "vibe", label: "Vibe Coding Support" }
    ]
  },
  {
    label: "Design & Growth",
    options: [
      { value: "design", label: "Graphic Design & Branding" },
      { value: "uiux", label: "UI/UX Design" },
      { value: "marketing", label: "Digital Marketing" }
    ]
  },
  {
    label: "Infrastructure & Academy",
    options: [
      { value: "cloud", label: "Cloud & DevOps" },
      { value: "academy", label: "Luffi Tech Academy (Training)" }
    ]
  }
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
      setFormData({ name: "", email: "", service: "", message: "" });
      
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send us a Message</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
            <input 
              required 
              type="text" 
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400" 
              placeholder="" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
            <input 
              required 
              type="email" 
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400" 
              placeholder="eric@example.com" 
            />
          </div>
        </div>
        
        {/* Service Selection - FIXED COLOR CLASSES */}
        <div className="space-y-2">
          <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-500">Interest</label>
          <div className="relative">
            <select 
                name="service"
                id="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none cursor-pointer"
            >
                <option value="" disabled className="text-slate-400 dark:text-slate-500">Select a Service...</option>
                {SERVICE_GROUPS.map((group) => (
                  <optgroup 
                    key={group.label} 
                    label={group.label} 
                    className="text-slate-900 dark:text-slate-200 dark:bg-slate-900 font-bold"
                  >
                      {group.options.map((opt) => (
                        <option 
                          key={opt.value} 
                          value={opt.label}
                          className="text-slate-700 dark:text-white bg-white dark:bg-slate-800 py-1"
                        >
                          {opt.label}
                        </option>
                      ))}
                  </optgroup>
                ))}
                <option value="Other" className="text-slate-700 dark:text-white dark:bg-slate-800">Other Inquiry</option>
            </select>
            {/* Custom Arrow */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {/* Message Area */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
          <textarea 
            required 
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-slate-400" 
            placeholder="Tell us about your project requirements..."
          ></textarea>
        </div>

        {/* Submit Button & Status */}
        <div>
          <button 
            type="submit" 
            disabled={isSubmitting || status === 'success'}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg
              ${status === 'success' 
                ? 'bg-green-600 text-white cursor-default' 
                : status === 'error'
                ? 'bg-rose-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25'
              }
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle size={20} /> Message Sent Successfully!
              </>
            ) : status === 'error' ? (
              <>
                <AlertCircle size={20} /> Failed. Try Again.
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
          
          {status === 'error' && (
            <p className="text-center text-rose-500 text-sm mt-3 font-medium animate-in fade-in">
              Something went wrong. Please email us directly at contact.luffitech@gmail.com
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default memo(ContactForm);