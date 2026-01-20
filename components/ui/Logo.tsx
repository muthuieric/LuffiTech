import React from 'react';
import { Code2 } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900 dark:text-white ${className}`}>
    <div 
      className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20" 
      aria-hidden="true"
    >
      {/* I changed 'Zap' to 'Code2' as it represents Software & Education better.
         Other good options: <Cpu />, <Terminal />, or <Zap /> (if you want to keep the energy vibe)
      */}
      <Code2 size={20} strokeWidth={2.5} />
    </div>
    <span className="sr-only">Luffi Tech logo</span>
    <span>Luffi Tech</span>
  </div>
);

export default Logo;