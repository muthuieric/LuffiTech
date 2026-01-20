import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
  features?: string[]; // Added this in case you use the features list version
}

const ServiceCard = ({ icon: Icon, title, description, href, className = "", features }: ServiceCardProps) => {
  
  // 1. Define the inner content of the card
  const CardContent = (
    <div 
      className={`group relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 ${className}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-5 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
        <Icon size={24} strokeWidth={2.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Optional Features List (if passed) */}
      {features && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, idx) => (
             <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
               <span className="w-1 h-1 rounded-full bg-indigo-500" /> {feature}
             </li>
          ))}
        </ul>
      )}

      {/* Learn More Arrow (Only shows if it's a link) */}
      {href && (
        <div className="mt-4 flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Learn more <ArrowRight size={16} className="ml-1" />
        </div>
      )}
    </div>
  );

  // 2. Conditional Rendering: Return Link if href exists, otherwise simple div
  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="h-full">
      {CardContent}
    </div>
  );
};

export default ServiceCard;