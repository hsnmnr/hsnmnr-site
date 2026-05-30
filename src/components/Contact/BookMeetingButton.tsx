'use client';

import type { MouseEvent } from 'react';

import { CAL_LINK, useCalModal } from '@/hooks/useCalEmbed';

export default function BookMeetingButton() {
  const { openModal } = useCalModal();

  return (
    <a
      href={`https://cal.com/${CAL_LINK}`}
      className="button button-primary contact-booking-button"
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        if (openModal(CAL_LINK)) e.preventDefault();
      }}
    >
      Book a Meeting
    </a>
  );
}
