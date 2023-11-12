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
      <p>Hi, I&apos;m Hassan. A code-blooded Computer
        Scientist, <a href="https://skillcrush.com/blog/front-end-back-end-full-stack/" rel="noreferrer" target="_blank">Full Stack Engineer</a>,
        and Alumni of <a href="https://itu.edu.pk/" rel="noreferrer" target="_blank">Information Technology University</a>.
        I live in <a href="https://en.wikipedia.org/wiki/Islamabad" rel="noreferrer" target="_blank">Islamabad - the city of mountains</a>.
        I enjoy learning and creating new things.
        I&apos;m passionate
        about <a href="https://javascript.info/intro" rel="noreferrer" target="_blank">JavaScript</a>
        , <a href="https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964" rel="noreferrer" target="_blank">ECMAScript</a>
        , <a href="https://reactjs.org/" rel="noreferrer" target="_blank">ReactJS</a>
        , <a href="https://nodejs.org/en/about/" rel="noreferrer" target="_blank">NodeJS</a>
        , <a href="https://www.mongodb.com/why-use-mongodb" rel="noreferrer" target="_blank">MongoDB</a>
        , and <a href="https://dev.to/andrewbaisden/modern-full-stack-developer-tech-stack-2021-49ij" rel="noreferrer" target="_blank">Latest Technologies</a>.
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
