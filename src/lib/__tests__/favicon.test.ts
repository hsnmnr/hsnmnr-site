import { afterEach, describe, expect, it } from 'vitest';

import { setFaviconTheme } from '../favicon';

function addLink(rel: string, href: string): HTMLLinkElement {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
  return link;
}

describe('setFaviconTheme', () => {
  afterEach(() => {
    document
      .querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]')
      .forEach((link) => link.remove());
  });

  it('swaps dark favicon hrefs to light when theme is light', () => {
    const svg = addLink('icon', 'https://example.com/icons/hm-dark.svg');
    const ico = addLink('icon', 'https://example.com/icons/favicon-dark.ico');
    const png = addLink('icon', 'https://example.com/icons/hm-dark-32.png');
    const apple = addLink(
      'apple-touch-icon',
      'https://example.com/icons/hm-dark-180.png',
    );

    setFaviconTheme('light');

    expect(svg.href).toBe('https://example.com/icons/hm-light.svg');
    expect(ico.href).toBe('https://example.com/icons/favicon-light.ico');
    expect(png.href).toBe('https://example.com/icons/hm-light-32.png');
    expect(apple.href).toBe('https://example.com/icons/hm-light-180.png');
  });

  it('swaps light favicon hrefs back to dark', () => {
    const svg = addLink('icon', 'https://example.com/icons/hm-light.svg');

    setFaviconTheme('dark');

    expect(svg.href).toBe('https://example.com/icons/hm-dark.svg');
  });

  it('leaves non-themed icon links untouched', () => {
    const other = addLink('icon', 'https://example.com/some-other-icon.png');

    setFaviconTheme('light');

    expect(other.href).toBe('https://example.com/some-other-icon.png');
  });

  it('is a no-op when the active theme matches the current hrefs', () => {
    const svg = addLink('icon', 'https://example.com/icons/hm-dark.svg');

    setFaviconTheme('dark');

    expect(svg.href).toBe('https://example.com/icons/hm-dark.svg');
  });
});
