import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Hassan Munir's personal website. Lahore based Full-Stack developer."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Who Am I?</Link></h2>
          <p>
            I am a full-stack web developer with a passion for building smart and
            easy-to-use applications. I am a perfectionist with a sense of detail
            and ensures quality and high professionalism in everything I do. One word – programmer.
          </p>
        </div>
      </header>
      <p> Languages and Technologies I use:
        <br />
        <FontAwesomeIcon icon={faPlus} /> Frontend
        <p className="technologies">
          JavaScript, TypeScript, React, Next.js, Hooks, Redux
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Backend
        <p className="technologies">
          Node.js, Express.js, Rest, GraphQL
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Databases
        <p className="technologies">
          MongoDB, Firebase Firestore, Oracle, MySQL
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Design
        <p className="technologies">
          Sass, Ant Design, Material-UI
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Others
        <p className="technologies">
          Game Development, Android Application Development, Python
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Tools
        <p className="technologies">
          VS Code, GitHub, GitLab, Git, Slack, Trello,
          Postman, Unity3D, Android Studio, Jupyter Notebook
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
          <a href="https://www.linkedin.com/in/hsnmnr" rel="noreferrer" target="_blank" className="button">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/hsnmnr" rel="noreferrer" target="_blank" className="button">Github</a>
        </li>
        <li>
          <Link to="/contact" className="button">Contact</Link>
        </li>
      </ul>
      {/* <p> Source available <a href="https://github.com/hsnmnr/" rel="noreferrer" target="_blank">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
