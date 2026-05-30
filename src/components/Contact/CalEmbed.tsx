'use client';

import Cal from '@calcom/embed-react';

import { CAL_LINK, CAL_NAMESPACE, useCalEmbed } from '@/hooks/useCalEmbed';

export default function CalEmbed() {
  const { theme } = useCalEmbed();

  return (
    <Cal
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
