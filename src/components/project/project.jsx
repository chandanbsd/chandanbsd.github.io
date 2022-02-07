import ResponsiveEmbed from "react-responsive-embed";
import "./project.css";

const Project = ({ link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      {/* <a href={link} target="_blank" rel="noreferrer"> */}
      {/* <img src={img} alt="" className="p-img" /> */}
      <ResponsiveEmbed src={link} allowfullscreen />

      {/* </a> */}
    </div>
  );
};

export default Project;
