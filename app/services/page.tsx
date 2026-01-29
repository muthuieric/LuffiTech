"use client";

import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { 
  Globe, Palette, Bot, Megaphone, 
  ChevronRight, Search, Zap, CreditCard, 
  Briefcase, BarChart, Headphones, Layout, 
  Cloud, Terminal, Smartphone, Sparkles, 
  CheckCircle2, Plus, X, ArrowRight, Bug,
  ArrowUp
} from 'lucide-react';

// --- Static Data (Moved outside component to prevent memory churn) ---

const SERVICE_CATEGORIES = [
  {
    id: "web-dev",
    title: "Web Development & Ecosystems",
    number: "01",
    icon: Globe,
    color: "from-blue-600 to-cyan-500",
    description: "High-performance web platforms focusing on SEO, responsiveness, and inclusive WCAG accessibility.",
    techStack: "Frontend: React, Next.js, Tailwind | Backend: Node.js, Django, FastAPI | DB: PostgreSQL, MongoDB",
    features: [
      "Responsive Design: Seamless across mobile and desktop.",
      "SEO Optimization: Search-engine-friendly structure.",
      "Performance-Driven: Fast-loading code and assets.",
      "Accessibility: WCAG-compliant inclusive design."
    ],
    subServices: [
      "Custom WordPress & Headless CMS", "Enterprise SaaS Architectures", "E-Commerce (WooCommerce/Shopify)",
      "Progressive Web Apps (PWA)", "Corporate Web Portals", "API-First Web Platforms",
      "Scalable architecture", "Admin Dashboards", "Website Speed Optimization", 
      "Technical SEO Audits", "Legacy System Migration"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile Solutions & USSD",
    number: "02",
    icon: Smartphone,
    color: "from-indigo-600 to-blue-700",
    description: "Native applications and text-based USSD services for connectivity in any environment.",
    techStack: "Native: Swift, Kotlin | Cross-Platform: Flutter, React Native | USSD: Africa's Talking API",
    features: [
      "Native Power: iOS & Android excellence.",
      "USSD Logic: Text-based service gateways.",
      "Engagement: SMS & Push notification systems.",
      "Hybrid Speed: React Native & Flutter."
    ],
    subServices: [
      "iOS & Android Development", "Flutter Cross-Platform Apps", "USSD Mobile Banking Platforms", 
      "Bulk SMS Gateway Integration", "Transactional SMS & OTPs", "App Maintenance & Support",
      "ASO (App Store Optimization)", "Mobile UI Implementation"
    ]
  },
  {
    id: "payments",
    title: "M-Pesa & Payment Integrations",
    number: "03",
    icon: CreditCard,
    color: "from-emerald-600 to-teal-500",
    description: "Secure, fast, and reliable payment solutions for websites, mobile apps, and custom software.",
    techStack: "APIs: Daraja (M-Pesa), Stripe, PayPal, Visa | Security: PCI-DSS Compliance",
    features: [
      "M-Pesa: Seamless STK Push & B2C.",
      "Global Cards: Mastercard & Visa processing.",
      "Fraud Detection: Advanced encryption tools.",
      "Scalability: High transaction volume handling."
    ],
    subServices: [
      "Daraja API Integration", "Stripe Checkout Setup", "Lipa Na M-Pesa Automation", 
      "Recurring Subscription Billing", "Payment Reconcilliation Tools", "E-Wallet Development", 
      "Fraud Prevention Systems", "POS Payment Bridging"
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Smart Automation",
    number: "04",
    icon: Bot,
    color: "from-purple-600 to-fuchsia-600",
    description: "Advanced AI solutions including RAG, Vector Databases, and Process Automation.",
    techStack: "LLMs: GPT-4, Llama 3, Claude | RAG: LangChain, Pinecone | Automation: n8n, Zapier",
    features: [
      "RAG Systems: Chat with your own Data.",
      "Local AI: Privacy-focused on-premise LLMs.",
      "Fine-Tuning: Customizing models for your niche.",
      "Agents: Autonomous task workflows."
    ],
    subServices: [
      "RAG Systems", "Intelligent Customer Chatbots", "Custom LLM Fine-Tuning",
      "Vector Database Setup", "AI Agents & Autonomous Workers", "WhatsApp Business Automation", 
      "Natural Language Processing (NLP)", "Sentiment Analysis"
    ]
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding & AI Support",
    number: "05",
    icon: Bug,
    color: "from-violet-600 to-indigo-800",
    description: "Fixing AI-generated logic and productionizing 'Vibe Coding' outputs for stability.",
    techStack: "Tools: Cursor, Copilot, Windsurf | Languages: Python, JS, Go",
    features: [
      "Logic Repair: Fixing broken AI code.",
      "Refinement: Production-grade cleanup.",
      "Debugging: Solving logic bottlenecks.",
      "QA: Rigorous testing of AI outputs."
    ],
    subServices: [
      "Vibe Coding Cleanup", "AI Logic Debugging", "Legacy Code Modernization",
      "Security Patching AI Code", "Code Architecture Review", "API Refactoring",
      "Performance Tuning", "CI/CD Setup for AI Apps"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    number: "06",
    icon: Palette,
    color: "from-orange-500 to-rose-600",
    description: "Iconic visual identities and marketing assets that define your brand voice.",
    techStack: "Tools: Figma, Illustrator, Photoshop, InDesign, Canva",
    features: [
      "Identity: Unique logos & style guides.",
      "Marketing: Conversion-focused creatives.",
      "Print: High-quality brochures.",
      "UI Design: High-fidelity interfaces."
    ],
    subServices: [
      "Logo & Icon Design", "Brand Identity Packages", "Brochures & Company Profiles",
      "Social Media Graphics", "Marketing & Promotional Graphics", "Packaging & Labels", 
      "Brand Style Manuals", "Vector Illustrations"
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Business Intelligence",
    number: "07",
    icon: BarChart,
    color: "from-emerald-500 to-teal-600",
    description: "Transforming raw data into predictive insights and actionable intelligence.",
    techStack: "Tools: Power BI, Tableau, Excel | Lang: Python (Pandas), SQL",
    features: [
      "BI Dashboards: Real-time visual tracking.",
      "Predictive: AI-based trend forecasting.",
      "Reporting: Automated performance stats.",
      "Scraping: Scalable data pipelines."
    ],
    subServices: [
      "BI Dashboards", "Data Collection & Scraping", "Predictive Analytics",
      "Excel Automation", "KPI Tracking Systems", "Market Trend Analysis",
      "Financial Forecasting Models", "Custom SQL Reporting"
    ]
  },
  {
    id: "it-support",
    title: "IT Support & Security",
    number: "08",
    icon: Headphones,
    color: "from-slate-600 to-slate-800",
    description: "Proactive technical service, server management, and application hardening.",
    techStack: "Security: Kali Linux, Metasploit | OS: Linux, Windows Server",
    features: [
      "Security: Hardened industry standards.",
      "Support: 24/7 technical assistance.",
      "Infrastructure: Managed server systems.",
      "Recovery: Robust backup plans."
    ],
    subServices: [
      "Managed IT Support", "Server Administration", "Penetration Testing",
      "SSL & Encryption", "Malware Removal", "Network Security Config",
      "Backup & Recovery Plans", "IT Infrastructure Audit"
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    number: "09",
    icon: Layout,
    color: "from-pink-500 to-rose-500",
    description: "Designing intuitive digital experiences through research, wireframing, and prototyping.",
    techStack: "Tools: Figma, Adobe XD, Sketch, Framer",
    features: [
      "Research: User personas & mapping.",
      "Wireframing: Structural layout.",
      "Prototyping: Interactive flows.",
      "Systems: Scalable component libraries."
    ],
    subServices: [
      "User Interface (UI) Design", "User Experience (UX) Strategy", "Wireframing & Prototyping",
      "Mobile App Design", "Design Systems", "Usability Testing", "Dashboard UI Design"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    number: "10",
    icon: Cloud,
    color: "from-sky-600 to-indigo-600",
    description: "Scalable cloud architectures, automated CI/CD pipelines, and robust server management.",
    techStack: "Cloud: AWS, Azure, GCP | DevOps: Docker, Kubernetes, Terraform",
    features: [
      "CI/CD: Automated pipelines.",
      "Scalability: Auto-scaling clusters.",
      "Security: VPC & DDoS protection.",
      "IaC: Infrastructure as Code."
    ],
    subServices: [
      "Cloud Migration Strategy", "AWS/Azure/GCP Architecture", "CI/CD Pipeline Automation",
      "Docker & Kubernetes", "Serverless Computing", "Cloud Security & Compliance", 
      "Database Management", "Microservices Architecture"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    number: "11",
    icon: Megaphone,
    color: "from-amber-500 to-orange-600",
    description: "Data-driven growth strategies to dominate search results and social platforms.",
    techStack: "Ads: Google, Meta | SEO: SEMrush, Ahrefs, GSC",
    features: [
      "Growth: High-conversion funnels.",
      "SEO: Organic search rankings.",
      "SEM: Optimized ad spend.",
      "Content: Strategy-led engagement."
    ],
    subServices: [
      "Search Engine Optimization (SEO)", "Google Ads Management", "Meta (FB/IG) Ads",
      "Content Marketing Strategy", "Email Automation Funnels", "Social Media Management",
      "Conversion Optimization (CRO)", "Local SEO (Google Maps)"
    ]
  },
   {
    id: "mis-erp",
    title: "MIS & Management Systems",
    number: "12",
    icon: Briefcase,
    color: "from-slate-700 to-slate-900",
    description: "Custom information systems for SACCOs, Schools, and Enterprise Resource Planning.",
    techStack: "Stack: React, Node.js, Python | DB: PostgreSQL, Redis",
    features: [
      "SACCO Systems: Loans & contributions.",
      "School Management: Fees & student tracking.",
      "POS Systems: Integrated inventory.",
      "Healthcare (HMIS): Patient records."
    ],
    subServices: [
      "SACCO & Chama ERPs", "School Management Portals", "Hospital Management (HMIS)",
      "POS for Shops", "Inventory & Warehouse Systems", "HR & Payroll Software",
      "Micro-finance Platforms", "Automated Financial Reporting"
    ]
  },
];

// --- Memoized Components ---

const ServiceCard = memo(({ category, onSelect }: any) => {
  const Icon = category.icon;

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full overflow-hidden transform-gpu">
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
        {category.subServices.slice(0, 4).map((service: string, idx: number) => (
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
            <Plus size={10} /> View {category.subServices.length - 4} more
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
});
ServiceCard.displayName = "ServiceCard";

const ServiceDetailView = memo(({ category, onClose }: any) => {
  const [showAll, setShowAll] = useState(false);
  
  // UX: Lock body scroll when modal is open to prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // UX: Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
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
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{category.title}</h2>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="grid md:grid-cols-6 gap-8">
            
            {/* Left Column: Details */}
            <div className="md:col-span-4">
              {/* Optional: Visual Diagram for complex topics */}
              {category.id === 'ai-automation' && (
                 <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                    
                    <p className="text-[10px] text-slate-400 mt-2 text-center">Our RAG Architecture for Enterprise Data</p>
                 </div>
              )}
               {category.id === 'cloud-devops' && (
                 <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                    
                    <p className="text-[10px] text-slate-400 mt-2 text-center">Automated Deployment Pipeline</p>
                 </div>
              )}

              <div className="mb-8">
                <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-3">Service Standards</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                   {category.features.map((feature: string, i: number) => (
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
                  {(showAll ? category.subServices : category.subServices.slice(0, 15)).map((item: string, i: number) => (
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
            
            {/* Right Column: Tech Stack & CTA */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-950 rounded-3xl p-6 text-white border border-white/5">
                <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <Terminal size={16} className="text-indigo-400" /> Full Tech Stack
                </h4>
                <div className="space-y-4">
                   {category.techStack.split('|').map((part: string, i: number) => (
                     <div key={i}>
                       <p className="text-[10px] font-black text-slate-500 mb-1.5 uppercase tracking-tighter">{part.split(':')[0]}</p>
                       <div className="flex flex-wrap gap-1.5">
                         {part.split(':')[1]?.split(',').map((t: string, j: number) => (
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
});
ServiceDetailView.displayName = "ServiceDetailView";

// --- Main Page Component ---

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Performance: Throttle scroll event to avoid lag
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Performance: Memoize filter logic to prevent heavy calculation on every render
  const filteredCategories = useMemo(() => {
    return SERVICE_CATEGORIES.filter(cat => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        cat.title.toLowerCase().includes(q) ||
        cat.subServices.some(s => s.toLowerCase().includes(q)) ||
        cat.techStack.toLowerCase().includes(q);
      
      const matchesFilter = activeFilter === "All" || cat.title === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  // Extract navigation categories (unique)
  const navCategories = useMemo(() => ["All", ...SERVICE_CATEGORIES.map(c => c.title)], []);

  return (
    <div className="pt-24 pb-32 bg-[#F8FAFC] dark:bg-slate-950 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-12">
        {/* GPU Accelerated Background Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full transform-gpu" />

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Services</span>
          </h1>
          
          {/* Category Navigation - Horizontal Scroll on Mobile */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="flex flex-nowrap md:flex-wrap items-center md:justify-center gap-3 px-4 pb-4 overflow-x-auto no-scrollbar mask-gradient">
              {navCategories.map((catTitle, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(catTitle)}
                  className={`
                    whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border shrink-0
                    ${activeFilter === catTitle 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30 scale-105' 
                      : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600'}
                  `}
                >
                  {catTitle === "All" ? "View All" : catTitle.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group px-4">
            <div className="absolute inset-y-0 left-8 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search services (e.g. M-Pesa, Django, React, SACCO...)" 
              className="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-xl shadow-slate-200/40 dark:shadow-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <ServiceCard 
              key={category.id} 
              category={category} 
              onSelect={(cat: any) => setSelectedCategory(cat)}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20 animate-in fade-in">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No solutions found</h3>
            <p className="text-slate-500 mt-2">Try a different keyword or browse all categories.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveFilter("All")}}
              className="mt-4 text-indigo-600 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedCategory && (
        <ServiceDetailView 
          category={selectedCategory} 
          onClose={() => setSelectedCategory(null)} 
        />
      )}
      
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-8 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-2xl shadow-indigo-600/30 transition-all duration-300 hover:bg-indigo-500 active:scale-90 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

    </div>
  );
}