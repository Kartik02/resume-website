import React from "react";
import GridView from "./GridView";

function Projects() {
  const items = [
    {
      subtext: (
        <div>
          <h2 className="h2-text">Project 1</h2>
          <h3 className="h3-text">SIGN LANGUAGE TO TEXT & VOICE CONVERSION</h3>
          <h3 className="h3-text">Technology: Python, Open CV</h3>
          <div className="body-text">
            Aim is to create a system that can convert Sign Language into text
            than into Speech. It is used to communicate between deaf & disabled
            people. The main drawback and advantage about this project is you
            need to learn Sign Language to run this project.
          </div>
        </div>
      ),
    },
    {
      subtext: (
        <div>
          <h2 className="h2-text">Project 2</h2>
          <h3 className="h3-text">STUDENT FEEDBACK SYSTEM</h3>
          <h3 className="h3-text">Technology: Java, MySQL</h3>
          <div className="body-text">
            Aim is to make student feedback system helps educational institution
            especially college in various ways, such as storing data &
            maintaining student feedback. I developed this as first year
            project.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="projects-section">
      <GridView title={"Projects"} items={items} />
    </div>
  );
}

export default Projects;
