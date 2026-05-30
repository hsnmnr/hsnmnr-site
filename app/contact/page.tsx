import type { Metadata } from 'next';

import CalEmbed from '@/components/Contact/CalEmbed';
import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Hassan Munir via email at connect@hassanmunir.me, or find me on LinkedIn and GitHub.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">Usually respond within 24 hours</p>
          </div>

          <section
            className="contact-booking"
            aria-labelledby="booking-heading"
          >
            <h2 id="booking-heading" className="contact-booking-title">
              Or book a meeting directly
            </h2>
            <p className="contact-booking-hint">
              Pick a time that works — I&apos;ll send a Google Calendar invite.
            </p>
            <div className="contact-booking-embed">
              <CalEmbed />
            </div>
          </section>

          <div className="contact-divider">
            <span>or find me on</span>
          </div>

          <ContactIcons />
        </div>
      </section>
    </PageWrapper>
  );
}
