import type { Metadata } from 'next';

import { PersonSchema, WebSiteSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Senior Software Engineer with 5+ years designing scalable APIs and distributed systems in Node.js and TypeScript. Currently driving backend architecture at Xenia.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <WebSiteSchema />
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
