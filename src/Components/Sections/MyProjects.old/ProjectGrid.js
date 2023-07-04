import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCategoryFilter from './ProjectCategoryFilter';
import ProjectShowcase from './ProjectShowcase';

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all projects
    axios
      .get('https://mohitgoyal.in/wp-json/wp/v2/project')
      .then(response => {
        setProjects(response.data);
        setFilteredProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    // Fetch all categories
    axios
      .get('https://mohitgoyal.in/wp-json/wp/v2/project-category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryFilter = categoryId => {
    if (categoryId === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project['project-category'].includes(categoryId)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      <ProjectCategoryFilter
        categories={categories}
        handleCategoryFilter={handleCategoryFilter}
      />
      <ProjectShowcase projects={filteredProjects} />
    </div>
  );
};

export default ProjectGrid;
