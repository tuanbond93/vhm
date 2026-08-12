'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@/lib/analytics';

export function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    Analytics.pageView(pathname, document.title);
  }, [pathname]);

  return null;
}
