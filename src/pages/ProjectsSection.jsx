import "../styles/projects-section.css";
import { projects } from "../data";
import ResponsiveEmbed from "react-responsive-embed";

const ProjectCard = ({ link }) => {
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

const ProjectsSection = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Featured Projects</h1>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <ProjectCard key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
