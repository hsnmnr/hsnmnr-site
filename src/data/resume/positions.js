const positions = [
  {
    company: 'Xenia',
    position: 'Senior Software Engineer',
    link: 'https://www.xenia.team',
    daterange: 'January 2025 - Present',
    points: [
      'Promoted while remaining fully hands-on in development; expanded responsibilities for reliability and delivery across the platform.',
      'Reduced AWS RDS CPU utilization by ~50% through targeted query optimizations, index redesign, and explain-analyze driven tuning.',
      'Owned release and deployment lifecycle end-to-end: CI/CD orchestration, staged rollouts, real-time monitoring, and rollback procedures.',
      'Led post-release monitoring and incident response: created incident playbooks, ran RCA sessions, and implemented recurring fixes to reduce MTTR.',
      'Drove engineering hiring: conducted technical interviews for backend, mobile, and AI roles, and supported onboarding to raise team capability.',
      'Partnered on architecture and long-term maintainability decisions to keep the platform performant and sustainable at scale.',
    ],
  },
  {
    company: 'Xenia',
    position: 'Back End Developer',
    link: 'https://www.xenia.team',
    daterange: 'February 2024 - January 2025',
    points: [
      'Engineered enterprise Single Sign-On (SSO) with custom SAML, Google, and Microsoft Azure via WorkOS, enabling secure authentication for enterprise customers.',
      'Implemented offline-first mobile sync with robust conflict resolution and sync-on-reconnect, improving reliability in low-connectivity environments.',
      'Architected a real-time analytics pipeline using Change Data Capture (CDC) and ClickHouse, powering low-latency dashboards and near-live reporting.',
      'Launched WhatsApp-based invitation flows for regions with SMS limitations, increasing successful onboarding in target markets.',
      'Owned core backend work: feature development, code reviews, bug fixes, and performance tuning.',
    ],
  },
  {
    company: 'AIO',
    position: 'Full Stack Engineer',
    link: 'https://aioapp.com',
    daterange: 'February 2023 - March 2024',
    points: [
      'Built and optimized event-driven microservices to handle high-volume restaurant operations, improving system throughput and reliability.',
      'Designed and deployed BullMQ-based queueing pipelines, enabling scalable async processing across multiple microservices.',
      'Implemented a reusable Redis Pub/Sub framework for real-time inter-service communication, reducing boilerplate and increasing developer velocity.',
      'Developed maintainable backend services in NestJS within an NX Monorepo, focusing on scalability and clean architecture.',
    ],
  },
  {
    company: 'KalPay',
    position: 'Full Stack Engineer',
    link: 'https://kalpayfinancials.com',
    daterange: 'January 2022 - February 2023',
    points: [
      'Modernized the core platform by migrating from JavaScript to TypeScript/NestJS, improving code quality, scalability, and developer productivity.',
      'Re-architected the system from a monolith to microservices and migrated the primary database from MongoDB to PostgreSQL for transactional reliability.',
      'Led development of the BNPL payment module, including gateway integrations, recurring billing, and payment reminders — reducing overdue installments by 40%.',
      'Integrated multiple payment gateways (JazzCash, Easypaisa, bank APIs) enabling seamless multi-channel transactions.',
    ],
  },
  {
    company: 'Kcube AI',
    position: 'Software Engineer',
    link: 'https://kcube.ai',
    daterange: 'July 2021 - January 2022',
    points: [
      'As one of the first engineers, led development of client-facing software solutions across multiple industry verticals.',
      'Promoted to Lead within 6 months; mentored junior engineers through code reviews and pair programming.',
      'Established CI/CD deployment pipelines using Azure DevOps, reducing deployment cycles from days to hours.',
      'Built a WhatsApp chatbot for BNPL services and integrated PayStack payment gateway for subscriptions.',
    ],
  },
  {
    company: 'Bitshub Solutions',
    position: 'Frontend Developer',
    link: 'https://bitshub.io',
    daterange: 'December 2020 - July 2021',
    points: [
      'Contributed to development of multiple client-facing applications, each with unique features and tech stacks.',
      'Built responsive frontends using Next.js, React, and Apollo GraphQL with component libraries including Storybook, Material UI, and Chakra UI.',
      'Collaborated with remote team members across different time zones.',
    ],
  },
];

export default positions;
