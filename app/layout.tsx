import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import GoogleTagManager from '@/components/Template/GoogleTagManager';
import Navigation from '@/components/Template/Navigation';
import ScrollToTop from '@/components/Template/ScrollToTop';
import {
  AUTHOR_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/lib/utils';
import './tailwind.css';

const twitterHandle = TWITTER_HANDLE.trim();
const homepageTitle = `${AUTHOR_NAME} — AI-first Senior Software Engineer`;

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const raleway = Raleway({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const siteDescription =
  'Senior Software Engineer with 5+ years designing scalable APIs and distributed systems in Node.js and TypeScript. Currently driving backend architecture at Xenia.';

export const metadata: Metadata = {
  title: {
    default: homepageTitle,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: siteDescription,
  keywords: [
    AUTHOR_NAME,
    'Senior Software Engineer',
    'Node.js',
    'TypeScript',
    'NestJS',
    'PostgreSQL',
    'AWS',
    'backend engineering',
    'distributed systems',
    'fintech',
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  manifest: '/manifest.webmanifest',
  // Icons default to the `dark` variant. The inline theme-init script and
  // the ThemeToggle component swap the hrefs to the `light` variant when
  // the active theme is light. Browsers ignore media-query favicon switching
  // for the in-app toggle, so the swap happens in JS instead.
  icons: {
    icon: [
      { url: '/icons/hm-dark.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-dark.ico', sizes: 'any' },
      { url: '/icons/hm-dark-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/hm-dark-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: { url: '/icons/hm-dark-180.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: AUTHOR_NAME,
    title: homepageTitle,
    description: siteDescription,
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
    title: homepageTitle,
    description: siteDescription,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CSP-safe theme initialization - prevents flash on load.
            Also swaps favicon hrefs from the default dark variant to light
            when the active theme is light, so the tab icon matches the page
            on first paint. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=window.localStorage.getItem('theme');var theme;if(t==='dark'||t==='light'){theme=t}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){theme='dark'}else{theme='light'}document.documentElement.setAttribute('data-theme',theme);if(theme==='light'){document.querySelectorAll('link[rel~="icon"],link[rel="apple-touch-icon"]').forEach(function(l){l.href=l.href.replace(/(hm-|favicon-)dark/g,'$1light')})}}catch(e){}})();`}
        </Script>
      </head>
      <body>
        <GoogleTagManager />
        <ScrollToTop />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
