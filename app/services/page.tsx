"use client";

import React from 'react';
import { 
  Globe, Smartphone, Code, Cloud, Palette, 
  Monitor, Wifi, Server, Database, Bot, PenTool, Cpu 
} from 'lucide-react';

const ServiceSection = ({ id, title, description, services }: any) => (
  <div id={id} className="scroll-mt-24 mb-20">
    <div className="flex items-center gap-4 mb-8">
      <div className="h-10 w-2 bg-indigo-600 rounded-full" />
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">{description}</p>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service: any, idx: number) => (
        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
            <service.icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-2 mt-auto">
            {service.features.map((feature: string, fIdx: number) => (
              <li key={fIdx} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
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
          description: "We build powerful, high-performance websites. Whether you need a corporate portfolio, an online shop, or a school management system, we use modern tools like Next.js to ensure your site is fast, secure, and Google-friendly.", 
          features: ["SEO Optimized (Rank #1)", "Responsive (Phone Friendly)", "Modern React Frameworks"] 
        },
        { 
          icon: Smartphone, 
          title: "Mobile App Development", 
          description: "Reach your customers on their phones. We build native Android apps using Kotlin for maximum speed, and React Native apps that work smoothly on both iPhones and Androids. We ensure your app works even without internet access.", 
          features: ["Kotlin (Native Android)", "React Native (Cross-Platform)", "Offline Functionality"] 
        },
        { 
          icon: Bot, 
          title: "Chatbots & Automation", 
          description: "Never miss a customer inquiry. We build intelligent Chatbots for WhatsApp and websites that can answer questions, take orders, and provide support 24/7 automatically. We also integrate M-Pesa so your bots can accept payments instantly.", 
          features: ["WhatsApp Business Bots", "M-Pesa Integration (C2B)", "Automated Customer Support"] 
        },
        { 
          icon: Database, 
          title: "Data Science & Analytics", 
          description: "Make better business decisions using data. We help you collect, clean, and analyze your business data to discover trends. From predicting sales to understanding customer behavior, we turn raw numbers into actionable growth strategies.", 
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
          description: "No need to carry your machine to a shop—we come to your home or office. Is your laptop slow, overheating, or showing a blue screen? We handle screen replacements, battery issues, keyboard repairs, and fresh Windows installations right where you are.", 
          features: ["Doorstep Repair Service", "Windows & Software Installation", "Virus Removal & Speed Boost"] 
        },
        { 
          icon: Wifi, 
          title: "Home & Office Networking", 
          description: "Struggling with weak Wi-Fi? We set up robust networks for homes and offices. We perform LAN cabling, router configuration, and printer sharing setups so your entire team can work seamlessly without connection drops.", 
          features: ["Wi-Fi Range Extension", "Office LAN Cabling", "Printer Network Setup"] 
        },
        { 
          icon: Cpu, 
          title: "Virtual Digital Bureau", 
          description: "Your remote assistant for government and online services. You don't need to visit a cybercafe; simply send us your details via WhatsApp. We handle KRA Returns, eCitizen applications (Passports, DL), and online registrations for you securely.", 
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
          description: "Before we write code, we design. Using tools like Figma, we create stunning, user-friendly prototypes for your apps and websites. We focus on 'User Experience' to ensure your customers find your product easy and enjoyable to use.", 
          features: ["Figma Prototyping", "User Interface (UI) Design", "User Experience (UX) Strategy"] 
        },
        { 
          icon: Palette, 
          title: "Graphic Design & Branding", 
          description: "Stand out with a professional look. We design unique logos, business cards, social media flyers, and company profiles. We ensure your brand looks consistent and professional across all platforms.", 
          features: ["Logo & Brand Identity", "Social Media Posters", "Company Profiles & Brochures"] 
        },
        { 
          icon: Cloud, 
          title: "Cloud Hosting & Domain", 
          description: "Your digital real estate. We register your professional domain name (yourbusiness.co.ke) and provide secure cloud hosting for your website and corporate emails, ensuring you look professional to your clients.", 
          features: ["Domain Registration", "Corporate Email Setup", "SSL Security Certificates"] 
        },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Expert technical solutions delivered to your doorstep or remotely. 
          From coding and design to hardware repair, we've got you covered.
        </p>
      </div>
      {categories.map((cat, idx) => <ServiceSection key={idx} {...cat} />)}
    </div>
  );
}