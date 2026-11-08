import { blogPosts, servicePages, site, townPages } from '@/lib/siteData';

/**
 * The sitemap should list canonical, indexable pages.
 * Do not publish a changing `lastModified` value on every request/build.
 * Add `lastModified` per page only when an actual content-update date is
 * reliably available (for example, maintained in a content record).
 * Google ignores sitemap priority and changeFrequency.
 */
export default function sitemap() {
  const base = [
    '/',
    '/services',
    '/areas',
    '/locksmith-services-and-areas',
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

  const serviceUrls = servicePages.map(({ slug }) => `/services/${slug}`);
  const areaUrls = townPages.map(({ slug }) => `/areas/${slug}`);
  const blogUrls = blogPosts.map(({ slug }) => `/blog/${slug}`);
  const paths = [...new Set([...base, ...serviceUrls, ...areaUrls, ...blogUrls])];

  return paths.map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`
  }));
}
