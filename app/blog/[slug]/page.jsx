import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CalendarDays } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, FaqSection, ServicesInternalLinks } from '@/components/Shared';
import { blogPosts } from '@/lib/siteData';
import { articleSchema, breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return pageMetadata({ title: post.seoTitle, description: post.meta, path: `/blog/${post.slug}`, keywords: post.keywords });
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  return (
    <>
      <JsonLd data={[localBusinessSchema(), articleSchema(post, path), faqSchema(post.faqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }])]} />
      <article className="page-shell article-shell">
        <div className="page-gradient" />
        <div className="container relative article-wrap">
          <Link href="/blog" className="back-link">← Back to advice</Link>
          <p className="eyebrow gold">Locksmith Advice</p>
          <h1>{post.title}</h1>
          <div className="article-meta"><CalendarDays size={16} /> {post.readTime}</div>
          <p className="article-intro">{post.intro}</p>
          <div className="article-content">
            {post.sections.map((section) => (
              <section key={section.h}>
                <h2>{section.h}</h2>
                <p>{section.p}</p>
              </section>
            ))}
          </div>
          <div className="related-box">
            <h2>Need practical help?</h2>
            <p>Brodley Locksmiths provides lock changes, uPVC door repairs, lock upgrades, key safes and security surveys across Tendring.</p>
            <Link href="/quote" className="text-link">Request a quote <ArrowRight size={16} /></Link>
          </div>
          <ServicesInternalLinks />
        </div>
      </article>
      <FaqSection faqs={post.faqs} title="Article FAQs" intro="Common questions related to this locksmith advice article." />
      <ContactCTA />
    </>
  );
}
