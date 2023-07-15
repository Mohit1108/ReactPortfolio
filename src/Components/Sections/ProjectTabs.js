import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectList from "./ProjectList";
const ProjectTabs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  useEffect(() => {
    axios
      .get("https://mohitgoyal.in/wp-json/wp/v2/project-category")
      .then((response) => {
        setCategories(response.data);
        setSelectedCategoryId(response.data[0]?.id);
      })
      .catch((error) => {
        console.error("Error fetching project categories:", error);
      });
  }, []);

  useEffect(() => {
    // Update the selected category name when the category selection changes
    const selectedCategory = categories.find(
      (category) => category.id === selectedCategoryId
    );
    if (selectedCategory) {
      setSelectedCategoryName(selectedCategory.name);
    }
  }, [selectedCategoryId, categories]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="MySection " id="projects">
<<<<<<< HEAD
      <div className="row tabsCategory border-top border-end border-bottom">
        <div className="col-md-2 m-0 p-0 border-end">
=======
      <div className=" tabsCategory border-top border-end border-bottom">
        <div className="col-md-2 m-0 p-0 border-end catList">
>>>>>>> d4cd88a8426c3cdf8bd6c93ce5ccb73a7fb8aa8e
          <div className="border-bottom  ">
            <h3 className="p-2 m-0 small border-end">_categories_</h3>
          </div>

          <ul className="TabTitle pe-3 pt-3">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`itemCategory ${
                  selectedCategoryId === category.id ? "active" : ""
                }`}
              >
                <label className="form-check-label d-flex justify-content-between">
<<<<<<< HEAD
                  <div className="d-flex justify-content-start">
=======
                  <div className="d-flex justify-content-start align-items-center">
>>>>>>> d4cd88a8426c3cdf8bd6c93ce5ccb73a7fb8aa8e
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedCategoryId === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    {category.name}
                  </div>

                  <span className="badge CatCount">{category.count} </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-10 p-0 myCatT">
          <div className="border-bottom  ">
            <h3 className="p-2 m-0 small catName border-end">
              {selectedCategoryName} <i className="bi bi-x"></i>
            </h3>
          </div>
          <div className="categoryProjectList p-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`tab-content ${
                  selectedCategoryId === category.id ? "active" : ""
                }`}
              >
                {selectedCategoryId === category.id && (
                  <ProjectList categoryId={category.id} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
