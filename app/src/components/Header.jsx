import React from 'react';
import "../styles/main.css"

function Header() {

  return (
    <div className='header-main'>
      <div className='header-submain'>
        <div className='header-top'>
          <img className='header-logo' src="/temporary-logo.jpg" alt="" />
        </div>
        <div className='header-bottom'>
          <div className='nav-btn'>
            SPONSORER
          </div>
          <div className='nav-btn nav-btn-main'>
            MELD DEG PÅ
          </div>
          <div className='nav-btn'>
            LEDERTAVLE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
