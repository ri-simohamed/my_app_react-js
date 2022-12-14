import React from "react";
// import { icons } from "react-icons";
import me from '../images/me.jpg'
import { BsGithub } from "react-icons/bs";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_container">
        <div className="projects_container_left">
          <img src={me} alt="" className="projects_container_left_img" />
          <div className="projects_conetainer_left_me">
            <p className="projects_conetainer_left_me_pa">Hey am <span>Mohamed Rami </span>
            22 yers old full stack devlopper (Java, J2EE, React js, Node Js, Mongodb, MYSQL), and student in 1337, #42 Network </p>
          </div>
        </div>
        <div className="projects_container_right">
          <h1>My List Projects</h1>
          <div className="projects_container_right_row">
            <div className="projects_container_right_row_content">
              <img src="/" alt="" className="projects_container_right_row_content_img" />
              <h2>first project</h2>
              <p>in this project well be...</p>
              <BsGithub className="projects_container_right_row_content_git-icon"/>
            </div>
            <div className="projects_container_right_row_content">
              <img src="/" alt="" className="projects_container_right_row_content_img" />
              <h2>first project</h2>
              <p>in this project well be...</p>
              <BsGithub className="projects_container_right_row_content_git-icon"/>
            </div>
            <div className="projects_container_right_row_content">
              <img src="/" alt="" className="projects_container_right_row_content_img" />
              <h2>first project</h2>
              <p>in this project well be...</p>
              <BsGithub className="projects_container_right_row_content_git-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
