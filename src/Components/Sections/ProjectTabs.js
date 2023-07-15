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
      <div className="row tabsCategory border-top border-end border-bottom">
        <div className="col-md-2 m-0 p-0 border-end">
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
                  <div className="d-flex justify-content-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedCategoryId === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    {category.name}
                  </div>

                  <span class="badge CatCount">{category.count} </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-10 p-0">
          <div className="border-bottom  ">
            <h3 className="p-2 m-0 small catName border-end">
              {selectedCategoryName} <i class="bi bi-x"></i>
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

      {/* 

      <Tabs className="tabsCategory border-top border-end">
        <TabList className="TabTitle border-end pe-3 pt-2 col-md-2">
          {categories.map((category) => (
            <div  className="MyTabs" >
              <Tab key={category.id}>
                <input 
                  type="checkbox"
                  value={category.id}
                  id="flexCheckChecked"
                  checked={selectedCategory === category.id}
                  onChange={() => handleCategorySelection(category.id)}
                />
                <label className="CategoryName " htmlfor="flexCheckChecked">
                  {category.name}
                </label>
              </Tab>
            </div>
          ))}
        </TabList>
        <div className="TabContent  pe-3 pt-3 ps-3">
          {categories.map((category) => (
            <TabPanel key={category.id}>
              <ProjectList categoryId={category.id} />
            </TabPanel>
          ))}
        </div>
      </Tabs> */}
    </div>
  );
};

export default ProjectTabs;
