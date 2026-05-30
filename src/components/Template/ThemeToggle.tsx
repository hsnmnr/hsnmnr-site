'use client';

import { useCallback, useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@/components/Icons';
import { setFaviconTheme } from '@/lib/favicon';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setIsDark(stored === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
    setFaviconTheme(theme);
  }, [isDark]);

  const toggle = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  if (isDark === null) {
    return <div className="theme-toggle-placeholder" />;
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-icon">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
