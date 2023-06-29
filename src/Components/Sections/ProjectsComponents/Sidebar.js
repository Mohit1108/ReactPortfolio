import React from 'react';

const ProjectSidebar = ({ categories, onSelectCategory }) => {

    const handleCategoryClick = (categoryId) => {
        onSelectCategory(categoryId);
      };

      

  return (
      <ul>
        <li
          onClick={() => handleCategoryClick(null)}>
          All
        </li>
        {categories.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                    {category.name}
                  </li>
        
        ))}
      </ul>
  );
};

export default ProjectSidebar;
