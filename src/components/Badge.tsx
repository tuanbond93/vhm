import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'warning' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors';
  
  const variants = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700',
    accent: 'bg-teal-950/80 text-teal-300 border border-teal-800/80',
    warning: 'bg-amber-950/70 text-amber-300 border border-amber-800/60',
    outline: 'border border-slate-700 text-slate-400',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
