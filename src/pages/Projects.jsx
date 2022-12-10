import React from "react";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_container">
        <h1>My List Projects</h1>
        <hr/>
        <div className="shadow p-3 mb-5 rounded" id="shadow">
            <img src="/" alt="" className="projects_container_img" />
            <h2>First project</h2>
        </div>
        <div className="shadow p-3 mb-5 rounded" id="shadow">
          <img src="/" alt="" className="projects_container_img" />
          <h2>Second project</h2>
        </div>
        <div className="shadow p-3 mb-5 rounded" id="shadow">
          <img src="/" alt="" className="projects_container_img" />
          <h2>Thrid project</h2>
        </div>
        <div className="shadow p-3 mb-5 rounded" id="shadow">
          <img src="/" alt="" className="projects_container_img" />
          <h2>Quoiter project</h2>
        </div>
      </div>
    </div>
  );
};
