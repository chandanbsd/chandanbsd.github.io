import "./about.css";
import Me2 from "../img/me2.jpg";
import IULogo from "../img/iulogo.svg";

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
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Pursuing Master of Science in Computer Science</p>
        <p className="a-desc">
          Developing web and mobile applications are the best ways I'm improving
          as a developer. Currently I'm getting better at the Microsoft Azure,
          MERN stack, React Native and Cypress end-to-end testing.
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
