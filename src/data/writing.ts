export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

// TODO: replace with Hassan's external writing (blog posts, talks, articles).
// Internal markdown posts live in /content/writing/.
const data: WritingItem[] = [
  {
    title: 'TODO: External Article 1',
    url: 'https://hassanmunir.me',
    date: '2024-01-01',
    description: 'TODO: short description of the piece.',
  },
];

export default data;
