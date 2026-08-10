import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'warning' | 'outline' | 'success';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors';
  
  const variants = {
    default: 'bg-[#EFF2F5] text-[#14202B] border border-[#DCE2E7]',
    accent: 'bg-[#EBF2FE] text-[#235789] border border-[#C5D8F9]',
    success: 'bg-[#E8F5F2] text-[#167A65] border border-[#BDE3DA]',
    warning: 'bg-[#FEF5E7] text-[#C47A16] border border-[#F9E2C1]',
    outline: 'border border-[#DCE2E7] text-[#435164] bg-white',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
