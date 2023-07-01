import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = ({ categoryId }) => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3); // Number of projects initially visible

  useEffect(() => {
    // Fetch projects by category ID
    axios
      .get(
        `https://mohitgoyal.in/wp-json/wp/v2/project?project-category=${categoryId}`
      )
      .then(async (response) => {
        const projectsData = await Promise.all(
          response.data.map(async (project) => {
            // Fetch the image URL using the image ID
            const imageResponse = await axios.get(
              `https://mohitgoyal.in/wp-json/wp/v2/media/${project.featured_media}`
            );
            const imageUrl = imageResponse.data?.source_url || "";
            return {
              ...project,
              featured_image_url: imageUrl,
            };
          })
        );
        setProjects(projectsData);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [categoryId]);
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <div>
      {projects.length > 0 ? (
        <div className="row projectRow px-3">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="colProject p-0 m-0">
              <div className="card bg-transparent p-0">
                <img
                  src={project.featured_image_url}
                  alt={project.acf.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title projectTitle ">{project.acf.title}</h2>
                  <p className="card-text small">
                    {truncateText(project.acf.short_description, 74)}
                  </p>
                  <a className="btn btn-primary repoBtn " href={project.link}>view-project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loader"></div>
      )}
      {visibleProjects < projects.length && (
        <div className="row justify-content-center py-3 ">
          <div className="col-md-4 justify-content-center d-flex">
            <button
              className="btn btn-primary repoBtn "
              onClick={loadMoreProjects}
            >
              _load_more
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
