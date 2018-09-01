import React from 'react';
import './header.css';

const Header = ()=>{

  return (
    <section className="header">
      <div className="layer">
        <div className = 'header-title-wrapper'>
          <h2 className="header-title">{`HELLO, I'M XIAOXU`}</h2>
          <p className="header-text">
            {`AN ASPIRING WEB DEVELOPER`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Header;
