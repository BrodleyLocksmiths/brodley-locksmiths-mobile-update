export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-SSP15NM0MD';
export const ANALYTICS_CONSENT_KEY = 'brodleyAnalyticsConsent';
export const OPEN_COOKIE_SETTINGS_EVENT = 'brodley:open-cookie-settings';

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'granted';
  } catch {
    return false;
  }
}

export function trackEvent(name, parameters = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function' || !hasAnalyticsConsent()) return;
  window.gtag('event', name, parameters);
}

