"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Laptop, Clock, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const contactMethods = [
    { 
      icon: MessageCircle, 
      title: "WhatsApp (Fastest)", 
      content: "+254 700 000 000",
      action: () => window.open('https://wa.me/254700000000', '_blank'),
      highlight: true
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      content: "+254 700 000 000",
      action: () => window.location.href = 'tel:+254700000000',
      highlight: false
    },
    { 
      icon: Mail, 
      title: "Email Us", 
      content: "info@luffitech.com",
      action: () => window.location.href = 'mailto:info@luffitech.com',
      highlight: false
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <MessageCircle size={16} />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Great Together</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Whether you need a custom app, your office computers fixed, or want to join our coding bootcamp, we are just a message away.
            </p>

            {/* Location / Operational Model Notice */}
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800/30 mb-10">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-amber-600" /> We Come To You!
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Luffi Tech</strong> operates as a mobile-first agency. We do not have a physical walk-in shop. 
                For IT support and training, our experts travel to your <strong>home or office</strong> within Nairobi and its environs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={item.action}
                  className={`flex items-center gap-4 group p-4 rounded-2xl border transition-all cursor-pointer
                    ${item.highlight 
                      ? 'bg-indigo-50 dark:bg-slate-800 border-indigo-100 dark:border-slate-700 hover:border-indigo-500 shadow-sm' 
                      : 'bg-white dark:bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                >
                  <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 shadow-sm ${item.highlight ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{item.content}</p>
                  </div>
                  {item.highlight && <div className="ml-auto text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full animate-pulse">Online</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
             {/* Decorative blob behind form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] blur-xl opacity-20 transform rotate-2"></div>
            
            <div className="relative bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-300">Full Name</label>
                    <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-slate-300">Email Address</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-900 dark:text-slate-300">What are you interested in?</label>
                  <select id="service" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a Service...</option>
                    <option value="software">Software / Web / App Development</option>
                    <option value="academy">Academy: Bootcamp or Private Tutor</option>
                    <option value="support">On-Site IT Support / Repair</option>
                    <option value="design">Graphic Design / Branding</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-slate-300">Message</label>
                  <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Tell us more about your project or learning goals..."></textarea>
                </div>

                <Button 
                  type="submit" 
                  className={`w-full py-4 text-lg ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700 border-green-600' : ''}`}
                  isLoading={formStatus === 'submitting'}
                  icon={formStatus === 'success' ? CheckCircle : Send}
                  disabled={formStatus === 'success'}
                >
                  {formStatus === 'success' ? 'Message Sent Successfully!' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;