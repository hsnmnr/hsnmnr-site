'use client';

import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons/faCalendarCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MouseEvent } from 'react';

import { CAL_LINK, useCalModal } from '@/hooks/useCalEmbed';

export default function BookMeetingButton() {
  const { openModal } = useCalModal();

  return (
    <a
      href={`https://cal.com/${CAL_LINK}`}
      className="button button-primary booking-cta"
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        if (openModal(CAL_LINK)) e.preventDefault();
      }}
    >
      <FontAwesomeIcon icon={faCalendarCheck} className="booking-cta__icon" />
      <span>Book a Meeting</span>
      <span className="booking-cta__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
