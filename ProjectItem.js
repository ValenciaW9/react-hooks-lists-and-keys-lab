function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((technology, index) => (
          <span key={index} className="technology">{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;