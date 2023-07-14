import React, { useState, useEffect } from 'react';

export default function workExperience() {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('https://mohitgoyal.in/wp-json/wp/v2/work-experience')
          .then((response) => response.json())
          .then((data) => {
            setExperiences(data.map((item) => item.workExperience));
          });
      }, []);
    
  return (
    <div>
          <ul>
      {experiences.map((experience, index) => (
        <li key={index}>{experience.title.rendered}</li>
      ))}
    </ul>


        
    </div>
  )
}
