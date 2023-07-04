import React, { useState } from 'react';

const ProjectShowcase = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleLoadMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3);
  };

  return (
    <div>
      <div className="project-grid">
        {projects.slice(0, visibleProjects).map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title.rendered}</h3>
            <p>{project.acf.short_description}</p>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default ProjectShowcase;
