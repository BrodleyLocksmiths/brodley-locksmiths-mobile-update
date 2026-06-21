import { blogPosts, servicePages, site, townPages } from '@/lib/siteData';

export default function sitemap() {
  const base = [
    '/',
    '/services',
    '/areas',
    '/faqs',
    '/about',
    '/contact',
    '/blog',
    '/reviews',
    '/get-secure-check',
    '/recent-work',
    '/real-work-gallery',
    '/case-studies',
    '/why-choose-brodley-locksmiths',
    '/example-security-survey-report',
    '/quote',
    '/leave-a-review',
    '/workmanship-promise',
    '/pricing-guide',
    '/privacy-policy',
    '/cookie-policy'
  ];
  const serviceUrls = servicePages.map((s) => `/services/${s.slug}`);
  const areaUrls = townPages.map((t) => `/areas/${t.slug}`);
  const blogUrls = blogPosts.map((p) => `/blog/${p.slug}`);
  return [...base, ...serviceUrls, ...areaUrls, ...blogUrls].map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`,
    changeFrequency: path === '/' ? 'weekly' : path.startsWith('/blog/') ? 'monthly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/services') ? 0.9 : 0.75
  }));
}
