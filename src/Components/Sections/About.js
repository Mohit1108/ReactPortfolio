import React from "react";
import PersonalInfo from "./AboutCompartments/personalInfo";
import Contact from "./AboutCompartments/contact";
import BioInterestEducationContent from "./AboutCompartments/Info/BEIContent";
export default function About() {
  return (
    <div>
      <div className=" heroSection my-5">
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
          <div className="col-md-3 me-4">
            <div className="accordion" id="accordionExample">
              <PersonalInfo></PersonalInfo>
              {/* Contact me */}
              <Contact></Contact>
            </div>
          </div>
          <div className="col-md-5">
            <BioInterestEducationContent></BioInterestEducationContent>
          </div>
          <div className="col-md-2">col</div>
        </div>
      </div>
    </div>
  );
}
