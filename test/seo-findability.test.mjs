import assert from 'node:assert/strict';
import { RADAR_ITEMS } from '../src/lib/radar-data.ts';
import { createRadarMetadata, getRadarItem } from '../src/lib/seo.ts';
import sitemapModule from '../src/app/sitemap.ts';
import robotsModule from '../src/app/robots.ts';

const SITE_URL = 'https://vanhanhmoi.com';
const publishedItems = RADAR_ITEMS.filter((item) => item.published);
const sitemap = typeof sitemapModule === 'function' ? sitemapModule : sitemapModule.default;
const robots = typeof robotsModule === 'function' ? robotsModule : robotsModule.default;

assert.equal(publishedItems.length, 8, 'The SEO baseline covers Radar #001–#008');

const canonicalUrls = new Set();
const titles = new Set();

for (const item of publishedItems) {
  const issueNumber = item.id.replace('radar-', '');
  const selectedItem = getRadarItem(item.id);
  const metadata = createRadarMetadata(selectedItem, issueNumber);
  const expectedUrl = `${SITE_URL}/radar/${item.slug}`;

  assert.equal(selectedItem.slug, item.slug, `${item.id} resolves by stable ID`);
  assert.equal(metadata.alternates?.canonical, expectedUrl, `${item.id} has its own canonical`);
  assert.equal(metadata.openGraph?.url, expectedUrl, `${item.id} has its own Open Graph URL`);
  assert.equal(metadata.openGraph?.title, item.title, `${item.id} has its own Open Graph title`);
  assert.equal(metadata.twitter?.title, item.title, `${item.id} has its own Twitter title`);
  assert.deepEqual(metadata.robots, { index: true, follow: true }, `${item.id} is indexable`);

  canonicalUrls.add(String(metadata.alternates?.canonical));
  titles.add(String(metadata.title.absolute));
}

assert.equal(canonicalUrls.size, 8, 'All Radar canonicals are unique');
assert.equal(titles.size, 8, 'All Radar titles are unique');

const sitemapEntries = sitemap();
for (const item of publishedItems) {
  const expectedUrl = `${SITE_URL}/radar/${item.slug}`;
  const matches = sitemapEntries.filter((entry) => entry.url === expectedUrl);

  assert.equal(matches.length, 1, `${item.id} appears exactly once in the sitemap`);
  assert.equal(matches[0].lastModified, item.publishedAt, `${item.id} uses its publication date`);
}

assert.equal(robots().sitemap, `${SITE_URL}/sitemap.xml`);
assert.equal(robots().host, SITE_URL);

console.log('SEO findability regression checks passed.');
