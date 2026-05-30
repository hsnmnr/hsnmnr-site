import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: AUTHOR_NAME,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
      url: `${SITE_URL}/`,
    },
  };

  return <JsonLd data={data} />;
}
