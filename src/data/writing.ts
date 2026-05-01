export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

// External writing (blog posts, talks, articles published elsewhere).
// Internal markdown posts live in /content/writing/.
//
// To add an entry:
//   {
//     title: 'Article title',
//     url: 'https://dev.to/hsnmnr/...',
//     date: '2026-05-01',
//     description: 'One-sentence summary shown on the writing page.',
//   },
const data: WritingItem[] = [];

export default data;
