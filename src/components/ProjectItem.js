import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <a> <h3> Project Item </h3></a>
        <div>{name}</div> <div>{about}</div>
         <span className="technology">{technologies[0]}</span>
         <span className="technology">{technologies[1]}</span>
         <span className="technology">{technologies[2]}</span>
      </div>
    </div>
  );
}
//The project-item component should render a <h3> for the name, a <p> for the about, and a <div> for the technologies


export default ProjectItem;


