"use client";

import React, { useState } from 'react';
import { 
  Globe, Palette, Bot, BarChart3, Megaphone, 
  Video, Brain, ShieldCheck, MapPin,
  ArrowRight, CheckCircle2, Search, ChevronRight,
  Zap, Database, Lock, Cpu, Smartphone, Layout,
  Layers, Code2, Bug, HardDrive, Terminal,
  Sparkles, ZapOff, Workflow, Plus, X, 
  CreditCard, MessageSquare, Briefcase, Activity, 
  GraduationCap, Users, Shield, Rocket, BarChart, 
  Monitor, Headphones, FileText, ShoppingCart
} from 'lucide-react';

/**
 * SERVICE DATA SCHEMA - 2026 COMPREHENSIVE EDITION
 * Organized into 12 Specialized Production Units
 */
const SERVICE_CATEGORIES = [
  {
    id: "web-dev",
    title: "Web Development & Ecosystems",
    number: "01",
    icon: Globe,
    color: "from-blue-600 to-cyan-500",
    description: "High-performance web platforms focusing on SEO, responsiveness, and inclusive WCAG accessibility.",
    techStack: "Frontend: JavaScript, React, Next.js, Vue, Angular, Tailwind | Backend: Node.js, Django, Flask, FastAPI, Laravel | API: REST API, GraphQL | DB: PostgreSQL, MySQL, MongoDB",
    features: [
      "Responsive Design: Seamless across mobile and desktop.",
      "SEO Optimization: Search-engine-friendly structure.",
      "Performance-Driven: Fast-loading code and assets.",
      "Accessibility: WCAG-compliant inclusive design."
    ],
    subServices: [
      "Custom WordPress & Headless CMS", "Enterprise SaaS Architectures", "E-Commerce (WooCommerce/Shopify)",
      "Progressive Web Apps (PWA)", "Corporate Web Portals", "API-First Web Platforms",
      "LMS (Learning Management Systems)", "Real Estate & Listings Hubs", "Admin Dashboards",
      "Website Speed Optimization", "Technical SEO Audits", "Legacy System Migration"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile Solutions & USSD",
    number: "02",
    icon: Smartphone,
    color: "from-indigo-600 to-blue-700",
    description: "Native applications and text-based USSD services for connectivity in any environment.",
    techStack: "Native: Swift, Kotlin, Java | Cross-Platform: Flutter, React Native | Backend: Node.js, Python, Golang",
    features: [
      "Native Power: iOS (Swift) & Android (Kotlin) excellence.",
      "USSD Logic: Interactive text-based service gateways.",
      "Engagement: SMS & Push notification systems.",
      "Hybrid Speed: React Native & Flutter cross-platform."
    ],
    subServices: [
      "iOS App Development", "Android App Development", "Flutter Cross-Platform Apps",
      "React Native Apps", "USSD Mobile Banking Platforms", "Bulk SMS Gateway Integration",
      "Transactional SMS & OTPs", "Two-Way Messaging Systems", "App Maintenance & Support",
      "ASO (App Store Optimization)", "Mobile UI Implementation", "USSD API Integration"
    ]
  },
  {
    id: "payments",
    title: "M-Pesa & Payment Integrations",
    number: "03",
    icon: CreditCard,
    color: "from-emerald-600 to-teal-500",
    description: "Secure PayEasy integration for M-Pesa, global card payments, and localized gateways.",
    techStack: "APIs: Daraja 2.0, Stripe, Pesapal, Mastercard Gateway, Visa, PayPal | Security: 256-bit Encryption",
    features: [
      "M-Pesa: Seamless STK Push, B2C/C2B automation.",
      "Global Cards: Mastercard & Visa secure processing.",
      "Fraud Detection: Advanced encryption & safety tools.",
      "Scalability: Handling high transaction volumes."
    ],
    subServices: [
      "Daraja API Integration", "Stripe Checkout Setup", "Pesapal Gateway Implementation",
      "Lipa Na M-Pesa Automation", "Recurring Subscription Billing", "Card Processing Solutions",
      "Payment Reconcilliation Tools", "E-Wallet Development", "B2C Payment Portals",
      "Fraud Prevention Systems", "POS Payment Bridging", "Custom Payment APIs"
    ]
  },
  {
    id: "mis-erp",
    title: "MIS & Management Systems",
    number: "04",
    icon: Briefcase,
    color: "from-slate-700 to-slate-900",
    description: "Custom information systems for SACCOs, Schools, and Enterprise Resource Planning.",
    techStack: "Backend: PHP/Laravel, Django, Java Spring | Database: PostgreSQL, MySQL, Redis | Infra: AWS, Docker",
    features: [
      "SACCO Systems: Member loans & contributions.",
      "School Management: Fees, admin, & student tracking.",
      "POS Systems: Integrated inventory for shops.",
      "Healthcare (HMIS): Patient records & billing."
    ],
    subServices: [
      "SACCO & Chama ERPs", "School Management Portals", "Hospital Management (HMIS)",
      "POS for Shops & Businesses", "Inventory & Warehouse Systems", "HR & Payroll Software",
      "Micro-finance Platforms", "Insurance Management Systems", "Member Self-Service Portals",
      "Automated Financial Reporting", "Audit & Compliance Tools", "Multi-branch Management"
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Smart Automation",
    number: "05",
    icon: Bot,
    color: "from-purple-600 to-fuchsia-600",
    description: "Intelligent automation for WhatsApp Business and autonomous agent workflows.",
    techStack: "Models: OpenAI GPT-4, Claude 3.5 | Tools: LangChain, Zapier, Make.com | API: WhatsApp Business API",
    features: [
      "WhatsApp: Automated customer support & sales.",
      "Agents: Autonomous business task workflows.",
      "Workflows: Zapier & Make.com cross-app logic.",
      "Chatbots: Intelligent multi-language response."
    ],
    subServices: [
      "WhatsApp Business Automation", "Customer Support Chatbots", "AI Workflow Engineering",
      "Autonomous AI Agents", "Document AI Processing", "Sales Lead Automation",
      "AI Personal Assistants", "Auto-Response Systems", "Natural Language Processing",
      "Sentiment Analysis Tools", "Voice AI & IVR", "AI Data Entry Solutions"
    ]
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding & AI Support",
    number: "06",
    icon: Bug,
    color: "from-violet-600 to-indigo-800",
    description: "Fixing AI-generated logic and productionizing 'Vibe Coding' outputs for stability.",
    techStack: "Tools: Cursor AI, GitHub Copilot, Windsurf | Logic: Python, JS, Go | Testing: Jest, PyTest",
    features: [
      "Logic Repair: Fixing broken AI-generated code.",
      "Refinement: Production-grade code cleanup.",
      "Debugging: Solving complex logic bottlenecks.",
      "QA: Rigorous testing of AI outputs."
    ],
    subServices: [
      "Vibe Coding Cleanup", "AI Logic Debugging", "Legacy Code Modernization",
      "Security Patching AI Code", "Code Architecture Review", "API Refactoring",
      "Performance Tuning", "Dependency Management", "CI/CD Setup for AI Apps",
      "Environment Configuration", "Documentation Generation", "Database Schema Fixes"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    number: "07",
    icon: Palette,
    color: "from-orange-500 to-rose-600",
    description: "Iconic visual identities and marketing assets that define your brand voice.",
    techStack: "Design: Figma, Adobe Illustrator, Photoshop | AI: Midjourney, Canva Pro",
    features: [
      "Identity: Unique logos & brand style guides.",
      "Marketing: Conversion-focused ad creatives.",
      "Print: High-quality company profiles & brochures.",
      "UI Design: High-fidelity product interfaces."
    ],
    subServices: [
      "Logo & Icon Design", "Brand Identity Packages", "Company Profiles",
      "Social Media Graphics", "Marketing Ad Creatives", "Print & Stationery",
      "Infographic Design", "Packaging & Labels", "YouTube/Thumbnail Design",
      "Event Branding", "Brand Style Manuals", "Vector Illustrations"
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Business Intelligence",
    number: "08",
    icon: BarChart,
    color: "from-emerald-500 to-teal-600",
    description: "Transforming raw data into predictive insights and actionable intelligence.",
    techStack: "Tools: Power BI, Tableau, Excel | Languages: Python (Pandas), R, SQL",
    features: [
      "BI Dashboards: Real-time visual tracking.",
      "Predictive: AI-based trend forecasting.",
      "Reporting: Automated business performance stats.",
      "Scraping: Scalable data collection pipelines."
    ],
    subServices: [
      "Business Intelligence Dashboards", "Data Collection & Scraping", "Predictive Analytics",
      "Excel Automation", "KPI Tracking Systems", "Market Trend Analysis",
      "Financial Forecasting Models", "User Behavior Analytics", "Data Cleaning Services",
      "Big Data Architecture", "A/B Testing Analysis", "Custom SQL Reporting"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    number: "09",
    icon: Megaphone,
    color: "from-amber-500 to-orange-600",
    description: "Data-driven growth strategies to dominate search results and social platforms.",
    techStack: "Platforms: Google Ads, Meta Ads, HubSpot | Analytics: SEMrush, Ahrefs",
    features: [
      "Growth: High-conversion marketing funnels.",
      "SEO: Dominate organic search rankings.",
      "SEM: Optimized Google & Meta ad spend.",
      "Content: Strategy-led engagement plans."
    ],
    subServices: [
      "Search Engine Optimization (SEO)", "Google Ads Management", "Meta (FB/IG) Ads",
      "Content Marketing Strategy", "Email Automation Funnels", "Social Media Management",
      "Conversion Optimization (CRO)", "Lead Generation Campaigns", "Marketing Audits",
      "Influencer Strategy", "Local SEO (Google Maps)", "Brand Storytelling"
    ]
  },
  {
    id: "it-support",
    title: "IT Support & Security",
    number: "10",
    icon: Headphones,
    color: "from-slate-600 to-slate-800",
    description: "Proactive technical service, server management, and application hardening.",
    techStack: "Security: Penetration Testing, SSL | OS: Linux, Windows Server | Monitoring: Nagios, Zabbix",
    features: [
      "Security: Hardened industry-standard protection.",
      "Support: 24/7 dedicated technical assistance.",
      "Infrastructure: Managed server & cloud systems.",
      "Recovery: Robust backup and disaster plans."
    ],
    subServices: [
      "Managed IT Support", "Server Administration", "Penetration Testing",
      "SSL & Encryption Management", "Malware Removal", "Network Security Config",
      "Backup & Recovery Plans", "IT Infrastructure Audit", "Remote Support Services",
      "Hardware Maintenance", "System Performance Monitoring", "Cloud Cost Optimization"
    ]
  },
  {
    id: "compliance-tech",
    title: "Government & Compliance Tech",
    number: "11",
    icon: Shield,
    color: "from-green-700 to-emerald-900",
    description: "Localized support for KRA, E-Citizen integration, and NGO compliance standards.",
    techStack: "Tech: KRA APIs, E-Citizen Bridges, NGO Regulatory Portals",
    features: [
      "KRA: Automated tax compliance integration.",
      "E-Citizen: Seamless government portal links.",
      "NGO: Specialized reporting for non-profits.",
      "Regulation: GDPR & Local data law compliance."
    ],
    subServices: [
      "KRA System Integration", "E-Citizen Support", "NGO Management Systems",
      "Data Compliance Audits", "Tax Automation Tools", "Regulatory Reporting",
      "Digital Signature Setup", "Public Sector Tech Support", "Grant Tracking Systems",
      "Legal Tech Portals", "KYC/AML Automation", "Ethical Tech Consulting"
    ]
  },
  {
    id: "emerging-tech",
    title: "Advanced Tech Solutions",
    number: "12",
    icon: Cpu,
    color: "from-gray-900 to-slate-700",
    description: "Exploring the frontier with Blockchain, IoT, and custom Web3 solutions.",
    techStack: "Web3: Solidity, Ethereum | IoT: Arduino, MQTT, Raspberry Pi | Future: Smart Contracts",
    features: [
      "IoT: Smart device & sensor connectivity.",
      "Web3: Blockchain & smart contract design.",
      "Emerging: Tailored future-proof prototypes.",
      "Connectivity: Edge computing solutions."
    ],
    subServices: [
      "IoT System Design", "Blockchain Development", "Smart Contract Audits",
      "DApp Development", "Hardware-Software Bridging", "RFID/NFC Solutions",
      "Real-time Asset Tracking", "Decentralized Storage", "Web3 Integration",
      "Custom Firmware Design", "Smart City Prototyping", "Emerging Tech Research"
    ]
  }
];

const ServiceCard = ({ category, onSelect }) => {
  const Icon = category.icon;

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-[0.03] rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <span className="text-4xl font-black text-slate-100 dark:text-slate-800 select-none">
          {category.number}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {category.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-[12px] leading-relaxed mb-6">
        {category.description}
      </p>

      <div className="space-y-2 mb-8 flex-grow">
        {category.subServices.slice(0, 4).map((service, idx) => (
          <div 
            key={idx} 
            onClick={() => onSelect(category)}
            className="flex items-center justify-between p-2 rounded-xl border border-transparent hover:border-slate-100 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer group/item transition-all"
          >
            <span className="text-[12px] font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-indigo-600 truncate mr-2">
              {service}
            </span>
            <ChevronRight size={12} className="text-slate-300 group-hover/item:text-indigo-600 group-hover/item:translate-x-1 transition-all" />
          </div>
        ))}
        {category.subServices.length > 4 && (
          <div 
            onClick={() => onSelect(category)}
            className="flex items-center gap-2 text-[10px] text-indigo-500 font-bold px-3 py-2 cursor-pointer hover:underline"
          >
            <Plus size={10} /> View {category.subServices.length - 4} specialized solutions
          </div>
        )}
      </div>

      <button 
        onClick={() => onSelect(category)}
        className={`w-full py-4 rounded-2xl bg-gradient-to-r ${category.color} text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transform group-hover:translate-y-[-4px] transition-all shadow-lg active:scale-95`}
      >
        View Solution Stack <ArrowRight size={14} />
      </button>
    </div>
  );
};

const ServiceDetailView = ({ category, onClose }) => {
  const [showAll, setShowAll] = useState(false);
  
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        
        {/* Compact Modal Header */}
        <div className={`p-6 md:p-8 bg-gradient-to-r ${category.color} relative shrink-0`}>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all z-10"
          >
            <X size={20} />
          </button>
          
          <div className="relative z-0">
            <div className="flex items-center gap-3 mb-2">
               <Sparkles className="text-white/70 animate-pulse" size={20} />
               <span className="px-3 py-0.5 bg-white/20 rounded-md text-[10px] font-black text-white uppercase tracking-tighter backdrop-blur-sm">
                 Solution Node {category.number}
               </span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">{category.title}</h2>
          </div>
        </div>
        
        {/* Body Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="grid md:grid-cols-6 gap-8">
            
            {/* Left: Features & Details */}
            <div className="md:col-span-4">
              <div className="mb-8">
                <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-3">Service Standards</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                   {category.features.map((feature, i) => (
                     <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/30">
                        <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                        <span className="text-[12px] font-bold text-slate-800 dark:text-slate-200">{feature}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Complete Service Directory ({category.subServices.length})</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {(showAll ? category.subServices : category.subServices.slice(0, 15)).map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-indigo-500" />
                      {item}
                    </div>
                  ))}
                </div>
                {!showAll && category.subServices.length > 15 && (
                  <button onClick={() => setShowAll(true)} className="mt-4 text-xs font-bold text-indigo-600 hover:underline">
                    + Expand all specialized solutions
                  </button>
                )}
              </div>
            </div>
            
            {/* Right: Tech Stack & CTA */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-950 rounded-3xl p-6 text-white border border-white/5">
                <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <Terminal size={16} className="text-indigo-400" /> Full Tech Stack
                </h4>
                <div className="space-y-4">
                   {category.techStack.split('|').map((part, i) => (
                     <div key={i}>
                        <p className="text-[10px] font-black text-slate-500 mb-1.5 uppercase tracking-tighter">{part.split(':')[0]}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {part.split(':')[1]?.split(',').map((t, j) => (
                            <span key={j} className="text-[9px] font-black px-2 py-1 bg-white/5 rounded border border-white/5 text-slate-300 uppercase tracking-tighter">
                              {t.trim()}
                            </span>
                          ))}
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-600/20">
                <h4 className="text-lg font-bold mb-2">Get Started</h4>
                <p className="text-[10px] text-indigo-100 mb-6">Expert consultation for {category.title}.</p>
                <button 
                  onClick={() => window.open(`https://wa.me/254702104690?text=I'm interested in ${category.title} solutions`, '_blank')}
                  className="w-full py-4 bg-white text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                >
                  WhatsApp Support <Zap size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = SERVICE_CATEGORIES.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.subServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
    cat.techStack.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-32 bg-[#F8FAFC] dark:bg-slate-950 min-h-screen">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800">
            <Sparkles size={12} className="animate-pulse" /> Production Engineering Hub
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            Digital Production <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Built for Scale</span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Enterprise-grade engineering across <b>Web, Mobile, USSD, and AI Ecosystems</b>. Specializing in secure payments and management information systems.
          </p>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search services (e.g. M-Pesa, Django, React, SACCO, Vibe...)" 
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-xl shadow-slate-200/40 dark:shadow-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <ServiceCard 
              key={category.id} 
              category={category} 
              onSelect={(cat) => setSelectedCategory(cat)}
            />
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Solution Not Found</h3>
            <p className="text-slate-500 mt-2">Try searching by technology stack (e.g. Django, Flutter, POS)</p>
          </div>
        )}
      </div>

      {/* Modal View */}
      {selectedCategory && (
        <ServiceDetailView 
          category={selectedCategory} 
          onClose={() => setSelectedCategory(null)} 
        />
      )}

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-slate-900 dark:bg-indigo-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
            Ready to Build Your System?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Whether it's a SACCO Management system or a custom M-Pesa checkout, we deliver with enterprise-grade quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button 
              onClick={() => window.open(`https://wa.me/254702104690`, '_blank')}
              className="px-8 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
            >
              Contact Us: 254702104690
            </button>
            <button className="px-8 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl font-bold text-sm transition-all">
              Schedule Architecture Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}