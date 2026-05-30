import { site } from '@/lib/siteData';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: []
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}
