/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      { source: '/general-5-1', destination: '/blog', permanent: true },
      { source: '/locksmith-services', destination: '/services', permanent: true },
      { source: '/price-guide', destination: '/pricing-guide', permanent: true },
      { source: '/general-5', destination: '/services/lock-changes', permanent: true },
      { source: '/locksmiths-near-me', destination: '/areas', permanent: true },
      { source: '/locksmith-in-clacton', destination: '/areas/clacton-on-sea', permanent: true },
      { source: '/locksmith-in-frinton-on-sea', destination: '/areas/frinton-on-sea', permanent: true },
      { source: '/locksmith-in-colchester', destination: '/areas', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/seo-checklist', destination: '/get-secure-check', permanent: true }
    ];
  }
};

module.exports = nextConfig;
