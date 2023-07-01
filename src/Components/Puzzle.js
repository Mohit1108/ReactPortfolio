import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectList from "./ProjectList";
const ProjectTabs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    axios
      .get("https://mohitgoyal.in/wp-json/wp/v2/project-category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project categories:", error);
      });
  }, []);

  const handleCategoryChange = categoryId => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="MySection">
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
      </Tabs>
    </div>
  );
};

export default ProjectTabs;
