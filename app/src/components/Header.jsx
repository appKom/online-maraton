import React from "react";
import "../styles/main.css";

function Header() {
  return (
    <div className="header-main">
      <div className="header-submain">
        <div className="header-top">
          <img className="header-logo" src="/temporary-logo.jpg" alt="" />
        </div>
        <div className="header-bottom">
          <a
            href="#sponsorer"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#sponsorer")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-btn"
          >
            SPONSORER
          </a>
          <a href="" target="_blank" className="nav-btn nav-btn-main">
            MELD DEG PÅ
          </a>
          <a
            href="#ledertavle"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#ledertavle")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-btn"
          >
            LEDERTAVLE
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
