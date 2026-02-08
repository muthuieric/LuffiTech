"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Linkedin, Facebook, Instagram, X } from 'lucide-react'; // <--- Removed 'Tiktok'

// --- Custom Icon Component for TikTok ---
// Since Lucide doesn't have TikTok, we create a matching SVG component
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- Types for TypeScript Safety ---

type FooterLinkItem = {
  name: string;
  href: string;
  highlight?: string;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

type SocialLinkItem = {
  name: string;
  href: string;
  icon: React.ElementType; // Allows both Lucide icons and our custom component
  colorClass: string;
};

// --- Static Data Configuration ---

const SOCIAL_LINKS: SocialLinkItem[] = [
  { 
    name: 'TikTok', 
    href: 'https://www.tiktok.com/@luffi.tech', 
    icon: TikTokIcon, // <--- Using the custom component here
    colorClass: 'hover:bg-slate-100 hover:text-[#ff0050] dark:hover:bg-slate-800 dark:hover:text-[#00f2ea]' 
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/luffitech', 
    icon: Instagram, 
    colorClass: 'hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/30 dark:hover:text-pink-400' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/luffi-tech', 
    icon: Linkedin, 
    colorClass: 'hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-500' 
  },
  { 
    name: 'X', 
    href: 'https://x.com/luffitech', 
    icon: X, 
    colorClass: 'hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white' 
  },

  { 
    name: 'Facebook', 
    href: 'https://facebook.com/luffitech', 
    icon: Facebook, 
    colorClass: 'hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-600' 
  }
];

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
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" }
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
                <Image
                  src="/icon_only2.png" 
                  alt="Luffi Tech Logo"
                  width={40} 
                  height={40} 
                  className="w-auto h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
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