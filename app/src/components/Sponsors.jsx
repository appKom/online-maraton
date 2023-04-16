import React from "react";
import "../styles/main.css";

//! SPONSORS HERE

const sponsors = [
  {
    name: "Open AI",
    link: "https://openai.com/",
    image: "/open-ai.png",
  },
  {
    name: "Nestle",
    link: "https://www.nestle.no/",
    image: "/nestle.png",
  },
  {
    name: "Shein",
    link: "https://us.shein.com/",
    image: "/shein.png",
  },
  {
    name: "Facebook",
    link: "https://www.google.com/",
    image: "/facebook.jpg",
  },
  {
    name: "Pizzabakeren",
    link: "https://www.google.com/",
    image: "/pizzabakeren.png",
  },
];

function Sponsors() {
  return (
    <div className="sponsors-main">
      <div className="sponsors-submain">
        {sponsors.map((sponsor) => {
          return (
            <a
              className="sponsors"
              href={sponsor.link}
              key={sponsor.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sponsor.image} alt={sponsor.name} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
