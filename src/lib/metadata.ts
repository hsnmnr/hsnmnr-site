import type { Metadata } from 'next';

import {
  AUTHOR_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  SITE_URL,
  TWITTER_HANDLE,
} from './utils';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: `/${string}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const absoluteUrl = path ? new URL(path, SITE_URL).toString() : undefined;
  const pageTitle = `${title} | ${AUTHOR_NAME}`;
  const twitterHandle = TWITTER_HANDLE.trim();

  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: AUTHOR_NAME,
      title: pageTitle,
      description,
      ...(absoluteUrl ? { url: absoluteUrl } : {}),
      images: [
        {
          url: OG_IMAGE_PATH,
          secureUrl: new URL(OG_IMAGE_PATH, SITE_URL).toString(),
          type: OG_IMAGE_TYPE,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: AUTHOR_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      ...(twitterHandle ? { site: twitterHandle, creator: twitterHandle } : {}),
      title: pageTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
