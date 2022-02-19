import "./about.css";
import Me2 from "../../img/me2.jpg";

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
        {/* <p className="a-sub">I'm </p> */}

        <dl className="a-desc">
          <dt>
            <b>Programming Languages:</b>
          </dt>
          <dd>JavaScript, Python, Java, PHP, C#, C++, C</dd>
          <dt>
            <b>Web Development:</b>
          </dt>
          <dd>
            React.js, Express.js, Node.js, Tailwind CSS, Sass, Bootstrap, CSS,
            HTML
          </dd>
          <dt>
            <b>Mobile App Development:</b>
          </dt>
          <dd>React Native, Flutter</dd>
          <dt>
            <b>Database:</b>
          </dt>
          <dd>MongoDB, MySQL</dd>
          <dt>
            <b>Cloud:</b>
          </dt>
          <dd>Google Firebase</dd>
          <dt>
            <b>End to End Automated Testing Framework:</b>
          </dt>
          <dd>Cypress</dd>
          <dt>
            <b>Machine Learning and Computer Vision:</b>
          </dt>
          <dd>
            OpenCV, Mediapipe, Keras, Pandas, NumPy, Matplotlib, sci-kit-learn
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default About;
