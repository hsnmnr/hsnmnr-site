import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import skills from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Hassan Munir's Resume — Senior Software Engineer at Xenia. Node.js, TypeScript, PostgreSQL, AWS. Previously at AIO, KalPay, Kcube AI."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <div className="resume-header-row">
            <h2 data-testid="heading">
              <Link to="resume">Resume</Link>
            </h2>
            <a
              href="https://docs.google.com/document/d/1IDjj6ZtoX431WaR4M1uyAIyuVW4a85uJX6M7RNAc2Bk/export?format=pdf"
              target="_blank"
              rel="noreferrer"
              className="button resume-pdf-btn"
            >
              Download PDF
            </a>
          </div>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>

      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
