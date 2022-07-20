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
      <ResponsiveEmbed src={link} allowFullScreen />
    </div>
  );
};

export default Project;
