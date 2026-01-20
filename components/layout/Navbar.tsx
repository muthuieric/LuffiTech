"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we are on the homepage
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '254700000000'; // Replace with Luffi Tech's number
    const message = encodeURIComponent('Hello Luffi Tech, I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const navItems = [
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Software & AI Solutions', href: '/services#engineering' },
        { name: 'On-Site IT Support', href: '/services#infrastructure' },
        { name: 'Product Design & Branding', href: '/services#strategy' }
      ]
    },
    { 
      name: 'Academy', 
      href: '/academy',
      dropdown: [
        { name: 'Digital Foundations', href: '/academy#foundations' },
        { name: 'CBC Tech (Ages 7-18)', href: '/academy#cbc' },
        { name: 'Tech Mastery Bootcamp', href: '/academy#bootcamp' }
      ]
    }
  ];

  // Logic: Background transparency + blur transitions
  const navbarClasses = scrolled || !isHomePage
    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-2'
    : 'bg-transparent py-4';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navbarClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Added Hover Scale Animation */}
          <Link 
            href="/" 
            aria-label="Luffi Tech Home" 
            className="group relative z-50 flex items-center gap-2 transform transition-transform duration-300 hover:scale-105"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 
                    ${pathname === item.href 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5'
                    }`}
                >
                  {item.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 ease-out" />
                </Link>

                {/* Dropdown Menu - Smooth Fade & Slide Up Animation */}
                <div className="absolute left-0 top-full pt-4 w-60 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden ring-1 ring-black ring-opacity-5">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b border-slate-50 dark:border-slate-700/50 last:border-0"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link 
              href="/about" 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact
            </Link>

            <div className="pl-6 border-l border-slate-200 dark:border-slate-700 flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:rotate-12"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 border-green-600 text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                onClick={handleWhatsAppClick}
              >
                <div className="mr-2 animate-pulse" /> WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-slate-500 dark:text-slate-400 hover:rotate-12 transition-transform duration-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Open Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                 {/* Simple cross-fade animation for icon */}
                 <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                    <Menu size={24} />
                 </span>
                 <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                    <X size={24} />
                 </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide-down animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-3">
                <span className="block font-bold text-lg text-slate-900 dark:text-white">
                  {item.name}
                </span>
                <div className="pl-4 space-y-3 border-l-2 border-indigo-100 dark:border-indigo-900/50">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-4">
                <Link href="/about" className="block font-bold text-lg text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
                    About
                </Link>
                
                <Link href="/contact" className="block font-bold text-lg text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
                    Contact
                </Link>
            </div>
            
            <div className="pt-2 pb-4">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 border-green-600 text-white shadow-lg active:scale-95 transition-transform" 
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={18} className="mr-2" /> WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;