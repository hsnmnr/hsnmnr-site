'use client';

import { getCalApi } from '@calcom/embed-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// Same calLink (Cal account/event), but two LOCAL namespaces so the
// inline embed on /contact and the modal triggered from the icon row
// can't bleed state into each other.
//
// Why this matters: Cal stores per-namespace state when a modal opens
// and doesn't clear it on close. Anything that subsequently makes Cal
// re-evaluate that namespace — remounting the inline `<Cal />`, calling
// `cal("ui", ...)` again, even another `cal("inline", ...)` — replays
// the stored "modal was open" state and the modal reopens.
//
// Splitting namespaces means: modal namespace never has an inline
// embed for state to bleed into; inline namespace never has a modal for
// state to bleed out of. Each can manage its own lifecycle safely.
export const CAL_LINK = 'hassanmunir/book-a-meeting';
export const CAL_NAMESPACE_INLINE = 'book-a-meeting-inline';
export const CAL_NAMESPACE_MODAL = 'book-a-meeting';

// Brand accents from app/styles/tokens/colors.css. Keep in sync if the
// palette changes.
const CAL_BRAND_LIGHT = '#2e59ba';
const CAL_BRAND_DARK = '#60a5fa';

type CalApi = Awaited<ReturnType<typeof getCalApi>>;
type Theme = 'light' | 'dark';

const SHARED_UI_CONFIG = {
  hideEventTypeDetails: false,
  layout: 'month_view' as const,
  cssVarsPerTheme: {
    light: { 'cal-brand': CAL_BRAND_LIGHT },
    dark: { 'cal-brand': CAL_BRAND_DARK },
  },
};

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(readTheme());
    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return theme;
}

// Module-level singleton for the MODAL namespace's init. Multiple
// ContactIcons can mount (footer + /contact's main content); we only
// want `cal("ui", ...)` called once globally so we don't re-evaluate
// modal state any more than necessary.
let modalInitPromise: Promise<CalApi> | null = null;

function ensureModalInit(): Promise<CalApi> {
  if (modalInitPromise) return modalInitPromise;
  modalInitPromise = (async () => {
    const cal = await getCalApi({ namespace: CAL_NAMESPACE_MODAL });
    cal('ui', SHARED_UI_CONFIG);
    return cal;
  })();
  return modalInitPromise;
}

/**
 * Click-to-open Cal modal. Returns a synchronous `openModal(calLink)`
 * that opens immediately if Cal is loaded, or returns false if not
 * (callers should let the native href fall back to cal.com in that
 * case — avoids a queued-call race where the modal opens on a page
 * the user already navigated away from).
 *
 * Uses the MODAL namespace; no inline embed in this namespace ever
 * exists, so state can't leak into anything.
 */
export function useCalModal() {
  const apiRef = useRef<CalApi | null>(null);
  const themeRef = useRef<Theme>('light');
  const theme = useTheme();

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    let cancelled = false;
    ensureModalInit().then((cal) => {
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

  return { openModal };
}

/**
 * Inline embed config for the `<Cal />` component. Uses a separate
 * namespace from the modal so a modal opened from the icon row can't
 * trigger when the inline embed mounts or remounts (e.g. on theme
 * toggle via `key={theme}`).
 */
export function useCalInline() {
  const theme = useTheme();
  return {
    theme,
    namespace: CAL_NAMESPACE_INLINE,
    calLink: CAL_LINK,
  };
}
