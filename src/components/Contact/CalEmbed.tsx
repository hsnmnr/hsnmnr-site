'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect, useState } from 'react';

const CAL_NAMESPACE = 'book-a-meeting';
const CAL_LINK = 'hassanmunir/book-a-meeting';

// Brand accents from app/styles/tokens/colors.css.
// Keep these in sync if the palette changes.
const CAL_BRAND_LIGHT = '#2e59ba';
const CAL_BRAND_DARK = '#60a5fa';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function CalEmbed() {
  const [theme, setTheme] = useState<Theme>('light');

  // Sync the embed theme with the site's `data-theme` attribute — the
  // in-app toggle flips that, and Cal's own `theme: "auto"` only follows
  // prefers-color-scheme. MutationObserver keeps the embed in sync without
  // coupling this component to ThemeToggle.
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

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme,
      }}
    />
  );
}
