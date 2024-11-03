import EducationSection from "./pages/EducationSection";
import ProjectsSection from "./pages/ProjectsSection";
import Navbar from "./pages/Navbar";
import { SkillSection } from "./pages/SkillSection";
import { HeroSection } from "./pages/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EducationSection />
      <SkillSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
