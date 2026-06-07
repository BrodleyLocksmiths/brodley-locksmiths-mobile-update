import { blogPosts, servicePages, site, townPages } from '@/lib/siteData';

export default function sitemap() {
  const now = new Date();
  const base = [
    '/',
    '/services',
    '/areas',
    '/faqs',
    '/about',
    '/contact',
    '/blog',
    '/reviews',
    '/quote'
  ];
  const serviceUrls = servicePages.map((s) => `/services/${s.slug}`);
  const areaUrls = townPages.map((t) => `/areas/${t.slug}`);
  const blogUrls = blogPosts.map((p) => `/blog/${p.slug}`);
  return [...base, ...serviceUrls, ...areaUrls, ...blogUrls].map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/services') ? 0.9 : 0.75
  }));
}
