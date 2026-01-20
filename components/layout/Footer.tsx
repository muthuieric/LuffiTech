import React from 'react';
import { Globe, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses through digital innovation and nurturing the next generation of tech talent.
            </p>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
               <li>
                 <Link href="/services#engineering" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 Software, Mobile & AI Solutions
                 </Link>
               </li>
               <li>
                 <Link href="/services#infrastructure" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 On-Site IT Support & Hardware
                 </Link>
               </li>
               <li>
                 <Link href="/services#strategy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 Product Design & Branding
                 </Link>
               </li>
            </ul>
          </div>

          {/* Academy Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Academy</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
               <li>
                 <Link href="/academy#foundations" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                   Digital Foundations
                 </Link>
               </li>
               <li>
                 <Link href="/academy#foundations" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                   CBC Tech(Ages 7-18)
                 </Link>
               </li>
               <li>
                 <Link href="/academy#bootcamp" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                   Tech Mastery Bootcamp
                 </Link>
             </li>
             
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
               <li>
                 <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                   About Us
                 </Link>
               </li>
               <li>
                 <Link href="/careers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                   Careers
                 </Link>
               </li>
               {/* <li>
                 <Link href="/portal" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                   Student Portal
                 </Link>
               </li> */}
               <li>
                 <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                   Contact
                 </Link>
               </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} e-daima-solutions (eDS). All rights reserved.
          </p>
          <div className="flex gap-4">
             <a 
               href="https://twitter.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Twitter"
               className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 rounded-full transition-colors"
             >
               <Twitter size={16} />
             </a>
             <a 
               href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="LinkedIn"
               className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 rounded-full transition-colors"
             >
               <Linkedin size={16} />
             </a>
             <a 
               href="https://facebook.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Facebook"
               className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/30 rounded-full transition-colors"
             >
               <Facebook size={16} />
             </a>
             <a 
               href="https://instagram.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Instagram"
               className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/30 rounded-full transition-colors"
             >
               <Instagram size={16} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;