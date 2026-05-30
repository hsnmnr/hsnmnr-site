/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://hassanmunir.me';
export const AUTHOR_NAME = 'Hassan Munir';
export const TWITTER_HANDLE = '';

// Open Graph share card. 1200x630 at 1.91:1 meets the recommended size
// for Facebook, LinkedIn, and X summary_large_image cards.
export const OG_IMAGE_PATH = '/images/og/default.png';
export const OG_IMAGE_TYPE = 'image/png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
