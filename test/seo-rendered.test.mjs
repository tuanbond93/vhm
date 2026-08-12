import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { RADAR_ITEMS } from '../src/lib/radar-data.ts';

const buildRoot = path.resolve('.next/server/app/radar');
const decodeEntities = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#x27;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

const globalRoutes = [
  { file: 'radar.html', path: '/radar', title: 'VHM Radar — Decision Intelligence cho Người Làm Vận Hành' },
  { file: 'kien-thuc.html', path: '/kien-thuc', title: 'Bài viết & Kiến thức Vận hành' },
  { file: 'cong-cu.html', path: '/cong-cu', title: 'Công cụ & Templates Vận hành' },
  { file: 'gioi-thieu.html', path: '/gioi-thieu', title: 'Giới thiệu & Triết lý Vận hành' },
  { file: 'lien-he.html', path: '/lien-he', title: 'Liên hệ & Đăng ký Bản tin' },
];

for (const route of globalRoutes) {
  const html = fs.readFileSync(path.resolve('.next/server/app', route.file), 'utf8');
  const canonical = `https://vanhanhmoi.com${route.path}`;

  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${route.path} has its own canonical`);
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`), `${route.path} has its own Open Graph URL`);
  const twitterTitle = html.match(/<meta name="twitter:title" content="([^"]*)"/)?.[1] ?? '';
  assert.equal(decodeEntities(twitterTitle), route.title, `${route.path} has its own Twitter title`);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${route.path} has exactly one H1`);
}

for (const item of RADAR_ITEMS.filter((candidate) => candidate.published)) {
  const htmlPath = path.join(buildRoot, `${item.slug}.html`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const canonical = `https://vanhanhmoi.com/radar/${item.slug}`;

  assert.match(html, new RegExp(`<title>[^<]*${item.id.replace('radar-', '')}[^<]*</title>`), `${item.id} has a numbered title`);
  const renderedDescription = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  assert.equal(decodeEntities(renderedDescription), item.subtitle, `${item.id} has its own description`);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${item.id} has its own canonical`);
  assert.ok(html.includes('<meta name="robots" content="index, follow"'), `${item.id} is indexable`);
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`), `${item.id} has its own Open Graph URL`);
  assert.ok(html.includes(`<meta name="twitter:title" content="${item.title}"`), `${item.id} has its own Twitter title`);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${item.id} has exactly one H1`);
  assert.ok(html.includes(item.title), `${item.id} renders its own title content`);
  assert.ok(html.includes('href="/radar"'), `${item.id} links back to the Radar index`);
  assert.ok(html.includes('"@type":"Article"'), `${item.id} renders Article structured data`);
}

console.log('Rendered SEO metadata checks passed for Radar #001–#008.');
