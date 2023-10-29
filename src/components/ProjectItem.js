import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <a href="#">Project Item</a>
        {technologies.map((technology) => (
          <span className="technology">{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;