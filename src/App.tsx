import EducationSection from "./pages/EducationSection";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import ProjectsSection from "./pages/ProjectsSection";
import SkillSection from "./pages/SkillSection";

const App = () => {
  return (
    <div className="max-w-fit lg:max-w-max">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <SkillSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
