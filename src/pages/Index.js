import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mohammad Aziz's personal website. Lahore based Full-Stack developer."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Who Am I?</Link></h2>
          <p>
            I am a computer scientist. I have a knack for problem solving.
            I am a hard-working and driven individual who isn&apos;t afraid to face a challenge.
            I&apos;m passionate about my work and I know how to get the job done.
          </p>
        </div>
      </header>
      <p> Languages and Technologies I use:
        <br />
        <FontAwesomeIcon icon={faCaretRight} /> Frontend
        <p className="technologies">
          JavaScript, TypeScript, React, Next.js, Hooks, Redux
        </p>
        <br />
        <FontAwesomeIcon icon={faCaretRight} /> Backend
        <p className="technologies">
          Node.js, Express.js, Rest, GraphQL
        </p>
        <br />
        <FontAwesomeIcon icon={faCaretRight} /> Databases
        <p className="technologies">
          MongoDB, Firebase Firestore, Oracle, MySQL
        </p>
        <br />
        <FontAwesomeIcon icon={faCaretRight} /> Design
        <p className="technologies">
          Sass, Ant Design, Material-UI
        </p>
        <br />
        <FontAwesomeIcon icon={faCaretRight} /> Others
        <p className="technologies">
          Game Development, Android Application Development, Python
        </p>
        <br />
        <FontAwesomeIcon icon={faCaretRight} /> Tools
        <p className="technologies">
          VS Code, GitHub, GitLab, Git, Slack, Trello,
          Postman, Unity3D, Android Studio
        </p>
      </p>
      <br />
      <p>
        <h2>Want to know more?</h2>
        Check out my
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
        <li>
          <Link to="/Projects" className="button">Projects</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohdzez" rel="noreferrer" target="_blank" className="button">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/mohdzez" rel="noreferrer" target="_blank" className="button">Github</a>
        </li>
        <li>
          <Link to="/contact" className="button">Contact</Link>
        </li>
      </ul>
      {/* <p> Source available <a href="https://github.com/mohdzez/" rel="noreferrer" target="_blank">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
