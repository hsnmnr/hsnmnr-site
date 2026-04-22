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
        I&apos;m a Senior Software Engineer with 5+ years of
        experience designing scalable APIs, platform capabilities,
        and distributed systems. Currently driving backend
        architecture at <a href="https://www.xenia.team" rel="noreferrer" target="_blank">Xenia</a>,
        where I build real-time analytics pipelines, optimize
        infrastructure performance, and own the release lifecycle
        for a platform serving thousands of deskless workers.
        I work in an AI-native engineering workflow — using
        agentic coding, custom MCP integrations, and parallel
        AI agents to ship faster without compromising quality.
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
        <li>Architecture decisions that balance performance
          with long-term maintainability</li>
        <li>AI-augmented development workflows — parallel
          agents, custom MCP servers, and agentic automation
          for engineering velocity</li>
      </ul>
      <h3>Technical Skills</h3>
      <p>
        <strong>Languages:</strong> JavaScript, TypeScript,
        Python, SQL, Bash
        <br />
        <strong>Backend:</strong> Node.js, NestJS, Express.js,
        GraphQL, REST APIs, BullMQ
        <br />
        <strong>Cloud/DevOps:</strong> AWS (EC2, RDS, S3,
        Lambda, SQS, CloudWatch), Azure, Docker,
        CI/CD, GitHub Actions
        <br />
        <strong>Databases:</strong> PostgreSQL, MongoDB, Redis,
        ClickHouse, TypeORM, Mongoose
        <br />
        <strong>Messaging:</strong> Redis Pub/Sub, BullMQ,
        AWS SQS, Change Data Capture (CDC)
        <br />
        <strong>Architecture:</strong> Microservices,
        Event-Driven Architecture, Domain-Driven Design,
        Serverless
        <br />
        <strong>Monitoring:</strong> AWS CloudWatch, Sentry,
        Logging &amp; Observability, Health Checks
        <br />
        <strong>AI-Augmented Development:</strong> Agentic
        Coding Workflows, Custom MCP Servers,
        Parallel AI Agents, Specification-Driven Development
        <br />
        <strong>Practices:</strong> CI/CD, TDD, Agile/Scrum,
        Code Review, Performance Optimization, System Design
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
