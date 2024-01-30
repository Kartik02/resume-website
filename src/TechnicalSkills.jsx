import React from "react";
import techskills from "./assets/techskills.svg";
import SideSection from "./SideSection";

function TechnicalSkills() {
  const points = ["Python (Machine Learning, Data Science)", "JavaScript (React, Node.js)", "HTML5, CSS3", "Database Management (MySQL, MongoDB)", "Version Control (Git)", "Other relevant skills..."];
  return (
    <div className="technical-skills-section">
      <SideSection title={"Technical Skills"} img={techskills} points={points} />
    </div>
  );
}

export default TechnicalSkills;
