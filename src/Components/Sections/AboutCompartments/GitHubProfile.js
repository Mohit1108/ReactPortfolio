import React, { useEffect, useState } from "react";
import axios from "axios";

function GitHubRepositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Mohit1108/repos?sort=updated&direction=desc&per_page=50"
        );
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    fetchRepositories();
  }, []);

  return (
    <div className="githubData">
      {repositories.length > 0 ? (
        <div>
          <div className="row gap-3 projectSidbar py-4">
            {repositories.map((repository) => (
              <div className="col" key={repository.id}>
                <div className="card border">
                  <div className="card-body">
                    <div className="imageProfie row">
                      <div className="col-md-3">
                        <img
                          className="profileImage"
                          src={repository.owner.avatar_url}
                          alt={repository.name}
                        />
                      </div>
                      <div className="col-md-9 small">
                        <h3 className=" small">{repository.owner.login}</h3>
                        <p className="small">
                          Updated at:
                          {new Date(repository.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <h5 className="card-title">{repository.name}</h5>
                    <h6 className="card-title">
                      language: {repository.language}
                    </h6>
                    <a
                      href={repository.html_url}
                      className="btn btn-secondary resetBTn"
                    >
                      Visit Repository
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GitHubRepositories;
