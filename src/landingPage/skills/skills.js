import React from 'react';
import FaCode from 'react-icons/lib/fa/code';
import FaServer from 'react-icons/lib/fa/server';
import MdArchive from 'react-icons/lib/md/archive';
import './skills.css';

const Skills = ()=> {
  return (
    <div className="skills-wrapper">
      <div className="skills">
        <div>
          <h2 className="skills-title">WHAT <strong>I</strong> DO</h2>
        </div>
        <div className="skill-container">
          <div>
            <FaCode />
            <p>FRONTEND</p>
            <div></div>
            <p>{`HTML - CSS - JQuery - D3.js - React - Redux`}</p>
          </div>
          <div>
            <FaServer />
            <p>BACKEND</p>
            <div></div>
            <p>{`Node.js - Python Flask - Java Spring`}</p>
          </div>
          <div>
            <MdArchive />
            <p>DATABASES</p>
            <div></div>
            <p>{`MongoDB - MySQL - Cassandra`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
