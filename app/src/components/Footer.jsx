import React from "react";
import "../styles/main.css";
import { BsSlack, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const footerLinkSize = 35;
const footerLinks = [
  {
    name: "Slack",
    icon: <BsSlack size={footerLinkSize} />,
    link: "https://onlinentnu.slack.com/",
  },
  {
    name: "Facebook",
    icon: <BsFacebook size={footerLinkSize} />,
    link: "http://facebook.com/LinjeforeningenOnline",
  },
  {
    name: "Instagram",
    icon: <BsInstagram size={footerLinkSize} />,
    link: "https://www.instagram.com/online_ntnu/",
  },
  {
    name: "Github",
    icon: <BsGithub size={footerLinkSize} />,
    link: "https://github.com/appKom"
  },
];

function Footer() {

  return (
    <div className="footer-main">
      <div className="footer-links">
        {
          footerLinks.map((link) => {
            return (
              <a href={link.link} key={link.name} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            );
          })
        }

      </div>
      <div className="footer-bottom">
        <div>Feil på siden?</div>
        <div>
          Ta kontakt med <a href="mailto:appkom@online.ntnu.no">Appkom</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
