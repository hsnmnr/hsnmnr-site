import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <Link to="/">
          <h2>Hassan Munir</h2>
        </Link>
        <p><a href="mailto:connect@hassanmunir.me">connect@hassanmunir.me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Hassan. Senior Software Engineer
        at <a href="https://www.xenia.team" rel="noreferrer" target="_blank">Xenia</a>,
        building scalable backend systems and real-time analytics pipelines.
        5+ years of experience with Node.js, TypeScript, PostgreSQL, and AWS.
        Alumni of <a href="https://itu.edu.pk/" rel="noreferrer" target="_blank">Information Technology University</a>.
        Based in <a href="https://en.wikipedia.org/wiki/Islamabad" rel="noreferrer" target="_blank">Islamabad, Pakistan</a>.
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Hassan Munir <Link to="/">hassanmunir.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
