import React from "react";
import SideSection from "./SideSection";
import education from "./assets/education.svg";

function Education() {
  const points = ["Master's of Computer Applications, Mumbai University, 2022 - Present", "Bachelor's in Computer Science, SPPU University - 83.98%, 2019 - 2022"];
  return (
    <div className="education-section">
      <SideSection title={"Education"} img={education} points={points} />
    </div>
  );
}

export default Education;
