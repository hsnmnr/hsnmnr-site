'use client';

import Cal from '@calcom/embed-react';

import {
  CAL_LINK,
  CAL_NAMESPACE_INLINE,
  useCalInline,
} from '@/hooks/useCalEmbed';

export default function CalEmbed() {
  const { theme } = useCalInline();

  // Hold off rendering until the post-hydration theme is known. Without
  // this, dark-mode users get a light-mode iframe load that immediately
  // unmounts and reloads in dark (the `key={theme}` swap below) — a
  // visible flash and a wasted iframe fetch. The wrapping
  // .contact-booking-embed already reserves min-height + bg-alt, so an
  // empty render here is a clean skeleton.
  if (theme === null) return null;

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
