import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    'Hassan Munir — Senior Software Engineer. Xenia, AIO, KalPay, Kcube AI. Node.js, TypeScript, NestJS, PostgreSQL, AWS.',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <a
            href="https://docs.google.com/document/d/1IDjj6ZtoX431WaR4M1uyAIyuVW4a85uJX6M7RNAc2Bk/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary resume-pdf-btn"
            download="Hassan_Munir_Resume.pdf"
          >
            Download PDF
          </a>
          <p className="resume-summary">
            Senior Software Engineer with 5+ years designing scalable APIs,
            platform capabilities, and distributed systems in Node.js and
            TypeScript. Currently driving backend architecture at Xenia,
            building real-time analytics pipelines and reducing infrastructure
            costs by 50%+. Proven track record across fintech and B2B SaaS —
            high-reliability services, event-driven microservices, and
            enterprise-grade authentication.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
