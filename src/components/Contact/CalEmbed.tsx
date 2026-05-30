'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

import { useCalInline } from '@/hooks/useCalEmbed';

const CAL_BRAND_LIGHT = '#2e59ba';
const CAL_BRAND_DARK = '#60a5fa';

// Module-level singleton for the inline namespace's `cal("ui", ...)`
// call — same reasoning as the modal singleton in useCalEmbed.ts. The
// inline namespace has no modal, so re-evaluating it on remount is
// harmless, but skipping redundant calls is still cleaner.
let inlineInitPromise: Promise<void> | null = null;

function ensureInlineInit(namespace: string) {
  if (inlineInitPromise) return inlineInitPromise;
  inlineInitPromise = (async () => {
    const cal = await getCalApi({ namespace });
    cal('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
      cssVarsPerTheme: {
        light: { 'cal-brand': CAL_BRAND_LIGHT },
        dark: { 'cal-brand': CAL_BRAND_DARK },
      },
    });
  })();
  return inlineInitPromise;
}

export default function CalEmbed() {
  const { theme, namespace, calLink } = useCalInline();

  useEffect(() => {
    ensureInlineInit(namespace);
  }, [namespace]);

  return (
    <Cal
      // Force a remount when the site theme flips — `<Cal />` reads
      // `config.theme` only on initial mount and writes it into the
      // iframe URL, so prop changes don't reach it. New key → fresh
      // iframe in the new theme. Safe here because this namespace has
      // no modal whose state could be replayed by the remount.
      key={theme}
      namespace={namespace}
      calLink={calLink}
      // No fixed height / overflow — Cal auto-resizes the iframe via
      // postMessage to match its natural content height.
      style={{ width: '100%' }}
      config={{
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme,
      }}
    />
  );
}
