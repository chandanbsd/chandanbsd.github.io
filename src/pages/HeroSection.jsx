import "../styles/hero-section.css";
import ProfilePicture from "../img/me2.jpg";
import IULogo from "../img/iulogo.svg";
import React from "react";
import reactIcon from "../img/react-icon.svg";
import js from "../img/javascript.svg";
import azure from "../img/azure.svg";
import PythonIMG from "../img/python.svg";
import PostgreSQLIMG from "../img/postgresql.svg";
import BITLogo from "../img/bitlogo.png";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-sec">
        <div className="hero-sec__left">
          <div className="intro-sec">Chandan Bangalore Shankar Denanath</div>
          <div className="edu-sec">
            <h2 className="edu-sec__title">Education </h2>
            <div className="edu-section-flex">
              <div>
                <img src={IULogo} alt="" className="edu-sec__logo" />
                <h4>
                  Indiana University Bloomington <br />
                  (Master of Science in Computer Science)
                </h4>
                <p>Fall 2021 - Spring 2023</p>
              </div>
              <div className="edu-sec-cushion"></div>
              <div>
                <img src={BITLogo} alt="" className="edu-sec__logo" />
                <h4>
                  Bangalore Institute of Technology <br />
                  (Bachelor of Engineering in Computer Science)
                </h4>
                <p>Aug 2017 - Aug 2021</p>
              </div>
            </div>
          </div>

          <div className="skill-sec">
            <h2 className="skill-sec__title">Skills</h2>

            <div className="skill-sec__desc">
              <div className="skill-sec__desc__item">
                <div>
                  <img src={reactIcon} alt="react" className="skill-img-con" />
                </div>
                <div className="skill-title">React.js</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={js} alt="react" className="skill-img-con" />
                </div>
                <div className="skill-title">JavaScript</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={azure} alt="react" className="skill-img-con" />
                </div>
                <div className="skill-title">Microsoft Azure</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={PythonIMG} alt="python" className="skill-img-con" />
                </div>
                <div className="skill-title">Python</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img
                    src={PostgreSQLIMG}
                    alt="PostgreSQL"
                    className="skill-img-con"
                  />
                </div>
                <div className="skill-title">PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-section-right">
            <img src={ProfilePicture} alt="" className="a-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
