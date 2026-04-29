export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  // Featured: professional work. These reuse images from earlier portfolio entries
  // as placeholders — TODO: swap in real screenshots / diagrams when available.
  {
    title: 'Real-Time Analytics Pipeline',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: '/images/projects/taskly.jpg',
    date: '2024-06-01',
    desc: 'Architected a real-time analytics pipeline using Change Data Capture (CDC) and ClickHouse, powering low-latency dashboards and near-live reporting while offloading 70% of read traffic from primary databases.',
    tech: ['CDC', 'ClickHouse', 'PostgreSQL', 'Node.js'],
    featured: true,
  },
  {
    title: 'Enterprise SSO Integration',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: '/images/projects/taskly.jpg',
    date: '2024-04-01',
    desc: 'Engineered enterprise Single Sign-On using WorkOS with custom SAML, Google OAuth, and Azure AD integration — onboarded 10+ enterprise clients with zero authentication-related incidents.',
    tech: ['WorkOS', 'SAML', 'OAuth', 'Azure AD', 'Node.js'],
    featured: true,
  },
  {
    title: 'Offline-First Mobile Sync',
    subtitle: 'Xenia',
    link: 'https://www.xenia.team',
    image: '/images/projects/taskly.jpg',
    date: '2024-08-01',
    desc: 'Implemented offline-first mobile sync architecture with robust conflict resolution and sync-on-reconnect, enabling reliable field operations for 10,000+ deskless workers in low-connectivity environments.',
    tech: ['Conflict Resolution', 'Redis', 'Node.js', 'TypeScript'],
    featured: true,
  },
  {
    title: 'Event-Driven Microservices',
    subtitle: 'AIO',
    link: 'https://aioapp.com',
    image: '/images/projects/taskly.jpg',
    date: '2023-06-01',
    desc: 'Designed and implemented event-driven microservices architecture using NestJS, BullMQ, and Redis Pub/Sub for a restaurant AI platform, enabling scalable async processing across 8+ distributed services.',
    tech: ['NestJS', 'BullMQ', 'Redis Pub/Sub', 'PostgreSQL'],
  },
  {
    title: 'BNPL Payment Platform',
    subtitle: 'KalPay',
    link: 'https://kalpayfinancials.com',
    image: '/images/projects/taskly.jpg',
    date: '2022-06-01',
    desc: 'Led development of the core BNPL payment module, integrating multiple payment gateways (JazzCash, Easypaisa, bank APIs), implementing recurring billing with smart retry logic, and reducing overdue installments by 40%.',
    tech: ['NestJS', 'PostgreSQL', 'Payment Gateways', 'TypeORM'],
  },
  {
    title: 'Platform Modernization',
    subtitle: 'KalPay',
    link: 'https://kalpayfinancials.com',
    image: '/images/projects/taskly.jpg',
    date: '2022-03-01',
    desc: "Led the modernization of KalPay's platform: migrated the backend from JavaScript to TypeScript/NestJS, re-architected from monolith to microservices, and migrated the primary database from MongoDB to PostgreSQL.",
    tech: ['TypeScript', 'NestJS', 'PostgreSQL', 'MongoDB'],
  },

  // Earlier work: side projects, learning projects, freelance.
  {
    title: 'Tunnin — Frontend (React)',
    subtitle: 'Virtual fitness platform',
    link: 'https://www.tunnin.io/',
    image: '/images/projects/tunnin.PNG',
    date: '2019-07-20',
    desc: 'Frontend for a virtual fitness platform. Flexible class scheduling and pay-per-use model — workout when and where you want.',
    tech: ['React'],
  },
  {
    title: 'Treepost — Frontend (Next.js)',
    subtitle: 'Curated hemp marketplace',
    link: 'https://www.linkedin.com/company/treepost/about/',
    image: '/images/projects/treepost.PNG',
    date: '2019-07-20',
    desc: 'Customer-first marketplace for hemp products. Focused on product transparency, a superior buying experience, and a curated selection of high-quality brands.',
    tech: ['Next.js', 'React'],
  },
  {
    title: 'Crwn Clothing — Frontend (React)',
    subtitle: 'E-commerce store',
    link: 'https://github.com/hsnmnr/crwn-clothing',
    image: '/images/projects/crwnclothing3.PNG',
    date: '2019-07-20',
    desc: 'E-commerce frontend built with React. Implemented Redux for state management and Stripe API for payment processing.',
    tech: ['React', 'Redux', 'Stripe'],
  },
  {
    title: 'Taskly — Full-Stack (MERN)',
    subtitle: 'Task tracking app',
    image: '/images/projects/taskly.jpg',
    date: '2020-07-28',
    desc: 'Full-stack to-do application built on the MERN stack. Used Ant Design for the UI and MongoDB Atlas for cloud storage.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'E-Store — Full-Stack (PHP)',
    subtitle: '2018 semester project',
    link: 'https://github.com/hsnmnr/Estore',
    image: '/images/projects/estore.png',
    date: '2018-11-20',
    desc: 'Fully responsive full-stack web application built as a semester project to explore SQL and NoSQL databases. Includes user authentication, admin login, shopping cart, wallet, and coupons.',
    tech: ['PHP', 'MySQL'],
  },
  {
    title: 'Monsters Rolodex — Frontend (React)',
    subtitle: 'First React project',
    link: 'https://hsnmnr.github.io/monsters-rolodex/',
    image: '/images/projects/monstersrolodex.PNG',
    date: '2018-05-15',
    desc: 'My first React project — a simple app with components and basic search, deployed to GitHub Pages.',
    tech: ['React'],
  },
];

export default data;
