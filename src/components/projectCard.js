import React from "react";

import "../assets/css/projectCard.css";
import github from "../assets/img/github.png";

import Anchor from "./anchor";

function ProjectCard(props) {
  const projectType = (type) => {
    if (type === "frontend") {
      return <span className="frontend">Frontend</span>;
    } else if (type === "backend") {
      return <span className="frontend">Backend</span>;
    } else if (type === "both") {
      return (
        <div>
          <span className="frontend">Frontend</span>+
          <span className="backend">Backend</span>
        </div>
      );
    }
  };

  return (
    <div className="project-card">
      <div className="github-link">
        <img src={github} alt="github-logo" className="github-img"></img>
        <Anchor href={props.link} text={props.text} />
      </div>
      <a href={props.pageLink} target="_blank" rel="noreferrer">
        <img src={props.img} alt="thumbnail" className="thumb"></img>
      </a>
      {props.descText}
      {projectType(props.type)}
    </div>
  );
}

export default ProjectCard;
