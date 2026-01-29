"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, ChevronRight, Loader2 } from 'lucide-react';

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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hi there! 👋 Welcome to Luffi Tech. I'm your virtual assistant. What brings you here today?",
      options: [
        { label: "I need a Project built", action: "project" },
        { label: "I want to join the Academy", action: "academy" },
        { label: "Just browsing / Other", action: "other" },
      ]
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleOptionClick = (action: string, label: string) => {
    // 1. Add User Selection
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: label };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Simulate Bot Thinking (Latency)
    setTimeout(() => {
      let botResponse: Message;

      switch (action) {
        case "project":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Great! We build high-performance software. What kind of solution are you looking for?",
            options: [
              { label: "Website / Web App", action: "web_dev" },
              { label: "Mobile App / USSD", action: "mobile_dev" },
              { label: "M-Pesa / Payment Integration", action: "payments" },
            ]
          };
          break;
        case "academy":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Awesome! Our Academy offers flexible learning. Which mode fits you best?",
            options: [
              { label: "Remote (Online Classes)", action: "link_academy" },
              { label: "Physical (Home Tutor)", action: "link_academy" },
            ]
          };
          break;
        case "web_dev":
        case "mobile_dev":
        case "payments":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Understood. The fastest way to get a quote is to chat with an engineer directly on WhatsApp.",
            options: [
              { label: "Chat on WhatsApp Now", action: "whatsapp_project" },
              { label: "Send an Email instead", action: "link_contact" },
            ]
          };
          break;
        case "whatsapp_project":
            window.open('https://wa.me/254702104690?text=Hi Luffi Tech, I want to discuss a project.', '_blank');
            botResponse = { id: Date.now().toString(), type: 'bot', text: "I've opened WhatsApp for you! Check your other tab." };
            break;
        case "link_academy":
            window.location.href = "/academy";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Redirecting you to the Academy page..." };
            break;
        case "link_contact":
            window.location.href = "/contact";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Redirecting you to the Contact page..." };
            break;
        default:
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "No problem! Feel free to explore our services or contact us if you need anything.",
            options: [
                { label: "See Services", action: "link_services" }
            ]
          };
          if(action === "link_services") window.location.href = "/services";
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000); 
  };

  return (
    <div className="font-sans z-[9999]"> 
      
      {/* Chat Window - RESPONSIVE FIXES APPLIED HERE */}
      {isOpen && (
        <div className="
            fixed bottom-24 right-4 z-[9999]
            w-[calc(100vw-2rem)] sm:w-[380px] 
            h-[60vh] sm:h-[500px]
            bg-white dark:bg-slate-900 
            rounded-3xl shadow-2xl 
            border border-slate-200 dark:border-slate-800 
            flex flex-col overflow-hidden 
            animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right
        ">
          
          {/* Header */}
          <div className="bg-indigo-600 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm relative">
                <Bot size={24} />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-indigo-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Luffi Assistant</h3>
                <span className="text-indigo-200 text-xs">Online & Ready</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Message Bubble */}
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-sm' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>

                {/* Options (Only for Bot) */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-3 max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleOptionClick(opt.action, opt.label)}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/50 px-3 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors text-left"
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
              <div className="flex items-center gap-2 text-slate-400 text-xs ml-2">
                <Loader2 size={12} className="animate-spin" /> Luffi is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer (Input placeholder - inactive in rule-based mode) */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-3 flex justify-between items-center text-slate-400 text-sm cursor-not-allowed">
              <span>Select an option above...</span>
              <Send size={16} />
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button - Fixed independently */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] group w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-600/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? (
            <X size={28} />
        ) : (
            <>
                <MessageSquare size={28} className="absolute transition-all group-hover:scale-0 opacity-100 group-hover:opacity-0" />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 font-bold text-xs">
                    Chat
                </div>
                {/* Notification Badge */}
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
            </>
        )}
      </button>
    </div>
  );
}