import { blogPosts, servicePages, site, townPages } from '@/lib/siteData';

const priorityServiceSlugs = new Set([
  'lock-changes',
  'lock-upgrades',
  'anti-snap-lock-upgrades',
  'euro-cylinder-replacement',
  'upvc-door-repairs-tendring',
  'door-alignment-adjustment',
  'multipoint-lock-repairs',
  'door-handle-replacement',
  'key-safes',
  'security-surveys',
  'gatemate-gate-security',
  'locksmith-for-landlords',
  'move-in-lock-change-service'
]);

const priorityTownNames = new Set([
  'Clacton-on-Sea',
  'Frinton-on-Sea',
  'Walton-on-the-Naze',
  'Harwich',
  'Dovercourt',
  'Manningtree',
  'Brightlingsea',
  'Holland-on-Sea',
  'Jaywick',
  'Great Clacton',
  'St Osyth',
  'Thorpe-le-Soken'
]);

function priorityFor(path) {
  if (path === '/') return 1;
  if (path === '/services' || path === '/areas' || path === '/locksmith-services-and-areas' || path === '/get-secure-check' || path === '/quote' || path === '/contact') return 0.95;
  if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '');
    return priorityServiceSlugs.has(slug) ? 0.95 : 0.85;
  }
  if (path.startsWith('/areas/')) {
    const slug = path.replace('/areas/', '');
    const town = townPages.find((item) => item.slug === slug);
    return town && priorityTownNames.has(town.town) ? 0.9 : 0.78;
  }
  if (path === '/reviews' || path === '/recent-work' || path === '/real-work-gallery' || path === '/case-studies') return 0.85;
  if (path.startsWith('/blog/')) return 0.72;
  if (path === '/privacy-policy' || path === '/cookie-policy') return 0.35;
  return 0.75;
}

function changeFrequencyFor(path) {
  if (path === '/' || path === '/services' || path === '/areas' || path === '/locksmith-services-and-areas' || path === '/get-secure-check') return 'weekly';
  if (path.startsWith('/services/')) return 'monthly';
  if (path.startsWith('/areas/')) return 'monthly';
  if (path.startsWith('/blog/')) return 'monthly';
  return 'monthly';
}

// Only send lastModified for URLs whose public content changed in this release.
// A deployment is not the same as a content change. Review this list for future updates.
const verifiedContentUpdates = new Set([
  '/',
  '/services',
  '/services/lock-changes',
  '/services/upvc-door-repairs-tendring',
  '/services/anti-snap-lock-upgrades',
  '/services/key-safes'
]);
const contentUpdateDate = new Date('2026-11-08T00:00:00.000Z');

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
  const serviceUrls = servicePages.map((s) => `/services/${s.slug}`);
  const areaUrls = townPages.map((t) => `/areas/${t.slug}`);
  const blogUrls = blogPosts.map((p) => `/blog/${p.slug}`);
  return [...new Set([...base, ...serviceUrls, ...areaUrls, ...blogUrls])].map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`,
    ...(verifiedContentUpdates.has(path) ? { lastModified: contentUpdateDate } : {}),
    changeFrequency: changeFrequencyFor(path),
    priority: priorityFor(path)
  }));
}
