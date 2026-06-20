import { site } from '@/lib/siteData';

export default function robots() {
  if (!site.launchReady) {
    return {
      rules: { userAgent: '*', disallow: '/' }
    };
  }
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
