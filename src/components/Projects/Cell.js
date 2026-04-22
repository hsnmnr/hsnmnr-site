import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </h3>
        <time className="published">
          {data.subtitle}
          {' — '}
          {dayjs(data.date).format('MMMM YYYY')}
        </time>
      </header>
      <div className="description">
        <p>{data.desc}</p>
        {data.tech && (
          <div className="project-tech">
            {data.tech.map((t) => (
              <span key={t} className="project-tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Cell;
