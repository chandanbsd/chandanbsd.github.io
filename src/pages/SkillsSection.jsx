import "../styles/skills-section.css";
import react from "../img/react-icon.svg";
import js from "../img/javascript.svg";
import azure from "../img/azure.svg";
import node from "../img/nodejs.svg";
import flutter from "../img/flutter.svg";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="pl" id="skill-sec">
      <div className="pl-texts">
        <h1 className="pl-title">Featured Skills</h1>
      </div>
      <div className="skill-sec">
        <div>
          <div>
            <img src={react} alt="react" className="skill-img-con" />
          </div>
          <div className="skill-title">React.js & React Native</div>
        </div>

        <div>
          <div>
            <img src={node} alt="node" className="skill-img-con" />
          </div>
          <div className="skill-title">node.js</div>
        </div>

        <div>
          <div>
            <img src={js} alt="react" className="skill-img-con" />
          </div>
          <div className="skill-title">JavaScript</div>
        </div>

        <div>
          <div>
            <img src={azure} alt="react" className="skill-img-con" />
          </div>
          <div className="skill-title">Microsoft Azure</div>
        </div>

        <div>
          <div>
            <img src={flutter} alt="flutter" className="skill-img-con" />
          </div>
          <div className="skill-title">Flutter</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
