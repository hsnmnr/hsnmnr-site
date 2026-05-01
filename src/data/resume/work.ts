/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Xenia',
    position: 'Senior Software Engineer — AI Augmented',
    url: 'https://www.xenia.team',
    startDate: '2024-02-01',
    summary: `Driving backend architecture at Xenia (Remote, US), a B2B SaaS platform for deskless workforces.
    Owning system design, data modeling, and the release lifecycle across 5+ backend microservices.`,
    highlights: [
      'Adopted AI-native engineering workflows with Claude Code for parallel task execution, custom skills, and dedicated agents — increased sprint throughput by 3x.',
      'Established AI-native service documentation across repositories, reducing developer onboarding time by 70%.',
      'Reduced AWS RDS CPU utilization by 50% through systematic query optimization, index tuning, and connection pooling — saving an estimated $3K/month in infrastructure costs.',
      'Architected real-time analytics pipeline using Change Data Capture (CDC) and ClickHouse, enabling sub-second reporting across 500K+ records and offloading 70% of read traffic from primary databases.',
      'Engineered enterprise Single Sign-On (SSO) using WorkOS with SAML, Google OAuth, and Azure AD — onboarded 10+ enterprise clients with zero authentication-related incidents.',
      'Implemented offline-first mobile sync architecture for field operations in low-connectivity environments, reducing data loss incidents by 90% across 10,000+ deskless workers.',
      'Owned release and deployment lifecycle end-to-end — CI/CD pipelines, staged rollouts, real-time monitoring, and rollback procedures — maintaining 99.9% deployment success rate.',
    ],
  },
  {
    name: 'AIO',
    position: 'Software Engineer',
    url: 'https://www.aioapp.com',
    startDate: '2023-02-01',
    endDate: '2024-03-01',
    summary: `Built event-driven microservices and asynchronous processing infrastructure
    in NestJS at AIO (Islamabad, Pakistan).`,
    highlights: [
      'Designed and implemented event-driven microservices architecture using NestJS and Redis Pub/Sub, improving inter-service communication latency by 60% and handling 10K+ events/minute.',
      'Engineered scalable asynchronous queue processing using BullMQ, increasing task execution reliability to 99.5% and reducing failed job retries by 75% across distributed services.',
      'Optimized real-time data propagation layer using Redis Pub/Sub, enabling consistent sub-100ms message delivery between 8+ microservices.',
      'Built and maintained backend services in an NX Monorepo architecture, reducing code duplication by 40% and improving developer onboarding time by 50%.',
    ],
  },
  {
    name: 'KalPay Financials',
    position: 'Software Engineer — FinTech',
    url: 'https://kalpayfinancials.com',
    startDate: '2022-01-01',
    endDate: '2023-02-01',
    summary: `Owned core payment infrastructure at KalPay (Lahore, Pakistan), a Shariah-compliant
    consumer fintech platform.`,
    highlights: [
      'Led migration of backend codebase from JavaScript to TypeScript and adopted NestJS framework — reduced runtime errors by 60% and improved developer velocity by 35%.',
      'Migrated primary database from MongoDB to PostgreSQL, improving transactional reliability and enabling complex relational queries that reduced data retrieval time by 45%.',
      'Developed core payment module processing 5,000+ daily transactions, implementing business-critical Shariah-compliant financing logic with 100% regulatory compliance.',
      'Integrated 3+ payment gateways (JazzCash, Easypaisa, bank APIs), enabling seamless multi-channel transactions and increasing successful payment rate by 25%.',
      'Architected an auto-recurring payment system with smart retry logic and automated customer notifications — reduced overdue installments by 40%.',
    ],
  },
  {
    name: 'Kcube AI',
    position: 'Software Engineer',
    url: 'https://www.kcube.ai',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    summary: `Full-stack development of client-facing software solutions across multiple industry
    verticals at Kcube AI (Lahore, Pakistan). Promoted to Lead role within 6 months.`,
    highlights: [
      'Led full-stack development of client-facing software across 4+ industry verticals, delivering on time with 95% client satisfaction.',
      'Promoted to Lead within 6 months; mentored 3 junior engineers through code reviews and pair programming, reducing onboarding time by 40%.',
      'Established CI/CD deployment pipelines using Azure DevOps, reducing deployment cycle from 3 days to 4 hours and achieving 90%+ successful deployment rate.',
    ],
  },
];

export default work;
