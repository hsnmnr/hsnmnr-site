import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
