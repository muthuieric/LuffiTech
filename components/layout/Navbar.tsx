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
        { name: 'CBC Tech (Ages 7-18)', href: '/academy#foundations' },
        { name: 'Tech Mastery Bootcamp', href: '/academy#bootcamp' }
      ]
    }
  ];

  // Logic: If scrolled OR not on homepage, use solid background. Otherwise transparent.
  const navbarClasses = scrolled || !isHomePage
    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
    : 'bg-transparent';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${pathname === item.href ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
                >
                  {item.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b border-slate-50 dark:border-slate-700/50 last:border-0"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link href="/about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              About
            </Link>

            <Link href="/contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact
            </Link>

            <div className="pl-4 border-l border-slate-200 dark:border-slate-700 flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 border-green-600"
                onClick={() => window.open('https://wa.me/254700000000', '_blank')}
              >
                <MessageCircle size={18} className="mr-2" /> WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-slate-400">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link 
                  href={item.href}
                  className="block font-semibold text-slate-900 dark:text-white"
                >
                  {item.name}
                </Link>
                <div className="pl-4 space-y-2 border-l-2 border-slate-100 dark:border-slate-800">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link href="/about" className="block font-semibold text-slate-900 dark:text-white">About</Link>
            
            <Link href="/contact" className="block font-semibold text-slate-900 dark:text-white">
              Contact
            </Link>
            
            <div className="pt-4">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 border-green-600" 
                onClick={() => window.open('https://wa.me/254700000000', '_blank')}
              >
                <MessageCircle size={18} className="mr-2" /> WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;