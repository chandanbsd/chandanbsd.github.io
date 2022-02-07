import "./intro.css";

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
        </div>
      </div>

      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
