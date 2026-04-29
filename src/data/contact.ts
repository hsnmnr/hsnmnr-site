import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

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
    label: 'Github',
    icon: faGithub,
  },
  {
    // TODO: replace with real X/Twitter handle if Hassan has one
    link: 'https://x.com/hassanmunir',
    label: 'X',
    icon: faTwitter,
  },
  {
    // TODO: replace with real Angel List profile if Hassan has one
    link: 'https://angel.co/hassanmunir',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    // TODO: replace with real Instagram handle if Hassan has one
    link: 'https://www.instagram.com/hassanmunir/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    // TODO: replace with real Facebook profile if Hassan has one
    link: 'https://facebook.com/hassanmunir',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:connect@hassanmunir.me',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
