'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';
import { useCalEmbed } from '@/hooks/useCalEmbed';

const CAL_CONFIG = JSON.stringify({
  layout: 'month_view',
  useSlotsViewOnSmallScreen: 'true',
});

export default function ContactIcons() {
  // Initialize Cal once per page so any link with `data-cal-link` opens
  // the modal embed instead of navigating. The public `href` stays as a
  // graceful fallback for users without JS.
  useCalEmbed();

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
            {...(s.cal && {
              'data-cal-namespace': s.cal.namespace,
              'data-cal-link': s.cal.link,
              'data-cal-config': CAL_CONFIG,
            })}
          >
            <FontAwesomeIcon icon={s.icon} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
