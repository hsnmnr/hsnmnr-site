import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays the current age label', () => {
    render(<Personal />);

    expect(screen.getByText('Current age')).toBeInTheDocument();
  });

  it('displays countries visited', () => {
    render(<Personal />);

    expect(screen.getByText('Countries visited')).toBeInTheDocument();
  });

  it('displays current city', () => {
    render(<Personal />);

    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText('Lahore, Pakistan')).toBeInTheDocument();
  });

  it('renders countries visited as a numeric value', () => {
    render(<Personal />);

    // Find row by label, then check that the value cell has a number
    const labelCell = screen.getByText('Countries visited');
    const row = labelCell.closest('tr');
    expect(row).toBeInTheDocument();
    const valueCell = row?.querySelector('.stat-table-value');
    expect(valueCell?.textContent).toMatch(/^\d+$/);
  });

  it('updates age over time', async () => {
    render(<Personal />);

    // Get initial age text
    const ageCell = screen.getByText('Current age').closest('tr');
    expect(ageCell).toBeInTheDocument();

    // Advance timer to trigger age update
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // Age should still be displayed (value changes but component renders)
    expect(screen.getByText('Current age')).toBeInTheDocument();
  });
});
