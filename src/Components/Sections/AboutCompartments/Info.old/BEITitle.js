import React from "react";

export default function BioInterestEducationTitle() {
  return (



    <div
        id="personalInfo"
        className="accordion-collapse collapse show ps-4"
        aria-labelledby="PersonalHeading"
        data-bs-parent="#accordionExample"
      >
<div className="accordion" id="accordionDetails">
      <div className="accordion-item my-3 ">
        <h2 className="accordion-header" id="headingBio">
          <button
            className="accordion-button collapsed gap-2 d-flex ps-3 p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseBio"
            aria-expanded="true"
            aria-controls="collapseBio"
          >
            <i className="bi bi-folder"></i> bio
          </button>
        </h2>
      </div>

      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingEducation">
          <button
            className="accordion-button collapsed gap-2 d-flex ps-3 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEducation"
            aria-expanded="false"
            aria-controls="collapseEducation"
          >
            <i className="bi bi-folder"></i> education
          </button>
        </h2>
      </div>
      <div className="accordion-item my-3">
        <h2 className="accordion-header" id="headingInterest">
          <button
            className="accordion-button collapsed gap-2 d-flex ps-3 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInterest"
            aria-expanded="false"
            aria-controls="collapseInterest"
          >
            <i className="bi bi-folder"></i> interest
          </button>
        </h2>
      </div>
    </div>


      </div>
    
  );
}
