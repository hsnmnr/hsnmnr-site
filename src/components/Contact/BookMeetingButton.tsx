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
      className="contact-booking-button"
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        if (openModal(CAL_LINK)) e.preventDefault();
      }}
    >
      <FontAwesomeIcon
        icon={faCalendarCheck}
        className="contact-booking-button__icon"
      />
      <span>Book a Meeting</span>
      <span className="contact-booking-button__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
