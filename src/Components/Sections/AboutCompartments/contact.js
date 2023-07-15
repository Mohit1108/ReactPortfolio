import React from "react";

export default function Contact() {
  return (
    <ul className="list-group contactContent gap-2 px-3 small border-bottom border-top pb-3 rounded-0">
      <li className="list-group-item pe-cursor  p-0 pt-3  ">
        <a
          className="d-flex gap-2 link-light link-offset-2 link-underline-opacity-0"
          href="mailto:mohitgoyal1108@gmail.com"
        >
          <i className="bi bi-envelope-at"></i>mohitgoyal1108
        </a>
      </li>
      <li className="list-group-item pe-cursor p-0 ">
        <a
          className=" gap-2 d-flex link-light link-offset-2 link-underline-opacity-0 "
          href="tel:+917409641838"
        >
          <i className="bi bi-phone"></i>+917409641838
        </a>
      </li>
    </ul>
  );
}
