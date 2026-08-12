'use client';

import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Analytics } from '@/lib/analytics';

interface TrackedLinkProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  ctaId: string;
  sourcePage: string;
  placement: string;
}

export function TrackedLink({
  children,
  ctaId,
  sourcePage,
  placement,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        Analytics.ctaClick(ctaId, sourcePage, placement, String(props.href));
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
