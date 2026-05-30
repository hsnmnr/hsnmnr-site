'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MouseEvent } from 'react';

import data from '@/data/contact';
import { useCalModal } from '@/hooks/useCalEmbed';

export default function ContactIcons() {
  // `openModal` is synchronous: it returns true only if Cal is already
  // loaded. If it's not yet ready (slow connection, first paint), we
  // skip `preventDefault` and let the native href take the user to
  // cal.com — no queued modal call that fires after they've navigated.
  //
  // Uses the MODAL namespace (separate from the inline embed's
  // namespace) so a previously-opened modal can't be retriggered when
  // the inline embed on /contact mounts or remounts.
  const { openModal } = useCalModal();

  return (
    <ul className="icons">
      {data.map((s) => {
        const cal = s.cal;
        return (
          <li key={s.label}>
            <a
              href={s.link}
              aria-label={
                cal
                  ? `${s.label} (opens scheduler)`
                  : `${s.label} (opens in new tab)`
              }
              target={cal ? undefined : '_blank'}
              rel={cal ? undefined : 'noopener noreferrer'}
              onClick={
                cal
                  ? (e: MouseEvent<HTMLAnchorElement>) => {
                      if (openModal(cal.link)) {
                        e.preventDefault();
                      }
                    }
                  : undefined
              }
            >
              <FontAwesomeIcon icon={s.icon} className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
