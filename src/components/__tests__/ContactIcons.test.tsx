import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ContactIcons from '../Contact/ContactIcons';

const openModal = vi.fn();

vi.mock('@/hooks/useCalEmbed', () => ({
  useCalModal: () => ({ openModal }),
}));

describe('ContactIcons', () => {
  beforeEach(() => {
    openModal.mockReset();
  });

  it('renders contact icons', () => {
    render(<ContactIcons />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      expect.stringContaining('github.com'),
    );

    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:'),
    );

    const calLink = screen.getByRole('link', { name: /book a meeting/i });
    expect(calLink).toBeInTheDocument();
    expect(calLink).toHaveAttribute('href', expect.stringContaining('cal.com'));
  });

  it('has correct number of contact links', () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('marks the cal link as opening a scheduler, not a new tab', () => {
    render(<ContactIcons />);
    const calLink = screen.getByRole('link', { name: /book a meeting/i });
    expect(calLink.getAttribute('aria-label')).toMatch(/opens scheduler/i);
    expect(calLink).not.toHaveAttribute('target');
    expect(calLink).not.toHaveAttribute('rel');
  });

  it('keeps target="_blank" on non-cal links', () => {
    render(<ContactIcons />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('routes cal-link clicks through openModal and prevents navigation when it returns true', () => {
    openModal.mockReturnValue(true);
    render(<ContactIcons />);
    const calLink = screen.getByRole('link', { name: /book a meeting/i });

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const prevented = !calLink.dispatchEvent(clickEvent);

    expect(openModal).toHaveBeenCalledWith(
      expect.stringContaining('hassanmunir'),
    );
    expect(prevented).toBe(true);
  });

  it('falls through to native navigation when openModal returns false', () => {
    openModal.mockReturnValue(false);
    render(<ContactIcons />);
    const calLink = screen.getByRole('link', { name: /book a meeting/i });

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const prevented = !calLink.dispatchEvent(clickEvent);

    expect(openModal).toHaveBeenCalled();
    expect(prevented).toBe(false);
  });

  it('does not call openModal for non-cal links', () => {
    render(<ContactIcons />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    fireEvent.click(githubLink);
    expect(openModal).not.toHaveBeenCalled();
  });
});
