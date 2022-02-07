import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Chandan B. S. D.</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Front End Web Developer</div>
              <div className="i-title-item">Mobile Application Developer</div>
              <div className="i-title-item">Full Stack Web Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I'm pursuing Master of Science in Computer Science student at
            Indiana University Bloomington. Developing web and mobile
            applications are the best ways I'm improving as a developer.
            Currently I'm getting better at the Microsoft Azure, MERN stack,
            React Native and Cypress end-to-end testing.
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
