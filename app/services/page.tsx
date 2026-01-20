"use client";

import React from 'react';
import { 
  Globe, Smartphone, Code, Cloud, Palette, 
  Monitor, Wifi, Server, Database, Bot, PenTool, Cpu, 
  ArrowRight, MessageCircle, CheckCircle2 
} from 'lucide-react';
import Button from '../../components/ui/Button';

// 1. Interactive Service Card
const ServiceCard = ({ icon: Icon, title, description, features }: any) => {
  
  const handleInquiry = () => {
    const message = encodeURIComponent(`Hello Luffi Tech, I would like to inquire about: ${title}`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      {/* Icon Area */}
      <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Feature List */}
      <div className="mb-6 space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
        {features.map((feature: string, fIdx: number) => (
          <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
            <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full justify-between hover:bg-indigo-50 dark:hover:bg-indigo-900/20 group-hover:border-indigo-200 dark:group-hover:border-indigo-800"
        onClick={handleInquiry}
      >
        Get a Quote <ArrowRight size={16} />
      </Button>
    </div>
  );
};

// 2. Section Wrapper
const ServiceSection = ({ id, title, description, services }: any) => (
  <section id={id} className="scroll-mt-32 mb-24 relative">
    {/* Decorative Section Marker */}
    <div className="flex items-start md:items-center gap-4 mb-10">
      <div className="h-8 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full shadow-lg shadow-indigo-500/30" />
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">{description}</p>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service: any, idx: number) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  </section>
);

export default function ServicesPage() {
  const categories = [
    {
      id: "engineering",
      title: "Software, Mobile & AI Solutions",
      description: "Custom digital tools to automate and grow your business.",
      services: [
        { 
          icon: Globe, 
          title: "Web Applications", 
          description: "We build powerful, high-performance websites. Whether you need a corporate portfolio, an online shop, or a school management system, we use modern tools like Next.js.", 
          features: ["SEO Optimized (Rank #1)", "Responsive (Phone Friendly)", "Modern React Frameworks"] 
        },
        { 
          icon: Smartphone, 
          title: "Mobile App Development", 
          description: "Reach your customers on their phones. We build native Android apps using Kotlin for speed, and React Native apps that work smoothly on both iPhones and Androids.", 
          features: ["Kotlin (Native Android)", "React Native (Cross-Platform)", "Offline Functionality"] 
        },
        { 
          icon: Bot, 
          title: "Chatbots & Automation", 
          description: "Never miss a customer inquiry. We build intelligent Chatbots for WhatsApp and websites that answer questions and take orders 24/7 automatically.", 
          features: ["WhatsApp Business Bots", "M-Pesa Integration (C2B)", "Automated Support"] 
        },
        { 
          icon: Database, 
          title: "Data Science & Analytics", 
          description: "Make better business decisions using data. We help you collect, clean, and analyze your business data to discover trends and predict sales.", 
          features: ["Data Analysis & Visualization", "Business Intelligence Dashboards", "Predictive Modeling"] 
        },
      ]
    },
    {
      id: "infrastructure",
      title: "On-Site IT Support & Hardware",
      description: "We come to you to fix your tech problems.",
      services: [
        { 
          icon: Monitor, 
          title: "On-Site Computer Repair", 
          description: "No need to carry your machine to a shop—we come to your home or office. We handle screen replacements, battery issues, and fresh Windows installations right where you are.", 
          features: ["Doorstep Repair Service", "Windows & Software Installation", "Virus Removal & Speed Boost"] 
        },
        { 
          icon: Wifi, 
          title: "Home & Office Networking", 
          description: "Struggling with weak Wi-Fi? We set up robust networks for homes and offices. We perform LAN cabling, router configuration, and printer sharing setups.", 
          features: ["Wi-Fi Range Extension", "Office LAN Cabling", "Printer Network Setup"] 
        },
        { 
          icon: Cpu, 
          title: "Virtual Digital Bureau", 
          description: "Your remote assistant for government and online services. Send us your details via WhatsApp and we handle KRA Returns, eCitizen applications, and registrations securely.", 
          features: ["Remote KRA & eCitizen Services", "Online Job Applications", "University Registration Assist"] 
        },
      ]
    },
    {
      id: "strategy",
      title: "Product Design & Branding",
      description: "World-class design to elevate your brand identity.",
      services: [
        { 
          icon: PenTool, 
          title: "Product Design (UI/UX)", 
          description: "Before we write code, we design. Using tools like Figma, we create stunning, user-friendly prototypes for your apps and websites to ensure great user experience.", 
          features: ["Figma Prototyping", "User Interface (UI) Design", "User Experience (UX) Strategy"] 
        },
        { 
          icon: Palette, 
          title: "Graphic Design & Branding", 
          description: "Stand out with a professional look. We design unique logos, business cards, social media flyers, and company profiles that look consistent across all platforms.", 
          features: ["Logo & Brand Identity", "Social Media Posters", "Company Profiles"] 
        },
        { 
          icon: Cloud, 
          title: "Cloud Hosting & Domain", 
          description: "Your digital real estate. We register your professional domain name (yourbusiness.co.ke) and provide secure cloud hosting for your website and corporate emails.", 
          features: ["Domain Registration", "Corporate Email Setup", "SSL Security Certificates"] 
        },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert technical solutions delivered to your doorstep or remotely. 
            From <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Code</span> to <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Hardware</span>, we've got you covered.
          </p>
        </div>

        {/* Categories */}
        {categories.map((cat, idx) => <ServiceSection key={idx} {...cat} />)}

      

      </div>
    </div>
  );
}