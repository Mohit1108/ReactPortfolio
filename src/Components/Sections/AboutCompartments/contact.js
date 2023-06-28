import React from "react";

export default function Contact() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="ContactHeading">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#Contactme"
          aria-expanded="true"
          aria-controls="Contactme"
        >
          <i className="bi bi-arrow-up-right-circle me-2"></i> contacts
        </button>
      </h2>
      <div
        id="Contactme"
        className="accordion-collapse collapse show"
        aria-labelledby="ContactHeading"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body pt-0">
          <ul className="list-group">
            <li className="list-group-item">
              <i className="bi bi-envelope-at"></i>mohitgoyal1108@gmail.com
            </li>
            <li className="list-group-item">
              <i className="bi bi-phone"></i>+91 7409641838
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
