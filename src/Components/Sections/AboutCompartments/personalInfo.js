import React from "react";
import BioInterestEducationTitle from "./Info/BEITitle";

export default function PersonalInfo() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="PersonalHeading">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#personalInfo"
          aria-expanded="true"
          aria-controls="personalInfo"
        >
          <i className="bi bi-arrow-up-right-circle me-2"></i> personal-info
        </button>
      </h2>
      <div
        id="personalInfo"
        className="accordion-collapse collapse show ps-4"
        aria-labelledby="PersonalHeading"
        data-bs-parent="#accordionExample"
      >
        <BioInterestEducationTitle></BioInterestEducationTitle>
      </div>
    </div>
  );
}
