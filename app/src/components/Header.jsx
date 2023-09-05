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
          <a href="https://www.strava.com/clubs/1118846" target="_blank" className="nav-btn">
            MELD DEG PÅ
          </a>
          <a
            href="#støtt"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#støtt")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-btn nav-btn-main"
          >
            STØTT MED VIPPS
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
