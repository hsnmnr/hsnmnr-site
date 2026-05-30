'use client';

import Cal from '@calcom/embed-react';

import { CAL_LINK, CAL_NAMESPACE, useCalEmbed } from '@/hooks/useCalEmbed';

export default function CalEmbed() {
  const { theme } = useCalEmbed();

  return (
    <Cal
      // Force a remount when the site theme flips — the Cal iframe reads
      // `config.theme` only on initial mount and writes it into the iframe
      // URL, so prop changes don't reach it. A new `key` unmounts the old
      // iframe and mounts a fresh one in the new theme.
      key={theme}
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      // No fixed height / overflow — Cal auto-resizes the iframe via
      // postMessage to match its natural content height. Constraining it
      // forces the calendar to scroll inside its own box, which is what
      // Cal's native page doesn't do.
      style={{ width: '100%' }}
      config={{
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme,
      }}
    />
  );
}
