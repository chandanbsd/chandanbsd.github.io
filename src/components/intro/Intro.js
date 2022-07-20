import "./intro.css";
import Me2 from "../../img/me2.jpg";
import { SocialIcon } from "react-social-icons";
import IULogo from "../../img/iulogo.svg";
import React from "react";
import ReactIcon from "../../img/iulogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="i-social-links">
        <div>
          {" "}
          <SocialIcon
            url="https://linkedin.com/in/chandanbsd"
            target="_blank"
          />{" "}
        </div>
        <div>
          {" "}
          <SocialIcon
            url="https://github.com/chandanbsd"
            target="_blank"
          />{" "}
        </div>
        <div className="resume-link">
          Download Resume
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, I'm</h2>
            <h2 className="i-name">Chandan </h2>
            <h2 className="i-name">Bangalore Shankar Denanth</h2>
            <div className="a-university">
              <img src={IULogo} alt="" className="a-university-img" />
              <div className="a-university-texts">
                <h4 className="a-university-title">
                  Indiana University Bloomington <br />
                  (Master of Science in Computer Science)
                </h4>
                <p className="a-university-desc">Fall 2021 - Spring 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="a-left">
            <div className="a-card">
              <img src={Me2} alt="" className="a-img" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
