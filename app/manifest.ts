import type { MetadataRoute } from 'next';

import { AUTHOR_NAME } from '@/lib/utils';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AUTHOR_NAME,
    short_name: 'HM',
    start_url: '/',
    display: 'browser',
    background_color: '#0a0e1a',
    theme_color: '#0a0e1a',
    icons: [
      {
        src: '/icons/hm-dark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/hm-dark-180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/hm-dark-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
