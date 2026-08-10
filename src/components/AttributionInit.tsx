'use client';

import { useEffect } from 'react';
import { initAttribution } from '@/lib/attribution';

export function AttributionInit() {
  useEffect(() => {
    initAttribution();
  }, []);

  return null;
}
