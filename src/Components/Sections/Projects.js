import React from "react";
import WebProjects from "./ProjectsComponents/Web_Projects";
export default function Projects() {
    
  return (
    <div className="MySection">
      <div className="row m-0 p-0 border">
        <div className="col-2 border-end p-0 m-0">
          <div className="ProjectSidebar">
            <h2 className="small p-2 m-0">_projects_categories</h2>
            <div className="categoryList border-top p-2">
              <ul>
                <li>React</li>
                <li>Python</li>
                <li>Wordpress</li>
                <li>HTML CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-10 p-0 m-0">
          <div className="CateTitle ">
            <h3 className="small  p-2 m-0 ">_react</h3>
          </div>
          <div className="projectBody border-top p-2">
            <WebProjects></WebProjects>{" "}
          </div>
        </div>
      </div>
    </div>
    
  );
}
