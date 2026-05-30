'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MouseEvent } from 'react';

import data from '@/data/contact';
import { useCalEmbed } from '@/hooks/useCalEmbed';

export default function ContactIcons() {
  // `openModal` is synchronous: it returns true only if Cal is already
  // loaded. If it's not yet ready (slow connection, first paint), we
  // skip `preventDefault` and let the native href take the user to
  // cal.com — no queued modal call that fires after they've navigated.
  const { openModal } = useCalEmbed();

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
            onClick={
              s.cal
                ? (e: MouseEvent<HTMLAnchorElement>) => {
                    if (openModal(s.cal!.link)) {
                      e.preventDefault();
                    }
                  }
                : undefined
            }
          >
            <FontAwesomeIcon icon={s.icon} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
