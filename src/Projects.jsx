import React from "react";
import GridView from "./GridView";

function Projects() {
  const items = [
    {
      subtext: (
        <div>
          <h4>Project 1</h4>
          <h3>SIGN LANGUAGE TO TEXT & VOICE CONVERSION</h3>
          <h4>Technology: Python, Open CV</h4>
          <div>Aim is to create a system that can convert Sign Language into text than into Speech. </div>
          <div>It is used to communicate between deaf & disabled people. </div>
          <div>The main drawback and advantage about this project is you need to learn Sign Language to run this project.</div>
        </div>
      ),
    },
    {
      subtext: (
        <div>
          <h4>Project 2</h4>
          <h3>STUDENT FEEDBACK SYSTEM</h3>
          <h4>Technology: Java, MySQL</h4>
          <div>Aim is to make Student Feedback System helps educational  </div>
          <div>Institution especially college in various ways, Such as Storing data & </div>
          <div>Maintaining Student Feedback. I Developed this as First Year Project.
.</div> 
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
