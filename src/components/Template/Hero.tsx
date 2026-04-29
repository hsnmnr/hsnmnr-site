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
          Senior Software Engineer at{' '}
          <a href="https://xeniaplatform.io" className="hero-highlight">
            Xenia
          </a>
          , designing scalable APIs and distributed systems in Node.js and
          TypeScript.
          <br />
          5+ years across fintech and B2B SaaS — backend architecture, real-time
          analytics, and enterprise SSO.
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
