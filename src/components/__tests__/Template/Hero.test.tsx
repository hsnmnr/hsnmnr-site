import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Hassan Munir');
  });

  it('renders the tagline content', () => {
    render(<Hero />);

    expect(screen.getByText(/Senior Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/5\+ years/i)).toBeInTheDocument();
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(screen.getByText('Node.js / TypeScript')).toBeInTheDocument();
    expect(screen.getByText('NestJS & PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('AWS & Event-Driven')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button-secondary');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-secondary');

    const bookingButton = screen.getByRole('link', { name: /book a meeting/i });
    expect(bookingButton).toHaveAttribute(
      'href',
      expect.stringContaining('cal.com'),
    );
    expect(bookingButton).toHaveClass('button-primary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
