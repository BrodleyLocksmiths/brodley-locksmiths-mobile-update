'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ANALYTICS_CONSENT_KEY, GA_MEASUREMENT_ID, OPEN_COOKIE_SETTINGS_EVENT } from '@/lib/analytics';

const deniedConsent = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
};

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
}

function rememberConsent(value) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // The preference remains active for this visit if browser storage is unavailable.
  }
}

function removeAnalyticsCookies() {
  document.cookie.split(';').forEach((item) => {
    const name = item.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.brodley-locksmiths.com; SameSite=Lax`;
  });
}

export function CookieSettingsButton({ className = '' }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}

export default function AnalyticsConsent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [preference, setPreference] = useState('loading');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsReady, setAnalyticsReady] = useState(false);

  const startAnalytics = useCallback(() => {
    ensureDataLayer();
    window.gtag('consent', 'update', { ...deniedConsent, analytics_storage: 'granted' });

    const configure = () => {
      if (window.__brodleyAnalyticsConfigured) {
        setAnalyticsReady(true);
        return;
      }
      window.__brodleyAnalyticsConfigured = true;
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
      setAnalyticsReady(true);
    };

    const existing = document.getElementById('brodley-google-analytics');
    if (existing) {
      if (existing.dataset.loaded === 'true') configure();
      else existing.addEventListener('load', configure, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = 'brodley-google-analytics';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      configure();
    }, { once: true });
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    ensureDataLayer();
    window.gtag('consent', 'default', deniedConsent);

    let saved = null;
    try {
      saved = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    } catch {
      saved = null;
    }

    const validPreference = saved === 'granted' || saved === 'denied' ? saved : 'unset';
    setPreference(validPreference);
    if (validPreference === 'granted') startAnalytics();

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, [startAnalytics]);

  useEffect(() => {
    if (!analyticsReady || preference !== 'granted') return;
    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath
    });
  }, [analyticsReady, pathname, preference, searchParams]);

  useEffect(() => {
    if (!analyticsReady || preference !== 'granted') return;
    const trackLink = (event) => {
      const link = event.target.closest?.('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const common = { link_url: href, page_path: window.location.pathname };
      if (href.startsWith('tel:')) window.gtag('event', 'click_to_call', common);
      else if (href.startsWith('mailto:')) window.gtag('event', 'email_click', common);
      else if (href === '/quote' || href.startsWith('/quote?')) window.gtag('event', 'quote_request_click', common);
      else if (href === '/get-secure-check' || href.startsWith('/get-secure-check?')) window.gtag('event', 'get_secure_check_click', common);
    };
    document.addEventListener('click', trackLink);
    return () => document.removeEventListener('click', trackLink);
  }, [analyticsReady, preference]);

  function acceptAnalytics() {
    rememberConsent('granted');
    setPreference('granted');
    setSettingsOpen(false);
    startAnalytics();
  }

  function rejectAnalytics() {
    ensureDataLayer();
    window.gtag('consent', 'update', deniedConsent);
    rememberConsent('denied');
    removeAnalyticsCookies();
    setPreference('denied');
    setSettingsOpen(false);
    setAnalyticsReady(false);
  }

  if (preference === 'loading' || (preference !== 'unset' && !settingsOpen)) return null;

  return (
    <section className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description">
      <div className="cookie-consent-copy">
        <p className="eyebrow gold">Your privacy choices</p>
        <h2 id="cookie-consent-title">Help us understand how the website is used?</h2>
        <p id="cookie-consent-description">Optional Google Analytics helps Brodley Locksmiths understand which pages lead to calls and enquiries. It stays off unless you accept. Rejecting analytics will not affect the website.</p>
        <Link href="/cookie-policy">Read the Cookie Policy</Link>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="btn btn-red" onClick={acceptAnalytics}>Accept analytics</button>
        <button type="button" className="btn btn-outline" onClick={rejectAnalytics}>Reject analytics</button>
      </div>
    </section>
  );
}

