'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCalApi } from '@calcom/embed-react';
import type { MouseEvent } from 'react';

import data from '@/data/contact';
import { useCalEmbed } from '@/hooks/useCalEmbed';

const CAL_CONFIG_BASE = {
  layout: 'month_view' as const,
  useSlotsViewOnSmallScreen: 'true' as const,
};

async function openCalModal(
  e: MouseEvent<HTMLAnchorElement>,
  cal: { link: string; namespace: string },
  theme: 'light' | 'dark',
) {
  e.preventDefault();
  const api = await getCalApi({ namespace: cal.namespace });
  // Pass theme directly in config instead of relying on the latest
  // `cal("ui", ...)` call — modal opens are stateless and this avoids
  // any race with the theme observer.
  api('modal', {
    calLink: cal.link,
    config: { ...CAL_CONFIG_BASE, theme },
  });
}

export default function ContactIcons() {
  // Initialize Cal + brand/theme config once per page so the modal
  // opens themed correctly on first click. Returns the current theme so
  // we can pass it explicitly to each modal open.
  const { theme } = useCalEmbed();

  return (
    <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a
            href={s.link}
            aria-label={
              s.cal
                ? `${s.label} (opens scheduler)`
                : `${s.label} (opens in new tab)`
            }
            target={s.cal ? undefined : '_blank'}
            rel={s.cal ? undefined : 'noopener noreferrer'}
            // With JS: this onClick prevents navigation and opens the
            // inline modal via the Cal instance initialized by
            // useCalEmbed. Without JS: the `href` falls back to cal.com.
            onClick={s.cal ? (e) => openCalModal(e, s.cal!, theme) : undefined}
          >
            <FontAwesomeIcon icon={s.icon} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
