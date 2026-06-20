'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { contact, servicePages, site } from '@/lib/siteData';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Get Secure Check', href: '/get-secure-check' },
  { label: 'Areas', href: '/areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' }
];

const featuredMobileServices = [
  'emergency-locksmith-tendring',
  'door-will-not-lock',
  'lock-changes',
  'upvc-door-repairs-tendring',
  'multipoint-lock-repairs',
  'key-safes',
  'broken-key-extraction',
  'patio-door-lock-repairs'
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    document.body.classList.toggle('menu-open', open);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap" aria-label="Go to Brodley Locksmiths home page" onClick={() => setOpen(false)}>
          <img src={site.headerLogo} alt="Brodley Locksmiths locksmith and security specialist logo" className="header-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/quote" className="btn btn-ghost small">Request Quote</Link>
          <a href={contact.phoneHref} className="btn btn-red small"><Phone size={16} /> Call Now</a>
        </div>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
          {nav.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/blog">Advice Blog</Link>
          <Link onClick={() => setOpen(false)} href="/quote">Request a Quote</Link>
          <div className="mobile-sep" />
          <p className="mobile-menu-label">Urgent help</p>
          <Link onClick={() => setOpen(false)} href="/services/door-will-not-lock">Door will not lock</Link>
          <Link onClick={() => setOpen(false)} href="/services/locked-out-non-destructive-entry">Locked out / gain entry</Link>
          <div className="mobile-sep" />
          <p className="mobile-menu-label">Popular services</p>
          {servicePages.filter((item) => featuredMobileServices.includes(item.slug)).map((item) => <Link onClick={() => setOpen(false)} key={item.slug} href={`/services/${item.slug}`}>{item.nav}</Link>)}
          <Link onClick={() => setOpen(false)} href="/services" className="mobile-all-services">View all services</Link>
          <a href={contact.phoneHref} className="btn btn-red">Call {contact.phoneDisplay}</a>
          <a href={contact.emailHref} className="btn btn-ghost">Email Us</a>
        </nav>
      )}
    </header>
  );
}
