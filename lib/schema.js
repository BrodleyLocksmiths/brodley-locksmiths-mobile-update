import { site, contact, locations, servicePages } from './siteData';

export function absolute(path = '/') {
  if (!path || path === '/') return site.url;
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'Locksmith'],
    '@id': `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absolute(site.logo),
    image: absolute(site.image),
    telephone: contact.phoneRaw,
    email: contact.email,
    priceRange: '££',
    description: 'Premium locksmith, lock installation, lock upgrade, lock change, door repair and property security survey services across Tendring, Essex.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.primaryTown,
      addressRegion: site.region,
      addressCountry: site.country
    },
    areaServed: locations.map((name) => ({ '@type': 'Place', name })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phoneRaw,
      email: contact.email,
      contactType: 'customer service',
      areaServed: site.country,
      availableLanguage: 'English'
    },
    makesOffer: servicePages.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.nav,
        areaServed: 'Tendring, Essex',
        provider: { '@id': `${site.url}/#business` }
      }
    }))
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { '@id': `${site.url}/#business` }
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path)
    }))
  };
}

export function serviceSchema(service, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absolute(path)}#service`,
    name: service.nav,
    description: service.meta,
    provider: { '@id': `${site.url}/#business` },
    serviceType: service.nav,
    areaServed: locations.map((name) => ({ '@type': 'Place', name })),
    url: absolute(path)
  };
}


export function articleSchema(post, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absolute(path)}#article`,
    headline: post.title,
    description: post.meta,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: site.name,
      url: site.url
    },
    publisher: {
      '@id': `${site.url}/#business`
    },
    image: absolute(site.image),
    mainEntityOfPage: absolute(path)
  };
}

export function pageMetadata({ title, description, path = '/', keywords }) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: absolute(path)
    },
    openGraph: {
      type: 'website',
      title: fullTitle,
      description,
      url: absolute(path),
      siteName: site.name,
      images: [
        {
          url: absolute(site.image),
          width: 1200,
          height: 630,
          alt: `${site.name} logo`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absolute(site.image)]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}
