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
  
  // Initial State
  const initialMessage: Message = {
    id: '1',
    type: 'bot',
    text: "Hi there! 👋 Welcome to Luffi Tech. I'm your virtual assistant. How can I help you today?",
    options: [
      { label: "🚀 Start a Project", action: "project" },
      { label: "🔍 Explore Services", action: "services_list" }, // NEW
      { label: "🎓 Luffi Academy", action: "academy" },
      { label: "💬 Support & Other", action: "other_menu" },
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
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
        // --- LEVEL 1: MAIN MENU ---
        case "project":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Exciting! Let's build something great. Which category best describes your project?",
            options: [
              { label: "Web / Software", action: "web_dev" },
              { label: "Mobile App / USSD", action: "mobile_dev" },
              { label: "M-Pesa / Payments", action: "payments" },
              { label: "More Options...", action: "services_list" }
            ]
          };
          break;

        case "academy":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Awesome! We offer flexible coding mentorships. Which mode fits you best?",
            options: [
              { label: "Remote (Online Classes)", action: "link_academy" },
              { label: "Physical (Home Tutor)", action: "link_academy" },
              { label: "🔙 Main Menu", action: "restart" }
            ]
          };
          break;

        case "other_menu":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "No problem. Here are some other things I can help with:",
            options: [
              { label: "💰 Pricing Estimates", action: "pricing" },
              { label: "💼 Careers / Jobs", action: "careers" },
              { label: "🔧 Technical Support", action: "support" },
              { label: "🔙 Main Menu", action: "restart" }
            ]
          };
          break;

        // --- NEW: SERVICES LIST ---
        case "services_list":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We provide comprehensive tech solutions. Tap a service to learn more:",
            options: [
              { label: "🌐 Web Development", action: "web_dev" },
              { label: "📱 Mobile & USSD", action: "mobile_dev" },
              { label: "🤖 AI & Automation", action: "ai_service" },
              { label: "🎨 Design & Branding", action: "design_service" },
              { label: "💳 Payment Integration", action: "payments" },
              { label: "🔙 Main Menu", action: "restart" }
            ]
          };
          break;

        // --- LEVEL 2: SPECIFIC SERVICE HANDLERS ---
        case "web_dev":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We build high-performance Websites, Web Apps, and Management Systems using Next.js and Python. \n\nReady to discuss your requirements?",
            options: [
              { label: "Chat on WhatsApp", action: "whatsapp_project" },
              { label: "View Portfolio", action: "link_services" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "mobile_dev":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We develop native Android/iOS apps and USSD codes for feature phones. Perfect for reaching the mass market.",
            options: [
              { label: "Get a Quote", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "ai_service":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We build custom AI Chatbots, Agents, and Automation Workflows to cut costs and improve efficiency.",
            options: [
              { label: "Automate My Business", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "design_service":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "From Logos to UI/UX prototypes, we ensure your brand looks world-class.",
            options: [
              { label: "See Design Packages", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        case "payments":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We are experts in Daraja API (M-Pesa), Stripe, and Visa integrations for secure, automated payments.",
            options: [
              { label: "Integrate Payments", action: "whatsapp_project" },
              { label: "Back to Services", action: "services_list" }
            ]
          };
          break;

        // --- INFO & SUPPORT ---
        case "pricing":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "Pricing varies by scope:\n• Websites: From KSH 20k\n• Mobile Apps: From KSH 60k\n•\nWould you like a custom quote?",
            options: [
              { label: "Yes, Get Quote", action: "whatsapp_project" },
              { label: "No, thanks", action: "restart" }
            ]
          };
          break;

        case "careers":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "We currently don't have open positions, but we are always building our talent pool. Email your portfolio to contact.luffitech@gmail.com.",
            options: [
              { label: "Okay, thanks!", action: "restart" }
            ]
          };
          break;

        case "support":
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "For existing clients facing technical issues, please contact our emergency support line.",
            options: [
              { label: "Contact Support", action: "whatsapp_support" },
              { label: "Back to Menu", action: "restart" }
            ]
          };
          break;

        // --- EXTERNAL ACTIONS ---
        case "whatsapp_project":
            window.open('https://wa.me/254702104690?text=Hi Luffi Tech, I am interested in a project.', '_blank');
            botResponse = { id: Date.now().toString(), type: 'bot', text: "I've opened WhatsApp for you! Check your other tab." };
            break;
        case "whatsapp_support":
            window.open('https://wa.me/254702104690?text=URGENT: I need technical support.', '_blank');
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Support channel opened." };
            break;
        case "link_academy":
            window.location.href = "/academy";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Redirecting you to the Academy page..." };
            break;
        case "link_services":
            window.location.href = "/services";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Redirecting you to the Services page..." };
            break;
        case "link_contact":
            window.location.href = "/contact";
            botResponse = { id: Date.now().toString(), type: 'bot', text: "Redirecting you to the Contact page..." };
            break;
        case "restart":
            botResponse = { ...initialMessage, id: Date.now().toString() };
            break;

        default:
          botResponse = {
            id: Date.now().toString(),
            type: 'bot',
            text: "I didn't quite catch that. Let's start over.",
            options: [
                { label: "Restart", action: "restart" }
            ]
          };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800); 
  };

  return (
    <div className="font-sans z-[9999]"> 
      
      {/* Chat Window */}
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

      {/* Floating Toggle Button */}
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