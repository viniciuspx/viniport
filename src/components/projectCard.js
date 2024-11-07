import React from "react";
import "../assets/css/projectCard.css";
import github from "../assets/img/github.png";
import Anchor from "./anchor";

function ProjectCard({ img, pageLink, link, text, descText, type }) {
  const projectTypes = {
    frontend: <span className="frontend">Frontend</span>,
    backend: <span className="backend">Backend</span>,
    both: (
      <div>
        <span className="frontend">Frontend</span> + <span className="backend">Backend</span>
      </div>
    ),
  };

  return (
    <div className="project-card">
      <div className="github-link">
        <img src={github} alt="GitHub logo" className="github-img" />
        <Anchor href={link} text={text} />
      </div>
      <a href={pageLink} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="Project thumbnail" className="thumb" />
      </a>
      <p className="description">{descText}</p>
      <div className="project-type">{projectTypes[type]}</div>
    </div>
  );
}

export default ProjectCard;
