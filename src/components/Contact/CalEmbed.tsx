'use client';

import Cal from '@calcom/embed-react';

import {
  CAL_LINK,
  CAL_NAMESPACE_INLINE,
  useCalInline,
} from '@/hooks/useCalEmbed';

export default function CalEmbed() {
  const { theme } = useCalInline();

  return (
    <Cal
      // `<Cal />` reads `config.theme` only on initial mount and writes
      // it into the iframe URL — prop changes don't reach the iframe.
      // Bumping the key on theme change forces React to unmount and
      // remount, producing a fresh iframe in the new theme. Safe here
      // because the inline namespace has no modal whose state could be
      // replayed by the remount.
      key={theme}
      namespace={CAL_NAMESPACE_INLINE}
      calLink={CAL_LINK}
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
