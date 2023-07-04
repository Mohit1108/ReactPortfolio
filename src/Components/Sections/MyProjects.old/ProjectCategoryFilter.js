import React from 'react';

const ProjectCategoryFilter = ({ categories, handleCategoryFilter }) => {
  return (
    <div>
      <button onClick={() => handleCategoryFilter('all')}>All</button>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => handleCategoryFilter(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectCategoryFilter;
