import { MetadataRoute } from 'next';
import { RADAR_ITEMS } from '@/lib/radar-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanhanhmoi.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/radar`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kien-thuc`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/cong-cu`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gioi-thieu`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/lien-he`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/radar/ai-agent-human-in-the-loop`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/radar/demand-forecast-governance`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const radarRoutes: MetadataRoute.Sitemap = RADAR_ITEMS
    .filter((item) => item.published)
    .map((item) => ({
      url: `${baseUrl}/radar/${item.slug}`,
      lastModified: item.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...staticRoutes, ...radarRoutes];
}
