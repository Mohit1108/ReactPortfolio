import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function BioInterestEducationContent() {
  return (
    <div className="" id="">
      <div className="accordion-item">
        <div
          id="collapseBio"
          className="accordion-collapse collapse show"
          aria-labelledby="headingBio"
          data-bs-parent="#accordionDetails"
        >
          <div className="accordion-body mb-4">
            <code>
              /** Discover the Creativity Behind My Services And solutions I am
              creative developer based in india, and I am very passionate and
              dedicated to my work. I can design anything you want, as a highly
              skilled and dedicated wordpress developer with 3 years of
              experience, I am confident in my ability to bring your project to
              successful completion. */
            </code>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-4">
        <div
          id="collapseEducation"
          className="accordion-collapse collapse"
          aria-labelledby="headingEducation"
          data-bs-parent="#accordionDetails"
        >
          <div className="accordion-body">
            {" "}
            <code>
              /** Discover the Creativity Behind My Services And solutions I am
              creative developer based in india, and I am very passionate and
              dedicated to my work. I can design anything you want, as a highly
              skilled and dedicated wordpress developer with 3 years of
              experience, I am confident in my ability to bring your project to
              successful completion. */
            </code>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-4">
        <div
          id="collapseInterest"
          className="accordion-collapse collapse"
          aria-labelledby="headingInterest"
          data-bs-parent="#accordionDetails"
        >
          <div className="accordion-body">
            {" "}
            <code>
              /** Discover the Creativity Behind My Services And solutions I am
              creative developer based in india, and I am very passionate and
              dedicated to my work. I can design anything you want, as a highly
              skilled and dedicated wordpress developer with 3 years of
              experience, I am confident in my ability to bring your project to
              successful completion. */
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
