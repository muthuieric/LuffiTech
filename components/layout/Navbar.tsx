"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link'; // <--- THE KEY TO SPEED
import { usePathname } from 'next/navigation'; // <--- Instant active state updates
import { Moon, Sun, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

// --- Optimized Sub-Components ---

const NavLink = memo(({ href, children, className, onClick }: any) => {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={className}
      // 'prefetch' is true by default, making navigation instant
    >
      {children}
    </Link>
  );
});
NavLink.displayName = "NavLink";

const NavButton = memo(({ children, onClick, className = "" }: any) => (
  <button 
    onClick={onClick} 
    className={`flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold transition-transform active:scale-95 shadow-lg ${className}`}
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
  const pathname = usePathname(); // Automatically tracks current route

  // 1. PERFORMANCE: Throttled Scroll Listener
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. UX: Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // 3. UX: Close menu automatically when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = '254702104690'; 
    const message = encodeURIComponent('Hello Luffi Tech, I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }, []);

  const navItems = [
    { name: 'Services', href: '/services' },
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

  const isHomePage = pathname === '/';
  
  const navBackgroundClass = scrolled || !isHomePage || isMenuOpen
    ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3'
    : 'bg-transparent py-5';

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ease-in-out ${navBackgroundClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-14">
            
            {/* LOGO */}
            <Link 
              href="/" 
              className="group relative z-[101] gap-2 flex items-center transform transition-transform duration-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/icon_only2.png" alt="Luffi Tech" className="h-9 md:h-10 w-auto object-contain" />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Luffi <span className="text-purple-600">Tech</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                
                return (
                  <div key={item.name} className="relative group h-full flex items-center">
                    <Link 
                      href={item.href} 
                      className={`flex items-center gap-1 text-sm font-bold transition-all duration-200 
                        ${isActive
                          ? 'text-purple-600 dark:text-purple-400' 
                          : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {item.dropdown && (
                      <div className="absolute left-0 top-full pt-4 w-60 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out transform-gpu">
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden ring-1 ring-black/5 p-1">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link 
                href="/about" 
                className={`text-sm font-bold transition-colors ${pathname === '/about' ? 'text-purple-600 dark:text-purple-400' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'}`}
              >
                About
              </Link>

              <Link 
                href="/contact" 
                className={`text-sm font-bold transition-colors ${pathname === '/contact' ? 'text-purple-600 dark:text-purple-400' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'}`}
              >
                Contact
              </Link>

              <div className="pl-6 border-l border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                <NavButton 
                  className="bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20 text-sm"
                  onClick={handleWhatsAppClick}
                >
                  WhatsApp Us
                </NavButton>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="md:hidden flex items-center gap-3 z-[101]">
              <button 
                onClick={toggleTheme} 
                className="p-2 text-slate-500 dark:text-slate-400 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-[90] bg-white dark:bg-slate-900 md:hidden transition-transform duration-300 ease-out transform-gpu ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0px', paddingTop: '80px' }}
      >
        <div className="h-full overflow-y-auto px-6 pb-20">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-3">
                <Link 
                  href={item.href}
                  className={`block text-2xl font-bold ${pathname === item.href ? 'text-purple-600' : 'text-slate-900 dark:text-white'}`}
                >
                  {item.name}
                </Link>
                
                {item.dropdown && (
                  <div className="pl-4 space-y-4 border-l-2 border-purple-200 dark:border-purple-900">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-lg font-medium text-slate-600 dark:text-slate-400 active:text-purple-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-6">
                <Link 
                  href="/about" 
                  className={`block text-2xl font-bold ${pathname === '/about' ? 'text-purple-600' : 'text-slate-900 dark:text-white'}`}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className={`block text-2xl font-bold ${pathname === '/contact' ? 'text-purple-600' : 'text-slate-900 dark:text-white'}`}
                >
                  Contact
                </Link>
            </div>
            
            <div className="pt-4">
              <NavButton 
                className="w-full bg-purple-600 text-white py-4 text-lg shadow-xl" 
                onClick={handleWhatsAppClick}
              >
              WhatsApp Us
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);