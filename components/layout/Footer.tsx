"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

// --- Types for TypeScript Safety ---

type FooterLinkItem = {
  name: string;
  href: string;
  highlight?: string; // <--- The Fix: '?' makes this optional
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

// --- Static Data Configuration ---

const SOCIAL_LINKS = [
  { 
    name: 'Twitter', 
    href: 'https://twitter.com', 
    icon: Twitter, 
    colorClass: 'hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com', 
    icon: Linkedin, 
    colorClass: 'hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-500' 
  },
  { 
    name: 'Facebook', 
    href: 'https://facebook.com', 
    icon: Facebook, 
    colorClass: 'hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-600' 
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com', 
    icon: Instagram, 
    colorClass: 'hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/30 dark:hover:text-pink-400' 
  }
];

// Explicitly typed array to prevent build errors
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "Web & Software Development", href: "/services#web-dev" },
      { name: "Graphic Design & Branding", href: "/services#graphic-design" },
      { name: "AI & Automation", href: "/services#ai-automation" },
      { name: "Payment Integrations", href: "/services#payments" }
    ]
  },
  {
    title: "Academy",
    links: [
      { name: "Digital Foundations", href: "/academy#foundations", highlight: "hover:text-orange-600 dark:hover:text-orange-400" },
      { name: "CBC Tech (Ages 7-18)", href: "/academy#cbc", highlight: "hover:text-orange-600 dark:hover:text-orange-400" },
      { name: "Tech Mastery Bootcamp", href: "/academy#bootcamp", highlight: "hover:text-orange-600 dark:hover:text-orange-400" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  }
];

// --- Memoized Components ---

const FooterLink = memo(({ href, children, className = "" }: any) => (
  <Link 
    href={href} 
    className={`inline-block transition-all duration-200 hover:translate-x-1 ${className}`}
  >
    {children}
  </Link>
));
FooterLink.displayName = "FooterLink";

const SocialButton = memo(({ href, icon: Icon, label, colorClass }: any) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className={`w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${colorClass}`}
  >
    <Icon size={18} />
  </a>
));
SocialButton.displayName = "SocialButton";

// --- Main Footer Component ---

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" aria-label="Luffi Tech Home" className="inline-block group">
              <div className="flex items-center gap-2">
                <img 
                  src="/icon_only2.png" 
                  alt="Luffi Tech Logo" 
                  loading="lazy"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Luffi <span className="text-purple-600">Tech</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses through digital innovation and nurturing the next generation of tech talent.
            </p>
          </div>
          
          {/* Dynamic Link Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink 
                      href={link.href} 
                      // TS now knows 'highlight' is optional string or undefined
                      className={link.highlight || "hover:text-indigo-600 dark:hover:text-indigo-400"}
                    >
                      {link.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 order-2 md:order-1">
            © {currentYear} Luffi Tech. All rights reserved.
          </p>
          
          <div className="flex gap-4 order-1 md:order-2">
             {SOCIAL_LINKS.map((social) => (
               <SocialButton 
                 key={social.name}
                 href={social.href}
                 icon={social.icon}
                 label={social.name}
                 colorClass={social.colorClass}
               />
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);