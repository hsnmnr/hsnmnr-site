export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

// TODO: replace with real ITU courses Hassan wants to highlight, or remove
// the Courses section entirely from app/resume/page.tsx if not relevant.
const courses: Course[] = [
  {
    title: 'Data Structures and Algorithms',
    number: 'CS 201',
    link: 'https://itu.edu.pk',
    university: 'ITU',
  },
  {
    title: 'Database Systems',
    number: 'CS 305',
    link: 'https://itu.edu.pk',
    university: 'ITU',
  },
  {
    title: 'Operating Systems',
    number: 'CS 330',
    link: 'https://itu.edu.pk',
    university: 'ITU',
  },
  {
    title: 'Computer Networks',
    number: 'CS 340',
    link: 'https://itu.edu.pk',
    university: 'ITU',
  },
  {
    title: 'Software Engineering',
    number: 'CS 350',
    link: 'https://itu.edu.pk',
    university: 'ITU',
  },
  {
    title: 'Web Engineering',
    number: 'CS 360',
    link: 'https://itu.edu.pk',
    university: 'ITU',
  },
];

export default courses;
