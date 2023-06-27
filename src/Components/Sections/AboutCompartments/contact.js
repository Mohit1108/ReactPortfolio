import React from 'react'

export default function Contact() {
  return (
    <div className="accordion-item">
                <h2 className="accordion-header" id="ContactHeading">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Contactme"
                    aria-expanded="false"
                    aria-controls="Contactme"
                  >
                    contacts
                  </button>
                </h2>
                <div
                  id="Contactme"
                  className="accordion-collapse collapse"
                  aria-labelledby="ContactHeading"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
  )
}
