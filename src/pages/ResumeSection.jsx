import React from "react";
import "../styles/resume-section.css";

const ResumeSection = () => {
  return (
    <div>
      {" "}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Resume</h2>
      <div style={{ textAlign: "center" }}>
        <iframe
          src="https://drive.google.com/file/d/1zaAPH2ygYOnggwMPGRJZQNd_uyqIbmLp/preview"
          className="rs-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeSection;
