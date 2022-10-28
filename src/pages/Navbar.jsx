import React from "react";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="main-nav">
      <div>
        <SocialIcon url="https://linkedin.com/in/chandanbsd" target="_blank" />
      </div>
      <div>
        <SocialIcon url="https://github.com/chandanbsd" target="_blank" />
      </div>

      <div
        className="main-nav__resume"
        onClick={() =>
          window.open(
            "https://drive.google.com/drive/folders/12H1d2Ycd5elWiJKx7WRCwsbt-QoaN7Uf?usp=sharing",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Download Resume
        <FontAwesomeIcon icon={faDownload} />
      </div>
    </div>
  );
};

export default Navbar;
