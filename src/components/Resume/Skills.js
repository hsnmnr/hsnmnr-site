import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills }) => (
  <div className="skills">
    <div className="link-to" id="skills" />
    <div className="title">
      <h3>Skills</h3>
    </div>
    <div className="skills-categories">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills-category">
          <h4 className="skills-category-title">
            {category}
          </h4>
          <p className="skills-category-items">
            {items.join(', ')}
          </p>
        </div>
      ))}
    </div>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string),
  ),
};

Skills.defaultProps = {
  skills: {},
};

export default Skills;
