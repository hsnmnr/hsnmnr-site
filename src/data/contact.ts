import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
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
