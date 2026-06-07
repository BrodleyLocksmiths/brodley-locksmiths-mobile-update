'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { contact, servicePages, site } from '@/lib/siteData';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' }
];

const featuredMobileServices = [
  'lock-changes',
  'door-repairs',
  'upvc-door-mechanism-replacement',
  'key-safes',
  'landlord-locksmith-services',
  'holiday-let-guest-house-security',
  'caravan-holiday-park-locksmith-services'
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap" aria-label="Go to Brodley Locksmiths home page">
          <img src={site.headerLogo} alt="Brodley Locksmiths locksmith and security specialist logo" className="header-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a href={contact.emailHref} className="btn btn-ghost small">Email</a>
          <Link href="/quote" className="btn btn-ghost small">Quote</Link>
          <a href={contact.phoneHref} className="btn btn-red small"><Phone size={16} /> Call Now</a>
        </div>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="mobile-menu">
          {nav.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}</Link>)}
          <div className="mobile-sep" />
          <p className="mobile-menu-label">Popular services</p>
          {servicePages.filter((item) => featuredMobileServices.includes(item.slug)).map((item) => <Link onClick={() => setOpen(false)} key={item.slug} href={`/services/${item.slug}`}>{item.nav}</Link>)}
          <Link onClick={() => setOpen(false)} href="/services" className="mobile-all-services">View all services</Link>
          <Link onClick={() => setOpen(false)} href="/quote" className="btn btn-ghost">Request a Quote</Link>
          <a href={contact.phoneHref} className="btn btn-red">Call {contact.phoneDisplay}</a>
          <a href={contact.emailHref} className="btn btn-ghost">Email Us</a>
        </div>
      )}
    </header>
  );
}
