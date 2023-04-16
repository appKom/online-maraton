import React from "react";
import "../styles/main.css";

function Paragraph(props) {
  return (
    <div className="paragraph-main">
      <div className="paragraph-submain">
        <div className="paragraph-header">
          {props.header}
        </div>
        <div className="paragraph-text">
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
