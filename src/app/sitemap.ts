import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanhanhmoi.com';

  const routes = [
    '',
    '/radar',
    '/radar/genai-cskh-knowledge-multiplier',
    '/radar/du-bao-nhu-cau-human-override',
    '/radar/ai-agent-human-in-the-loop-taobao',
    '/kien-thuc',
    '/cong-cu',
    '/gioi-thieu',
    '/lien-he',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' || route === '/radar' ? 1.0 : 0.8,
  }));
}
