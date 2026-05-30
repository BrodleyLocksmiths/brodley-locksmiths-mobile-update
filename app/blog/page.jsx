import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { PageShell, ContactCTA } from '@/components/Shared';
import { blogPosts } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Advice Blog Tendring | Brodley Locksmiths',
  description: 'Practical locksmith advice for Tendring homeowners, landlords, holiday lets and businesses covering lock changes, uPVC door repairs, anti-snap locks and key control.',
  path: '/blog',
  keywords: 'locksmith advice Tendring, lock change advice, uPVC door repair advice, landlord locksmith blog'
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])]} />
      <PageShell eyebrow="Advice" title="Locksmith advice for homes, landlords and businesses." intro="Useful guides covering lock changes, uPVC door problems, lock upgrades, key control and practical property security across Tendring.">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-meta"><CalendarDays size={16} /> {post.readTime}</div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-link">Read article <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </PageShell>
      <ContactCTA />
    </>
  );
}
