import "./projectList.css";
import Project from "../project/project";
import { projects } from "../../data";
import { SocialIcon } from "react-social-icons";

const projectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Featured Projects</h1>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default projectList;
