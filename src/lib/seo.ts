import type { Metadata } from 'next';
import { RADAR_ITEMS, type RadarItem } from '@/lib/radar-data';

const SITE_URL = 'https://vanhanhmoi.com';

export function getRadarItem(id: string): RadarItem {
  const item = RADAR_ITEMS.find((candidate) => candidate.id === id);

  if (!item) {
    throw new Error(`Missing Radar item: ${id}`);
  }

  return item;
}

export function createRadarMetadata(
  item: RadarItem,
  issueNumber: string,
): Metadata {
  const url = `${SITE_URL}/radar/${item.slug}`;
  const title = `${item.title} | VHM Radar #${issueNumber}`;

  return {
    title: { absolute: title },
    description: item.subtitle,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: item.title,
      description: item.subtitle,
      url,
      siteName: 'Vận Hành Mới',
      locale: 'vi_VN',
      type: 'article',
      publishedTime: item.publishedAt,
      authors: ['Vận Hành Mới'],
    },
    twitter: {
      card: 'summary',
      title: item.title,
      description: item.subtitle,
    },
  };
}
