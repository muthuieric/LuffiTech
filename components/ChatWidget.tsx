"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, Loader2, ArrowRight } from 'lucide-react';
import icononly2 from '@/public/icon_only2.png';

// --- Types ---
type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: { label: string; action: string }[];
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  // State for the delayed welcoming popup bubble
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Initial State - Professional, clear, no emojis
  const initialMessage: Message = {
    id: '1',
    type: 'bot',
    text: "Welcome to Luffi Tech. How can our team assist your business or learning goals today?",
    options: [
      { label: "Start a Project", action: "project" },
      { label: "Explore Services", action: "services_list" },
      { label: "Luffi Tech Academy", action: "academy" },
      { label: "Support & Inquiries", action: "other_menu" },
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Trigger the professional welcome popup after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOptionClick = (action: string, label: string) => {
    if (!isOpen) {
      setIsOpen(true);
      setShowTooltip(false);
    }

    // 1. Add User Selection
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: label };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simulate Bot Response
    setTimeout(() => {
      let botResponse: Message;

      switch (action) {
        case "project":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We specialize in custom engineering and practical automation. Which area best aligns with your project?",
            options: [
              { label: "Web & Custom Software", action: "web_dev" },
              { label: "Mobile Apps & USSD", action: "mobile_dev" },
              { label: "M-Pesa & Payment Gateways", action: "payments" },
              { label: "AI & Process Automation", action: "ai_service" },
              { label: "More Options...", action: "services_list" }
            ]
          };
          break;

        case "academy":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Luffi Tech Academy provides hands-on, practical mentorship in software development. Which learning format do you prefer?",
            options: [
              { label: "Remote Online Classes", action: "link_academy" },
              { label: "Private In-Person Tutoring", action: "link_academy" },
              { label: "Tech for Kids (Ages 7-18)", action: "link_academy" },
              { label: "Return to Main Menu", action: "restart" }
            ]
          };
          break;

        case "other_menu":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Here are additional resources and communication channels:",
            options: [
              { label: "Pricing Estimates", action: "pricing" },
              { label: "Direct Support Channel", action: "support" },
              { label: "Careers & Talent Pool", action: "careers" },
              { label: "Return to Main Menu", action: "restart" }
            ]
          };
          break;

        case "services_list":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Select a core capability to review our technical approach and stacks:",
            options: [
              { label: "Web Development", action: "web_dev" },
              { label: "Mobile & USSD Systems", action: "mobile_dev" },
              { label: "AI & Process Automation", action: "ai_service" },
              { label: "Brand Identity & UI/UX", action: "design_service" },
              { label: "M-Pesa & Payments", action: "payments" },
              { label: "Return to Main Menu", action: "restart" }
            ]
          };
          break;

        case "web_dev":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We engineer production-grade Web Applications, Client Portals, and MIS Systems using Next.js, Python, and PostgreSQL.\n\nWould you like to connect directly with an engineer?",
            options: [
              { label: "Connect on WhatsApp", action: "whatsapp_project" },
              { label: "View Solutions Directory", action: "link_services" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "mobile_dev":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We develop native iOS and Android applications, as well as offline-capable USSD menus designed for mass-market reach across East Africa.",
            options: [
              { label: "Request a Proposal", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "ai_service":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We construct custom AI agents, automated RAG pipelines, and automated customer workflows that eliminate repetitive operational overhead.",
            options: [
              { label: "Discuss Automation", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "design_service":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "From cohesive brand identities to intuitive UI/UX product prototypes, we ensure your software is clear, accessible, and credible.",
            options: [
              { label: "Consult on Design", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "payments":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We are specialists in Safaricom Daraja API (STK Push, C2B, B2C), automated reconciliation, and international card processing.",
            options: [
              { label: "Integrate M-Pesa", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "pricing":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We provide upfront, transparent project estimates based on defined milestones:\n• Custom Websites: From KSH 20,000\n• Mobile Applications: From KSH 60,000\n\nWould you like a tailored estimate for your requirements?",
            options: [
              { label: "Request a Quote", action: "whatsapp_project" },
              { label: "Return to Main Menu", action: "restart" }
            ]
          };
          break;

        case "careers":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We are always building relationships with talented engineers and designers. Forward your GitHub or portfolio to contact.luffitech@gmail.com.",
            options: [
              { label: "Return to Main Menu", action: "restart" }
            ]
          };
          break;

        case "support":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "For active deployments requiring technical attention, reach out directly through our dedicated client channel.",
            options: [
              { label: "Open WhatsApp Support", action: "whatsapp_support" },
              { label: "Return to Main Menu", action: "restart" }
            ]
          };
          break;

        case "whatsapp_project":
            window.open('https://wa.me/254702104690?text=Hello Luffi Tech, I would like to discuss a project.', '_blank');
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Opening WhatsApp for direct communication. Looking forward to speaking with you." };
            break;
        case "whatsapp_support":
            window.open('https://wa.me/254702104690?text=URGENT: Technical support inquiry for existing system.', '_blank');
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Opening technical support channel." };
            break;
        case "link_academy":
            window.location.href = "/academy";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Navigating to Luffi Tech Academy..." };
            break;
        case "link_services":
            window.location.href = "/services";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Navigating to Services..." };
            break;
        case "restart":
            botResponse = { ...initialMessage, id: Date.now().toString() };
            break;

        default:
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Let us reset the options to help guide you.",
            options: [
                { label: "Restart", action: "restart" }
            ]
          };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 600); 
  };

  return (
    <div className="font-sans z-[9999]"> 
      
      {/* Soft Geometry Chat Window */}
      {isOpen && (
        <div className="
            fixed bottom-24 right-4 sm:right-6 z-[9999]
            w-[calc(100vw-2rem)] sm:w-[400px] 
            h-[62vh] sm:h-[530px]
            bg-white dark:bg-slate-900 
            rounded-[2.2rem] shadow-2xl shadow-indigo-950/20
            border border-slate-200/90 dark:border-slate-800 
            flex flex-col overflow-hidden 
            animate-in slide-in-from-bottom-8 fade-in duration-300 origin-bottom-right
        ">
          
          {/* Header */}
          <div className="bg-indigo-600 px-5 py-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm relative overflow-hidden shadow-inner">
                <Image src="/icon.png" alt="Luffi Tech" width={40} height={40} className="object-cover" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-indigo-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm tracking-tight">Luffi Assistant</h3>
                <span className="text-indigo-200 text-xs flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" /> Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/80 dark:bg-slate-950/60">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Message Bubble */}
                <div className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-indigo-600 text-white rounded-2xl rounded-br-xs shadow-sm font-medium' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl rounded-bl-xs shadow-sm whitespace-pre-line font-normal'
                }`}>
                  {msg.text}
                </div>

                {/* Professional Option Chips */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-3 max-w-[95%]">
                    {msg.options.map((opt, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleOptionClick(opt.action, opt.label)}
                        className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 px-3.5 py-2 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 shadow-sm active:scale-95 cursor-pointer text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs ml-2">
                <Loader2 size={13} className="animate-spin text-indigo-600" /> Assistant is responding...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <div className="bg-slate-100 dark:bg-slate-800/70 rounded-2xl px-4 py-2.5 flex justify-between items-center text-slate-400 text-xs">
              <span>Select an option above to proceed</span>
              <Send size={15} className="text-slate-400" />
            </div>
          </div>
        </div>
      )}

      {/* Professional Welcoming Popup Greeting */}
      {!isOpen && showTooltip && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-5 rounded-[2rem] shadow-2xl shadow-indigo-950/15 border border-slate-200/90 dark:border-slate-800 w-[290px] relative">
            
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="absolute top-3 right-3 bg-slate-100 dark:bg-slate-800 rounded-full p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 shadow-sm transition-colors cursor-pointer"
              aria-label="Dismiss greeting"
            >
              <X size={14} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Luffi Tech Assistant
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug mb-3">
              How can we assist your business or tech project today?
            </p>

            {/* Clean Action Chips */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => handleOptionClick("project", "Start a Project")}
                className="flex items-center justify-between text-left text-xs font-semibold px-3.5 py-2.5 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => handleOptionClick("academy", "Luffi Tech Academy")}
                className="flex items-center justify-between text-left text-xs font-semibold px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer group"
              >
                <span>Explore the Academy</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Pointer triangle */}
            <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white dark:bg-slate-900 border-b border-r border-slate-200/90 dark:border-slate-800 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button with Tactile Physics */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="fixed bottom-6 right-6 z-[9999] group w-14 h-14 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-full shadow-lg shadow-indigo-600/15 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl hover:shadow-indigo-500/25 overflow-hidden cursor-pointer"
        aria-label="Toggle assistant"
      >
        {isOpen ? (
            <X size={26} className="text-slate-800 dark:text-slate-100 transition-transform duration-300 rotate-90 group-hover:rotate-180" />
        ) : (
            <>
                <Image 
                  src={icononly2}
                  alt="Chat with Luffi Tech" 
                  width={38} 
                  height={38} 
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
            </>
        )}
      </button>
    </div>
  );
}