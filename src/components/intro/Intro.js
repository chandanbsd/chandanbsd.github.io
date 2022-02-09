import "./intro.css";
import Me from "../../img/me.png";
import { SocialIcon } from "react-social-icons";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            <SocialIcon
              url="https://linkedin.com/in/chandanbsd"
              target="_blank"
            />{" "}
            <SocialIcon url="https://github.com/chandanbsd" target="_blank" />{" "}
            <SocialIcon url="https://twitter.com/chandanbsd" target="_blank" />{" "}
            <SocialIcon url="https://facebook.com/bsdchandan" target="_blank" />{" "}
            <br /> <br />
            Hello, My name is
          </h2>
          <h2 className="i-name">Chandan B. S. D.</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Software Dev</div>
              <div className="i-title-item">Front End Dev</div>
              <div className="i-title-item">Mobile Dev</div>
              <div className="i-title-item">Full Stack Dev</div>
            </div>
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Profile Picture" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
