'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect, useState } from 'react';

export const CAL_NAMESPACE = 'book-a-meeting';
export const CAL_LINK = 'hassanmunir/book-a-meeting';

// Brand accents from app/styles/tokens/colors.css. Keep in sync if the
// palette changes.
const CAL_BRAND_LIGHT = '#2e59ba';
const CAL_BRAND_DARK = '#60a5fa';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/**
 * Initialize Cal.com once per page and keep its theme in sync with the
 * site's `data-theme` attribute. Used by both the inline `<CalEmbed />`
 * and any `<a data-cal-link>` modal trigger (e.g. the calendar icon in
 * `ContactIcons`), so a single call site doesn't need to know whether
 * Cal is already initialized.
 *
 * `getCalApi` is idempotent — calling this hook from multiple components
 * on the same page is safe.
 */
export function useCalEmbed(): { theme: Theme } {
  const [theme, setTheme] = useState<Theme>('light');

  // Track the site theme via MutationObserver. Cal's own `theme: "auto"`
  // only follows prefers-color-scheme, which loses the in-app toggle.
  useEffect(() => {
    setTheme(readTheme());

    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;

      cal('ui', {
        theme,
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': CAL_BRAND_LIGHT },
          dark: { 'cal-brand': CAL_BRAND_DARK },
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [theme]);

  return { theme };
}
