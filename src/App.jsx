import Intro from "./components/intro/Intro";
import Skill from "./components/about/Skills";
import ProjectList from "./components/projectList/projectList";
const App = () => {
  return (
    <div>
      <Intro />
      <Skill />
      <ProjectList />
    </div>
  );
};

export default App;
