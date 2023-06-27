import React from "react";
import PersonalInfo from "./AboutCompartments/personalInfo";
import Contact from "./AboutCompartments/contact";
export default function About() {
  return (
    <div>
      <div className=" heroSection">
        <div className="row ">
          <div className="col-md-1 sidebarAbout ">
            <div className="d-flex flex-column gap-4 ">
              <i className="bi bi-house"></i>
              <i className="bi bi-file-person"></i>
              <i className="bi bi-cast"></i>
              <i className="bi bi-person-lines-fill"></i>
            </div>
          </div>

          {/* Personal Info */}
          <div className="col-md-3">
            <div className="accordion" id="accordionExample">
              <PersonalInfo></PersonalInfo>
              {/* Contact me */}
              <Contact></Contact>
            </div>
          </div>
          <div className="col-md-5">col</div>
          <div className="col-md-3">col</div>
        </div>
      </div>
    </div>
  );
}
