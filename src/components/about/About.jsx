import "./about.css";
import Me2 from "../../img/me2.jpg";
import IULogo from "../../img/iulogo.svg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Technical Skills</h1>
        <p className="a-sub">I'm </p>
        <p className="a-desc">
          <b>Programming Languages:</b> JavaScript, Python, Java, PHP, C#, C++,
          C <br />
          <b>Web Development Frameworks:</b> React.js, Express.js, Node.js,
          Tailwind CSS, Sass, Bootstrap, CSS, HTML
          <br />
          <b>Mobile Application Development Frameworks:</b> React Native,
          Flutter <br />
          <b>Database:</b> MongoDB, MySQL Cloud: Google Firebase <br />
          <b>End to End Automated Testing Framework:</b> Cypress <br />
          <b>ML, Computer Vision, and Data Mining Frameworks:</b> OpenCV,
          Mediapipe, Keras, Pandas, NumPy, Matplotlib, sci-kit-learn <br />
        </p>
        <div className="a-university">
          <img src={IULogo} alt="" className="a-university-img" />
          <div className="a-university-texts">
            <h4 className="a-university-title">
              Indiana University Bloomington Class of 2023 <br />
              (M. S. in Computer Science)
            </h4>
            <p className="a-university-desc">
              Luddy School of Informatics, Computing, and Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
