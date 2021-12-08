import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["React.js", "React Native", "JavaScript", "Sass", "Tailwind CSS","Django", "Python", "Node.js", "Firebase"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>I'm a Comp Sci Grad Student at Indian University Bloomington <img className = "alma-mater" src="assets/alma-mater.png"></img></h3>
          <br />
          <h1>
            Tech that I've used  <span ref={textRef}></span>
          </h1>
          
        </div>
        
      </div>
    </div>
  );
}
