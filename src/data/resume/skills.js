const skills = [
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'Node.js',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'NestJS',
    competency: 5,
    category: ['Backend', 'Frameworks'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Backend', 'Frameworks'],
  },
  {
    title: 'PostgreSQL',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases', 'Backend'],
  },
  {
    title: 'ClickHouse',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Backend', 'Frameworks'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'TypeORM',
    competency: 4,
    category: ['Backend', 'Databases'],
  },
  {
    title: 'Sequelize',
    competency: 3,
    category: ['Backend', 'Databases'],
  },
  {
    title: 'BullMQ',
    competency: 4,
    category: ['Backend', 'Architecture'],
  },
  {
    title: 'Redis Pub/Sub',
    competency: 4,
    category: ['Backend', 'Architecture'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'CI/CD',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'GitHub Actions',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Frontend', 'Frameworks'],
  },
  {
    title: 'Next.js',
    competency: 3,
    category: ['Frontend', 'Frameworks'],
  },
  {
    title: 'Redux',
    competency: 3,
    category: ['Frontend'],
  },
  {
    title: 'Microservices',
    competency: 4,
    category: ['Architecture'],
  },
  {
    title: 'Event-Driven Architecture',
    competency: 4,
    category: ['Architecture'],
  },
  {
    title: 'System Design',
    competency: 4,
    category: ['Architecture'],
  },
  {
    title: 'Jest',
    competency: 4,
    category: ['Backend'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'HTML + CSS/SCSS',
    competency: 3,
    category: ['Frontend', 'Languages'],
  },
  {
    title: 'NX Monorepo',
    competency: 3,
    category: ['Cloud & DevOps', 'Architecture'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#2e59ba',
  '#37b1f5',
  '#515dd4',
  '#6968b3',
  '#40494e',
  '#e47272',
  '#3896e2',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
