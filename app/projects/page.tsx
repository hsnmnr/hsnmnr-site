import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description:
    'Selected professional, freelance, and learning projects by Hassan Munir.',
  path: '/projects/',
});

export default function ProjectsPage() {
  const professional = data.filter((p) => p.category === 'professional');
  const freelance = data.filter((p) => p.category === 'freelance');
  const learning = data.filter((p) => p.category === 'learning');

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Selected work across senior backend roles, freelance frontend
            builds, and earlier learning projects.
          </p>
        </header>

        {professional.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">Professional Work</h2>
            <div className="projects-grid projects-grid--featured">
              {professional.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {freelance.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Freelance</h2>
            <div className="projects-grid">
              {freelance.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {learning.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Learning Projects</h2>
            <div className="projects-grid">
              {learning.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
