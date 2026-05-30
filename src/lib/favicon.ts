/**
 * Swap favicon `<link>` hrefs to match the active theme.
 *
 * The HTML ships with the `dark` variant by default (see `app/layout.tsx`
 * `metadata.icons`). This function rewrites every `hm-*` and `favicon-*`
 * filename to the target theme so the tab icon follows the in-app toggle,
 * not just `prefers-color-scheme`.
 */
export function setFaviconTheme(theme: 'light' | 'dark'): void {
  if (typeof document === 'undefined') return;

  const other = theme === 'light' ? 'dark' : 'light';
  const pattern = new RegExp(`(hm-|favicon-)${other}`, 'g');
  const replacement = `$1${theme}`;

  document
    .querySelectorAll<HTMLLinkElement>(
      'link[rel~="icon"], link[rel="apple-touch-icon"]',
    )
    .forEach((link) => {
      const next = link.href.replace(pattern, replacement);
      if (next !== link.href) {
        link.href = next;
      }
    });
}
