import React from 'react';
import './footer.css';
import FaGithub from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Email from 'react-icons/lib/md/email';

const Footer = ()=> {
  return (
    <div className="footer">
      <div className="footer-title">{`CONNECT WITH ME`}</div>
      <div className="icons-container">
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Xiaoxuhmm"><FaGithub /></a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/xiaoxu-li/">
            <LinkedIn />
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="mailto:xl1842@nyu.edu">
            <Email />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
