import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import Main from '../layouts/Main';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Hassan Munir — Senior Software Engineer. Email: connect@hassanmunir.me"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Connect</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          I&apos;m open to discussing senior engineering roles, architecture challenges,
          or interesting backend problems. Feel free to reach out:
        </p>
        <a href="tel:+923070401940" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faPhone} /> (+92) 307 0401940
        </a>
        <br />
        <a href="mailto:connect@hassanmunir.me" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} /> connect@hassanmunir.me
        </a>
        <br />
        <a href="http://maps.google.com/?q=Islamabad, Pakistan" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Islamabad, Pakistan
        </a>
      </div>
      <br />
      <ul className="actions">
        <li>
          <a href="https://www.linkedin.com/in/hsnmnr" rel="noreferrer" target="_blank" className="button"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/hsnmnr" rel="noreferrer" target="_blank" className="button"><FontAwesomeIcon icon={faGithub} /> Github</a>
        </li>
      </ul>
    </article>
  </Main>
);

export default Contact;
