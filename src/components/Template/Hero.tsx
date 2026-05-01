import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Hassan Munir</span>
        </h1>

        <p className="hero-tagline">
          Senior Software Engineer with{' '}
          <span className="hero-highlight">5+ years</span> building distributed
          backends in Node.js and TypeScript across fintech and B2B SaaS.
          <br />
          AI-augmented, infrastructure-conscious, reliability-first.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Node.js / TypeScript</span>
          <span className="hero-chip">NestJS &amp; PostgreSQL</span>
          <span className="hero-chip">AWS &amp; Event-Driven</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
