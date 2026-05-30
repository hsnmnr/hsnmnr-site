import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import BookMeetingButton from '../Contact/BookMeetingButton';

const openModal = vi.fn();

vi.mock('@/hooks/useCalEmbed', () => ({
  CAL_LINK: 'hassanmunir/book-a-meeting',
  useCalModal: () => ({ openModal }),
}));

describe('BookMeetingButton', () => {
  beforeEach(() => {
    openModal.mockReset();
  });

  it('renders an anchor that links to the public Cal page as a no-JS fallback', () => {
    render(<BookMeetingButton />);
    const link = screen.getByRole('link', { name: /book a meeting/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://cal.com/hassanmunir/book-a-meeting',
    );
  });

  it('opens the modal and prevents navigation when openModal returns true', () => {
    openModal.mockReturnValue(true);
    render(<BookMeetingButton />);
    const link = screen.getByRole('link', { name: /book a meeting/i });

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const prevented = !link.dispatchEvent(clickEvent);

    expect(openModal).toHaveBeenCalledWith('hassanmunir/book-a-meeting');
    expect(prevented).toBe(true);
  });

  it('falls through to native navigation when openModal returns false', () => {
    openModal.mockReturnValue(false);
    render(<BookMeetingButton />);
    const link = screen.getByRole('link', { name: /book a meeting/i });

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const prevented = !link.dispatchEvent(clickEvent);

    expect(openModal).toHaveBeenCalled();
    expect(prevented).toBe(false);
  });
});
