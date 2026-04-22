import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Hassan Munir — Senior Software Engineer building scalable backend systems, real-time analytics pipelines, and high-reliability services with Node.js, TypeScript, and AWS."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Senior Software Engineer</Link></h2>
          <p>
            Building scalable systems that earn trust in production.
          </p>
        </div>
      </header>
      <p>
        I&apos;m a Senior Software Engineer with 5+ years of experience designing scalable APIs,
        platform capabilities, and distributed systems. Currently driving backend architecture
        at <a href="https://www.xenia.team" rel="noreferrer" target="_blank">Xenia</a>,
        where I build real-time analytics pipelines, optimize infrastructure performance, and own
        the release and deployment lifecycle for a platform serving thousands of deskless workers.
      </p>
      <p>
        My focus is on reliability, performance, and clean architecture.
        I build systems that adapt seamlessly as they scale — from migrating
        databases and re-architecting monoliths to microservices, to reducing
        cloud costs by 50%+ through query optimization.
      </p>
      <h3>What I Deliver</h3>
      <ul>
        <li>Scalable backend services and APIs for high availability</li>
        <li>Real-time data pipelines and analytics for low-latency reporting</li>
        <li>Production reliability through monitoring, incident response, and CI/CD ownership</li>
        <li>Architecture decisions that balance performance with long-term maintainability</li>
      </ul>
      <h3>Core Stack</h3>
      <p>
        <strong>Backend:</strong> Node.js, TypeScript, NestJS, Express, GraphQL
        <br />
        <strong>Databases:</strong> PostgreSQL, Redis, ClickHouse, MongoDB
        <br />
        <strong>Cloud & DevOps:</strong> AWS, Docker, CI/CD, GitHub Actions
        <br />
        <strong>Architecture:</strong> Microservices, Event-Driven, BullMQ, Redis Pub/Sub
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
        <li>
          <Link to="/projects" className="button">Projects</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hsnmnr" rel="noreferrer" target="_blank" className="button">LinkedIn</a>
        </li>
        <li>
          <Link to="/contact" className="button">Get in Touch</Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
