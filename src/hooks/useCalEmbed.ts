'use client';

import { getCalApi } from '@calcom/embed-react';
import { useCallback, useEffect, useRef, useState } from 'react';

export const CAL_NAMESPACE = 'book-a-meeting';
export const CAL_LINK = 'hassanmunir/book-a-meeting';

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

// Brand accents from app/styles/tokens/colors.css. Keep in sync if the
// palette changes.
const CAL_BRAND_LIGHT = '#2e59ba';
const CAL_BRAND_DARK = '#60a5fa';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

// Module-level singleton: ensures `cal("ui", ...)` runs exactly once
// per page session, no matter how many components mount useCalEmbed.
//
// On /contact, three callers mount the hook simultaneously (inline
// CalEmbed + main-area ContactIcons + footer ContactIcons). Without
// this guard each mount calls cal("ui") independently, which replays
// Cal's per-namespace state — including any previously-opened modal —
// and causes the modal to spontaneously reopen on every visit. Cal's
// namespace state also survives Next.js client-side navigation, so the
// problem compounds across page transitions.
let calInitPromise: Promise<CalApi> | null = null;

function ensureCalInit(): Promise<CalApi> {
  if (calInitPromise) return calInitPromise;
  calInitPromise = (async () => {
    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
      cssVarsPerTheme: {
        light: { 'cal-brand': CAL_BRAND_LIGHT },
        dark: { 'cal-brand': CAL_BRAND_DARK },
      },
    });
    return cal;
  })();
  return calInitPromise;
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
interface UseCalEmbedReturn {
  theme: Theme;
  /**
   * Open the Cal modal if and only if Cal is already loaded on this page.
   * Returns true if the modal was opened (and the caller should
   * `preventDefault` on the click event); false if Cal isn't ready, in
   * which case the caller should let the native `href` navigate to
   * cal.com as a fallback.
   *
   * Synchronous on purpose: avoids the click→await→navigate race where a
   * queued modal call fires on a page the user already left.
   */
  openModal: (calLink: string) => boolean;
}

export function useCalEmbed(): UseCalEmbedReturn {
  const [theme, setTheme] = useState<Theme>('light');
  const apiRef = useRef<CalApi | null>(null);
  const themeRef = useRef<Theme>('light');

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

  // Keep a ref of the current theme so `openModal` (a stable callback)
  // can read the latest value without recreating on every theme change.
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  // Grab the api ref. Init itself is handled by the module-level
  // singleton `ensureCalInit` so multiple hook mounts don't re-call
  // cal("ui") and replay Cal's namespace state.
  useEffect(() => {
    let cancelled = false;
    ensureCalInit().then((cal) => {
      if (!cancelled) apiRef.current = cal;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = useCallback((calLink: string) => {
    const api = apiRef.current;
    if (!api) return false;

    api('modal', {
      calLink,
      config: {
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme: themeRef.current,
      },
    });
    return true;
  }, []);

  return { theme, openModal };
}
