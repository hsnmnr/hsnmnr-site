import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons/faCalendarCheck';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
  // If set, the UI opens an inline Cal.com modal on click instead of
  // navigating to `link`. The public `link` is preserved so it still
  // appears in PersonSchema's `sameAs` for SEO. `cal.link` is the Cal
  // event slug, e.g. "hassanmunir/book-a-meeting".
  cal?: {
    link: string;
  };
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/hsnmnr',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/hsnmnr',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'mailto:connect@hassanmunir.me',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://cal.com/hassanmunir/book-a-meeting',
    label: 'Book a meeting',
    icon: faCalendarCheck,
    cal: { link: 'hassanmunir/book-a-meeting' },
  },
  {
    link: 'https://dev.to/hsnmnr',
    label: 'Dev.to',
    icon: faDev,
  },
  {
    link: 'https://medium.com/@hsnmnr',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://www.instagram.com/hssnmnr/',
    label: 'Instagram',
    icon: faInstagram,
  },
];

export default data;
