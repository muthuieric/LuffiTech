import React from 'react';
import { LucideIcon, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right'; // New prop to control icon side
  isLoading?: boolean; // New prop for form submission states
  children: React.ReactNode;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'right',
  isLoading = false,
  disabled,
  ...props 
}: ButtonProps) => {
  
  // Added 'active:scale-95' for a tactile click effect
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30 focus:ring-indigo-500 border border-transparent",
    secondary: "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-slate-500",
    outline: "border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 focus:ring-indigo-500",
    ghost: "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 focus:ring-slate-500",
    glass: "bg-white/10 dark:bg-black/20 border border-white/20 text-white hover:bg-white/20 backdrop-blur-md focus:ring-white/50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} 
      disabled={isLoading || disabled}
      {...props}
    >
      {/* 1. Loading State */}
      {isLoading && (
        <Loader2 className="animate-spin" size={size === 'sm' ? 14 : 18} />
      )}

      {/* 2. Left Icon (Only if not loading) */}
      {!isLoading && Icon && iconPosition === 'left' && (
        <Icon size={size === 'sm' ? 16 : 18} />
      )}

      {/* 3. Text Content */}
      <span>{children}</span>

      {/* 4. Right Icon (Only if not loading) */}
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon size={size === 'sm' ? 16 : 18} />
      )}
    </button>
  );
};

export default Button;