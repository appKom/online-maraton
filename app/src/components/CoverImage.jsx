import React from "react";
import "../styles/main.css";

function CoverImage(props) {
  return (
    <div className="coverimage-main">
        <img src={props.image} alt={props.alt} />
    </div>
  );
}

export default CoverImage;
