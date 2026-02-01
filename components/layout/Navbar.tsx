"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Moon, Sun, Menu, X, ChevronDown, MessageCircle, 
  Home, Layers, Zap, GraduationCap, Users, Phone 
} from 'lucide-react';
import Image from 'next/image';
import icononly2 from '@/public/icon_only2.png';

// --- Optimized Sub-Components ---

const NavButton = memo(({ children, onClick, className = "" }: any) => (
  <button 
    onClick={onClick} 
    className={`flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl font-bold transition-all active:scale-95 shadow-md hover:shadow-lg ${className}`}
  >
    {children}
  </button>
));
NavButton.displayName = "NavButton";

// --- Main Navbar Component ---

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 1. Scroll Listener
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // 3. Lock body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = '254702104690'; 
    const message = encodeURIComponent('Hello Luffi Tech, I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }, []);

  // Define icons for menu items
  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={20} /> }, // Added Home for mobile clarity
    { name: 'Services', href: '/services', icon: <Zap size={20} /> },
    { 
      name: 'Academy', 
      href: '/academy',
      icon: <GraduationCap size={20} />,
      dropdown: [
        { name: 'Digital Foundations', href: '/academy#foundations' },
        { name: 'CBC Tech (Ages 7-18)', href: '/academy#foundations' },
        { name: 'Tech Mastery Bootcamp', href: '/academy#bootcamp' }
      ]
    },
    { name: 'About', href: '/about', icon: <Users size={20} /> },
    { name: 'Process', href: '/process', icon: <Layers size={20} /> },
    { name: 'Contact', href: '/contact', icon: <Phone size={20} /> },
  ];

  const isHomePage = pathname === '/';
  
  const navClasses = `
    fixed w-full z-[100] transition-all duration-300 ease-in-out
    ${scrolled || isMenuOpen || !isHomePage
      ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-3' 
      : 'bg-transparent py-5'
    }
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-14">
            
            {/* LOGO */}
            <Link 
              href="/" 
              className="group relative z-[101] gap-2 flex items-center transform transition-transform duration-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image 
                src={icononly2}
                alt="Luffi Tech Logo"
                className="h-8 md:h-10 w-auto object-contain" 
                priority
              />
              <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Luffi <span className="text-purple-600">Tech</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.filter(i => i.name !== 'Home').map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <div key={item.name} className="relative group h-full flex items-center">
                    <Link 
                      href={item.href} 
                      className={`flex items-center gap-1 text-sm font-bold transition-colors duration-200 
                        ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600'}`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                    </Link>
                    {/* Desktop Dropdown logic... */}
                    {item.dropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform">
                         <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2">
                           {item.dropdown.map(sub => (
                             <Link key={sub.name} href={sub.href} className="block px-4 py-2 text-sm font-medium rounded-xl hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                               {sub.name}
                             </Link>
                           ))}
                         </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pl-6 border-l border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <NavButton className="bg-purple-600 hover:bg-purple-700 text-white text-xs uppercase" onClick={handleWhatsAppClick}>
                  WhatsApp Us
                </NavButton>
              </div>
            </div>

            {/* MOBILE HAMBURGER */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-slate-800 dark:text-slate-200 bg-slate-100/50 dark:bg-slate-800/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors active:scale-95"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDE DRAWER --- */}
      
      {/* 1. Backdrop */}
      <div 
        className={`fixed inset-0 z-[105] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 2. Drawer Panel */}
      <div 
        className={`
          fixed inset-y-0 right-0 z-[110] 
          w-[75%] sm:w-[60%] max-w-[400px] 
          bg-white dark:bg-slate-950 shadow-2xl border-l border-slate-200 dark:border-slate-800
          transform transition-transform duration-300 ease-out md:hidden flex flex-col h-full
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="px-6 py-5 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 opacity-80">
             <Image src={icononly2} alt="Logo" className="h-6 w-auto" />
             <span className="font-bold text-lg dark:text-white">Menu</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 -mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links Container */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <div key={item.name} className="space-y-1">
                <Link 
                  href={item.href}
                  className={`
                    flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium'
                    }
                  `}
                >
                  {/* Icon Wrapper */}
                  <span className={`${isActive ? 'text-purple-600' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  <span className="text-base">{item.name}</span>
                </Link>

                {/* Mobile Dropdown Items */}
                {item.dropdown && isActive && (
                  <div className="ml-12 pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-1 my-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-slate-500 hover:text-purple-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-slate-500">Appearance</span>
            <button 
              onClick={toggleTheme} 
              className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 shadow-sm"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          <NavButton 
            className="w-full bg-purple-600 text-white py-2.5 shadow-purple-200 dark:shadow-none" 
            onClick={handleWhatsAppClick}
          >
            <span>WhatsApp Us</span>
          </NavButton>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);