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

// One init promise per namespace. Module-level so multiple hook mounts
// in the same page session (e.g. footer ContactIcons + main-area
// ContactIcons on /contact) don't redundantly call cal('ui').
const initPromises = new Map<string, Promise<CalApi>>();

function ensureInit(namespace: string): Promise<CalApi> {
  const cached = initPromises.get(namespace);
  if (cached) return cached;
  const promise = (async () => {
    const cal = await getCalApi({ namespace });
    cal('ui', SHARED_UI_CONFIG);
    return cal;
  })();
  initPromises.set(namespace, promise);
  return promise;
}

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

// Returns null until the first post-hydration render so callers can
// hold off rendering theme-dependent content until the real theme is
// known. A blocking head script in app/layout.tsx sets `data-theme` on
// `<html>` before hydration, so `readTheme()` is correct as soon as the
// first effect runs — but initial useState would lock us to 'light' for
// one paint and cause a flash + duplicate iframe load for dark users.
function useTheme(): Theme | null {
  const [theme, setTheme] = useState<Theme | null>(null);

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

// Schedule work for an idle moment after first paint, with a setTimeout
// fallback for browsers without requestIdleCallback. Returns a cleanup
// that cancels the scheduled call if it hasn't fired yet.
function scheduleIdle(fn: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const ric = (
    window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    }
  ).requestIdleCallback;
  if (ric) {
    const id = ric(fn, { timeout: 2000 });
    return () => window.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(fn, 1500);
  return () => window.clearTimeout(id);
}

/**
 * Click-to-open Cal modal. Returns a synchronous `openModal(calLink)`
 * that opens immediately if Cal is loaded, or returns false if not
 * (callers should let the native href fall back to cal.com in that
 * case — avoids a queued-call race where the modal opens on a page
 * the user already navigated away from).
 */
export function useCalModal() {
  const apiRef = useRef<CalApi | null>(null);
  const themeRef = useRef<Theme>('light');
  const theme = useTheme();

  useEffect(() => {
    if (theme !== null) themeRef.current = theme;
  }, [theme]);

  // Defer Cal embed.js load to idle so it's off the critical path on
  // every page (ContactIcons renders in the global Footer). By the time
  // a user clicks the icon, init has almost always finished; if not,
  // openModal returns false and the native href takes over.
  useEffect(() => {
    let cancelled = false;
    const cancelIdle = scheduleIdle(() => {
      ensureInit(CAL_NAMESPACE_MODAL).then((cal) => {
        if (!cancelled) apiRef.current = cal;
      });
    });
    return () => {
      cancelled = true;
      cancelIdle();
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
 * Inline embed hook. Initializes the inline namespace and reports the
 * current site theme so the caller can pass it to `<Cal />` config.
 */
export function useCalInline(): { theme: Theme | null } {
  const theme = useTheme();

  useEffect(() => {
    ensureInit(CAL_NAMESPACE_INLINE);
  }, []);

  return { theme };
}
