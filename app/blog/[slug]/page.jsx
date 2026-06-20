import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CalendarDays, UserRound } from 'lucide-react';
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
          <div className="article-byline"><UserRound size={16} /> Written by <strong>Ron Brodley</strong> <span>•</span> Updated June 2026 <span>•</span> Tendring locksmith advice</div>
          <p className="article-intro">{post.intro}</p>
          <div className="article-practical-note"><strong>Local practical note:</strong> This guide is written for the types of homes, rentals, holiday properties and businesses found across Tendring. A door, lock or key issue can have several causes, so the most useful next step is always based on the actual property and how the lock is behaving.</div>
          <div className="article-content">
            {post.sections.map((section) => {
              const paragraphs = Array.isArray(section.p) ? section.p : [section.p];
              return (
                <section key={section.h}>
                  <h2>{section.h}</h2>
                  {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="article-bullets">
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                  {section.links?.length ? (
                    <div className="article-link-row">
                      {section.links.map((item) => (
                        <Link key={item.href} href={item.href} className="article-pill-link">
                          {item.label} <ArrowRight size={15} />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
          <div className="related-box article-sales-box">
            <h2>Get Secure with Brodley Locksmiths</h2>
            <p>Need help with locks, uPVC doors, key safes, landlord access, holiday lets or a security concern in Tendring? Brodley Locksmiths provides practical locksmith advice and professional workmanship across Clacton, Harwich, Frinton, Walton, Manningtree, Brightlingsea and surrounding villages.</p>
            <div>
              <Link href="/quote" className="text-link">Request a quote <ArrowRight size={16} /></Link>
              <Link href="/contact" className="text-link">Contact Brodley Locksmiths <ArrowRight size={16} /></Link>
            </div>
          </div>
          <ServicesInternalLinks />
        </div>
      </article>
      <FaqSection faqs={post.faqs} title="Article FAQs" intro="Common questions related to this locksmith advice article." />
      <ContactCTA />
    </>
  );
}
