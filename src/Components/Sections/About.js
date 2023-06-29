import React, { useState } from "react";
import Contact from "./AboutCompartments/contact";

import data from "./AboutCompartments/Accordian/data";
import Title from "./AboutCompartments/Accordian/Title";
import Content from "./AboutCompartments/Accordian/Content";
// import Accordion from "./AboutCompartments/Accordian/Accordion";
import GitHubProfile from "./AboutCompartments/GitHubProfile";
export default function About() {
  const [activeTab, setActiveTab] = useState(data[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [personalInfoOpen, setPersonalInfoOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);

  const togglePersonalInfo = () => {
    setPersonalInfoOpen(!personalInfoOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <div className="MySection">
      <div className="row border-top border-bottom m-0">
        <div className="col-md-1 sidebarAbout p-0 pt-5 justify-content-center d-flex">
          <div className="d-flex flex-column gap-4 ">
            <i className="bi bi-house"></i>
            <i className="bi bi-file-person"></i>
            <i className="bi bi-cast"></i>
            <i className="bi bi-person-lines-fill"></i>
          </div>
        </div>

        {/* Personal Info */}

        <div className="col-md-2 m-0 p-0 infoTitle border-end ">
          <h3
            onClick={togglePersonalInfo}
            className={personalInfoOpen ? "active" : ""}
          >
            Personal Info
          </h3>
          {personalInfoOpen && (
            <Title
              tabs={data}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            ></Title>
          )}

          <h3
            onClick={toggleContact}
            className={"contactTab s " + (contactOpen ? " active" : "")}
          >
            Contact
          </h3>
          {contactOpen && <Contact></Contact>}

          <div className="accordion" id="accordionExample"></div>
        </div>
        <div className="col-md-6 p-0 bodyContainerText">
          <Content tabs={data} activeTab={activeTab}></Content>
        </div>
        <div className="col-md-3 p-0 GitRepository ">
          <GitHubProfile></GitHubProfile>
        </div>
      </div>
    </div>
  );
}
