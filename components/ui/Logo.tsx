import React from 'react';
import { Zap } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900 dark:text-white ${className}`}>
    <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-md" aria-hidden="true">
      <Zap size={20} fill="currentColor" />
    </div>
    <span className="sr-only">e-daima-solutions logo</span>
    <span>eDS</span>
  </div>
);

export default Logo;