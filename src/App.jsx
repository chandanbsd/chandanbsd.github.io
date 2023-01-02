import HeroSection from "./pages/HeroSection";
import ProjectsSection from "./pages/ProjectsSection";
import Navbar from "./pages/Navbar";
import ResumeSection from "./pages/ResumeSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ResumeSection />
    </div>
  );
};

export default App;
