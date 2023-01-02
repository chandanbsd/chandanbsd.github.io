import HeroSection from "./pages/HeroSection";
import ProjectsSection from "./pages/ProjectsSection";
import Navbar from "./pages/Navbar";
import { Document, Page } from "react-pdf";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />

      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Resume</h2>

      <div style={{ textAlign: "center" }}>
        <iframe
          src="https://drive.google.com/file/d/1zaAPH2ygYOnggwMPGRJZQNd_uyqIbmLp/preview"
          style={{ width: "80vw", height: "100vh" }}
        ></iframe>
      </div>
    </div>
  );
};

export default App;
