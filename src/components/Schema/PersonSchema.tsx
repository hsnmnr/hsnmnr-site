import contact from '@/data/contact';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function PersonSchema() {
  // Extract social links for sameAs (excluding email)
  const socialLinks = contact
    .filter((item) => !item.link.startsWith('mailto:'))
    .map((item) => item.link);

  // Extract email from contact data
  const emailItem = contact.find((item) => item.link.startsWith('mailto:'));
  const email = emailItem?.link.replace('mailto:', '');

  // Current job from work.ts (first entry)
  const currentJob = work[0];

  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/me.jpg`,
    jobTitle: currentJob.position,
    description:
      'AI-first Senior Software Engineer with 5+ years designing scalable APIs and distributed systems in Node.js and TypeScript across fintech and B2B SaaS.',
    ...(email && { email }),
    sameAs: socialLinks,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    knowsAbout: [
      'AI Engineering',
      'AI-First Engineering',
      'AI-Augmented Engineering',
      'Model Context Protocol',
      'Retrieval-Augmented Generation',
      'LLM Applications',
      'AI Agents',
      'Backend Engineering',
      'Frontend Engineering',
      'Full-Stack Engineering',
      'Node.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'ClickHouse',
      'Database Optimization',
      'Distributed Systems',
      'Event-Driven Architecture',
      'AWS',
      'GCP',
    ],
    worksFor: {
      '@type': 'Organization',
      name: currentJob.name,
      url: currentJob.url,
    },
    alumniOf: degrees.map((degree) => ({
      '@type': 'CollegeOrUniversity',
      name: degree.school,
      url: degree.link,
    })),
  };

  return <JsonLd data={personData} />;
}
